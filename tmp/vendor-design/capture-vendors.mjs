import { chromium } from "playwright";
import { writeFile } from "node:fs/promises";

const browser = await chromium.launch({ headless: true });
const report = { desktop: {}, mobile: {}, consoleErrors: [], failedResponses: [] };

async function capture(name, viewport) {
  const page = await browser.newPage({ viewport, deviceScaleFactor: 1 });
  page.on("console", (message) => {
    if (message.type() === "error") report.consoleErrors.push(`${name}: ${message.text()}`);
  });
  page.on("pageerror", (error) => report.consoleErrors.push(`${name}: ${error.message}`));
  page.on("response", (response) => {
    if (response.status() >= 400) {
      report.failedResponses.push(`${name}: ${response.status()} ${response.url()}`);
    }
  });

  await page.goto("http://127.0.0.1:4173/preferred-vendors", { waitUntil: "networkidle" });
  await page.locator("main").waitFor({ state: "visible" });
  const articles = page.locator("main article");
  for (let index = 0; index < (await articles.count()); index += 1) {
    const article = articles.nth(index);
    await article.scrollIntoViewIfNeeded();
    await article.locator("img").first().waitFor({ state: "visible" });
    await page.waitForFunction(
      (position) =>
        [...([...document.querySelectorAll("main article")][position]?.querySelectorAll("img") ?? [])]
          .every((image) => image.complete && image.naturalWidth > 0),
      index,
      { timeout: 10_000 }
    );
  }
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(300);
  const images = await page.locator("main img").evaluateAll((nodes) =>
    nodes.map((node) => ({ src: node.getAttribute("src"), loaded: node.complete && node.naturalWidth > 0 }))
  );
  const hrefs = await page.locator("main a").evaluateAll((nodes) =>
    nodes.map((node) => node.getAttribute("href"))
  );
  const metrics = await page.evaluate(() => ({
    scrollWidth: document.documentElement.scrollWidth,
    clientWidth: document.documentElement.clientWidth,
    scrollHeight: document.documentElement.scrollHeight,
  }));

  await page.screenshot({ path: `tmp/vendor-design/vendors-${name}.png`, fullPage: true });
  let mobileMenuWorks = null;
  if (name === "mobile") {
    await page.getByRole("button", { name: "Toggle menu" }).click();
    const mobileVendorLink = page
      .getByRole("link", { name: "Preferred Vendors", exact: true })
      .last();
    await mobileVendorLink.waitFor({ state: "visible" });
    mobileMenuWorks = true;
    await page.keyboard.press("Escape");
  }
  await page.locator('main a[href="/contact"]').click();
  await page.waitForURL("**/contact");
  report[name] = {
    viewport,
    metrics,
    imageCount: images.length,
    failedImages: images.filter((image) => !image.loaded),
    linkCount: hrefs.length,
    hasContactLink: hrefs.includes("/contact"),
    contactNavigationWorks: page.url().endsWith("/contact"),
    mobileMenuWorks,
  };
  await page.close();
}

await capture("desktop", { width: 1440, height: 1000 });
await capture("mobile", { width: 390, height: 844 });
await writeFile("tmp/vendor-design/playwright-report.json", JSON.stringify(report, null, 2));
await browser.close();
