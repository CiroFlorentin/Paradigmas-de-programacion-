//??? PRACTICA RANDOM
// /** Ejercicio A: Dada un lista de números separar por un lado los pares y por el otros los impares. */
// const listNums = [
//     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
//   ];

//   const sepNum = listNums.reduce(
//     (acc, curr) => {
//       !(curr % 2) ? acc.pares.push(curr) : acc.inpares.push(curr);
//       return acc;
//     },
//     { pares: [], inpares: [] }
//   );
//   console.log(sepNum);

//   /** Ejercicio B: Contar la cantidad discriminado por caracteres que tiene el texto ... */

//   const texto =
//     "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

//   const contador = [...texto].reduce((acc, curr) => {
//     acc[curr] = (acc[curr] || 0) + 1;
//     return acc;
//   }, {});
//   console.log(contador);

// //! Práctica 1

// const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];

// // Ejercicio 1
// const resultado1 = lista.some((e) => e > 8);
// console.log("Ejercicio 1: " + resultado1);

// // Ejercicio 2
// const resultado2 = lista.every((e) => e > 0);
// console.log("Ejercicio 2: " + resultado2);

// // Ejercicio 3
// const resultado3 = lista.filter((e) => e % 2 === 0);
// console.log("Ejercicio 3: " + resultado3);

// // Ejercicio 4
// const resultado4 = lista.map((e) => e * e);
// console.log("Ejercicio 4: " + resultado4);

// // Ejercicio 5
// const resultado5 = lista.filter((e) => e > 3);
// console.log("Ejercicio 5: " + resultado5);
// const resultado5Pares = resultado5.every((e) => e % 2 === 0);
// console.log("Ejercicio 5: " + resultado5Pares);

// // Ejercicio 6
// const resultado6 = lista
//   .filter((e) => e > 6)
//   .map((e) => (e % 2 === 0 ? "par" : "impar")); // ? : condicional de javascript para devolver un valor segun una condicion true/false
// console.log("Ejercicio 6: " + resultado6);

// // Ejercicio 7
// const arr = [3, 6, 6, 7, 12, 10, 4, 13, 1];
// const mayoresA10 = arr.filter((e) => e >= 10).filter((e) => e % 2 === 0);
// console.log("Ejercicio 7: " + mayoresA10);

// // Ejercicio 8
// const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];
// const copia = Numbers.map((e) => (e <= 10 ? e : "'X'"));
// console.log("Ejercicio 8: " + copia);
// //

// //! Práctica 2
// const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];

// // Ejercicio 1
// const resultado1 = nums.reduce((acc, curr) => acc + curr);
// console.log("Ejercicio 1: " + resultado1);

// // Ejercicio 2
// const resultado2 = nums.reduce(
//   (acc, curr) => (curr % 2 ? acc + curr * curr : acc),
//   0
// );
// console.log("Ejercicio 2: " + resultado2);

// // Ejercicio 3
// const frases = [
//   "La tecnología cambia el mundo",
//   "Programar es crear soluciones",
//   "Aprender haciendo es aprender mejor",
//   "JavaScript es flexible y poderoso",
// ];

// const resultado3 = frases.reduce((acc, curr) =>
//   acc.length < curr.length ? curr : acc
// );
// console.log("Ejercicio 3: " + resultado3);

// // Ejercicio 4

// const numsMaxMin = nums.reduce(
//   (acc, curr) => {
//     curr > acc.min ? (acc.max = curr) : (acc.min = curr);
//     return acc;
//   },
//   { min: Infinity, max: -Infinity }
// );

// console.log("Ejercicio 4: ", numsMaxMin);

// // Ejercicio 5
// const listaNotas = [
//   { c: "A", n: 8 },
//   { c: "B", n: 6 },
//   { c: "A", n: 10 },
// ];

// const resultado5 = listaNotas.reduce(
//   (acc, curr) => {
//     curr.c === "A"
//       ? ((acc.A.sum += curr.n), acc.A.count++)
//       : ((acc.B.sum += curr.n), acc.B.count++);
//     acc.A.avg = acc.A.sum / acc.A.count;
//     acc.B.avg = acc.B.sum / acc.B.count;
//     return acc;
//   },
//   { A: { sum: 0, count: 0, avg: 0 }, B: { sum: 0, count: 0, avg: 0 } }
// );
// console.log("Ejercicio 5: ", resultado5.A.avg, resultado5.B.avg);

// // Ejercicio 6
// const dni = "20385978";

// const resultado6 = [...dni].reduce((acc, curr) => (acc += Number(curr)), 0);
// console.log("Ejercicio 6: " + resultado6);

// // Ejercicio 7
// const texto =
//   "En la educación, el docente propone un proyecto breve: con tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

// const resultado7 = [...texto].reduce(
//   (acc, curr) => {
//     curr === " "
//       ? (acc.cantidadEspacios += 1)
//       : (acc.cantidadPalabras = texto.split(" ").length);
//     acc.total = acc.cantidadEspacios + acc.cantidadPalabras;
//     return acc;
//   },
//   { cantidadEspacios: 0, cantidadPalabras: 0, total: 0 }
// );
// console.log("Ejercicio 7: ", resultado7);
