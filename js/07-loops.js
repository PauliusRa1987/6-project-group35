/* CIKLAI!!!!
LOOP, FO, WHILW, FOR-IN, FOREACH
object
*/

//   FOR
const pazymiai = [7, 8, 9, 30, 15];
let suma = 0;
for (let i = 0; i < pazymiai.length; i++) {
    const pazimys = pazymiai [i];
    suma += pazimys;
      

    console.log(`${i +1 } pazymys ${pazimys} [${suma}]`);
}
console.log('Galutine suma:', suma);
const vidurkis = suma / pazymiai.length;
console.log('Vidurkis:', vidurkis);

//while
let sumaWhile = 0;
let i2 = 0;
while (i2 < pazymiai.length) {
    const pazimys = pazymiai [i2];
    sumaWhile += pazimys;
    i2++
    console.log(`${i2} pazymys ${pazimys} [${suma}]`);
}

//for-of
let sumaForOf = 0;
let i3 = 0;
for (const pazimys of pazymiai) {
    sumaForOf += pazimys;
    console.log(`${i3++} pazymys ${pazimys} [${sumaForOf}]`);
}

// foreach

let sumaForeach = 0;
pazymiai.forEach((pazimys, i4) => {
    sumaForeach += pazimys;
    console.log(`${i4} pazymys ${pazimys} [${sumaForeach}]`);
});
