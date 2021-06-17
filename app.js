const express = require("express");
const router = require("./routes");

const app = express();
app.use(router)

app.listen(process.env.PORT || 5000, function () {
  console.info(`Application launched on port ${process.env.PORT || 5000}`);
});