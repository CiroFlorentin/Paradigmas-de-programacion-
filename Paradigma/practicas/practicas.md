## Práctica 1

1. ¿Hay algún número mayor que 8?.
2. ¿Todos los números son mayores que 0?.
3. Buscar solo con los números pares donde se espera que la salida sea: [4, 2, 8, 6, 10].
4. Calcular el cuadrado de cada número. Salida esperada: [16, 1, 4, 16, 25, 64, 49, 36, 81, 100,9].
5. Obtener los > 3 y luego verifica si son todos pares.
6. Elimina del array (sobre una copia) todos los números mayores que 6.Genera un array de textos “par”/“impar” según cada número. Para ello deberás usar un map con un condicional. Salida esperada: ["par","impar","par","par","impar","par","impar","par","impar","par"].
7. Dada la estructura de datos const arr = [3,6,6,7,12,10,4,13,1]; se pide solo utilizar el método filter: Crear una función flecha “anónima” que filtre los números mayores o iguales a 10.Luego pasar esta función al método filter y luego aplicar otro filtro para obtener solo los pares.
8. Dado la estructura de datos: const Numbers = [1, 2, 3, 3, 1, 5, 6, 78, 4, 88, 99, 55, 34, 7, 1]; se pide: Clonar con map (p. ej., const copia = lista.map(x => x)), luego del clon, mostrar los números que son menores o iguales a 10 y remplaza a los > de 10 por una “X”. Una ayudita!, te debería dar como salida : [1, 2, 3, 3, 1, 5, 6, 'X', 4, 'X', 'X', 'X', 'X', 7, 1]

## Práctica 2

Trabajo Práctico N° 2 - Solo utilizando el método reduce

Teniendo en cuenta la siguiente lista: const nums = [4, 1, 2, 4, 5, 8, 7, 6, 9, 10];

1. Calcular la suma de todos los elementos de la lista usando únicamente reduce.
2. Calcular la suma de los cuadrados de los números impares.
3. Teniendo en cuenta la siguiente lista de frases, deberás encontrar la frase más larga.
   const frases = [
   "La tecnología cambia el mundo",
   "Programar es crear soluciones",
   "Aprender haciendo es aprender mejor",
   "JavaScript es flexible y poderoso"
   ];
4. Obtener del array “nums“, el mínimo y máximo de la lista en una sola pasada , retornando un objeto {min,
   max}
   Ayuda: El JavaScript existe un valor numérico especial denominado “Infinity”. Este tipo de numérico
   representa al infinito positivo, pero si le antepones un guión, pasará a ser un infinito negativo “-Infinity”.
   Entonces, podrías tomar como valor inicia lo siguiente {min: Infinity, max: -Infinity}. Esto se hace así porque
   cualquier número será menor que Infinity y cualquier número será mayos a –Infinity.
5. Dada una lista de notas {curso, nota}, devolvé {curso: promedio} sin recorrer dos veces (acumulá sumas y
   conteos en el mismo reduce).Entrada de ejemplo:
   Lista = [
   {c:"A",n:8},
   {c:"B",n:6},
   {c:"A",n:10}
   ]; // Salida esperada: { A:9, B:6 }
6. Dada el número de DNI de una persona, se pide calcular la suma de de sus números.
   dni = '20385978'; Salida esperada: 42
7. Dado el siguiente texto const texto = "En la educación, el docente propone un proyecto breve: con
   tecnología y datos, las estudiantes y los estudiantes analizan un problema real. El docente guía
   la práctica, revisan el código, miden resultados y discuten una evaluación formativa. El proyecto
   se reitera: más datos, más código, mejor aprendizaje. Así, en la comunidad educativa, el docente
   acompaña, los estudiantes participan y la tecnología potencia la práctica y la evaluación";

Se pide contar palabras incluidos los espacios que aparezcan texto.
Ayuda: El método reduce solo trabaja sobre arrays. Si tratara de usar de forma directa text.reduce esto
provocaría un error. Para poder salvar esta situación podemos convertir el String a un array de la siguiente
forma:
[… texto]. Reduce( ------ ) ;
Presta atención en los … aparecen antes de texto [… texto]. Esta expresión hace uso del operador spread
sobre un string y lo convierte a un array de caracteres.

## Práctica Primer Parcial

- Actividades 1:

1. Escriba una función que reciba por parámetro un nombre y retorne el producto que
   coincida exactamente con ese nombre utilizando.

2. Escriba una función que no reciba parámetros y retorne un booleano indicando si todos
   los productos tienen precio mayor a 0

3. Escriba una función que retorne el producto más caro, utilizando
   obligatoriamente el método .reduce().

4. Escriba una función que retorne la información combinada de producto y categoría,
   con la siguiente estructura:

[
{
"nombre": String,
"precio": Number,
"categoria": {
"descripcion": String,
"esImportada": Boolean
}
},
{ ... }
]

5. Escriba una función que retorne el precio promedio de todos los productos

- Actividad 2:

1. ¿Existe ALGÚN préstamo con retraso mayor a 0?
2. ¿Cuales?
3. ¿Todos los libros poseen menos de 100 páginas?
4. Escriba una función que retorne la información combinada de prestamos y libros,
   con la siguiente estructura:

[
{
libroId: 104,
lector: 'Sofía',
dias: 7,
retraso: 0,
libro: { titulo: 'La Isla de Hierro', genero: 'Aventura', paginas: 250 }
},
{....}
]

5. A partir de detalle, obtené un arreglo llamado seleccion con los préstamos de libros
   cuyo género sea 'Aventura' o 'Ficcion' y cuyo préstamo sea de 5 días o más (dias ≥ 5).

6. Calculá el TOTAL de páginas prestadas (contando un libro cada vez que se prestó).

7. Hallá el MÍNIMO de días de préstamo registrado.

8. Obten la cantida de ocurrencias de titulos que fueron prestados.

- ACTIVIDAD 3:

1.       Usar map y find para crear el arreglo combinado: Paquete por destino.

2.       Buscar un paquete por ciudad, país o nombre.

3.       Obtener viajes internacionales cuyo valor sea mayor a 400.000.

4.       Existe algun paquete más barato que 380000.

5.       Verificar si todos los viajes son Internacionales.

6.       Calcular totales y promedios por país.

7.        Calcule y retorne un objetoresumen a partir de paquetesDetallados con la siguiente forma:

{

totalPaquetes: Number,

totalPrecio: Number,

promedioPrecio: Number,

totalInternacionales: Number,

totalNacionales: Number,

promedioInternacionales: Number, // 0 si no hay

promedioNacionales: Number // 0 si no hay

}
