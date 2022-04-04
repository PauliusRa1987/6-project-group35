const pirmas = 7;
const antras = 5;
//iprasta funkcija
function suma(a, b) {
    return a+b;
}

const r1 = suma( 88, 22);
console.log(r1);
// const priskirta anonimine funkcija
const atimtis = function (a, b){
    return a-b;
}
const r2 = atimtis( pirmas, antras);
console.log(r2);

// arrow (rodykline) funkcija
const dalyba =  (a, b) => {
    return a/b;
}
const r3 = dalyba( pirmas, antras);
console.log(r3);

// arrow (rodykline) funkcija
// jei logikos bloke yra tik viena procedura, tai galime narasyti {} ir return
const daugyba =  (a, b) =>a*b;

const r4 = daugyba( pirmas, antras);
console.log(r4);

// arrow (rodykline) funkcija
// jei parametru bloke yra tik vienas parametras, tai galime nerasyti ()
const kvadratu =  a =>a*a;

const r5 = kvadratu( pirmas);
console.log(r5);