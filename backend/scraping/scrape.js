import puppeteer from "puppeteer";

async function scrape(url) {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto(url);

  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      title: document.title,
      url: window.location.href,
      text: document.querySelector("body").innerText,
    };
  });

  await browser.close();
  return dimensions;
}


export default scrape;
