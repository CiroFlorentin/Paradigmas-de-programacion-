class Ballesta {
  constructor() {
    this.arrows = 10;
    this.power = 4;
  }
  use() {
    this.arrows--;
  }
  isLoaded() {
    return this.arrows > 0;
  }
}
class Jabalina {
  constructor() {
    this.loaded = true;
    this.power = 30;
  }
  use() {
    this.loaded = false;
  }
  isLoaded() {
    return this.loaded;
  }
}

module.exports = { Ballesta, Jabalina };
