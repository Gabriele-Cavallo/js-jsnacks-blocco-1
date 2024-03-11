// - Calcola la somma e la media dei primi 10 numeri.

// 1-Metodo senza array
// 1 - Calcolo la somma dei primi 10 numeri
    // Faccio la media dei primi 10 numeri
// sum = 0;
// let avarage = 10;
// for (let i = 1; i <= avarage; i++) {
//     let number = i;
//     sum += number;
// }
// console.log('sum' , sum);
// let avarageNumber = sum / avarage ;
// console.log('avarage-number' , avarageNumber);

// 2-Metodo con array
const avarage = [];
sum = 0;
for (let i = 1; i <= 10; i++) {
    let number = i;
    avarage.push(number);
    sum += number;
}
console.log('sum' , sum);
let avarageNumber = sum / avarage.length;
console.log('avarage' , avarageNumber);
console.log('avarage' , avarage);