/* CIKLAI!!!!
LOOP, FO, WHILW, FOR-IN, FOREACH
*/
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