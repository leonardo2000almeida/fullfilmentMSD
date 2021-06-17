const express = require("express");
const { auth } = require("./controller/authController");

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
//get all infos from routes
router.get("/", (req, res) => {
  res.send("MSD Challenge");
});

router.get("/auth", async (req, res) => {
  res.send(await auth(req?.headers?.email));
});

router.get("/infoVendasCotas", async (req, res) => {
  const response = "infoVendasCotas";
  res.json(response);
});
router.get("/realizadoXcotaFamilia", async (req, res) => {
  const response = "realizadoXcotaFamilia";
  res.json(response);
});
router.get("/realizadoXcotaVendedor", async (req, res) => {
  const response = "realizadoXcotaVendedor";
  res.json(response);
});
router.get("/realizadoXcotaVendedorMes", async (req, res) => {
  const response = "realizadoXcotaVendedorMes";
  res.json(response);
});
router.get("/realizadoClientePeriodo", async (req, res) => {
  const response = "realizadoClientePeriodo";
  res.json(response);
});
router.get("/qntVisitasUnidadeMes", async (req, res) => {
  const response = "qntVisitasUnidadeMes";
  res.json(response);
});
router.get("/qntVisitasNaoConcluidasMes", async (req, res) => {
  const response = "qntVisitasNaoConcluidasMes";
  res.json(response);
});
router.get("/qntVisitasMes", async (req, res) => {
  const response = "qntVisitasMes";
  res.json(response);
});
router.get("/qntVisitasNaoConcluidasVendedor", async (req, res) => {
  const response = "qntVisitasNaoConcluidasVendedor";
  res.json(response);
});
router.get("/infoPlanejamentoProxVisitasStatus", async (req, res) => {
  const response = "infoPlanejamentoProxVisitasStatus";
  res.json(response);
});
router.get(
  "/saberAtiviNaoRelacionadasComVisitaMesVendedor",
  async (req, res) => {
    const response = "saberAtiviNaoRelacionadasComVisitaMesVendedor";
    res.json(response);
  }
);

router.get("/estoque", async (req, res) => {
  const response = "estoque";
  res.json(response);
});

module.exports = router;