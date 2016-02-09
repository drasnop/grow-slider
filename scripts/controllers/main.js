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
      },
      ratio: function() {
        return (this.value - this.options.floor) / (this.options.ceil - this.options.floor);
      }
    };

    $scope.growRateSlider = {
      value: 10,
      options: {
        floor: 5.9,
        ceil: 17.25
      },
      /* laziness. I should use object */
      ratio: function() {
        return (this.value - this.options.floor) / (this.options.ceil - this.options.floor);
      }
    };

    $scope.externalCost = function() {
      return $scope.loanAmount * $scope.externalRateSlider.value / 100;
    };


    $scope.growCost = function() {
      return $scope.loanAmount * $scope.growRateSlider.value / 100;
    };

    $scope.savings = function() {
      // negative output will be filtered out
      return $scope.externalCost() - $scope.growCost();
    };

    $scope.externalRatio = function() {
      return ($scope.externalRateSlider.options.ceil - $scope.externalRateSlider.value) / ($scope.externalRateSlider.options.ceil - $scope.externalRateSlider.options.floor);
    };

  });
