function Unicorn(name, color = 'white') {

  this.name = name,
  this.color = color
  this.says = function(x) {
    return '**;* ' + x + ' *;**';
  }
  this.isWhite = function() {
    if (this.color === 'white') {
      return true;
    } else {
      return false;
    }
  }
}

module.exports = Unicorn;
