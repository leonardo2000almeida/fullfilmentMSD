const { products } = require("../services/estoque.json");
const { sellers } = require("../services/autenticacao.json");

const getEstoqueByProduct = async (userEmail, productName) => {
  let quant = 0;
  const { cd } = sellers.find(({ email }) => email === userEmail);
  const filtered = products.filter(
    ({ PRODUTO, NOMECENTRODISTRIBUICAO }) =>
      PRODUTO === productName.toUpperCase() && NOMECENTRODISTRIBUICAO == cd
  );

  filtered.forEach(({ QUANTIDADE }) => (quant += QUANTIDADE));
  return { quant };
};

module.exports = { getEstoqueByProduct };
