angular.module('ecommerce')
.service('userSvc', function($http){
  this.getUser = function( user) {
    return $http.get('/api/user/' + userId)
        .then(function(response) {
          return response.data;
        })
  }

  this.createUser = function( user ) {
    return $http.post('/api/user/', user)
  }
});
