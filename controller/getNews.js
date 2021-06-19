const axios = require("axios").default;
const cheerio = require("cheerio");
require("dotenv").config();

const link = `${process.env.LINK}/saudeanimal/noticia/lista`;

const getNews = async () => {
  const news = [];
  const { data } = await axios.get(link);
  const $ = cheerio.load(data);
  $(".cor-veterinaria").map((i, e) => {
    if (e.attribs?.href?.includes("/saudeanimal/noticia")) {
      return news.push(`${process.env.LINK}${e.attribs?.href}`);
    }
  });
  return news;
};

module.exports = { getNews };
