// Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .

let myArray = [];
for (let index = 0; index <= 24; index += 1) {
    myArray[index] = index + 1;
    // myArray.push(index+1);
}

for (let index = 0; index < myArray.length; index++) {
    console.log(myArray[index] / 2);
}
