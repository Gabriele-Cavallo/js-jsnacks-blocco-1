// - Chiedere all'utente 5 numeri. Inserire i numeri nell'array ma senza creare duplicati (inserire il numero nell'array solo se non è già presente).

// 1 - Creo l'array di numeri
const numbers = [];
console.log('numbers-array' , numbers);
// 2 - Chiedo all'utente 5 numeri
for (let i = 0; i < 5; i++) {
    let userNumber = parseInt(prompt('Dimmi un numero'));
    console.log('user-number' , userNumber);
    // 3 - Per ogni numeri se non è presente nell'arrey lo aggiungo
    if (!numbers.includes(userNumber)){
        numbers.push(userNumber);
    }
}