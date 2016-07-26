angular
.module('RockPaperStuff')
.controller('MainController', MainController);

MainController.$inject = ['$http', '$state', '$stateParams'];
function MainController($http, $state, $stateParams){

  var self = this;

  // Default values
  self.playerMove = null;
  self.computerMove = null;
  self.roundWinner = [];

  // Functions available to page
  self.makeMove = makeMove;

  // Win conditions
  self.winConditions = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    spock: ["scissors", "rock"],
    lizard: ["paper", "spock"]
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
        this.computerMove = "rock";
        break;
      case 1:
        this.computerMove = "paper";
        break;
      case 2:
        this.computerMove = "scissors";
        break;
      case 3:
        this.computerMove = "lizard";
        break;
      case 4:
        this.computerMove = "spock";
        break;
      default:
        console.log("error in generating computer move");
    }
  }

  function makeMove(move){
    self.playerMove = move;
    getComputerMove();
    switch (findWinner()){
      case "player":
        this.roundWinner.push("player");
        break;
      case "computer":
        this.roundWinner.push("computer");
        break;
      case "draw":
        console.log("draw");
        break;
      case "error":
        console.log("error in findWinner");
        break;
      default:
        console.log("error in resolving winner");
    }
  }
}
