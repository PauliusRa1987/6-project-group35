/* 
IF

Sablonai:
- if () {}
- if () {} else {}
- if () {} else if {} else {}

Palyginimo operatoriai:
- visi <,  >, <=, >=, ==, !=, ===, !== 
- naudotini <,  >, <=, >=, ===, !== 
-nenaudoti ==, !=
*/


const a = 7;
const b = 5;

if (a > b) {
    console.log('A yra daugiau uz B');
}else {
    console.log('A nera daugiau uz B');
}

const day = 0;

if (day === 1) { 
    console.log('pirmadienis');
}else if(day === 2){
    console.log('antradienis');
}else if(day === 3){
    console.log('treciadienis');
}else if(day === 4){
    console.log('ketvirtadienis');
}else if(day === 5){
    console.log('penktadienis');
 } else if(day === 6){
        console.log('sestadienis');
} else if(day === 7){
        console.log('sekmadienis');
}else {
    console.log('tokios dienos nera');
}

console.log('-------------------');
const akiuSpalva = 'raudona';
if (akiuSpalva === 'zalia') {
    console.log('Zaliakiai yra zalciai');
}else {
    if (akiuSpalva === 'melyna') {
        console.log('megsta melynes');
    } else {
        if (akiuSpalva === 'ruda') {
            console.log('rudaakiai yra melagiai');

        }else{console.log('Kazkokia akiu spalva');
}
    }
}     
console.log('-------------------');
const temperatura = 25;
const nuoKadaLaikomeKadSilta = 15;
const arYraKrituliu = true;

if (arYraKrituliu === true){
    if (temperatura >= nuoKadaLaikomeKadSilta) {
        
    }
    console.log('pasiimk sketi');
}else{
    console.log('skecio nereikia');
}