/* eslint-disable no-undef */
const { Bici, Farolito, Canasto, Morral } = require('./Bicis');

describe('Bici', () => {
  test('Should Bike with farolito', () => {
    const bike = new Bici(28, 150, 'Olmo');
    const farolito = new Farolito();

    bike.agregarAccesorio([farolito]);

    expect(bike.calcularAltura()).toBe(85);
    expect(bike.calcularVelocidadCrucero()).toBe(34);
    expect(bike.calcularCarga()).toBe(0);
    expect(bike.calcularPeso()).toBe(14.5);
    expect(bike.tieneLuz()).toBe(true);
    expect(bike.calcularAccesoriosLivianos()).toBe(1);
    expect(bike.accesorios).toEqual([farolito]);
  });
  test('Should Bike with farolito,canasto and morral', () => {
    const bike = new Bici(26, 110, 'Legnano');
    const farolito = new Farolito();
    const canasto = new Canasto(8);
    const morral = new Morral(21, true);

    bike.agregarAccesorio([farolito, canasto, morral]);
    console.log(bike.accesorios);

    expect(bike.calcularAltura()).toBe(80);
    expect(bike.calcularVelocidadCrucero()).toBe(28);
    expect(bike.calcularCarga()).toBe(23);
    expect(bike.calcularPeso()).toBe(15.5);
    expect(bike.tieneLuz()).toBe(true);
    expect(bike.calcularAccesoriosLivianos()).toBe(2);
    expect(bike.accesorios).toEqual([farolito, canasto, morral]);
  });
  test('Should Bike with morral', () => {
    const bike = new Bici(20, 90, 'Legnano');
    const morral = new Morral(6, false);

    bike.agregarAccesorio([morral]);

    expect(bike.calcularAltura()).toBe(65);
    expect(bike.calcularVelocidadCrucero()).toBe(22);
    expect(bike.calcularCarga()).toBe(2);
    expect(bike.calcularPeso()).toBe(11.2);
    expect(bike.tieneLuz()).toBe(false);
    expect(bike.calcularAccesoriosLivianos()).toBe(0);
    expect(bike.accesorios).toEqual([morral]);
  });
});
