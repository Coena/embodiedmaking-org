'use strict';

var currentDate = new Date();
$('#current-year').html((currentDate).getFullYear());

/**
 * @ngdoc overview
 * @name businessElementsSiteApp
 * @description
 * # businessElementsSiteApp
 *
 * Main module of the application.
 */
angular
  .module('businessElementsSiteApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'
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
      .otherwise({
        redirectTo: '/'
      });
  }).run(['$location', '$rootScope', function($location, $rootScope) {
    $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
        $rootScope.title = current.$$route.title;
        $rootScope.pageIcon = current.$$route.pageIcon;
    });
  }]);