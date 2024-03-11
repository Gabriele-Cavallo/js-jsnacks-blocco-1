// - Il software deve chiedere per 5 volte all’utente di inserire un numero.
//   Il programma stampa la somma di tutti i numeri inseriti.

// 1 - Chiedo all'utente 5 numeri
//      2 - Sommo i numeri inseriti dall'utente
sum = 0;
for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Dimmi un numero'));
    console.log('user-number' , userNumber);
    sum += userNumber
}
// 3 - Stampo in console il risultato
console.log('sum' , sum);
