'use strict';

/**
 * @ngdoc function
 * @name angularUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularUiApp
 */
angular.module('angularUiApp')
  .controller('MainCtrl', function (socket,$scope) {
   	socket.on('init', function (data) {
    $scope.user = {
   		name:data.name,
   		email:data.email
   	}
	  });

  });
