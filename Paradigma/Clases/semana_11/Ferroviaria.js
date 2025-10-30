const Depositos = require('./Depositos');
const Locomotora = require('./Locomotora');

const { formacion1, formacion2, formacion3 } = require('./Formaciones');

const depositos = new Depositos();

depositos.agregarFormacion(formacion1);
depositos.agregarFormacion(formacion2);
depositos.agregarFormacion(formacion3);

const locomotora1 = new Locomotora(6000, 40000, 1000);
const locomotora2 = new Locomotora(3000, 22000, 7000);
const locomotora3 = new Locomotora(2000, 25000, 5000);

depositos.agregarLocomotora(locomotora1);
depositos.agregarLocomotora(locomotora2);
depositos.agregarLocomotora(locomotora3);

console.log({
  'Vagon mas pesado': depositos.vagonMasPesadoDeCadaFormacion(),
  'Formacion compleja': depositos.formacionCompleja(),
  'Unidades Antes': depositos.unidadesFormacion(),
  'Mover locomotora': depositos.moverLocomotora(formacion1),
  'Unidades Despues': depositos.unidadesFormacion(),
});
