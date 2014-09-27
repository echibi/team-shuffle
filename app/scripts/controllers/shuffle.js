'use strict';
/**
 * @ngdoc function
 * @name teamShuffleApp.controller:ShuffleCtrl
 * @description
 * # ShuffleCtrl
 * Controller of the teamShuffleApp
 */
angular.module('teamShuffleApp').controller('ShuffleCtrl', function($scope, teams) {

    $scope.teams = teams.teams;
    console.log(teams);
    $scope.addPost = function() {
        if ($scope.title === '') {
            return;
        }
        $scope.teams.push({
            teamname: $scope.title,
        });
        $scope.title = '';
    };
});