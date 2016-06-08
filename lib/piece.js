module.exports = function(color) {
  this.color = color;
  this.toString = function() {
    return ["[",color === 'yellow' ? "Y" : "R","]"].join("");
  };
  return this;
};
