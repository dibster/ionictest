
angular.module('starter.controllers', ['ionic'])


.controller('ProductsCtrl', function($scope, Products, $ionicLoading) {

        $ionicLoading.show({
            template: 'Loading...'
        });

       Products.all().then(function (result) {
          $scope.products = result.data;
          $ionicLoading.hide();
          console.log($scope.products[0]);
        });
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();

})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('ProductDetailCtrl', function($scope, $stateParams, Products, $ionicLoading, CustomFields) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        Products.get($stateParams.productId).then(function (result) {
            $scope.product = result.data;

            $ionicLoading.hide();
            // reformat custom fields
            $scope.customFields = [];
            $scope.customFields = CustomFields.reformat($scope.product.customFields);
       });

})

.controller('AccountCtrl', function($scope, API) {
        $scope.APIKey = API.key;
});
