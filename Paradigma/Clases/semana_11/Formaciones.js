const Formacion = require('./Formacion.js');
const VagonPasajeros = require('./VagonPasajero.js');
const VagonCarga = require('./VagonCarga.js');
const VagonDormitorio = require('./VagonDormitorio.js');
const Locomotora = require('./Locomotora.js');

// Formacion 1
const locomotora1 = new Locomotora(3000, 1000, 2000);
const locomotora2 = new Locomotora(5000, 2000, 4000);

const vagon1 = new VagonPasajeros(10, 4, true, true);
const vagon2 = new VagonPasajeros(7, 2, false, false);
const vagon3 = new VagonCarga(6800, 5);
const vagon4 = new VagonDormitorio(8, 3);

const formacion1 = new Formacion();
formacion1.agregarVagon(vagon1);
formacion1.agregarVagon(vagon2);
formacion1.agregarVagon(vagon3);
formacion1.agregarVagon(vagon4);
formacion1.agregarLocomotora(locomotora1);
formacion1.agregarLocomotora(locomotora2);

// Formacion 2
const locomotora3 = new Locomotora(1000, 30000, 8000);
const locomotora4 = new Locomotora(1500, 32000, 2000);

const vagon5 = new VagonPasajeros(15, 6, true, false);
const vagon6 = new VagonCarga(25000, 12);
const vagon7 = new VagonCarga(10000, 10);
const vagon8 = new VagonDormitorio(12, 4);

const formacion2 = new Formacion();
formacion2.agregarVagon(vagon5);
formacion2.agregarVagon(vagon6);
formacion2.agregarVagon(vagon7);
formacion2.agregarVagon(vagon8);
formacion2.agregarLocomotora(locomotora3);
formacion2.agregarLocomotora(locomotora4);

// Formacion 3
const locomotora5 = new Locomotora(2000, 25000, 6000);
const locomotora6 = new Locomotora(2500, 27000, 2000);

const vagon9 = new VagonPasajeros(20, 8, true, true);
const vagon10 = new VagonPasajeros(10, 3, false, false);
const vagon11 = new VagonPasajeros(6, 9, true, false);
const vagon12 = new VagonDormitorio(15, 5);

const formacion3 = new Formacion();
formacion3.agregarVagon(vagon9);
formacion3.agregarVagon(vagon10);
formacion3.agregarVagon(vagon11);
formacion3.agregarVagon(vagon12);
formacion3.agregarLocomotora(locomotora5);
formacion3.agregarLocomotora(locomotora6);

module.exports = {
  formacion1,
  formacion2,
  formacion3,
};
