// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'ngCordova', 'ionic.service.core', 'ionic.service.push'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(['$ionicAppProvider', function ($ionicAppProvider) {
  $ionicAppProvider.identify({
    app_id: 'dd9a866e',
    api_key: 'f517d0a2548a379244ffb6c472f855f9102a1ff1c6af60f9',
    dev_push: true
  });
}])
.controller('PushCtrl', function($scope, $rootScope, $ionicUser, $ionicPush) {

  $rootScope.$on('$cordovaPush:tokenReceived', function(event, data) {
    alert('Success: ' + data.token);
    console.log('Got token: ', data.token, data.platform);
    $scope.token = data.token;
  });

  $scope.identifyUser = function() {
    var user = $ionicUser.get();

    if(!user.user_id) {
      user.user_id = $ionicUser.generateGUID();
    }

    // to extend the user object is not mandatory
    angular.extend(user, {
      name: 'Toni',
      bio: 'Author of the test'
    });

    //
    $ionicUser.identify(user).then(function (res) {
      $scope.identified = true;
      console.log('name: ', user.name, ', id:', user.user_id);
      //console.log('RES: ', res);
    });
  };

  $scope.pushRegister = function() {
    console.log('aqui anda');
    $ionicPush.register({
      canShowAlert: true,
      canSetBadge: true,
      canRunActionsOnWake: true,
      onNotification: function(notificaition) {
        // handle your stuff
        return true;
      }
    });
  }
});
