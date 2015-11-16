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
                title: 'Home'
            })
            .when('/legal', {
                templateUrl: 'views/legal.html',
                title: 'Legal Notice'
            })
            .when('/the_basics', {
                templateUrl: 'views/the_basics.html',
                title: 'The basics'
            })
            .when('/the_essence', {
                templateUrl: 'views/the_essence.html',
                title: 'The essence'
            })
            .when('/library', {
                templateUrl: 'views/library.html',
                title: 'Library'
            })
            .when('/courses', {
                templateUrl: 'views/courses.html',
                title: 'Courses'
            })
            .when('/certifications', {
                templateUrl: 'views/certifications.html',
                title: 'Certifications'
            })
            .when('/meetingroom', {
                templateUrl: 'views/meetingroom.html',
                title: 'Meeting Room Example',
            })
            .when('/contactsucces', {
                templateUrl: 'views/contactsucces.html',
                title: 'ContactSucces'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                title: 'Contact'
            })
            .when('/404', {
                templateUrl: 'views/404.html',
                title: '404'
            })
            .otherwise({
                redirectTo: '/404'
            });


    }).run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            $rootScope.pageIcon = current.$$route.pageIcon;
        });

  }]);