//primitive => anything apart from reference. 
//reference => [array] {objects}

console.log("1. Array Operations ....")	

//Objective: Practice adding, removing, and updating values in arrays.

//1. Create an empty array called "fruits".
let fruits = []; //Array will be created using [] and object will be created using {}
console.log('Is fruits an array ? :', Array.isArray(fruits))
console.log('fruits container (empty) :', fruits)

//2. Add the following fruits to the "fruits" array: "apple", "banana", "orange".
fruits.push("apple")
fruits.push("banana")
fruits.push("orange")

console.log('fruits container (after adding 3 fruits) :', fruits)

//3. Remove the first fruit from the array.
//Array.splice(indexOftheElement, number of elements to be removed from the index)
fruits.splice(0, 1)
console.log('fruits container (after removing the 1st fruit) :', fruits)

//4. Add "grape" to the end of the array.
fruits.push("grape")
console.log('fruits container (after adding grape at the end) :', fruits)

//5. Update the second fruit in the array to "pear".
fruits.splice(1, 0, "pear")
console.log('fruits container (after adding pear at the secand (index 1)) :', fruits)

//6. Print the final "fruits" array after performing the above operations.
console.log('fruits container  :', fruits)