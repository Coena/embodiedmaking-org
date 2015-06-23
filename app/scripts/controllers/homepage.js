'use strict';

/**
 * @ngdoc function
 * @name embodiedmakingOrgApp.controller:LegalCtrl
 * @description
 * # LegalCtrl
 * Controller of the embodiedmakingOrgApp
 */
angular.module('embodiedmakingOrgApp')
  .controller('HomepageCtrl', function ($scope, $resource) {
    $scope.details = $resource('scripts/jsons/homepage.json').query();
  });