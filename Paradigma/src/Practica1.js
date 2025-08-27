

//* Practica 1
const lista = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10, 1, 2, 3, 2, 9,100, 8, 99]; 
//!Ejercicio 1
const respuesta1 = lista.some(e => e > 8);
console.log("Respuesta 1: " + respuesta1);

//!Ejercicio 2
const respuesta2 = lista.every(e => e > 0);
console.log("Respuesta 2: " + respuesta2);

//!Ejercicio 3
const respuesta3 = lista.filter(e => e%2 === 0);
console.log("Respuesta 3: " + respuesta3);

//!Ejercicio 4
const respuesta4 = lista.map(e => e*e);
console.log("Respuesta 4: " + respuesta4);

//!Ejercicio 5
const arrMayores3 = lista.filter(e => e > 3);
console.log("Array mayores a 3: " + arrMayores3);
const respuesta5 = arrMayores3.every(e => e%2 === 0);
console.log("Respuesta 5: " + respuesta5);

//!Ejercicio 6
const arrMenores6 = lista.filter(e => e < 6);
console.log("Array menores a 6: " + arrMenores6);
const respuesta6 = arrMenores6.map(e => e%2 === 0 ? "par" : "impar"); //? operador ternario "? valorSiVerdadero : valorSiFalso"
console.log("Respuesta 6: " + respuesta6);

//!Ejercicio 7
const arr7 = [3,6,6,7,12,10,4,13,1]
const mayoresIguales10 = arr7.filter(e => e >= 10)
console.log("Respuesta 7: " + mayoresIguales10);
const respuesta7 = mayoresIguales10.filter(e => e%2 === 0);
console.log("Respuesta 7: " + respuesta7);

//!Ejercicio 8
const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1];

const copia = Numbers.map(e => e <= 10 ? e : "X");
console.log(copia);

//* ejercicios resueltos, abrazo