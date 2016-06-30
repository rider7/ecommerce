angular.module('ecommerce')
.service('userSvc', function($http){

  this.getUser = function( user) {
    return $http.get('/api/user/5773304d7763683804ed1c25')
        .then(function(response) {
          return response.data;
        })
  }

  this.createUser = function( user ) {
    return $http.post('/api/user/', user)
  }
});
