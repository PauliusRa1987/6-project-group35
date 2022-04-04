/// Namu darbu funkciju uzdaviniai
//Daygyba
/*
const daugyba = (a, b) => a * b;
console.log(daugyba(7, 5));
console.log(daugyba(7, NaN));
*/

function daugyba(a, b) {
    if (typeof a !== 'number') {
        return `ERROR: pirmas parametras turi buti skaicius`;   
    }
    if ('' + a === 'NaN') {
        return `ERROR: pirmas parametras turi buti tikras skaicius`; 
    }
    if (isNaN(b)) {
        return `ERROR: Antras parametras turi buti tikras skaicius`;
    }
    if (typeof b !== 'number') {
        return `ERROR: Antras parametras turi buti skaicius`;
    }
    return a*b;
};
console.log(daugyba(7, 5));
console.log(daugyba(NaN, 5));
console.log(daugyba(7, []));
console.log(daugyba('7', 5));
console.log(daugyba(7, NaN));