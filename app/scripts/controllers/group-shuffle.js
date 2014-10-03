'use strict';
/**
 * @ngdoc function
 * @name teamShuffleApp.controller:ShuffleGroupCtrl
 * @description
 * # ShuffleGroupCtrl
 * Controller of the teamShuffleApp
 */
angular.module('teamShuffleApp').controller('ShuffleGroupCtrl', function($scope, $routeParams, localStorageService) {
    $scope.groupId = $routeParams.groupId;
    var groupsInStore = localStorageService.get('groups');
    $scope.groups = groupsInStore || [];
    $scope.currentGroup = groupsInStore[$scope.groupId] || [];
    $scope.$watch('groups', function() {
        localStorageService.add('groups', $scope.groups);
    }, true);
    $scope.addGroupMember = function(group) {
        var newName = group.members.name;
        if (newName === '') {
            return;
        }
        group.members = group.members || [];
        group.members.push({
            name: newName,
        });
        group.members.name = '';
    };
    $scope.removeGroupMember = function(index) {
        // Remove function.
        $scope.currentGroup.members.splice(index, 1);
    };
    $scope.shuffleTeams = function(config) {
        var members = $scope.currentGroup.members || [];
        if (undefined === config) {
            config = {
                numberTeams: 3
            };
        }
        // Create temporary shuffled array. 
        var shuffledMembers = shuffle(members.slice(0));
        
        $scope.shuffledTeams = split(shuffledMembers, config.numberTeams);

    };

    function split(a, n) {
        var len = a.length,
            out = [],
            i = 0;
        while (i < len) {
            var size = Math.ceil((len - i) / n--);
            out.push(a.slice(i, i += size));
        }
        return out;
    }

    function shuffle(array) {
        var currentIndex = array.length,
            temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        return array;
    }
});