//  how to use map filter and reduce methods in js.

let arr = [1, 2, 3, 4, 5];

let arr1 = arr.map((element) => element + 1)

for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}

// myFilter function

const words = ['spray', 'elite', 'exuberant', 'destruction', 'present'];

const results = words.filter((element) => {
    return element.length > 7
}
);

console.log(results);


// myReduce function
const prices = [1, 2, 3, 4, 5];


// reduce is the method used to reduce array elements to signle value.
const getSum = (accumulator, element) => {
    return accumulator + element;
}

const mySum = prices.reduce(getSum);
// getSum()
console.log(mySum);



