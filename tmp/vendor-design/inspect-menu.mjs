import { chromium } from "playwright";

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
await page.goto("http://127.0.0.1:4173/preferred-vendors", { waitUntil: "networkidle" });
const toggle = page.getByRole("button", { name: "Toggle menu" });
console.log("before", await toggle.getAttribute("aria-expanded"));
await toggle.click();
await page.waitForTimeout(500);
console.log("after", await toggle.getAttribute("aria-expanded"));
console.log("close buttons", await page.getByText("Close", { exact: true }).count());
console.log("vendor links", await page.getByRole("link", { name: "Preferred Vendors", exact: true }).count());
console.log("visible vendor links", await page.getByRole("link", { name: "Preferred Vendors", exact: true }).evaluateAll((links) => links.map((link) => ({ display: getComputedStyle(link).display, visible: link.getBoundingClientRect().width > 0 }))));
await page.screenshot({ path: "tmp/vendor-design/mobile-menu.png" });
await browser.close();
