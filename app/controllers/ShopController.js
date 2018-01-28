/*SHOP CONTROLLER*/
//Alberto Aguado

app.controller('ShopController', ['$scope','$timeout', function($scope,$timeout) { 

  	$scope.visibleItemsinList= 0;
	$scope.totalItemsinList= 0;
    
    /* GET VISIBLE ITEMS IN LIST */
    $scope.getVisibleItemsinList = function(){
      $timeout(function(){
        $scope.visibleItemsinList = document.getElementsByClassName('productDetailBox').length;
      });
      return $scope.visibleItemsinList; //cantidad de items que se ven por pantalla
    }
    /* fin getvisibleitemsinlist */

    /* SET TOTALS */
    $scope.setTotals = function(total_items){
        $scope.totalItemsinList = total_items;//cantidad total de items que hay en esa categoria
    }
    /* fin settotals */


    $scope.inStockOnly=true;

    $scope.sortOptions = [{"value":"", "text":"None"},{"value":"price", "text":"Price"},{"value":"name", "text":"Alphabetical"},{"value":"rating", "text":"Rating"}];
  	$scope.sortBy ="";

    /* ADD TO CART */
    $scope.addToCart=function(item){
      if (item.stock!=0) 
      {          
          if ($scope.cart.indexOf(item)==-1)
          {
            item.quantity=1;
            $scope.cart.push(item);
          } 
          else 
          {
            item.quantity+=1;
          }
          console.info("Added to cart.");
      } 
      else 
      {
        console.info("No stock.");
      }
    };
    /* fin add to cart */

    $scope.choseSubcategory=function(subcategory){$scope.subcategoryActual=subcategory;console.log(subcategory);};
}]);
