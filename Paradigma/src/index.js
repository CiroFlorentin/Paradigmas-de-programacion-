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

const arr = [3,5,7,5,9];
console.log(arr)

const res1 = arr.some(e => e%2 === 0); //Necesita una funcion anonima
console.log(res1)


const res2 = arr.every(e => e%2 ==! 0) //TRUE/FALSE si todos los elementos cumplen con la condicion 
console.log(res2)

const res3 = arr.map(e => e%2 ==! 0) //devuelve la copia del array en booleano  
console.log(res3)

const arr2 = [3,5,7,5,9,10,3,6,8,2];
const res4 = arr2.filter(e => e%2 === 0) //devuelve los datos coincidentes 
console.log(res4)

const res5 = arr.reduce(e => e%2 ==! 0) 
console.log(res5)