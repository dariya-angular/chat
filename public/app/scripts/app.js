'use strict';

/**
 * @ngdoc overview
 * @name angularUiApp
 * @description
 * # angularUiApp
 *
 * Main module of the application.
 */
angular
  .module('angularUiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ngMaterial',
    'ngMessages'
  ])
  .config(function ($routeProvider) {
    /*var resolve = {
        auth:(['$q', '$location', function($q, $location){
          var defer = $q.defer();
          var path = $location.path();
          console.log(path);
          if( path === 'about'){
            defer.resolve();
            console.log('asdasdsa');
          } else{
            defer.reject();
          }
        }])
    };*/
    /*function check ($q, $location){
        var defer = $q.defer();
        var path = $location.path();
      if( path === 'about'){
        defer.resolve();
      }else{
        defer.reject();
        $location.path('/');
      }
    }*/

    $routeProvider
      .when('/', {
        templateUrl: 'app/views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
