const axios = require("axios").default;
const cheerio = require("cheerio");
require("dotenv").config();

const link = `${process.env.LINK}/saudeanimal/noticia/lista`;

const getNews = async () => {
  const journal = [];
  const { data } = await axios.get(link);
  const $ = cheerio.load(data);
  $(".cor-veterinaria").map((i, e) => {
    if (e.attribs?.href?.includes("/saudeanimal/noticia")) {
       journal.push({news:`${process.env.LINK}${e.attribs?.href}`});
    }
  });

  return  {journal};
};

module.exports = { getNews };
