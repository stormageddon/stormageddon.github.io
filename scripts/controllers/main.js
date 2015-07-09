'use strict';

/**
 * @ngdoc function
 * @name watchdogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the watchdogApp
 */
angular.module('watchdogApp')
  .controller('MainCtrl', function ($scope, $http) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.download = function(os) {
      var downloadSource = {
          mac: 'https://twitch-watchdog.s3-us-west-2.amazonaws.com/Watchdog.zip',
          windows: 'https://twitch-watchdog.s3-us-west-2.amazonaws.com/Watchdog_win_x64.zip',
          linux: 'https://twitch-watchdog.s3-us-west-2.amazonaws.com/Watchdog_linux.zip'
      };

      console.log('using:',downloadSource[os]);

      $http.post('https://twitch-watchdog.s3-us-west-2.amazonaws.com/Watchdog.zip', null, {
        headers: {
          'Content-Type': 'application/zip',
          'Accept': 'zip'
        }
      }).then(function(response) {
        console.log("got response",response);
      });
    };
  });
