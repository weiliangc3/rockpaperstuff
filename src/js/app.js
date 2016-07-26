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
    });

  $urlRouterProvider.otherwise("/");
}
