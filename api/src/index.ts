import express from "express";
const db = require('./db/models');

const app = express();
const appPort = 8080;

app.route("/all-products").get(async (req, res) => {
  const product = await db.Product.findAll({
    include: [db.Customer, db.ProductType],
  });
  res.json(product);
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
});

app.listen(appPort);
console.log('Server running on ' + appPort);