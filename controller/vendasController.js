const { products } = require("../services/estoque.json");
const { sellers } = require("../services/autenticacao.json");
const topVendas = require("../services/realizadoXcotaVendedorMes.json");

const getEstoqueByProduct = async (userEmail, productName) => {
  let quant = 0;
  const { cd } = sellers.find(({ email }) => email === userEmail);
  const filtered = products.filter(
    ({ PRODUTO, NOMECENTRODISTRIBUICAO }) =>
      PRODUTO === productName.toUpperCase() && NOMECENTRODISTRIBUICAO == cd
  );

  filtered.forEach(({ QUANTIDADE }) => (quant += parseInt(QUANTIDADE)))
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

module.exports = { getEstoqueByProduct, getTopVendas };
