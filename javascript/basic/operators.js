const arr = [3,5,2];
const backupArr = [...arr];

//Q1 calculate length of array and console log
//expected output is 3
console.log(backupArr.length);

//Q2 reverse the array and console log
//expected output [2,5,3]
let reverse = backupArr.reverse();
console.log(backupArr);

///Q3 join the array and console log
// expected output 352
console.log(arr.join(''));

//Q4 Remove the last element from the array and log the modified array to the console
const secondBackUpArr = [...arr];
secondBackUpArr.pop();
console.log(secondBackUpArr);

// // Q5 Check if all elements in the num are even. Log "All even" or "Not all even" accordingly.
const num = [6,4,2,8,10,12]

let allEven = num.every(num => num%2===0);
console.log(allEven);
if(allEven){
    console.log("All Even");
}else{
    console.log("Not All Even");
}

