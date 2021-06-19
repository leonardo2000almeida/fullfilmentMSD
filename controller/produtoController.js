const topVendas = require("../services/realizadoXcotaVendedorMes.json");

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

module.exports = {
  getTopVendas,
};
