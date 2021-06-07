"use strict";

import { WebhookClient } from "dialogflow-fulfillment-helper";
import express from "express";
import { welcomeIntentHandler } from "./responses/intents.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const webhookProcessing = (req, res) => {
  const agent = new WebhookClient({ request: req, response: res });

  let intentsMap = new Map();

  intentsMap.set('Default Welcome Intent', WelcomeIntentHandler1);

  agent.handleRequest(intentsMap);
};

function WelcomeIntentHandler1(agent) {
    agent.add('HELLOS FULFIL')
}

app.post("/", function (req, res) {
  webhookProcessing(req, res);
});

app.get("/", (req, res) => {
  return res.status(200).send("App on!");
});

app.listen(5000, () => {
  console.info(`server is Running on port: ${5000}`);
});
