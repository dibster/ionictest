
angular.module('starter.controllers', [])


.controller('DashCtrl', function($scope, $http) {

        $http({
            url: 'https://api.evrythng.com/products?access_token=1wyTVImqesxRkuCnAAjgJiwWwZjUzu3xDxeqdYVQhv69SeWxkqKfoMALp5KBDlPbVirleglAGWSlSYQK',
            method: "GET",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }
             })
            .success(function(products) {
                // this callback will be called asynchronously
                // when the response is available
                $scope.products = products;
                console.log(products);
            });


})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
