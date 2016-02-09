'use strict';

/**
 * @ngdoc function
 * @name growSliderApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the growSliderApp
 */
angular.module('growSliderApp')
  .controller('MainCtrl', function($scope) {

    $scope.loanAmount = 10000;

    $scope.externalRateSlider = {
      value: 19.9,
      options: {
        floor: 5.9,
        ceil: 30
      }
    };


  });
