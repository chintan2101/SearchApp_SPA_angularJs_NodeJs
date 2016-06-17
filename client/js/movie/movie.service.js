angular.module('movie.service', [])
	.factory('MovieService', function ($resource) {
		return $resource('/movie/:id');
	});