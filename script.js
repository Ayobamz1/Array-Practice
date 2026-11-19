// Array is a programming method of storing and making use of the informaion being stored using key-value 
// Array make use of index starting form 0 
// let names = [
//     'Ayobamz',
//     'Bayo',
//     'Festus',
//     'Isreal',
//     'Hamdalat',
//     'Samuel',
//     'Pamilerin'
// ]

// console.log(names[3]);

let names = [];
// push method -- adds one or more elements to the last/end of an array and returns the new lenght.
names.push("Ayobamz")
names.push("Samuel")
names.push("Peace")
names.push("Shola")
console.log(names);

// pop method -- removes the last element from an array and returns that removed elemnt.
names.pop()
console.log(names);

// unshift method -- adds one or more elements to the beginning/first of an array and returns the new lenght.
names.unshift("Femi");
console.log(names);

// shift method -- removes the first element from an array and returns that removed element.
names.shift();
console.log(names);

// splice(start, deleteCount, item1, ...) -- A versatile tool that removes, replace, or inserts element at any specific index. It returns an array of the removed elements.
const nums = [1, 2, 3, 4, 5];
nums.splice(2, 2, 88) // Removes 3 items starting from index 1, inserts 88 -- nums is [1, 88, 5]
console.log(nums);

let fruits = ["apple", "banana","orange", "kiwi"];   
fruits.splice(1, 2, "grape", "pear");   
console.log(fruits); // Output: ["apple", "grape", "pear", "kiwi"]

// slice(start, end) -- returns a shallow porton of an array into a new array, stopping before the end index.
const letters = ['a', 'b', 'c', 'd', 'e'];
const part = letters.slice(1, 3); // ['b', 'c']
console.log(part);

// concat(array2, ...) -- merges two or more arrays into a new array without chnaging the existing ones.
const merged = [1, 2, 3, 4]
let add = merged.concat([5, 6, 7]);
console.log(add);




