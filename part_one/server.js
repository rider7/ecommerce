//REQUIRED
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');
var mainCtrl = require('./controllers/mainCtrl')
mongoose.connect('mongodb://localhost/products');

var app = express();
var corsOptions = {
  origins: 'http://localhost:3000'
}

//USE
 app.use(bodyParser.json());
 app.use(cors(corsOptions));

 //PUBLIC
 app.use(express.static(__dirname + '/public'));

//ENDPOINTS
//PRODUCTS
 app.post('/api/products', mainCtrl.createProduct);
 app.get('/api/products', mainCtrl.getProducts);
 app.get('/api/products/:id', mainCtrl.getProductsID);
 app.put('/api/products/:id', mainCtrl.updateProductsID);
 app.delete('/api/products/:id', mainCtrl.deleteProductsID);

//USERS
 app.post('/api/user/', mainCtrl.createUser);
 app.get('/api/user/:id', mainCtrl.getUserID);

//ORDER
 app.post('/api/order/:user_id', mainCtrl.createOrderID);
 app.get('/api/order/', mainCtrl.getOrder)

//CART
 app.post('/api/cart/:user_id', mainCtrl.createCartID);
 app.put('/api/cart/:user_id', mainCtrl.updateCartID);

//LISTEN
 var port = 3000;
 app.listen(port, function(){
   console.log('Listening on port ', port);
 })
