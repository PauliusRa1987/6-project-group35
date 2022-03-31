const petras = [10, 6, 7, 8];
const maryte = [8, 3, 9, 8];
const jonas = [6, 9, 6, 7];
const ona = [9, 10, 1, 8];

function vidurkis(pazymiuSarasas) {
    let pazymiuSuma = 0;
    pazymiuSuma += pazymiuSarasas[0];
    pazymiuSuma += pazymiuSarasas[1];
    pazymiuSuma += pazymiuSarasas[2];
    pazymiuSuma += pazymiuSarasas[3];
    return pazymiuSuma / pazymiuSarasas.length;
}

const petroVidurkis = vidurkis(petras);
console.log('Petras', petroVidurkis);

const maryteidurkis = vidurkis(maryte);
console.log('Maryte', maryteidurkis);

const jonasVidurkis = vidurkis(jonas);
console.log('Jonas', jonasVidurkis);

const onaVidurkis = vidurkis(ona);
console.log('Ona', onaVidurkis);

// Funkcija gauna varda ir turi grazinti sakini
// "Vardo pirma raide yra [V] ir vardas sudarytas is 5 raidziu."
const petroVardas = vardoAnalize('Petras');
console.log(petroVardas);

const maryteVardas = vardoAnalize('Maryte');
console.log(maryteVardas);

const alyzasVardas = vardoAnalize('Alyzas');
console.log(alyzasVardas);

function vardoAnalize(name) {
    return `Vardo '${name}' pirma raide yra ${name[0]} ir vardas sudarytas is ${name.length} raidziu.`;
}
//Funkcija gauna du skaicius ir turi grazinti lygti su sprendimu
//pvz: 2 + 2 = 4

function suma(a, b) {
    
    return  `${a} + ${b} = ${a + b}`;
}

const s2 = suma(2, 3);
console.log(s2);

const s1 = suma(0.1, 0.2);
console.log(s1);

const s3 = suma(-88, -11);
console.log(s3);


/*
desimtainis dvejetainis
0           0
1           1
2           10
3           011
4           100
5           101
6           110
7           111
8           1000

0.5         5*10 pakelta -1    [sveika, desimtaine, laipsnis]

0.0714      7.14* pakelta -2        [7, 14, -2]

*/