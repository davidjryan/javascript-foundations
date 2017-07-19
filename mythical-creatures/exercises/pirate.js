function Pirate(name, job = "Scallywag") {

  var hActs = 0

  this.name = name,
  this.job = job,
  this.cursed = false,
  this.booty = 0



  Pirate.prototype.commitHeinousAct = function () {

    hActs++

    if (hActs > 2) {
      this.cursed = true

    };
  }

  Pirate.prototype.robShip = function () {
    this.booty = 100
    return "YAARRR!"
  }
}





module.exports = Pirate;
