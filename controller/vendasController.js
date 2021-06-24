const { products } = require("../services/estoque.json");
const { sellers } = require("../services/autenticacao.json");
const topVendas = require("../services/realizadoXcotaVendedorMes.json");
const sellsByFamily = require("../services/realizadoXcotaFamilia.json");
const sellsByLine = require("../services/realizadoXcotaVendedor.json");
const sellsByClient = require("../services/realizadoClientePeriodo.json");

const getEstoqueByProduct = async (userEmail, productName) => {
  let quant = 0;
  const { cd } = sellers.find(({ email }) => email === userEmail);
  const filtered = products.filter(
    ({ PRODUTO, NOMECENTRODISTRIBUICAO }) =>
      PRODUTO === productName.toUpperCase() && NOMECENTRODISTRIBUICAO == cd
  );

  filtered.forEach(({ QUANTIDADE }) => (quant += parseInt(QUANTIDADE)));
  return { quant };
};

const getTopVendas = async () => {
  let values = [];
  let count = 0;
  const bigger = topVendas.map(({ PRODUTO }, index) => {
    if (PRODUTO === topVendas[index + 1]?.PRODUTO && count < 5) {
      count++;
      return values.push(PRODUTO);
    }
  });

  return { values };
};

const getVendasByFamily = async (linha) => {
  const sells = [];
  sellsByFamily.map(
    ({ NOMEFAMILIAPRODUTO, VALORLIQUIDO, PRODUTO, MES, VENDEDOR }, index) => {
      if (VALORLIQUIDO !== 0 && NOMEFAMILIAPRODUTO == linha.toUpperCase()) {
        sells.push({ NOMEFAMILIAPRODUTO, VALORLIQUIDO, PRODUTO });
      }
    }
  );
  return sells;
};

const getVendasByLine = async (grupo) => {
  const sells = [];
  let count = 0;
  sellsByLine.map(({ GRUPOMERCADO, VALORLIQUIDO, PRODUTO }, index) => {
    if (
      VALORLIQUIDO != 0 &&
      GRUPOMERCADO == grupo?.toUpperCase() &&
      count < 5
    ) {
      sells.push(
        `Linha: ${GRUPOMERCADO}`,
        `valor liquido: ${VALORLIQUIDO}`,
        `Produto: ${PRODUTO}`
      );
      count++;
    }
  });

  return {sells};
};

const getSellsByClient = async () => {
  const sells = [];

  sellsByClient.map(({ Cliente, VALORLIQUIDO }) => {
    sells.push(`Cliente: ${Cliente}`, `Valor total: ${VALORLIQUIDO}`);
  });

  return {sells};
};

module.exports = {
  getEstoqueByProduct,
  getTopVendas,
  getVendasByFamily,
  getVendasByLine,
};
