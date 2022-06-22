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
console.log('AI Number is' + ' ' + AINumber);

const userOddOrEvenChoice = prompt('choose Odd or Even');
console.log('User Choice is' + ' ' + userOddOrEvenChoice);

const userNumberChioce = parseInt(prompt('choose a number between 1 and 5'));
console.log('User Number is' + ' ' + userNumberChioce);

let sum = AINumber + userNumberChioce;
console.log('SUM OF YOUR NUMBER AND AI NUMBER' + ' ' + sum);

function isEven(totalNumber){
    let result = 'Even Number';
    if (totalNumber % 2 !== 0){
        return result = 'Odd Number';
    }
    return result
}

const checkOddOrEven = isEven(sum);
console.log(checkOddOrEven);

if (((userOddOrEvenChoice === 'even') && (sum % 2 == 0)) || ((userOddOrEvenChoice === 'odd') && (sum % 2 !== 0))) {
    alert('YOU WIN');
   
} else {
    alert('YOU LOSE');
}


