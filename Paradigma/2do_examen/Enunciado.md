# Depósitos de bicicletas

Nos piden construir un modelo cuyo objetivo es informatizar parte de la gestión de los depósitos de bicicletas en Ciudad Gótica.

## 1. Bicis con sus accesorios

De cada bicicleta se informa: el rodado (p.ej. 26), el largo en centímetros (p.ej. 120 para una bici de 1.20 metros de largo), la marca (p.ej. "Legnano"), y los accesorios. Estos últimos (los accesorios) aportan distintas características a la bici en la que se instalan.

A partir de estos datos, debe poder obtenerse la siguiente información referida a una bici:

    + altura: se calcula como rodado * 2.5 + 15.
    + velocidad de crucero: si la bici tiene más de 120 cm, entonces se calcula como rodado + 6, si no, como rodado + 2.
    + carga: es la suma de la carga que puede llevar cada accesorio.
    + peso: es la suma de rodado / 2 más el peso total de los accesorios.
    + tieneLuz: es verdadero si al menos uno de los accesorios es luminoso.

Se deben contemplar los siguientes accesorios

    1- Farolito: pesa 0.5 kg, no lleva carga (o sea, lleva 0 kg de carga), es luminoso.
    2- Canasto: de cada canasto se informa el volumen. El peso se calcula como volumen / 10, la carga como volumen * 2. No es luminoso.
    3- Morral de bici: para cada uno se informa el largo (en centímetros), y si tiene ojo de gato o no. El peso es fijo, 1.2 kg. La carga se calcula como largo / 3. Es luminoso si tiene ojo de gato.

Agregar un método para consultar la cantidad de accesorios livianos de una bici, o sea, la cantidad de accesorios cuyo peso es menor a 1 kg.

### Van tres ejemplos de bicis:

    1. Una bici rodado 28, de 150 cm de largo, marca Olmo, como único accesorio tiene un farolito.
    Para esta bici tenemos: altura 85, velocidad de crucero 34, carga 0, peso 14.5 (14 de la bici + 0.5 del farolito), tiene luz (por el farolito), tiene 1 accesorio liviano.

    2. Una bici rodado 26, largo 110 cm, marca "Legnano", accesorios: un farolito, un canasto con volunen 8, un morral de largo 21 con ojo de gato.
    Para esta bici tenemos: altura 80, velocidad de crucero 28, peso 15.5 (13 de la bici, 0.5 del farolito, 0.8 del canasto, 1.2 del morral), carga 23 (16 del canasto más 7 del morral), tiene luz (porque el morral tiene ojo de gato), 2 accesorios livianos (el farolito y el canasto).

    3. Una bici rodado 20, largo 90 cm, marca "Legnano", como único accesorio un morral de largo 6 y sin ojo de gato.
    Para esta bici tenemos: altura 65, velocidad de crucero 22, carga 2, peso 11.2 (10 de la bici + 1.2 del morral), no tiene luz, no tiene ningún accesorio liviano.
