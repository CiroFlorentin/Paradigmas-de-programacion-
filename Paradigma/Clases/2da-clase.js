//? composición de funciones
const and = (p, q) => (x) => p(x) && q(x);

const esPar = (x) => !(x % 2);
const esMenorQue10 = (x) => x < 10;

const esParMayor = and(esPar, esMenorQue10);
console.log(esParMayor(8)); // true
console.log(esParMayor(12)); // false
