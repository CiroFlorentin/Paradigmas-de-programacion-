/* eslint-disable no-undef */
const Paciente = require('../Paciente.js');
const Magneto = require('../Magneto.js');
const Bicicleta = require('../Bicicleta.js');
const Minitramp = require('../Minitramp.js');

describe('Centro de Kinesiologia', () => {
  beforeEach(() => {
    leonardo = new Paciente(40, 10, 20);
    milena = new Paciente(3, 30, 50);
  });
  const nivelDolorLeonardo = 10;
  const fortalezaMuscularLeonardo = 20;
  const edadLeonardo = 40;

  const nivelDolorMilena = 30;
  const fortalezaMuscularMilena = 50;
  const edadMilena = 3;
  test('should render correctly', () => {
    expect(leonardo.fortalezaMuscular).toBe(fortalezaMuscularLeonardo);
    expect(leonardo.nivelDolor).toBe(nivelDolorLeonardo);
    expect(leonardo.edad).toBe(edadLeonardo);
  });
  test('should leonardo use magneto', () => {
    const magneto = new Magneto();
    leonardo.usarAparato(magneto);
    expect(leonardo.fortalezaMuscular).toBe(fortalezaMuscularLeonardo);
    expect(leonardo.nivelDolor).toBe(9);
    expect(leonardo.edad).toBe(edadLeonardo);
  });
  test('should leonardo use bicicleta', () => {
    const bicicleta = new Bicicleta();
    leonardo.usarAparato(bicicleta);
    expect(leonardo.fortalezaMuscular).toBe(23);
    expect(leonardo.nivelDolor).toBe(6);
    expect(leonardo.edad).toBe(edadLeonardo);
  });
  test('should leonardo use minitramp', () => {
    const minitramp = new Minitramp();

    leonardo.usarAparato(minitramp);

    expect(leonardo.fortalezaMuscular).toBe(24);
    expect(leonardo.nivelDolor).toBe(nivelDolorLeonardo);
    expect(leonardo.edad).toBe(edadLeonardo);
  });
  test('should milena use magneto', () => {
    const magneto = new Magneto();

    milena.usarAparato(magneto);

    expect(milena.fortalezaMuscular).toBe(fortalezaMuscularMilena);
    expect(milena.nivelDolor).toBe(27);
    expect(milena.edad).toBe(edadMilena);
  });
  test('not should milena use minitramp and bicicleta', () => {
    const minitramp = new Minitramp();
    const bicicleta = new Bicicleta();

    milena.usarAparato(minitramp);
    milena.usarAparato(bicicleta);

    expect(milena.fortalezaMuscular).toBe(fortalezaMuscularMilena);
    expect(milena.nivelDolor).toBe(nivelDolorMilena);
    expect(milena.edad).toBe(edadMilena);
  });
});

describe('Rutinas', () => {
  beforeEach(() => {
    leonardo = new Paciente(40, 10, 20);
    milena = new Paciente(3, 30, 50);
  });
  test('should leonardo use rutina', () => {
    const magneto = new Magneto();
    const bicicleta = new Bicicleta();
    const minitramp = new Minitramp();
    leonardo.agregarAparatoARutina([bicicleta, minitramp, bicicleta, magneto]);
    leonardo.usarAparatos();

    expect(leonardo.fortalezaMuscular).toBe(30);
    expect(leonardo.nivelDolor).toBe(1.8);
    expect(leonardo.edad).toBe(40);
  });
  test('should milena use rutina', () => {
    const magneto = new Magneto();
    const bicicleta = new Bicicleta();

    milena.agregarAparatoARutina([magneto, bicicleta]);
    milena.usarAparatos();

    expect(milena.fortalezaMuscular).toBe(50);
    expect(milena.nivelDolor).toBe(30);
    expect(milena.edad).toBe(3);
  });
});
