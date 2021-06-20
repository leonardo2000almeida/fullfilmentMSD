const visits = require("../services/infoPlanejamentoProxVisitasStatus.json");
const unfineshedVistis = require("../services/qntVisitasNaoConcluidasVendedor.json");
const unfineshedMonth = require("../services/qntVisitasNaoConcluidasMes.json");
const totalVisits = require("../services/qntVisitasUnidadeMes.json");
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
  
  return { text };
};

const checkUnfinishedVisits = async (userEmail) => {
  const { nome } = sellers.find(({ email }) => userEmail === email);
  let visits = [];

  map(({ ANOMES }) => {
    visits.push(`Data: ${ANOMES}`);
  });

  return { items: visits };
};

const checkUnfinishedVisitsMonth = async () => {
  const visits = [];
  let count;

  unfineshedMonth.forEach(({ ANOMES }) => {
    if (count < 5) {
      visits.push(`Data: ${ANOMES}`);
      count++;
    }
  });
  return { items: visits };
};

const checkTotalVisits = async () => {
  const sortVisits = totalVisits.sort((a, b) => a - b);
  const visits = [];
  let count;

  sortVisits.map(({ QTDE_VISIT, ANOMES }) => {
    if (count < 5 && ANOMES === "2020-06") {
      visits.push(QTDE_VISIT);
      count++;
    }
  });

  return {qunatidadeDeVisitas: visits}
};

module.exports = {
  checkVisits,
  checkUnfinishedVisits,
  checkUnfinishedVisitsMonth,
  checkTotalVisits
};
