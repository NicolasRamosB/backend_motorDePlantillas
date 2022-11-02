const express = require("express");
require("dotenv").config();


const app = express();
const indexRouter = require("./src/router/index");
const Container = require("./Container")

const logger = require('morgan');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger('dev'));

app.set('views', './views')
app.set('view engine', 'ejs')

app.use("/views", express.static(__dirname + "/views"));
app.use("/api", indexRouter);



app.get('/', (_req, res) => {
  res.render('page/index')
})


app.get('/products', (_req, res) => {
  const products = new Container();
  res.render('page/products', {products:products.getAll()})
})


app.post('/products', (req, res) => {
  const{id, name, price, thumbnail} = req.body
  const products = new Container();
  products.saveProduct({id, name, price, thumbnail});
  res.redirect('/');
})


module.exports = app;
