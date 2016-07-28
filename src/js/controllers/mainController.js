angular
.module('RockPaperStuff')
.controller('MainController', MainController);

MainController.$inject = ['$http', '$state', '$stateParams'];
function MainController($http, $state, $stateParams){

  var self = this;

  // Default values
  self.playerMove     = null;
  self.computerMove   = null;
  self.roundWinner    = [];
  self.roundOngoing   = true;
  self.roundDraw      = false;
  self.roundsPlayed   = 0;
  self.winner         = null;
  self.playerWins     = 0;
  self.computerWins   = 0;

  // Functions available to page
  self.makeMove           = makeMove;
  self.resetGame          = resetGame;
  self.nextRound          = nextRound;
  self.roundDisplayClass  = roundDisplayClass;
  self.countPlayerWins    = countPlayerWins;

  // Win conditions
  self.winConditions = {
    rock:     ["scissors",  "lizard"],
    paper:    ["rock",      "spock"],
    scissors: ["paper",     "lizard"],
    spock:    ["scissors",  "rock"],
    lizard:   ["paper",     "spock"]
  };

  // Functions
  function findWinner(){
    if (self.playerMove === self.computerMove) {
      return "draw";
    }
    if (self.winConditions[self.playerMove].indexOf(self.computerMove) > -1){
      return "player";
    }
    if (self.winConditions[self.computerMove].indexOf(self.playerMove) > -1){
      return "computer";
    }
    return "error";
  }

  function getComputerMove(){
    var moveValue = Math.floor(Math.random() * 5);
    switch (moveValue){
      case 0:
        self.computerMove = "rock";
        break;
      case 1:
        self.computerMove = "paper";
        break;
      case 2:
        self.computerMove = "scissors";
        break;
      case 3:
        self.computerMove = "lizard";
        break;
      case 4:
        self.computerMove = "spock";
        break;
      default:
        console.log("error in generating computer move");
    }
  }

  function makeMove(move){
    self.playerMove = move;
    self.roundsPlayed ++;
    getComputerMove();
    switch (findWinner()){
      case "player":
        self.roundWinner.push("player");
        self.roundOngoing = false;
        self.roundDraw = false;
        break;
      case "computer":
        self.roundWinner.push("computer");
        self.roundOngoing = false;
        self.roundDraw = false;
        break;
      case "draw":
        self.roundOngoing = false;
        self.roundDraw = true;
        break;
      case "error":
        console.log("error in findWinner");
        break;
      default:
        console.log("error in resolving winner");
    }
  }

  function countPlayerWins(){
    var count = 0;
    for (i=0; i < self.roundWinner.length; i++){
      if (self.roundWinner[i] === 'player'){
        count++;
      }
    }
    return count;
  }

  function nextRound(){
    self.roundOngoing = true;
    self.roundDraw = false;
    if (self.roundWinner.length === 3) {
      self.playerWins = countPlayerWins();
      self.computerWins = 3-countPlayerWins();
      self.winner = (self.playerWins > self.computerWins) ? 'player' : 'computer';
      $state.go('results');
    }
  }

  function resetGame(){
    self.playerMove     = null;
    self.computerMove   = null;
    self.roundWinner    = [];
    self.roundOngoing   = true;
    self.roundDraw      = false;
    self.roundsPlayed   = 0;
  }

  function roundDisplayClass(round){
    if (!!self.roundWinner[round]){
      if (self.roundWinner[round] === 'player'){
        return 'scoretracker__round--player';
      } else {
        return 'scoretracker__round--computer';
      }
    } else if(self.roundWinner.length === round){
      return 'scoretracker__round--active';
    } else {
      return 'scoretracker__round--unplayed';
    }
  }
}
