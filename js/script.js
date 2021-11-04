const myName = prompt('Inserisci il tuo nome')
const mySurname = prompt('Inserisci il tuo cognome');
const myColor = prompt('Inserisci il tuo colore preferito');
let password;

console.log(myName);
console.log(mySurname);
console.log(myColor);

password = myName + mySurname + myColor + '21'

console.log(password);

document.writeln(password);