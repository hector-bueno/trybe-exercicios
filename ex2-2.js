// Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let acumulador = 0;

for (let index = 0; index < numbers.length; index += 1) {
    acumulador = acumulador + numbers[index];
}

console.log(acumulador);
