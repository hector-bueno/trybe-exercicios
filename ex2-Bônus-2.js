let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let position = Infinity;

for (let index = numbers.length; index > 0; index -= 1) {
    for (let secondIndex = index; secondIndex >= 0; secondIndex -= 1) {
        if (numbers[index] > numbers[secondIndex]) {
            let position = numbers[index];
            numbers[index] = numbers[secondIndex];
            numbers[secondIndex] = position;
        }
    }
}

console.log(numbers);
