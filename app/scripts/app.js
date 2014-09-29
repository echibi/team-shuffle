'use strict';
/**
 * @ngdoc overview
 * @name teamShuffleApp
 * @description
 * # teamShuffleApp
 *
 * Main module of the application.
 */
angular.module('teamShuffleApp', ['ngAnimate', 'ngCookies', 'ngResource', 'ngRoute', 'ngSanitize', 'ngTouch', 'LocalStorageModule']).config(function($routeProvider) {
    $routeProvider.when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
    }).when('/groups', {
        templateUrl: 'views/groups.html',
        controller: 'GroupsCtrl'
    }).when('/groups/:groupId', {
        templateUrl: 'views/group-shuffle.html',
        controller: 'ShuffleGroupCtrl'
      })
    .otherwise({
        redirectTo: '/'
    });
}).config(['localStorageServiceProvider',
    function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }
]);