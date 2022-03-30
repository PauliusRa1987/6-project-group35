/*
ARRAY
-POZICIJOS PRASIDEDA NULIU
-POZICIJOS TIK SVEIKIEJI SKAICIAI
*/

const pazymiai = [10, 2, 8, 4, 6];
console.log('Pazymiai: ', pazymiai);

//pazymiu vidurkis
//pazymiu kiekis
//koks pirmas
console.log('Pirmas: ', pazymiai[0]);
console.log('Trecias: ', pazymiai[2]);
console.log('Trecias: ', pazymiai[1.2]);
//koks paskutinis
const pazymiuKiekis= pazymiai.length;
const paskutinioPozicija = pazymiuKiekis - 1;
console.log('Paskutinis:',  pazymiai[paskutinioPozicija]);
console.log('Paskutinis:',  pazymiai[pazymiai.length - 1]);

console.log('-----------------');
const studenta = ['Petras', 'Vilius', 'Klaidas', 'Ona', 'Maryte'];
console.log(studenta);

let index = 0;
console.log(`Cia yra: ${studenta[index++]}.`);
console.log(`Cia yra: ${studenta[index++]}.`);
console.log(`Cia yra: ${studenta[index++]}.`);
console.log(`Cia yra: ${studenta[index++]}.`);
console.log(`Cia yra: ${studenta[index++]}.`);
console.log(`Cia yra: ${studenta[index++]}.`);

