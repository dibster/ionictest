
angular.module('starter.services', [])


// API Data
.service('API', function(){
        return {url : 'http://api.evrythng.com/', key : '1wyTVImqesxRkuCnAAjgJiwWwZjUzu3xDxeqdYVQhv69SeWxkqKfoMALp5KBDlPbVirleglAGWSlSYQK'};
})

// get products
.factory('Products',
    function Products($http, API){

        return {
            all: function() {
                return  $http({
                   url: API.url + 'products' + '?access_token=' + API.key,
                   method: "GET",
                   headers: {'Content-Type': 'application/json; charset=utf-8'}
                   })
                   .success(function (products) {
                       return products;
                   })
                   .error(function () {
                       return 'Error';
                   });
            },
            get : function(productId) {
                return  $http({
                    url: API.url + 'products/' + productId + '?access_token=' + API.key,
                    method: "GET",
                    headers: {'Content-Type': 'application/json; charset=utf-8'}
                })
                    .success(function (product) {
                        return product;
                    })
                    .error(function () {
                        return 'Error';
                    });
            }
        }
})

// supplied example
.factory('Friends', function Friends () {
  // Might use a resource here that returns a JSON array

  // Some fake testing data
  var friends = [
    { id: 0, name: 'Scruff McGruff' },
    { id: 1, name: 'G.I. Joe' },
    { id: 2, name: 'Miss Frizzle' },
    { id: 3, name: 'Ash Ketchum' }
  ];

  return {
    all: function() {
      return friends;
    },
    get: function(friendId) {
      // Simple index lookup
      return friends[friendId];
    }
  }
});
