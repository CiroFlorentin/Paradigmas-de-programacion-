class Luisa {
  constructor() {
    this.personajeActivo = null;
  }
  aparece(elemento) {
    this.personajeActivo.encontrar(elemento);
  }
}
module.exports = { Luisa };
