import chai, { expect } from 'chai';
import { getAllProduct } from '../modules';
import chaiHttp from 'chai-http';

chai.use(chaiHttp);

describe('testing routes', async () => {
  it('should enter the all product route', function(done){
    const app = require('../index');
    chai
      .request(app)
      .get('/all-products')
      .end((error, response) => {
        if (error) {
          return done(error);
        }
        expect(response).to.have.status(200);
        done();
      });
  }).timeout(50000);

  it('product route should return product list instead of null', function(done){
    const app = require('../index');
    chai
      .request(app)
      .get('/all-products')
      .end((error, response) => {
        const respBody = JSON.parse(response.text);
        if (error) {
          return done(error);
        }
        expect(respBody.length).to.be.greaterThanOrEqual(0);
        done();
      });
  }).timeout(50000);
  
  // const products = await getAllProduct();
  // console.log('products', products.length);
  
  it('update delivery status route should works and update the delivery status', function(done){
    const app = require('../index');
    getAllProduct().then((products) => {
      const selectedProduct = products[0];
      const productId = selectedProduct.product_id;
      const currentStatus = selectedProduct.delivery_status;
      const newStatus = (currentStatus !== "ORDERED") ? "ORDERED" : "PENDING";
      console.log('id', productId);
      console.log('new', newStatus);
      chai
        .request(app)
        .get(`/update-delivery-status/${productId}/to/${newStatus}`)
        .end((error, response) => {
          const respBody = JSON.parse(response.text);
          if (error) {
            return done(error);
          }
          expect(response).to.have.status(200);
          done();
        });
    });
  }).timeout(50000);
});