/*CART CONTROLLER*/
//Alberto Aguado

app.controller('CartController', ['$scope', function($scope) {

    /* REMOVE FROM CART */
    $scope.removeFromCart=function(item){
      index = $scope.cart.indexOf(item);

        $scope.cart.splice(index,1);
    
      console.log($scope.cart);
    };
    /* fin remove from cart */

    /* GET TOTAL PRICE */
    $scope.getTotalPrice = function(){
      var totalPrice = 0;
      for(var i = 0; i < $scope.cart.length; i++){
          var product = $scope.cart[i];
          totalPrice += (product.price * product.quantity);
      }
      return totalPrice;
    }
    /* fin get total price */

    /* CHECKOUT */
    $scope.checkout=function(){
    	subtotal=0;
    	for (i = 0; i < $scope.cart.length; i++) { 
		    itemCost=$scope.cart[i].quantity*$scope.cart[i].price;
		    subtotal+=itemCost;
		  }
      shippingCost= (subtotal<150) ? 15 : 0;
      total=(subtotal+((subtotal*10)/100)+shippingCost).toFixed(2);
		alert("Dear "+$scope.shippingDetails.name+ " we will shipping your order to "+$scope.shippingDetails.address+" "+$scope.shippingDetails.city+" The total to pay is $"+total );
    	location.reload();
    };
    /* fin checkout */

    /* GET SHIPPING */
     $scope.getShipping=function(){
     	subtotal=0;
    	for (i = 0; i < $scope.cart.length; i++) { 
		    itemCost=$scope.cart[i].quantity*$scope.cart[i].price;
		    subtotal+=itemCost;
		}
    	if (subtotal > 150){
    		return 0;
    	} else {
    		return 15;
    	}
   	};
   	/* fin get shipping */

   	/* GET SHIPPING */
   	$scope.updateQty=function(item,qty){
      index = $scope.cart.indexOf(item);
      $scope.cart[index].quantity = qty;
    };
    /* fin update qty */

   	$scope.shippingDetails = {
   		name: '',
   		address: '',
   		city: '',
   		phone_number:'',
   		total:''
   	};


}]);
