'use strict';

/**
 * @ngdoc function
 * @name embodiedmakingOrgApp.controller:LegalCtrl
 * @description
 * # LegalCtrl
 * Controller of the embodiedmakingOrgApp
 */
angular.module('embodiedmakingOrgApp')
  .controller('LegalCtrl', function ($scope, $resource) {
    $scope.details = $resource('scripts/jsons/legal.json').query();
  });