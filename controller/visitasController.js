const visits = require("../services/infoPlanejamentoProxVisitasStatus.json");
const { sellers } = require("../services/autenticacao.json");
const moment = require("moment");

const checkVisits = async (userEmail) => {
  const { nome } = sellers.find(({ email }) => userEmail === email);
  const filteredVisits = visits.filter(({ VENDEDOR }) => VENDEDOR === nome);
  let text = [];
  filteredVisits.map(({ CLIENTE, DATAVISITA }) => {
    text.push(`Cliente: ${CLIENTE}`);
    text.push(`Data: ${moment(DATAVISITA).format("DD/MM/yyyy")}`);
  });
  return { items: text };
};

module.exports = { checkVisits };
