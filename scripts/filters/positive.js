'use strict';

/**
 * @ngdoc filter
 * @name growSliderApp.filter:positive
 * @function
 * @description
 * # positive
 * Filter in the growSliderApp.
 */
angular.module('growSliderApp')
  .filter('positive', function() {
    return function(input) {
      return input > 0 ? input : '';
    };
  });
