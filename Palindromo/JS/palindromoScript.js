//!################### CONSEGNA ###################

// * Palindroma
// * Chiedere all’utente di inserire una parola.
// * Creare una funzione per capire se la parola inserita è palindroma.

// TODO Consigli del giorno
// TODO Scriviamo sempre in italiano i passaggi che vogliamo fare
// TODO Scriviamo sempre solo un pezzetto di codice alla volta, se funziona allora andiamo avanti.

//?################### ESERCIZIO ###################

//* Creo un prompt per far inserire all'utente una parola
//* Controllo tramite una funzione che l'utente abbia inserito una parola palindroma.
//* - Come faccio?! Non ne ho idea...

// Ragioniamo: una parola palindroma è una parola che può essere letta al contrario quindi la parola scritta normalmente è
// === alla parola scritta al contrario. Per esempio otto è === a otto.
// Quindi se l'utente inserisce userWord otto nel prompt avremo la console che scrive ('La parola è palindroma!').
// Questo valore di userWord però dovrebbe essere confrontato con userWordInverted. E' qui che non ho idea di come fare.
// NON è farina del mio sacco ma ammetto che non mi sarebbe mai venuto in mente. Cercando su google ho scoperto che
// si potrebbe usare la lunghezza della parola che si scrive e dividerla a metà per poi confrontarla
// l'altra metà partendo però dalla fine usando un for.


function isPalindrome (userWord) {
    //prendo la lunghezza della parola
    const userWordLength = userWord.length;
    //ciclo for fino a metà della parola
    for (let i = 0 ; i < userWordLength / 2; i++){
    //ora controlla se la prima e la seconda parte sono le stesse
    //
        if (userWord[i] !== userWord[userWordLength - 1 - i]){
            return 'La parola non è palindroma';
        } else {
            return 'La parola è palindroma';
        }
    }   
}

//prendiamo l'input

const userWord = prompt('inserisci una parola');

//invochaimo la funzione 

isPalindrome ()
console.log (isPalindrome)


