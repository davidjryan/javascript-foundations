function Dragon(name, rider, color) {

  var ate = 0

  this.name = name,
  this.rider = rider,
  this.color = color,
  this.hungry = true,
  this.eat = function() {

    ate++
    console.log(ate)

    if (ate >= 3) {
      this.hungry = false
    }

  }

}

module.exports = Dragon;
