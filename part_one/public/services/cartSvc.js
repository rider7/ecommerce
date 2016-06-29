angular.module('ecommerce')
	.service('cartSvc', function( $http ) {

		this.createCart = function( cart ) {
			return $http.post('/api/cart/', cart)
		}

		this.updateCart = function( cart ) {
			return $http.put('/api/cart/' + cartId, cart)
		}
	})
