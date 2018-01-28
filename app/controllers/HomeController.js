/*HOME CONTROLLER*/
//Alberto Aguado

app.controller('HomeController', function($scope) { 
  	$scope.welcomeMessage = 'Welcome to Alberto´s Shop!';
  	
 	$scope.getCarouselItems = function(){
 		$scope.carousel = $scope.inventory;
 		console.log($scope.carousel);
  	}

  	$scope.getProperLink = function(link){
  		return link.replace(" ","%20");
  	}
})
