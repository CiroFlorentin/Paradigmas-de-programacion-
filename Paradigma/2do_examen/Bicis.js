class Bici {
  constructor(rodado, largo_cm, marca) {
    this.rodado = rodado;
    this.largo_cm = largo_cm;
    this.marca = marca;
    this.accesorios = [];
  }
  agregarAccesorio(accesorio) {
    for (let i = 0; i < accesorio.length; i++) {
      this.accesorios.push(accesorio[i]);
    }
  }
  calcularAltura() {
    return this.rodado * 2.5 + 15;
  }
  calcularVelocidadCrucero() {
    return this.largo_cm > 120 ? this.rodado + 6 : this.rodado + 2;
  }
  calcularCarga() {
    return this.accesorios.reduce((acc, accesorio) => acc + accesorio.carga, 0);
  }
  calcularPeso() {
    let pesoTotal = this.accesorios.reduce(
      (acc, accesorio) => acc + accesorio.peso,
      0
    );
    return this.rodado / 2 + pesoTotal;
  }
  tieneLuz() {
    return this.accesorios.some((accesorio) => accesorio.tipo);
  }
  calcularAccesoriosLivianos() {
    return this.accesorios.filter((accesorio) => accesorio.peso < 1).length;
  }
}

class Accesorio {
  constructor(tipo, peso, carga) {
    this.tipo = tipo;
    this.peso = peso;
    this.carga = carga;
  }
}
class Farolito extends Accesorio {
  constructor() {
    super(true, 0.5, 0);
  }
}

class Canasto extends Accesorio {
  constructor(volumen) {
    const peso = volumen / 10;
    const carga = volumen * 2;
    super(false, peso, carga);
    this.volumen = volumen;
  }
}
class Morral extends Accesorio {
  constructor(largo_cm, ojo) {
    const carga = largo_cm / 3;
    ojo ? super(true, 1.2, carga) : super(false, 1.2, carga);
    this.largo_cm = largo_cm;
    this.ojo = ojo;
  }
}

module.exports = { Bici, Farolito, Canasto, Morral };
