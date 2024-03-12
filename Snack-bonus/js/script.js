// BONUS:
// - Dato un array contenente 10 numeri, stampare in console il numero più grande.

// 1 - Creo un array di 10 numeri
// const numbers = [];
// for (let i = 0; i < 10; i++) {
//     let numb = Math.floor((Math.random() * 100) + 1);
//     numbers.push(numb);
//     console.log('random-number' , numb);
// }
// console.log('array' , numbers);
// // 2 - Controllo i numeri raccolti
// //       - Stampo in console il più grande
// let biggerNumber = Math.max.apply(null, numbers);
// console.log('bigger-number' , biggerNumber);

// 2-Metodo

const numbers = [];
for (let i = 0; i < 10; i++) {
    let numb = Math.floor((Math.random() * 100) + 1);
    numbers.push(numb);
    console.log('random-number' , numb);
}
let biggestNumber = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    const thisNumber = numbers[i];
    if (thisNumber > biggestNumber){
        biggestNumber = thisNumber;
    }
}
console.log('biggest-number' , biggestNumber);