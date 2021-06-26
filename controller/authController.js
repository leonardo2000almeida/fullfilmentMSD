const { sellers } = require("../services/autenticacao.json");

const auth = async (email) => {
  const result = sellers.find((seller) => seller.email === email.toLowerCase());
  return result !== undefined
    ? { result, httpStatus: 200 }
    : { httpStatus: 404 };
};
module.exports = {
  auth,
};
