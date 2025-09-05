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

//TODO: Reduce (Ejemplo unir cada frase con un guion)
const value = ["hola", "mundo", "javaScript"].reduce((acc, curr, i) =>
  i ? acc + "-" + curr : curr
);

console.log(value); // hola-mundo-javaScript

//TODO: Reduce para eliminar elementos

const items = [1, 2, 3, 1, 2, 3, 4, 8, 7, 6, 5, 4, 3, 2, 1];

const sinDuplicados = items.reduce((acc, item) => {
  !acc.includes(item) ? acc.push(item) : null;
  return acc;
}, []);

console.log(sinDuplicados);

//TODO: Reduce para contar cantidad d ocurrencias de cada elemento
const frutas = ["manzana", "banana", "pera", "manzana", "naranja", "banana"];

const contarFrutas = frutas.reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(contarFrutas); // { manzana: 2, banana: 2, pera: 1, naranja: 1 }

//! OBJETOS

const persona = {
  nombre: "Ciro",
  fechaNacimiento: "14/09/2003",
  ciudad: "Jose C. Paz",
  genero: "Masculino",
  casado: false,
  profesion: "Ingeniero de Software",
  antiguedad: 5,
};
console.log(persona);

const fns = [
  { name: "Doble", fn: (x) => x * 2 },
  { name: "cuadrado", fn: (x) => x * x },
  { name: "Suma", fn: (x, y) => x + y },
];

const resultado = fns.map(({ name, fn }) => {
  return { name: name, result: fn(5, 3) };
});

console.log(resultado);
