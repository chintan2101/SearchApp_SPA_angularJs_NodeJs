angular.module('app', ['ngRoute', 'ngResource', 'search.controller', 'search.service', 'movie.controller', 'movie.service'])
  .filter('trustHTML', function($sce) {
    return function(text){
      return $sce.trustAsHtml(text);
    };
  })
  .config(['$routeProvider', '$locationProvider', 
    function ($routeProvider, $locationProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/search.html',
          controller: 'SearchController'
        })
        .when('/movie/:id', {
          templateUrl: 'views/movie.html',
          controller: 'MovieController',
          resolve: {
            movie: function($route, MovieService){
              return MovieService.get({ id: $route.current.params.id})
            }
          }
        })
        .otherwise({
          redirectTo: '/'
        });
      $locationProvider.html5Mode(true);
  }]);
