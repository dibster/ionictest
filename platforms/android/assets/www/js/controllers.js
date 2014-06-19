
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

.controller('ProductDetailCtrl', function($scope, $stateParams, Products, $ionicLoading) {
        $ionicLoading.show({
            template: 'Loading...'
        });

        Products.get($stateParams.productId).then(function (result) {
            $scope.product = result.data;
            //todo add custom fields as service will return custom fields Object
            $ionicLoading.hide();
            $scope.customFields = [];

            // get the extended properties
            if (!(_.isEmpty($scope.product.customFields))) {
                var cf = $scope.product.customFields;
                for (var key in cf) {
                    if (cf.hasOwnProperty(key)) {
                        var customField = {};
                        customField.name = key;
                        customField.value = cf[key];
                        $scope.customFields.push(customField);
                        console.log(key + " -> " + cf[key]);
                    }
                }
            }
        });

})

.controller('AccountCtrl', function($scope, API) {
        $scope.APIKey = API.key;
});
