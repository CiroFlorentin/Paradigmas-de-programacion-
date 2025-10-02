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

// !!! PRACTICA PRIMER PARCIAL

//* EJERCICIO 1.
// const productos = [
//   {
//     id: 1,
//     nombre: "Café",
//     precio: 800,
//     categoria_id: 2,
//   },
//   {
//     id: 2,
//     nombre: "Notebook",
//     precio: 350000,
//     categoria_id: 1,
//   },
//   {
//     id: 3,
//     nombre: "Auriculares",
//     precio: 15000,
//     categoria_id: 1,
//   },
// ];

// const categorias = [
//   {
//     id: 1,
//     descripcion: "Electrónica",
//     esImportada: true,
//   },
//   {
//     id: 2,
//     descripcion: "Alimentos",
//     esImportada: false,
//   },
// ];

// // 1)
// const bucarProducto = (nombre) => {
//   return productos.find((p) => p.nombre === nombre);
// };

// console.log(bucarProducto("Café"));

// // 2)
// const mayorQueCero = productos.every((p) => p.precio > 0);
// console.log(mayorQueCero);

// // 3)
// const productoMasCaro = productos.reduce((acc, p) =>
//   acc.precio > p.precio ? acc : p
// );
// console.log(productoMasCaro);

// // 4)
// const productoYCategoria = productos.map((p) => {
//   return {
//     nombre: p.nombre,
//     precio: p.precio,
//     categoria: categorias.find((c) => c.id === p.categoria_id),
//   };
// });
// console.log(productoYCategoria);

// // 5)
// const precioPromedio = () => {
//   const largo = productos.length;
//   const suma = productos.reduce((acc, p) => acc + p.precio, 0);
//   return Math.round(suma / largo);
// };
// console.log("Precio promedio: " + precioPromedio());

//* EJERCICIO 2
// const libros = [
//   {
//     idLibro: 101,
//     titulo: "La Isla de Hierro",
//     genero: "Aventura",
//     paginas: 320,
//   },
//   {
//     idLibro: 102,
//     titulo: "Algoritmos Cotidianos",
//     genero: "Divulgacion",
//     paginas: 210,
//   },
//   { idLibro: 103, titulo: "Nudos y Redes", genero: "Tecnologia", paginas: 180 },
//   {
//     idLibro: 104,
//     titulo: "Historias del Sur",
//     genero: "Ficcion",
//     paginas: 250,
//   },
// ];

// const prestamos = [
//   { libroId: 104, lector: "Sofía", dias: 7, retraso: 0 },
//   { libroId: 101, lector: "Marco", dias: 5, retraso: 2 },
//   { libroId: 103, lector: "Lucía", dias: 10, retraso: 0 },
//   { libroId: 102, lector: "Iván", dias: 3, retraso: 0 },
//   { libroId: 101, lector: "Ana", dias: 4, retraso: 1 },
// ];

// // 1)
// const prestamoRestraso = prestamos.some((p) => p.retraso > 0);
// console.log("Algun prestamo con retraso: " + prestamoRestraso);

// // 2)
// const prestamoRestrasoFiltro = prestamos.filter((p) => p.retraso > 0);
// console.log("Prestamos con retraso: ", prestamoRestrasoFiltro);

// // 3)
// const librosmenos100 = libros.every((l) => l.paginas < 100);
// console.log("Todos los libros poseen menos de 100 páginas: " + librosmenos100);

// // 4)
// const prestamoYlibro = prestamos.map((p) => {
//   return {
//     libroId: p.libroId,
//     lector: p.lector,
//     dias: p.dias,
//     retraso: p.retraso,
//     libro: libros.find((l) => l.idLibro === p.libroId),
//   };
// });
// console.log("Prestamo y libro: ", prestamoYlibro);

// // 5)
// const seleccion = prestamoYlibro.filter(
//   (p) =>
//     p.dias >= 5 &&
//     (p.libro.genero === "Aventura" || p.libro.genero === "Ficcion")
// );
// console.log("Seleccion: ", seleccion);

// // 6)
// const totalPaginas = prestamoYlibro.reduce(
//   (acc, p) => acc + p.libro.paginas,
//   0
// );
// console.log("Total de páginas prestadas: ", totalPaginas);

// // 7)
// const minimoDias = prestamos.reduce(
//   (acc, p) => (acc < p.dias ? acc : p.dias),
//   Infinity
// );
// console.log("Mínimo de días de préstamo registrado: ", minimoDias);

// // 8)
// const ocurrencias = prestamoYlibro.reduce((acc, p) => {
//   acc[p.libro.titulo] = (acc[p.libro.titulo] || 0) + 1;
//   return acc;
// }, {});
// console.log("Ocurrencias de títulos prestados: ", ocurrencias);

// * EJERCICIO 3
const paquetes = [
  { id: 1, nombre: "City Break Madrid", precio: 450000, destino_id: 1 },

  { id: 2, nombre: "Nieve en Bariloche", precio: 380000, destino_id: 2 },

  { id: 3, nombre: "Iguazú Exprés", precio: 220000, destino_id: 3 },
];

const destinos = [
  { id: 1, ciudad: "Madrid", pais: "España", esInternacional: true },

  {
    id: 2,
    ciudad: "San Carlos de Bariloche",
    pais: "Argentina",
    esInternacional: false,
  },

  { id: 3, ciudad: "Puerto Iguazú", pais: "Argentina", esInternacional: false },
];

// 1)
const paqueteYdestino = paquetes.map((p) => {
  return {
    nombre: p.nombre,
    precio: p.precio,
    destino: destinos.find((d) => d.id === p.destino_id),
  };
});
// console.log("Paquete y destino: ", paqueteYdestino);

// 2)

const buscarPaquete = (ciudad, pais, nombre) => {
  return paqueteYdestino.find(
    (p) =>
      p.destino.ciudad == ciudad ||
      p.destino.pais === pais ||
      p.nombre === nombre
  );
};
// console.log(buscarPaquete("Madrid", "España", ""));

//3)
const precioMayor = paqueteYdestino.filter((p) => {
  return p.precio > 400000 && p.destino.esInternacional;
});
// console.log(precioMayor);

// 4)
const barato = paqueteYdestino.some((p) => p.precio < 300000);
// console.log("Algún paquete cuesta menos de $300.000: " + barato);

// 5)
const esInternacional = paqueteYdestino.every((p) => p.destino.esInternacional);
// console.log("Todos los paquetes son internacionales: " + esInternacional);

// 6)
const totalPrecioPaquete = paquetes.reduce((acc, p) => {
  acc += p.precio;

  return acc;
}, 0);
console.log("Total de precio: " + totalPrecioPaquete);

// 7)
const objetoResumen = () => {
  let paquetesInternacionales = paqueteYdestino.filter(
    (p) => p.destino.esInternacional
  );
  let paquetesNacionales = paqueteYdestino.filter(
    (p) => !p.destino.esInternacional
  );
  let totalInternacionales = paquetesInternacionales.reduce(
    (acc, p) => acc + p.precio,
    0
  );
  let totalNacionales = paquetesNacionales.reduce(
    (acc, p) => acc + p.precio,
    0
  );

  return {
    totalPaqute: paquetes.length,
    totalPrecio: totalPrecioPaquete,
    precioPromedio: totalPrecioPaquete / paquetes.length,
    totalInternacionales: paquetesInternacionales.length,
    totalNacionales: paquetesNacionales.length,
    promedioInternacionales: paquetesInternacionales.length
      ? totalInternacionales / paquetesInternacionales.length
      : 0,
    promedioNacionales: paquetesNacionales.length
      ? totalNacionales / paquetesNacionales.length
      : 0,
  };
};
console.log("Objeto resumen: ", objetoResumen());
