/*
Strings

kabute:
 - viengubos
 - dvigubas
 - backtick`as(`)
 \" - kai reikia praleisti kabutes tokio pacio tipo kabutese

 Teksto simboliu kiekis: .length

*/

const vardas = 'Petras';
console.log(vardas);

const lastName = "Petraitis";
console.log(lastName);

const clientName = 'Maryte';
const clientAge = 87;
// Client Maryte is 87 years old.
const clientSentence = 'Client ' + clientName + ' is ' + clientAge + ' years old.';
console.log(clientSentence);

const backTickClient = `Client ${clientName} is ${clientAge} years old.`;
console.log(backTickClient);

const n1 = 7;
const n2 = 5;
// 7 + 5 = 12
const ats = `${n1} + ${n2} = ${n1 + n2}`;
console.log(ats);

const tekstas = 'anbsbhhs';
const abscDydis =tekstas.length;
console.log(`Abeceles "${tekstas}" dydis yra ${abscDydis} simboliu.`);
