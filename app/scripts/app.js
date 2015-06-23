'use strict';

var currentDate = new Date();
$('#current-year').html((currentDate).getFullYear());

/**
 * @ngdoc overview
 * @name embodiedmakingOrgApp
 * @description
 * # embodiedmakingOrgApp
 *
 * Main module of the application.
 */
angular
  .module('embodiedmakingOrgApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap',
    'perfect_scrollbar'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        title: 'Home',
        pageIcon: 'md-home'
      })
      .when('/interactions', {
        templateUrl: 'views/interactions.html',
        controller: 'InteractionsCtrl',
        title: 'Interactions',
        pageIcon: 'md-forum'
      })
      .when('/legal', {
        templateUrl: 'views/legal.html',
        controller: 'LegalCtrl',
        title: 'Legal Notice',
        pageIcon: 'md-security'
      })
      .when('/the_basics', {
        templateUrl: 'views/the_basics.html',
        controller: 'The_basicsCtrl',
        title: 'The basics',
        pageIcon: 'md-security'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.pageIcon = current.$$route.pageIcon;
    });
  }]);