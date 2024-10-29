"use strict"
console.clear()


/* Consegna:

Scrivi un programma che stampi i numeri da 1 a 100,
ma per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi Buzz.
Per i numeri che sono sia multipli di 3 che di 5 stampi FizzBuzz. */

/* obiettivo consegna
far stampare un range di numeri da 1 a 100 ma:
i numeri multipli di 3 con la parola Fizz
i numeri multipli di 5 con la parola Buzz
e i numeri che siano sia multipli di 3 e di 5 con la parola FizzBuzz

dati da raccogliere:
multipli di 3
multipli di 5
multipli di entrambi

dati da definire:
 - parola: Fizz
 - Parola: Buzz
 - Parola: FizzBuzz
 - conteggio massimo del contatore
*/

/*
Ragionamento:
- se numero è % di 3 e % di 5 allora stampa FizzBuzz (applicare prima la più stringente)
altrimenti (else if)
- se numero è % di 3 allora stampa Fizz
altrimenti (else if)
- se numero è % di 5 allora stampa Buzz
 altrimenti (else)
- stampa 

*/

let fizz = "Fizz"; // parola per multipli di 3
let buzz = "Buzz"; // parola per multipli di 5
let fizzbuzz = "FizzBuzz"; // parola per multipli di 3 e 5
let maxCount = 100; // conteggio massimo del contatore


// ciclo di for

for (let i = 1; i <= maxCount; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(fizzbuzz); // multipli di 3 e 5
    } else if (i % 3 === 0) {
        console.log(fizz); // multipli di 3
    } else if (i % 5 === 0) {
        console.log(buzz); // multipli di 5
    } else {
        console.log(i); // per tutti gli altri numeri
    }
}
