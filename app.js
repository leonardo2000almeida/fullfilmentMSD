"use strict";

import { WebhookClient } from "dialogflow-fulfillment-helper";
import express from "express";
import {testFullfilmentIntentHandler } from "./responses/intents.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const webhookProcessing = (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  let intentsMap = new Map();

  intentsMap.set("fullfilment", testFullfilmentIntentHandler(agent));

  agent.handleRequest(intentsMap);
};

app.post("/", function (req, res) {
  webhookProcessing(req, res);
});

app.get("/", (req, res) => {
  return res.status(200).send("App on!");
});

app.listen(process.env.PORT || 5000, () => {
  console.info(`server is Running on port: ${process.env.PORT || 5000}`);
});
