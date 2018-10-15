const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const port = 3000;

app.listen(port, function() {
  console.log("App is running on port: ", port);
});

// middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// db
const products = require('./products.js');

//show route

app.get('/products/:id', (req,res) => {
	res.render('products/show.ejs', {product: products[req.params.id]});
});

// index route
app.get('/products', function(req, res) {
	console.log('woop');
  res.render('products/index.ejs', {products: products});
});

// create route
app.post('/products', function(req, res) {
  console.log('CREATE route accessed');
  console.log('Data within req.body: ', req.body);
  products.push(req.body);
  res.redirect('/products');
});
