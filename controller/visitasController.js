const visits = require("../services/infoPlanejamentoProxVisitasStatus.json");
const unfinshedVisits = require("../services/qntVisitasNaoConcluidasVendedor.json");
const totalVisits = require("../services/qntVisitasMes.json");
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

  unfinshedVisits.map(({ ANOMES, VENDEDOR, GRUPOMERCADO, QTDE_VISIT }) => {
    if (nome == VENDEDOR)
      visits.push(
        `Data: ${moment(ANOMES).format("MM/yyyy")}`,
        `Grupo: ${GRUPOMERCADO}`,
        `Quantidade: ${QTDE_VISIT}`
      );
  });

  return visits;
};

const checkUnfinishedVisitsMonth = async () => {
  const visits = [];
  let count;

  unfinishedMonth.forEach(({ ANOMES }) => {
    if (count < 5) {
      visits.push(`Data: ${ANOMES}`);
      count++;
    }
  });

  return { items: visits };
};

const checkTotalVisits = async (userEmail) => {
  const { nome } = sellers.find(({ email }) => userEmail === email);
  const visits = [];
  const month =
    new Date().getMonth() < 10
      ? `0${new Date().getMonth() + 1}`
      : new Date().getMonth() + 1;

  totalVisits.map(({ VENDEDOR, QTDE_VISIT, ANOMES, GRUPOMERCADO }) => {
    if (
      VENDEDOR === nome &&
      ANOMES === `${new Date().getFullYear()}-${month}`
    ) {
      visits.push(
        `Grupo: ${GRUPOMERCADO}`,
        `Quantidade: ${QTDE_VISIT}`,
        `Data: ${moment(ANOMES).format("MM/yyyy")}`
      );
    }
  });

  return visits ;
};

module.exports = {
  checkVisits,
  checkUnfinishedVisits,
  checkUnfinishedVisitsMonth,
  checkTotalVisits,
};
