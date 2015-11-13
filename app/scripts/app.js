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
            .otherwise({
                redirectTo: '/'
            })
            .when('/certifications', {
                templateUrl: 'views/certifications.html',
                title: 'Certifications'
            })
            .when('/meetingroom', {
                templateUrl: 'views/meetingroom.html',

                title: 'Meeting Room Example',
                pageIcon: 'md-security'
            })
            .when('/method', {
                templateUrl: 'views/method.html',
                title: 'Method'
            })
            .when('/contactsucces', {
                templateUrl: 'views/contactsucces.html',
                title: 'ContactSucces'
            })
            .when('/contact', {
                templateUrl: 'views/contact.html',
                title: 'Contact'
            })
            .otherwise({
                redirectTo: '/'
            });


    }).run(['$location', '$rootScope', function ($location, $rootScope) {
        $rootScope.$on('$routeChangeSuccess', function (event, current, previous) {
            $rootScope.title = current.$$route.title;
            $rootScope.pageIcon = current.$$route.pageIcon;
        });

  }]);

// validate contact form
$(function () {
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
        submitHandler: function (form) {
            $(form).ajaxSubmit({
                type: 'POST',
                data: $(form).serialize(),
                url: '../send_mail.php',
                success: function () {
                    $('#contactForm :input').attr('disabled', 'disabled');
                    $('#contactForm').fadeTo('slow', 0.15, function () {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('#success').fadeIn();
                    });
                },
                error: function () {
                    $('#contactForm').fadeTo('slow', 0.15, function () {
                        $('#error').fadeIn();
                    });
                }
            });
        }
    });
});