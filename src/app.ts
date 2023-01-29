import express from "express";
import bmi from "./bmi";
import validator from "./validator";

const app = express();

// TODO implement me :)
app.use(validator);

app.get("/bmi", (req, res) => {
  const height = Number(req.query.height);
  const heightUnit = Number(req.query.heightUnit);
  const weight = Number(req.query.weight);
  const weightUnit = Number(req.query.weightUnit);
  res.json(bmi({ height, heightUnit, weight, weightUnit }));
});

app.post("/bmi", (req, res) => {
  const height = Number(req.body.height);
  const heightUnit = Number(req.body.heightUnit);
  const weight = Number(req.body.weight);
  const weightUnit = Number(req.body.weightUnit);
  res.json(bmi({ height, heightUnit, weight, weightUnit }));
});

export default app;
