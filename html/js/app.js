angular.module('rpsApp',['ui.router']).config(function($stateProvider, $urlRouterProvider, $locationProvider) {

  $urlRouterProvider
    .otherwise('/error');

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: '/views/homeTpl.html',
      controller: 'mainCtl'
    })
    .state('play', {
      url: '/play/:name',
      templateUrl: '/views/playTpl.html',
      controller: 'playCtl'
    })
    .state('error', {
      url: '/error',
      templateUrl: '/views/errorTpl.html'
    });

  $locationProvider.hashPrefix('');

      /// Comment out the line below to run the app
      // without HTML5 mode (will use hashes in routes)
  $locationProvider.html5Mode(true);

});
