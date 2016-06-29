angular.module('ecommerce')
.service('orderSvc', function($http){
  this.getOrder = function( order) {
    return $http.get('/api/order/' + orderId)
        .then(function(response) {
          return response.data;
        })
  }

  this.createOrder = function( order ) {
    return $http.post('/api/order/', order)
  }
});
