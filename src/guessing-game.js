class GuessingGame {
    constructor(min, max, result) {
      this.min = min;
      this.max = max;
      this.result = result;
    }

    setRange(min, max) {
      this.min = min;
      this.max = max;
    }

    guess() {
      this.result = Math.round((this.min + this.max)/2);
      return this.result;
    }

    lower(){
        this.max = this.result;
    }

    greater(){
        this.min = this.result;
    }
  }

module.exports = GuessingGame;
