var UIASSIGN1 = angular.module('UIASSIGN1', ['ui.router' , 'ngAnimate']).run(function() {
});



UIASSIGN1.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
  .state('home', {
    url: '/home',
    templateUrl : 'views/home.html',
    controller  : 'mainCTRL',
    breadcrumb: {
        title: 'home.home'
    }
  });

  $stateProvider
  .state('survey', {
    url: '/survey',
    templateUrl : 'views/survey.html',
    controller  : 'surveyCTRL',
  });
  $urlRouterProvider.otherwise('/home');

}).run(function ($rootScope, $location) {
      $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
          globalJS(toState.name);
      });
});








/*  general scripts */
