const express = require("express");
const { auth } = require("./controller/authController");
const { getNews } = require("./controller/getNews");
const {
  getEstoqueByProduct,
  getTopVendas,
  getVendasByFamily,
  getVendasByLine,
} = require("./controller/vendasController");
const {
  checkVisits,
  checkUnfinishedVisits,
  checkUnfinishedVisitsMonth,
  checkTotalVisits,
} = require("./controller/visitasController");

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
  res.send(await getVendasByFamily(req?.headers?.familia));
});
router.get("/realizadoXcotaLinha", async (req, res) => {
  res.send(await getVendasByLine(req?.headers?.linha));
});
router.get("/realizadoXcotaVendedor", async (req, res) => {
  const response = "realizadoXcotaVendedor";
  res.json(response);
});
router.get("/realizadoXcotaVendedorMes", async (req, res) => {
  res.send(await getTopVendas());
});
router.get("/realizadoClientePeriodo", async (req, res) => {
  const response = "realizadoClientePeriodo";
  res.json(response);
});
router.get("/qntVisitasUnidadeMes", async (req, res) => {
  res.json(await checkTotalVisits());
});
router.get("/qntVisitasNaoConcluidasMes", async (req, res) => {
  const response = "qntVisitasNaoConcluidasMes";
  res.json(response);
});
router.get("/qntVisitasMes", async (req, res) => {
  res.send(await checkTotalVisits(req.headers.email))
});
router.get("/qntVisitasNaoConcluidasVendedor", async (req, res) => {
  res.send(await checkUnfinishedVisits(req?.headers?.email));
});
router.get("/infoPlanejamentoProxVisitasStatus", async (req, res) => {
  res.send(await checkVisits(req?.headers?.email));
});
router.get(
  "/saberAtiviNaoRelacionadasComVisitaMesVendedor",
  async (req, res) => {
    const response = "saberAtiviNaoRelacionadasComVisitaMesVendedor";
    res.json(response);
  }
);

router.get("/estoque", async (req, res) => {
  res.send(
    await getEstoqueByProduct(req?.headers?.email, req.headers?.product)
  );
});

router.get("/noticias", async (req, res) => {
  res.send(await getNews());
});

module.exports = router;
