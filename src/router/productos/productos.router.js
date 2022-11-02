const express = require("express");
const Container = require("../../../Container");
const router = express.Router();

let productos = [];
const prod = new Container(productos);


router.get('/', (_req, res, next) => {
  try {
    res.render('/views/page/index')
  } catch (err) {
    next(err);
  };

});


router.get('/products', (_req, res, next) => {
  try {
    res.render('/views/page/productos', { products : prod.getProducts()})
    console.log(prod.getProducts);
  } catch (err) {
    next(err);
  };

});


router.post('/', (req, res, next) => {
  try {
    prod.saveProduct(req.body);
    res.status(200).redirect('/products');
  }
  catch (err) {
    next(err);
  };
});


module.exports = router;
