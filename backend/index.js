import express from "express";
import scrape from "./scraping/scrape.js";

const app = express();
const port = 8080;

app.get("/", async (req, res) => {
  res.send("Hello World!");
});

app.get('/scrape', async (req, res) => {
    const result = await scrape(`https://www.google.com/${req.query.url}`);
    res.send(result);
});

app.listen(port, () => {
  console.log(`Example app listening at Port ${port}`);
});
