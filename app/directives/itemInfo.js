app.directive('itemInfo', function() { 
  return { 
    restrict: 'E', 
    scope: { 
      item: '=',
      cart:'='
    }, 
    templateUrl: 'app/directives/itemInfo.html',

    link: function(scope, element, attrs) {

		scope.addItemToCart=function(item){
			if (item.stock!=0) {  	
		      	if (scope.cart.indexOf(item)==-1){
			        item.quantity=1;
			        scope.cart.push(item);

		      	} else {
			        item.quantity+=1;
		      	}
	    	console.info("Added to cart.");
	    	console.log(scope.cart);
	    	} else {
	    		console.log("No hay stock.");
	    	}
	    }
	}
  }; 
});


