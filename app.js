"use strict";

import {WebhookProcessing} from './responses/intents.js';
import express from "express";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/', function(req, res) {
  WebhookProcessing(req, res);
});

app.listen(process.env.PORT || 5000, function () {
  console.info(`Application launched on port ${process.env.PORT || 5000}`);
});

app.get('/', function (req, res) {
  return res.status(200).send('Application launched!');
});