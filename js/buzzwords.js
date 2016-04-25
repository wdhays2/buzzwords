'use strict';

angular.module('buzzwords', [])
.controller('mainController', ['$scope', '$http', function($scope, $http) {

  $scope.words = [];

  $http.get('http://rcacademy.github.io/buzzwords/words.json')
  .then(function successCallback(response) {
    $scope.words = response.data;
  });
}]);
