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
    }).when('/shuffle', {
        templateUrl: 'views/shuffle.html',
        controller: 'ShuffleCtrl'
    }).otherwise({
        redirectTo: '/'
    });
}).config(['localStorageServiceProvider',
    function(localStorageServiceProvider) {
        localStorageServiceProvider.setPrefix('ls');
    }
]).factory('teams', [

    function() {
        var o = {
            teams: [{
                title: 'team 1',
                members: [{
                    name: 'Jonas'
                }, {
                    name: 'Jonas'
                }, {
                    name: 'Jonas'
                }, ]
            }, {
                title: 'team 2',
                members: [{
                    name: 'Elina'
                }, {
                    name: 'Elina'
                }, {
                    name: 'Elina'
                }, ]
            }]
        };
        return o;
    }
]);