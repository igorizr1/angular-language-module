angular.module('MovieFish')
.controller('AppGlobalCtrl', function($scope, $rootScope, $ionicSideMenuDelegate, LanguageModule) {
    $scope.toggleLeft = function(){$ionicSideMenuDelegate.toggleLeft();};
    $rootScope.lang = LanguageModule.translate;
});
