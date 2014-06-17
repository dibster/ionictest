
angular.module('starter.controllers', ['ionic'])


.controller('ProductsCtrl', function($scope, Products) {

       Products.all().then(function (result) {
          $scope.products = result.data;
        });
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  console.log('in friend ctrl');
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('ProductDetailCtrl', function($scope, $stateParams, Friends) {
  console.log('in product  2 ctrl');
})

.controller('AccountCtrl', function($scope, API) {
        $scope.APIKey = API.key;
});
