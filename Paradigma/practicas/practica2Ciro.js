const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];

// Ejercicio 1
const resultado1 = nums.reduce((acc, curr) => acc + curr);
console.log("Ejercicio 1: " + resultado1);

// Ejercicio 2
let esInpar = (x) => x % 2;
const resultado2 = nums.reduce(
  (acc, curr) => (esInpar(curr) ? acc + curr * curr : acc),
  0
);
console.log("Ejercicio 2: " + resultado2);

// Ejercicio 3
const frases = [
  "La tecnología cambia el mundo",
  "Programar es crear soluciones",
  "Aprender haciendo es aprender mejor",
  "JavaScript es flexible y poderoso",
];

const resultado3 = frases.reduce((acc, curr) =>
  acc.length < curr.length ? curr : acc
);
console.log("Ejercicio 3: " + resultado3);

// Ejercicio 4

const numsMaxMin = nums.reduce(
  (acc, curr) => {
    curr > acc.min ? (acc.max = curr) : (acc.min = curr);
    return acc;
  },
  { min: Infinity, max: -Infinity }
);

console.log("Ejercicio 4: ", numsMaxMin);

// Ejercicio 5
const listaNotas = [
  { c: "A", n: 8 },
  { c: "B", n: 6 },
  { c: "A", n: 10 },
];

const resultado5 = listaNotas.reduce(
  (acc, curr) => {
    curr.c === "A"
      ? ((acc.A.sum += curr.n), acc.A.count++)
      : ((acc.B.sum += curr.n), acc.B.count++);
    return acc;
  },
  { A: { sum: 0, count: 0 }, B: { sum: 0, count: 0 } }
);
const A = resultado5.A.sum / resultado5.A.count;
const B = resultado5.B.sum / resultado5.B.count;
console.log("Ejercicio 5: ", { A, B });

// Ejercicio 6
const dni = "20385978";

const resultado6 = [...dni].reduce((acc, curr) => (acc += Number(curr)), 0);
console.log("Ejercicio 6: " + resultado6);

// Ejercicio 7
const texto =
  "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

const resultado7 = [...texto].reduce(
  (acc, curr) => {
    curr === " "
      ? (acc.cantidadEspacios += 1)
      : (acc.cantidadPalabras = texto.split(" ").length);
    return acc;
  },
  { cantidadEspacios: 0, cantidadPalabras: 0 }
);
console.log("Ejercicio 7: ", resultado7);
