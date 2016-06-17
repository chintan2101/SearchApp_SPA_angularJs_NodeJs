angular.module('search.service', [])
	.factory('SearchService', function ($resource) {
		return $resource('/movie/search');
	});