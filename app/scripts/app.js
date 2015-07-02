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
        controller: 'TheBasicsCtrl',
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
        controller: 'ProgramsOverviewCtrl',
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
        controller: 'MeetingRoomCtrl',
        title: 'Meeting Room Example',
        pageIcon: 'md-security'
      })
      .when('/foundation-analyst', {
        templateUrl: 'views/foundation-analyst.html',
        controller: 'FoundationAnalystCtrl',
        title: 'Foundation Analyst',
        pageIcon: 'md-security'
      })
      .when('/method', {
        templateUrl: 'views/method.html',
        controller: 'MethodCtrl',
        title: 'Method',
        pageIcon: 'md-security'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'CountactCtrl',
        title: 'Contact',
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