'use strict';
/**
 * @ngdoc function
 * @name teamShuffleApp.controller:ShuffleCtrl
 * @description
 * # ShuffleCtrl
 * Controller of the teamShuffleApp
 */
angular.module('teamShuffleApp').controller('GroupsCtrl', function($scope, localStorageService) {
    var groupsInStore = localStorageService.get('groups');
    $scope.groups = groupsInStore || [];
    $scope.$watch('groups', function() {
        localStorageService.add('groups', $scope.groups);
    }, true);
    // $scope.teams = teams.teams;
    $scope.addGroup = function() {
        if ($scope.title === '') {
            return;
        }
        $scope.groups.push({
            title: $scope.title,
            members: [],
        });
        $scope.title = '';
    };
    $scope.removeGroup = function() {
        //TODO:: remove function.
    };

    
});