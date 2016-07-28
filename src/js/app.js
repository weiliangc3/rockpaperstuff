angular
  .module('RockPaperStuff', ['ui.router'])
  .config(MainRouter);

MainRouter.$inject = ['$stateProvider','$urlRouterProvider', "$locationProvider"];
function MainRouter($stateProvider, $urlRouterProvider, $locationProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: "/",
      templateUrl: "/views/statics/home.html"
    })
    .state('game', {
      url: "/game",
      templateUrl: "/views/statics/game.html"
    })
    .state('results', {
      url: "/results",
      templateUrl: "/views/statics/results.html"
    })
    .state('rules', {
      url: "/rules",
      templateUrl: "/views/statics/rules.html"
    });

  $urlRouterProvider.otherwise("/");
}
