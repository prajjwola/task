const arr =  [3,5,2];
//console.log the maximum number of an array
//expectedd output 5

const maxOfArr = Math.max(...arr);
console.log(maxOfArr);

//Q2 Remove a specific element 2 from the array. Log the modified array to the console.
// expected output: [3,5]

const backupArr = [...arr];
const indexOfElementToRemove = backupArr.indexOf(2);
backupArr.splice(indexOfElementToRemove, 1);
console.log(backupArr);

//Q3 Multiply each element of the array by a constant value 5 and log the modified array to the console.
//expected output [15,10]
const mulArr = backupArr.map((item) => {
    return item*5;
})
console.log(mulArr);

