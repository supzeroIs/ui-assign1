var UIASSIGN1 = angular.module('UIASSIGN1', ['ui.router' , 'ngMessages' , 'ngAnimate']).run(function() {

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


  $stateProvider
  .state('questions', {
    url: '/questsions/:id',
    templateUrl : 'views/questions.html',
    controller  : 'questionsCTRL',
  });
  $stateProvider
  .state('target', {
    url: '/target/:id',
    templateUrl : 'views/target.html',
    controller  : 'targetCTRL',
  });

  $urlRouterProvider.otherwise('/home');

}).run(function ($rootScope, $location) {
  $rootScope.$on("$stateChangeSuccess", function (event, toState, toParams, fromState, fromParams) {
    globalJS(toState.name);
  });
});








/*  general scripts */
UIASSIGN1.filter('range', function(){
    return function(n) {
      var res = [];
      for (var i = 0; i < n; i++) {
        res.push(i);
      }
      return res;
    };
  });
