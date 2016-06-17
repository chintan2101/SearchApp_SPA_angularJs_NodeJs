angular.module('movie.controller', [])
	.controller('MovieController', function ($scope, movie) {
		$scope.movie = movie;
	});