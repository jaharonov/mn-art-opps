var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngMessages']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider, $mdThemingProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config')
  $mdThemingProvider.theme('default')
    .primaryPalette('cyan')
    .accentPalette('pink')
    .backgroundPalette('grey');
  $routeProvider
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      controller: 'LoginController as lc',
    })
    .when('/register', {
      templateUrl: '/views/templates/register.html',
      controller: 'LoginController as lc'
    })
    .when('/user', {
      templateUrl: '/views/templates/user.html',
      controller: 'UserController as uc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/residencies', {
      templateUrl: '/views/templates/residencies.html',
      controller: 'ResController as rc',
      resolve: {
        getuser : function(UserService){
          return UserService.getuser();
        }
      }
    })
    .when('/grants', {
      templateUrl: '/views/templates/grants.html',
      controller: 'GrantController as gc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/todo', {
      templateUrl: '/views/templates/todo.html',
      controller: 'UserController as uc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .when('/landing', {
      templateUrl: '/views/templates/landing.html',
      controller: 'LandingController as lc',
      resolve: {
        getuser: function (UserService) {
          return UserService.getuser();
        }
      }
    })
    .otherwise({
      redirectTo: 'home'
    });
});
