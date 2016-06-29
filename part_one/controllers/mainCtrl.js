var Product = require('./../models/product.js')
var Order = require('./../models/order.js')
var Cart = require('./../models/cart.js')
var User = require('./../models/user.js')

module.exports= {
 createProduct: function(req, res, next){
   Product.create(req.body, function(error, response){
      if(error) {
        return res.status(500).json(error)
      } else {
        return res.json(response)
      }
    });
  },

 getProducts: function(req, res, next){
   Product.find(req.query, function(err, response){
       if(err) {
         res.status(500).json(err)
       } else {
         res.json(response)
       }
     });
 },

 getProductsID: function(req, res, next){
   Product.findById(req.params.id, function(err, response){
       if(err) {
         res.status(500).json(err)
       } else {
         res.json(response)
       }
     });
 },

 updateProductsID: function(req, res, next){
   Product.findByIdAndUpdate(req.params.id, req.body, function(error, response){
     if(error) {
       return res.status(500).json(error)
     } else {
       return res.json(response)
     }
   });
 },

 deleteProductsID: function(req, res, next){
   Product.findByIdAndRemove(req.params.id, function(error, response){
     if(error) {
       return res.status(500).json(error)
     } else {
       return res.json(response)
     }
   });
 },

  createUser: function(req, res, next){
    User.create(req.body, function(error, response){
       if(error) {
         return res.status(500).json(error)
       } else {
         return res.json(response)
       }
     });
   },

   getUserID: function(req, res, next){
  User.findById(req.params.id)
  .populate('cart')
  .exec()
  .then(function(results){
  return res.json(results)
  })
 },

  createOrderID: function(req, res, next){
      var userId = req.params.user_id;
   User.findById(userId, function(err, result) {
     if (err) {
       res.sendStatus(500);
     }
     var userObj = result;
     var userOrder = {};
     userOrder.item = userObj.cart;
     userOrder.user = userId;
     var newOrder = new Order(userOrder);
     newOrder.save(function(err, result) {
       if (err) {
         res.sendStatus(500);
       }
       userObj.cart = [];
       console.log(result)
       userObj.orders.push(result._id);
       userObj.save(function(err, result) {
       if (err) {
           res.sendStatus(500);
       }
         res.send(result);
       });
     })
  })
},

     getOrder: function(req, res, next){
       Order.find(req.query, function(err, result){
           if(err) {
             res.status(500).json(err)
           } else {
             res.json(result)
           }
         });
     },

      createCartID: function(req, res, next){
        User.findByIdAndUpdate(req.params.user_id, {$push: {cart: req.body}}, function(error, response){
           if(error) {
             return res.status(500).json(error)
           } else {
             return res.json(response)
           }
         });
       },

       updateCartID: function(req, res, next){
         User.findById(req.params.user_id, function(error, response) {
     if (error) {
       res.status(500).send(error)
     }
     var myUser = response;
     var qty = req.body.quantity / 1;
     var foundItem = -1;
     myUser.cart.forEach(function(cartItem, index) {
       if (cartItem.item.toString() === req.body.item) {
         foundItem = index
       }
     })
     if (foundItem >= 0) {
        console.log("Found Item = " + foundItem)
       if (qty === 0) {
         myUser.cart.splice(foundItem, 1);
       } else {
         myUser.cart[foundItem].quantity = qty
       }
     }
     saveUser(myUser, req, res);
   })
   function saveUser(userToSave, req, res) {
     userToSave.save(function(err, result) {
       if (err) {
         res.status(500).send(err)
       } else {
         res.send(result)
       }
     })
   };
}
}
