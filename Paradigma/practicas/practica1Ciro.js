const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9, 100, 8, 99];

// Ejercicio 1
const resultado1 = lista.some((e) => e > 8);
console.log("Ejercicio 1: " + resultado1);

// Ejercicio 2
const resultado2 = lista.every((e) => e > 0);
console.log("Ejercicio 2: " + resultado2);

// Ejercicio 3
const resultado3 = lista.filter((e) => e % 2 === 0);
console.log("Ejercicio 3: " + resultado3);

// Ejercicio 4
const resultado4 = lista.map((e) => e * e);
console.log("Ejercicio 4: " + resultado4);

// Ejercicio 5
const resultado5 = lista.filter((e) => e > 3);
console.log("Ejercicio 5: " + resultado5);
const resultado5Pares = resultado5.every((e) => e % 2 === 0);
console.log("Ejercicio 5: " + resultado5Pares);

// Ejercicio 6
const resultado6 = lista
  .filter((e) => e > 6)
  .map((e) => (e % 2 === 0 ? "par" : "impar")); // ? : condicional de javascript para devolver un valor segun una condicion true/false
console.log("Ejercicio 6: " + resultado6);

// Ejercicio 7
const arr = [3, 6, 6, 7, 12, 10, 4, 13, 1];
const mayoresA10 = arr.filter((e) => e >= 10).filter((e) => e % 2 === 0);
console.log("Ejercicio 7: " + mayoresA10);

// Ejercicio 8
const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];
const copia = Numbers.map((e) => (e <= 10 ? e : "'X'"));
console.log("Ejercicio 8: " + copia);
