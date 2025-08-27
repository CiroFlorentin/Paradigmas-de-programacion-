//? composición de funciones
const and = (p, q) => (x) => p(x) && q(x);

const esPar = (x) => !(x % 2);
const esMenorQue10 = (x) => x < 10;

const esParMayor = and(esPar, esMenorQue10);
console.log(esParMayor(8)); // true
console.log(esParMayor(12)); // false

//? Funciones de orden superior

const operar = (n, f) => (x) => f(n) + x;

const moverDerecha = (x) => x + 1;
const moverIzquierda = (x) => x - 1;

const mx = operar(5, moverDerecha);
const mi = operar(5, moverIzquierda);

console.log(mx(10)); // 16
console.log(mi(10)); // 14

//! Funciones de orden superior
const f2 = (n) => n + 1;
const f1 = (x, y, f) => x + y + f(x);
console.log(f1(1, 2, f2)); // 4

//* Funciones de orden superior
const suma = (x) => x + 1;
const duplicar = (f) => (x) => f(f(x)); //duplicar vuelve a aplicar la función f dos veces, en este caso suma
console.log(duplicar(suma)(10)); // 12
