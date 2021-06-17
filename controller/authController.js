const { vendedores } = require("../services/autenticacao.json");

const auth = async (email) => {
  const result = vendedores.find((vendedor) => vendedor.email === email);
  return result !== undefined
    ? { result, httpStatus: 200 }
    : { httpStatus: 404 };
};
module.exports = {
  auth,
};
