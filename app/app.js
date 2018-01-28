
	var app = angular.module('AlbertoShopApp',['ngRoute','ngAnimate']);

	app.config(function ($routeProvider) { 
  		$routeProvider 
    		.when('/', { 
      			controller: 'HomeController', 
      			templateUrl: 'app/views/home.html' 
    		})
        .when('/about', { 
            controller: 'AboutController', 
            templateUrl: 'app/views/about.html' 
        }) 
    		.when('/contact', { 
      			controller: 'ContactController', 
      			templateUrl: 'app/views/contact.html' 
    		}) 
    		.when('/shopping', { 
      			controller: 'ShopController', 
      			templateUrl: 'app/views/shopping.html' 
    		})
        .when('/product', { 
            controller: 'ProductController', 
            templateUrl: 'app/views/product.html' 
        })
        .when('/cart', { 
            controller: 'CartController', 
            templateUrl: 'app/views/cart.html' 
        }) 
    		.otherwise({ 
      			redirectTo: '/' 
    		}); 
	});