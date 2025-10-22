const formacion = require('./Formacion.js');

const VagonCarga = require('./VagonCarga.js');
const VagonPasajero = require('./VagonPasajero.js');
const VagonDormitorio = require('./VagonDormitorio.js');
const VagonPasajeros = require('./VagonPasajero.js');

// PrimeraFormacion
const primeraFormacion = new formacion();

vagon1 = new VagonPasajero(10, 4, true, true);
vagon2 = new VagonPasajero(7, 2, false, false);
vagon3 = new VagonCarga(6800, 5);
vagon4 = new VagonDormitorio(8, 3);

primeraFormacion.agregarVagon(vagon1);
primeraFormacion.agregarVagon(vagon2);
primeraFormacion.agregarVagon(vagon3);
primeraFormacion.agregarVagon(vagon4);

// Vagón 	cant. pasajeros 	peso máximo 	carga máxima 	tiene baño
// 1 	        100 	        10300 	            300 	        sí
// 2 	        41 	            6080 	            800 	        no
// 3 	        0 	            6300 	            4800 	        no
// 4 	        24 	            7120 	            1200 	        sí
// Antes del mantenimiento
// console.log(
//   'Antes del mantenimiento:',
//   primeraFormacion.vagones.map((vagon, index) => ({
//     vagon: index + 1,
//     cantPasajeros: vagon.cantPasajeros(),
//     pesoMaximo: vagon.cantPeso(),
//     cargaMaxima: vagon.cargaMax(),
//     tieneBaño: vagon.baño ? 'sí' : 'no',
//   }))
// );

// Antes del mantenimiento
console.log(
  'Antes del mantenimiento:',
  primeraFormacion.cantPasajerosTotal(),
  primeraFormacion.vagones.filter(
    (v) =>
      (v instanceof VagonPasajero || v instanceof VagonDormitorio) && v.popular
  ).length,
  primeraFormacion.dispersionPeso(),
  primeraFormacion.cantBaños()
);

primeraFormacion.mantenimiento();
// Después del mantenimiento

console.log(
  'Después del mantenimiento:',
  primeraFormacion.cantPasajerosTotal(),
  primeraFormacion.vagones.filter(
    (v) =>
      (v instanceof VagonPasajero || v instanceof VagonDormitorio) && v.popular
  ).length,
  primeraFormacion.dispersionPeso(),
  primeraFormacion.cantBaños()
);
//  	                    antes 	después
// pasajeros 	            165 	180
// vagones populares 	    1 	    2
// es carguero 	            no 	    no
// dispersión de pesos 	    4220 	3200
// baños 	                2 	      2

console.log('-----------------------');

// SegundaFormacion
const segundaFormacion = new formacion();
vagon5 = new VagonCarga(8000, 1);
vagon6 = new VagonDormitorio(15, 4);

segundaFormacion.agregarVagon(vagon5);
segundaFormacion.agregarVagon(vagon6);

// Antes del mantenimiento
console.log(
  'Segunda Formacion - Antes del mantenimiento:',
  segundaFormacion.cantPasajerosTotal(),
  segundaFormacion.vagones.filter(
    (v) =>
      (v instanceof VagonPasajero || v instanceof VagonDormitorio) && v.popular
  ).length,
  segundaFormacion.dispersionPeso(),
  segundaFormacion.cantBaños()
);

segundaFormacion.mantenimiento();
// Después del mantenimiento
console.log(
  'Segunda Formacion - Después del mantenimiento:',
  segundaFormacion.cantPasajerosTotal(),
  segundaFormacion.vagones.filter(
    (v) =>
      (v instanceof VagonPasajero || v instanceof VagonDormitorio) && v.popular
  ).length,
  segundaFormacion.dispersionPeso(),
  segundaFormacion.cantBaños()
);
