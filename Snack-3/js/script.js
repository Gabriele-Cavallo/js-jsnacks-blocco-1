// - Crea un array vuoto.
//   Chiedi per 6 volte all’utente di inserire un numero,
//   se è dispari inseriscilo nell’array.

// 1 - Creo un array vuoto
const numbers = [];
console.log('array' , numbers);
// 2 - Chiedo all'utente 6 numeri
// -Se l'utente inserisce un numero dispari lo inserisco nell'array    
for (let i = 0; i < 6; i++) {
    let userNumber = parseInt(prompt('Dimmi un numero'));
    console.log('user-number' , userNumber);
    if(userNumber % 2 !== 0){
        numbers.push(userNumber);
    }
}     