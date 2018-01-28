app.factory('products', ['$http', function($http) { 
  return $http.get('https://webmppcapstone.blob.core.windows.net/data/itemsdata.json') 
            .success(function(data) { 
              return data; 
            }) 
            .error(function(err) { 
              return err; 
            }); 
}]);