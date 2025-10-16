//? Importamos las clases
const { Luisa } = require('./Jugador');
const { Floki, Mario } = require('./Personajes');
const { Ballesta, Jabalina } = require('./Armas');
const { Castillo, Aurora, Tipa } = require('./Elementos');

//? Instanciamos los objetos
const ballesta = new Ballesta();
const jabalina = new Jabalina();

//? Instanciamos los elementos
const castillo = new Castillo();
const aurora = new Aurora();
const tipa = new Tipa();

//? Instanciamos los personajes
const floki = new Floki(ballesta);
const mario = new Mario();

//? Instanciamos la jugadora
const luisa = new Luisa();

//! Test 1 - Floki encuentra el castillo
luisa.personajeActivo = floki;
console.log('defensa del castillo antes de encontrar: ' + castillo.defense);
luisa.aparece(castillo);
console.log('defensa del castillo despues de encontrar: ' + castillo.defense);
console.log('flechas de la ballesta: ' + ballesta.arrows);

//! Test 2 - Mario encuentra la tipa
luisa.personajeActivo = mario;
console.log(
  'valor recolectado por mario antes de encontrar: ' + mario.valueCollected
);
console.log('mario esta feliz: ' + mario.isHappy());
luisa.aparece(tipa);
console.log(
  'valor recolectado por mario despues de encontrar: ' + mario.valueCollected
);
console.log('altura de la tipa: ' + tipa.height);
console.log('mario esta feliz: ' + mario.isHappy());

//! Test 3 - Mario encuentra el castillo
luisa.aparece(castillo);
console.log(
  'valor recolectado por mario despues de encontrar el castillo: ' +
    mario.valueCollected
);
console.log('defensa del castillo: ' + castillo.defense);
console.log('mario esta feliz: ' + mario.isHappy());

//! Test 4 - Floki encuentra la aurora con la jabalina
floki.arma = jabalina;
luisa.personajeActivo = floki;
console.log('aurora esta viva: ' + aurora.lives);
luisa.aparece(aurora);
console.log('aurora esta viva: ' + aurora.lives);
console.log('jabalina esta cargada: ' + jabalina.isLoaded());
