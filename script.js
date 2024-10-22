console.log("Hello Worls!");

const nubmers = [2, 4, 6, 8, 10];
console.log(nubmers)

const nubms = [10, 15, 20, 25, 30];
const sum = nubms.reduce((accumulator, current) => accumulator + current, 0);
console.log(sum);

const languages = ['java', 'python', 'javascript'];
languages.forEach(language => {
    console.log(`${language}: ${language.length}`);
});

const numbers = [3, 1, 4, 1, 5];
const minElement = Math.min(...numbers);
console.log(minElement);

const bots = [12, 15, 8, 5, 19];
bots.sort((a, b) => a - b);
bots.reverse();
console.log(bots);

const delthree = [3, 6, 9, 12, 15];
const sim = delthree
    .filter(num => num % 3 === 0)
    .reduce((accumulator, current) => accumulator + current, 0);
console.log(sim);

const cubnumbers = [5, 3, 8, 6];
const cubes = cubnumbers.map(num => num ** 3);
console.log(cubes);

const cifrs = [7, -2, 4, -9, 0];
const positiveNumbers = cifrs.filter(num => num >= 0);
console.log(positiveNumbers);

const chisla = [2, 3, 5, 7, 11];
const count = chisla.filter(num => num > 5).length;
console.log(count); 

const animals = ['cat', 'dog', 'rabbit'];
animals.forEach(animal => {
    console.log(animal.toLowerCase());
});

const cifri = [21, 32, 43, 54, 65];
const index = cifri.findIndex(num => num % 43 === 0);
console.log(index);

const twentyfive = [10, 20, 30, 40, 50];
const containsTwentyFive = twentyfive.includes(25);
console.log(containsTwentyFive); 

const number = [2, 2, 2, 2];
const allEqual = numbers.every(num => num === number[0]);
console.log(allEqual); 

const nechetniy = [1, 3, 5, 7];
nechetniy.forEach((num, index) => {
    if (index % 2 !== 0) {
        console.log(num);
    }
});

const clacl = [7, 8, 9, 10, 11];
const maxElement = Math.max(...clacl);
const minsElement = Math.min(...clacl);
const difference = maxElement - minsElement;
console.log(difference); 

const numberss = [3, 6, 9, 12, 15];
const counts = numberss.filter(num => num > 7).length;
console.log(counts);

const numbersss = [21, 32, 45, 54];
const minssElement = Math.min(...numbersss);
const minIndex = numbersss.indexOf(minssElement);
console.log(minIndex);

const fruits = ['apple', 'orange', 'banana'];
const shortestString = fruits.reduce((shortest, current) => {
    return current.length < shortest.length ? current : shortest;
});
const updatedFruits = fruits.filter(fruit => fruit !== shortestString);
console.log(updatedFruits); 


