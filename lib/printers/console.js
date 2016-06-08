module.exports = function(board, cb) {
  for(var i=0; i<6; i++) {
    console.log(board[i].join(''));
  }
  cb();
};
