'use strict';

/**
 * Route configuration for the RDash module.
 */
angular.module('RDash').config(['$stateProvider', '$urlRouterProvider',
    function($stateProvider, $urlRouterProvider) {

        // For unmatched routes
        $urlRouterProvider.otherwise('/');

        // Application routes
        $stateProvider
			.state('login', {
				cache: false,
                url: '/',
                templateUrl: 'templates/login.html',
				controller: 'LoginCtrl'
            })
			.state('register', {
				cache: false,
                url: '/register',
                templateUrl: 'templates/register.html',
				controller: 'RegisterCtrl'
            })
			.state('home', {
				cache: false,
                url: '/home',
                templateUrl: 'templates/home.html',
				controller: 'MasterCtrl'
            })
			.state('home.dashboard', {
				cache: false,
                url: '/dashboard',
                templateUrl: 'templates/dashboard.html'
            })
            .state('home.tables', {
				cache: false,
                url: '/tables',
                templateUrl: 'templates/tables.html'
            });
    }
]);
