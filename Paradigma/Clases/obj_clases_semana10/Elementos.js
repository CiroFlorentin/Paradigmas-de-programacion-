class Castillo {
  constructor() {
    this.height = 20;
    this.defense = 150;
  }
  receiveAttack(attack) {
    this.defense -= attack;
  }
  valueCollected() {
    return this.defense / 5;
  }
  work() {
    this.defense = Math.min(this.defense + 20, 200);
  }
}
class Aurora {
  constructor() {
    this.height = 1;
    this.lives = true;
  }
  receiveAttack(attack) {
    if (attack >= 10) {
      this.lives = false;
    }
  }
  valueCollected() {
    return 15;
  }
}
class Tipa {
  constructor() {
    this.height = 8;
  }
  grow(meters) {
    this.height += meters;
  }

  valueCollected() {
    return this.height * 2;
  }
  work() {
    this.grow(1);
  }
}

module.exports = { Castillo, Aurora, Tipa };
