module.exports = function() {
  var EmptySpace = require("./empty-space");

  var columns = [ 0, 0, 0, 0, 0, 0, 0 ];
  var rows    = [ 0, 0, 0, 0, 0, 0 ];

  return rows.map(function(row, i) {
    return columns.map(function(column, j) {
      //return ["[",i,",",j,"]"].join("");
      return new EmptySpace();
    });
  });
};
