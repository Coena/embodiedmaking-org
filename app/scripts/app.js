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

  // validate contact form
$(function() {
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 5
            }
        },
        messages: {
            name: {
                required: 'You have to enter at least your first name so that we know who we are talikng to.',
                minlength: 'Your name must consist of at least 2 characters.'
            },
            email: {
                required: 'Email address is mandatory.'
            },
            message: {
                required: 'A message is mandatory.',
                minlength: 'Your message must consist of at least 5 characters.'
            }
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type:'POST',
                data: $(form).serialize(),
                url:'../send_mail.php',
                success: function() {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor','default');
                        $('#success').fadeIn();
                    });
                },
                error: function() {
                    $('#contactForm').fadeTo( 'slow', 0.15, function() {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});