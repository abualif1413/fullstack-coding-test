import express from "express";
import cors from 'cors';
import { getAllProduct } from './modules';
const db = require('./db/models');

const app = express();
const appPort = 8080;

app.use(cors());

app.route("/").get(async (req, res) => {
  res.end("tes");
});

app.route("/all-products").get(async (req, res) => {
  const product = await getAllProduct();
  res.json(product);
  res.end();
});

app.route("/update-delivery-status/:productId/to/:newStatus").get(async (req, res) => {
  await db.Product.update(
    { delivery_status: req.params.newStatus },
    {
      where: {
        product_id: req.params.productId,
      }
    }
  );

  res.json({success: 1, message: 'Success updating delivery status'});
  res.end();
});

app.listen(appPort);
console.log('Server running on ' + appPort);

module.exports = app;