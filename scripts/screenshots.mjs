import { chromium } from "playwright";
import { mkdirSync } from "node:fs";
import { join } from "node:path";

const OUT = "docs/screenshots";
mkdirSync(OUT, { recursive: true });

const BASE = process.env.BASE_URL ?? "http://127.0.0.1:4173";

const pages = [
  { path: "/", name: "01-home" },
  { path: "/heart-healthy", name: "02-heart-healthy" },
  { path: "/cholesterol", name: "03-cholesterol" },
  { path: "/triglyceride", name: "04-triglyceride" },
  { path: "/fcs", name: "05-fcs" },
  { path: "/about", name: "06-about" },
];

const viewports = [
  { label: "mobile", width: 390, height: 844 },
  { label: "desktop", width: 1280, height: 900 },
];

const browser = await chromium.launch();

for (const vp of viewports) {
  const ctx = await browser.newContext({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
  });
  const page = await ctx.newPage();
  for (const p of pages) {
    const url = `${BASE}${p.path}`;
    process.stdout.write(`${vp.label} ${url} ... `);
    await page.goto(url, { waitUntil: "networkidle", timeout: 15000 });
    // Let webfonts settle
    await page.waitForTimeout(800);
    const out = join(OUT, `${vp.label}-${p.name}.png`);
    await page.screenshot({ path: out, fullPage: true });
    console.log(out);
  }
  await ctx.close();
}

await browser.close();
console.log("done");
