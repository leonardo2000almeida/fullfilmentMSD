const { sellers } = require("../services/autenticacao.json");

const auth = async (email) => {
  const result = sellers.find((seller) => seller.email === email);
  return result !== undefined
    ? { result, httpStatus: 200 }
    : { httpStatus: 404 };
};
module.exports = {
  auth,
};
