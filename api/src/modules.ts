const db = require('./db/models');

export const getAllProduct = async () => {
  const product = await db.Product.findAll({
    include: [db.Customer, db.ProductType],
  });

  return product;
};