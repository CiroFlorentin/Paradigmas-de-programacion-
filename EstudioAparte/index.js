let juegos = ["FIFA", "Mario Kart", "Zelda", "Metroid", "Halo"];

juegos.forEach((elemento, indice) => {
  let arr = juegos.length;
  console.log({ elemento, indice, arr });
});

let nuevaLongitud = juegos.push("Final Fantasy");
console.log({ nuevaLongitud, juegos });

let nuevaLongitud2 = juegos.push("Sonic");
console.log({ nuevaLongitud2, juegos });
