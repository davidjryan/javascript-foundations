function Wizard(wiz) {

  this.name = wiz.name,
  this.bearded = wiz.bearded === false ? false : true,
  this.castCount = 0


  Wizard.prototype.incantation = function(str) {
    return str.toUpperCase();
  }

  Wizard.prototype.cast = function() {
    this.castCount++
    return this.castCount >= 3 ? 'I SHALL NOT CAST!' : 'MAGIC BULLET';
  }

  Wizard.prototype.isRested = function() {
    if(this.castCount >= 3) {
      return false;
    } else {
      return true;
    }

  }

}




module.exports = Wizard;
