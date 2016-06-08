(function() {

  var Player = require("./lib/player");
  var Game = require("./lib/game");
  var printer = require("./lib/printers/console");


  var g = Game(printer);
  var p1 = new Player('Jim', 'red');
  var p2 = new Player('Gelsey', 'yellow');

  var playing = true;

  var isPlaying = function() {
    return playing === true;
  };

  var win = function() {
    playing = false;
  };

  while(isPlaying()) {
    g.playPiece(3, p1);
    g.playPiece(1, p2);
    if(connectFour()) {
      win();
    }
  }


}());
