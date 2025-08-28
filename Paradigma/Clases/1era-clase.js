/*let valor = 4;

function Suma(a,b){
    return a + b + valor;
    
};

const s = Suma(2,5);

console.log("Valor de la suma: " + s);

*/

//Funcion anonima/lambda/flecha

//const resultado = (a,b) => {return a + b};
//const resultado = (a,b) => a + b;
//console.log(resultado(4,4));
// const m = 1
// const b = 3

// const lineal = (x) => m*x + b;
// console.log(lineal(1))

// const doble = (n)=>n*n;
// console.log(doble(2))

// DOS FORMAS DE HACER UNA FUNCION DOBLE O MAYOR

// const calcular = (n) =>{
//     return (x) => {
//         return n*x;
//     };
// };
// const resultado = calcular(2);
// console.log(resultado(3));

// const calcular= (n) => (x) => n*x;
// const resultado = calcular(2)(3);
// console.log(resultado);

//ejercicio en clases

// const funcionlineal = (fn,x)=> fn(x); //funcion de orden superior..

// const t1 = funcionlineal((n) => n*5,2);

// console.log("funcion testing f(2) = " +t1);

//ESTRUCTURAS - ARRAYS
// - SOME
// - EVERY
// - MAP
// - FILTER
// - REDUCE

const arr = [3, 5, 7, 5, 9];
console.log("array normal " + arr);

const res1 = arr.some((e) => e % 2 === 0); //Necesita una funcion anonima
console.log("array con some " + res1);

const res2 = arr.every((e) => e % 2 == !0); //TRUE/FALSE si todos los elementos cumplen con la condicion
console.log("array con every " + res2);

const res3 = arr.map((e) => e * 2); //devuelve una copia del array aplicando la funcion y modificando la original
console.log("array con map " + res3);

const arr2 = [3, 5, 7, 5, 9, 10, 3, 6, 8, 2];
const res4 = arr2.filter((e) => e % 2 === 0); //devuelve los datos coincidentes
console.log("array con filter " + res4);

const arr3 = [1, 2, 3, 4];

const initValue = 0;

const suma = arr3.reduce((acc, curr) => acc + curr, initValue);

console.log("array con reduce " + suma);
