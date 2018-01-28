/*PRODUCT CONTROLLER*/
//Alberto Aguado

app.controller("ProductController",['$scope', '$routeParams', '$filter', function ($scope, $routeParams, $filter) {
	$scope.model = {
	    itemName: $routeParams.name
	};

    /* ADD QTY TO CART */
    $scope.addQtyToCart=function(item,qty){
      if (item.stock!=0 && !isNaN(qty)) 
      {          
          if ($scope.cart.indexOf(item)==-1)
          {
            item.quantity=qty;
            $scope.cart.push(item);
          } 
          else 
          {
            item.quantity+=qty;
          }
          console.info("Added to cart."+qty);
      } 
      else 
      {
        console.info("No stock or no quantity in the input box.");
      }
    };
    /* fin add qty to cart */

    $scope.backButton= function(){ console.log("Back");
       window.history.back();
                
    };


}])