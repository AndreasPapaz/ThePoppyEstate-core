export const HONEYPOT_FIELD = "company_url";
export const FORM_NAME_FIELD = "formName";
export const RENDERED_AT_FIELD = "formRenderedAt";
export const MIN_SUBMIT_MS = 3000;

export type RequestContext = {
  ip: string;
  userAgent: string;
};

export type BotSignal =
  | { kind: "honeypot"; value: string }
  | { kind: "timetrap"; elapsedMs: number };

export function readHoneypotValue(formData: FormData): string {
  const raw = formData.get(HONEYPOT_FIELD);
  return typeof raw === "string" ? raw.trim() : "";
}

export function readFormName(formData: FormData): string {
  const raw = formData.get(FORM_NAME_FIELD);
  return typeof raw === "string" && raw.trim() ? raw.trim() : "unknown";
}

/**
 * Returns elapsed ms when the submission is suspiciously fast.
 * Missing/invalid timestamps are ignored so no-JS and clock-skew cases
 * are not treated as bots (honeypot still applies).
 */
export function readTimeTrap(
  formData: FormData,
  now = Date.now()
): { elapsedMs: number } | null {
  const raw = formData.get(RENDERED_AT_FIELD);
  if (typeof raw !== "string" || raw.trim() === "") return null;
  const renderedAt = Number(raw);
  if (!Number.isFinite(renderedAt) || renderedAt <= 0) return null;
  const elapsedMs = now - renderedAt;
  if (elapsedMs < 0 || elapsedMs >= MIN_SUBMIT_MS) return null;
  return { elapsedMs };
}

export function logBotSignal(
  signal: BotSignal,
  formName: string,
  ctx: RequestContext
): void {
  const timestamp = new Date().toISOString();
  if (signal.kind === "honeypot") {
    console.warn(
      "[honeypot]",
      `timestamp=${timestamp}`,
      `form=${formName}`,
      `ip=${ctx.ip}`,
      `userAgent=${ctx.userAgent}`,
      `honeypotValue=${JSON.stringify(signal.value)}`
    );
    return;
  }

  console.warn(
    "[timetrap]",
    `timestamp=${timestamp}`,
    `form=${formName}`,
    `ip=${ctx.ip}`,
    `userAgent=${ctx.userAgent}`,
    `elapsedMs=${signal.elapsedMs}`
  );
}
