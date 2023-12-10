const myArr = [1,2,3,4,5]

// Another way to declare array
const anotherArr = new Array(1,2,3,4,5,6,7,8,9)



// anotherArr.push(6); //to insert elemnt at the end in array
// anotherArr.pop(); //to remove last element in array
// anotherArr.unshift(3); //to insert element in start of an array
// anotherArr.shift(); // to remove element from start
//console.log(anotherArr.includes("Amit")); // to check element exist in array or not
//console.log(anotherArr.indexOf(9)); //to check element index in array
//console.log(anotherArr.join()); //convert array into string
const sliceArr = anotherArr.slice(1,4); //Return element from start point and exlude range and do not change original array
console.log(sliceArr);
console.log(anotherArr);
const spliceArr = anotherArr.splice(1,4); //Return element including range and change original array
console.log(spliceArr);
console.log(anotherArr);





