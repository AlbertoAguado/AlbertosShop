/*CONTACT CONTROLLER*/
//Alberto Aguado

app.controller('ContactController', function($scope) { 
  	
  	$scope.contactMessage=[];

  	$scope.contactSubjects = ["--Select Subject--","Shipping costs", "Product information", "Technical issues"];
  	$scope.contactMessage.subject = $scope.contactSubjects[0];

  	$scope.submitContactForm=function(){
  		alert("Dear "+$scope.contactMessage.name+" we will answer your question about "+$scope.contactMessage.subject+" to "+$scope.contactMessage.email+" shortly. Thank you!");
  	}

})
