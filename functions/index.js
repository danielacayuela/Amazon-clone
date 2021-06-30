const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J7OUyEUjiQLjkRvgyt1TwgkIBhnINK5Ez7gBw30Mdux1iVMammPYzUsNgkk5aj0ysEjciCnZZdcqejgc9ShSNpr00iUAeWVSe"
);

//API
//App configuration
const app = express();
//Middlewares
app.use(cors({ origin: true }));
app.use(express.json());
//API routes
app.get("/", (request, response) => {
  response.status(200).send("Heloo world");
});

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;
  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });
  //201-Ok created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
//Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-9f632/us-central1/api
