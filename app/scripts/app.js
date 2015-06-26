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
    'perfect_scrollbar',
    'ngMdIcons'
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
      .when('/courses', {
        templateUrl: 'views/courses.html',
        controller: 'CoursesCtrl',
        title: 'Courses',
        pageIcon: 'md-security'
      })
      .otherwise({
        redirectTo: '/'
      })
     .when('/programsoverview', {
        templateUrl: 'views/programsoverview.html',
        controller: 'ProgramsoverviewCtrl',
        title: 'Programsoverview',
        pageIcon: 'md-security'
      })
     .when('/embook', {
        templateUrl: 'views/embook.html',
        controller: 'EmbookCtrl',
        title: 'Embodied Making Book',
        pageIcon: 'md-security'
      })
     .when('/meetingroom', {
        templateUrl: 'views/meetingroom.html',
        controller: 'MeetingroomCtrl',
        title: 'Meeting Room Example',
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