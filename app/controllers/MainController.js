app.controller('MainController', ['$scope', 'products', function($scope, products) { 
    products.success(function(data) { 
      $scope.inventory = data;
    });

    /* CARRO DE LA COMPRA */

    $scope.cart=[];

    $scope.subcategoryActual="Baby Care";

    /* GET TOTAL ITEMS */
    $scope.getTotalItems = function(){
      var totalItems = 0;
      for(var i = 0; i < $scope.cart.length; i++){
          var product = $scope.cart[i];
          totalItems += (product.quantity);
      }
      return totalItems;//Devuelve la cantidad de items que hay en la cabecera
    }
    /* fin get total items */


}]);
