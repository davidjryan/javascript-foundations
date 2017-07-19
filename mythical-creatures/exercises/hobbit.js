function Hobbit(name) {

  this.name = name,
  this.disposition = "homebody",
  this.age = 0,
  this.adult = false,
  this.isShort = true,
  this.old = false,
  this.hasRing = (this.name === "Frodo") ? true : false;

  Hobbit.prototype.celebrateBirthday = function () {

    this.age += 1

    if(this.age >= 101) {
      this.old = true
    } else if(this.age > 32) {
      this.adult = true
    } else if(this.age <=32) {
      this.adult = false
    }
  };

}





module.exports = Hobbit;
