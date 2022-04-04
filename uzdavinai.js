// ciklo for panaudojimas
// 1 uzdavinys
function sumaIntervale(nuo, iki) {
    let suma = 0;
    for (let i = nuo;  i <= iki; i++) {
        suma += i;
    }
    return suma;
}

console.log(sumaIntervale(0, 0), `-->`, 0);
console.log(sumaIntervale(0, 4), `-->`, 10);
console.log(sumaIntervale(0, 100), `-->`, 5050);
console.log(sumaIntervale(574, 815), `-->`, 'didelis teigiamas');
console.log(sumaIntervale(-50, 50), `-->`, 0);
console.log(sumaIntervale(-70, 30), `-->`, -2020);

//revers string
//2 uzdavinys

function reversString(text) {
    const a = text.length - 1;
    let reversResult = '';
    for (let i = 0; i < text.length; i++) {
        const posicion = a - i;
        const letter = text[posicion];
        reversResult += letter;
        
    }
    return reversResult;
}
console.log(reversString('abcklubas'), '-->', 'cba');


// kitas variantas
function reversString2 (text) {
    let reversResult2 = '';
    for (let i = 0; i < text.length; i++) {
        const letter = text[i];
        reversResult2 = letter + reversResult2;        
    }
    return reversResult2;
}
console.log(reversString2('abcklubas'), '-->', 'abcklubas');

// dar vienas variantas einame nuo 2 link 0
function reversString3 (text){
    let reversResult3 = '';
    for (let i = text.length - 1; i >= 0; i--) {
        reversResult3 += text[i];
        
    }
    return reversResult3
}
console.log(reversString3('sula'), '-->', 'alus');

// 3 uzdavinys. liekan
function liekana(nuo, iki, daliklis) {
    let count = 0;
    for (let i = nuo; i <= iki; i++) {
        if (i % daliklis === 0) {
            count ++;
        }
        
    }
    return `Skaiciu intervale tarp ${nuo} ir ${iki}, besidalijanciu be liekanos is ${daliklis} yra ${count} vienetai`;
}

console.log(liekana(0, 11, 3));
console.log(liekana(0, 11, 5));
console.log(liekana(0, 11, 7));
console.log(liekana(8, 31, 3));
console.log(liekana(8, 31, 5));
console.log(liekana(8, 31, 7));
console.log(liekana(-18, 18, 3));
console.log(liekana(-18, 18, 5));
console.log(liekana(-18, 18, 7));

