var url = 'https://dev.evrythng.com/';

angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
//
//.factory('Products', function($resource) {
//
//    return $resource(url + 'products?access_token=1wyTVImqesxRkuCnAAjgJiwWwZjUzu3xDxeqdYVQhv69SeWxkqKfoMALp5KBDlPbVirleglAGWSlSYQK', {});
//
//})


.factory('Friends', function() {
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
