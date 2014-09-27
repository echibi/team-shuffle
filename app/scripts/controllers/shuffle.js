'use strict';
/**
 * @ngdoc function
 * @name teamShuffleApp.controller:ShuffleCtrl
 * @description
 * # ShuffleCtrl
 * Controller of the teamShuffleApp
 */
angular.module('teamShuffleApp').controller('ShuffleCtrl', function($scope, teams, localStorageService) {
    $scope.teams = teams.teams;
    $scope.addTeam = function() {
        if ($scope.title === '') {
            return;
        }
        $scope.teams.push({
            title: $scope.title,
        });
        $scope.title = '';
    };
    $scope.removeTeam = function() {
        //TODO:: remove function.
    };
    $scope.addMember = function(team) {
        var newName = team.members.new.name;
        if (newName === '') {
            return;
        }
        team.members.push({
            name: newName,
        });
        team.members.new.name = '';
    };
    $scope.removeMember = function() {
        //TODO:: remove function.
    };
});