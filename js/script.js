// Scrivi un programma che stampi i numeri da 1 a 100,
// ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
// Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz.

// for (var i = 1; i <= 100; i++) {
//     if (i % 15 == 0) {
//         console.log('FizzBuzz');
//     }   else if (i % 3 == 0) {
//         console.log('Fizz');
//     }   else if (i % 5 == 0) {
//         console.log('Buzz');
//     }   else {
//         console.log(i);
//     }
// }

// Inizializzo la var stampa a stringa vuota
var stampa = '';

// Creo un ciclo FOR sull'indice 1<i<=100 che viene stampato con messaggi diversi a seconda che sia multiplo di 15 (cioè di 3 && anche di 5) o sia solo multiplo di 3 o solo di 5. Al verificarsi di ogni condizione aggiorno la var stampa concatenandone i valori
for (var i = 1; i <= 100; i++) {
    if (i % 15 == 0) {
        stampa += ' FizzBuzz';
    }   else if (i % 3 == 0) {
        stampa += ' Fizz';
    }   else if (i % 5 == 0) {
        stampa += ' Buzz';
    }   else {
        stampa += ' ' + i;
    }
    // Mando a capo il testo visualizzato a ogni multiplo di 10
    if (i % 10 == 0) {
        stampa += '<br>';
    }
}

// Stampa a video della stringa concatenata
document.getElementById('stampa').innerHTML = stampa;
