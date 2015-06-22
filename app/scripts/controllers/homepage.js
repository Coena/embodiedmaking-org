'use strict';

/**
 * @ngdoc function
 * @name businessElementsSiteApp.controller:LegalCtrl
 * @description
 * # LegalCtrl
 * Controller of the businessElementsSiteApp
 */
angular.module('businessElementsSiteApp')
  .controller('HomepageCtrl', function ($scope, $resource) {
    $scope.details = $resource('scripts/jsons/homepage.json').query();
  });