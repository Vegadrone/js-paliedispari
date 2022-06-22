//!################### CONSEGNA ###################

// * L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// * Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
// * Sommiamo i due numeri
// * Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
// * Dichiariamo chi ha vinto.

// TODO Consigli del giorno
// TODO Scriviamo sempre in italiano i passaggi che vogliamo fare
// TODO Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//?################### ESERCIZIO ###################


//RandomNumberGenerator
function randomNumberGen(number1, number2){
   return Math.floor(Math.random()* number1 + number2);
}

const AINumber = randomNumberGen(5, 1);
console.log(AINumber);

const userOddOrEvenChoice = prompt('scegli pari o dispari');
const userNumberChioce = parseInt(prompt('scegli un numero da 1 a 5'));

let sum = AINumber + userNumberChioce;

function isEven(totalNumber){
    let result = 'Numero Pari';
    if (totalNumber % 2 !== 0){
        return result = 'Numero Dispari';
    }
    return result
}

const checkOddOrEven = isEven(sum);
console.log(checkOddOrEven);