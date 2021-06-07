import { WebhookClient } from "dialogflow-fulfillment-helper";
//never use the invocation of function 
export function WebhookProcessing(req, res) {
  const agent = new WebhookClient({ request: req, response: res });
    
  let intentsMap = new Map();
    
  intentsMap.set('teste', TesteIntentHandler);

  agent.handleRequest(intentsMap);
}

function TesteIntentHandler(agent) {
  agent.add('teste.');
}