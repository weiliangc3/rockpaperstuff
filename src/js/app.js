angular
  .module('RockPaperStuff', ['ui.router', "ngAnimate"])
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
      url: "/",
      templateUrl: "/views/statics/game.html"
    })
    .state('results', {
      url: "/",
      templateUrl: "/views/statics/results.html"
    })
    .state('rules', {
      url: "/",
      templateUrl: "/views/statics/rules.html"
    });

  $urlRouterProvider.otherwise("/");
}
