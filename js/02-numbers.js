/*
NUMBERS:
normalus:
    - sveikieji
    - desimtainiai
nenormalus:
    - NaN (not-a-number)
    - Infinity; - 

    Operatoriai:
    ++
    --
    += saves paties padidinimas is const
    -=
    %=
    *=

*/

const sveikasis = 5;
const desimtainis = 3.14;
const neSkaicius = NaN;
const begalybe = Infinity;


console.log(7 + 5);
console.log(7 - 5);
console.log(7 * 5);
console.log(7 / 5);
console.log('-----------------------');

console.log(7 + '5');
console.log(7 - '5');
console.log(7 * '5');
console.log(7 / '5');
console.log('-------------------');

console.log('7' + 5);
console.log('7' - 5);
console.log('7' * 5);
console.log('7' / 5);
console.log('-------------------');

console.log('7' + '5');
console.log('7' - '5');
console.log('7' * '5');
console.log('7' / '5');
console.log('-------------------');

console.log('7' + 'a');
console.log('7' - 'a');
console.log('7' * 'a');
console.log('7' / 'a');
console.log('-------------------');

console.log('----su boolean------');
console.log(7 + true);
console.log(7 - true);
console.log(7 * true);
console.log(7 / true);
console.log('-------------------');

console.log('7' + false);
console.log('7' - false);
console.log('7' * false);
console.log('7' / false);
console.log('-------------------');

console.log(false + '5');
console.log(false - '5');
console.log(false * '5');
console.log(false / '5');
console.log('-------------------');

console.log(2 ** 4);
console.log(13 % 5);


console.log('-------------------');

let pinigineAfter = 0


console.log('Pinigine: ', pinigineAfter++);
console.log('Pinigine: ', pinigineAfter++);
console.log('Pinigine: ', pinigineAfter++);

console.log('-------------------');

let pinigineBefore = 0


console.log('Pinigine: ', ++pinigineBefore);
console.log('Pinigine: ', ++pinigineBefore);
console.log('Pinigine: ', ++pinigineBefore);
console.log('-------------------');

let skolaAfter = 0


console.log('Pinigine: ', skolaAfter--);
console.log('Pinigine: ', skolaAfter--);
console.log('Pinigine: ', skolaAfter--);

console.log('-------------------');

let skalaBefore = 0


console.log('Pinigine: ', --skalaBefore);
console.log('Pinigine: ', --skalaBefore);
console.log('Pinigine: ', --skalaBefore);

console.log('-------------------');

let b = 3
console.log('B: ', b);
b = b + 3;

console.log('B: ', b);
b++;
b++;
console.log('B: ', b);
b += 3
console.log('B: ', b);
console.log('-------------------');

let c  = 16 ;
const d = 2;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);
c /= d;
console.log(c);