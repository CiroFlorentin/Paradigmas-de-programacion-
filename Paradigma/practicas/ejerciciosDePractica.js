/** Ejercicio A: Dada un lista de números separar por un lado los pares y por el otros los impares. */
const listNums = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const sepNum = listNums.reduce(
  (acc, curr) => {
    !(curr % 2) ? acc.pares.push(curr) : acc.inpares.push(curr);
    return acc;
  },
  { pares: [], inpares: [] }
);
console.log(sepNum);

/** Ejercicio B: Contar la cantidad discriminado por caracteres que tiene el texto ... */

const texto =
  "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

const contador = [...texto].reduce((acc, curr) => {
  acc[curr] = (acc[curr] || 0) + 1;
  return acc;
}, {});
console.log(contador);
