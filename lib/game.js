module.exports = function(printer){
  var Piece = require("./piece");
  var Board = require("./board");
  var board = new Board();
  var print = printer;

  require("../ext/array");

  var isAvailable = function(column) {
    return function(row) {
      var thing = board[row][column];
      return thing.color === undefined;
    };
  };

  var checkForConnect4 = function() {
    console.log("CONNECT FOUR YO!!!");
  };

  var playPiece = function(column, player) {
    var index = [5,4,3,2,1,0]
      .filter(isAvailable(column))
      .first();

    board[index].splice(column, 1, new Piece(player.color));

    print(board, checkForConnect4);
  };

  return {
    playPiece: playPiece
  };
};
