function Medusa(name) {

  this.name = name,
  this.statues = [];

  Medusa.prototype.stare = function(victim) {
    this.statues.push(victim);
  };

}

function Person(name) {

  this.name = name;

}

module.exports = {Medusa, Person};
