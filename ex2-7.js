// Utilizando for , descubra qual o menor valor contido no array e imprima-o;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = Infinity;

for (let index = 0; index < numbers.length; index += 1) {
    if (menor > numbers[index]) {
        menor = numbers[index];
    }
}

console.log(menor);