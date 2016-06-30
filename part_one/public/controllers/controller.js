angular.module('ecommerce').controller('controller', function($scope, productSvc, cartSvc, userSvc, orderSvc){

$scope.test = "This App Works"
//
productSvc.getProducts().then(function(data){
  $scope.productList = data;
})

// function for the button to buy product, product._id passed through product argument below
// then passed to cartSvc POST request on cartSvc
$scope.buyProduct = function(product) {
  cartSvc.createCart(product).then(function(data){
  })
 }

  userSvc.getUser().then(function(data){
     $scope.theUser = data;
   })

});
