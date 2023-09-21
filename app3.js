//Array of Objects Operations
//Objective: Practice adding, removing, and updating values in an array of objects.

//1. Create an empty array called "cars".
let cars = []; //Array will be created using [] and object will be created using {}
console.log('Is cars an array ? :', Array.isArray(cars))
console.log('cars contains (empty) :', cars)


//2. Add three car objects to the "cars" array. Each car object should have the following properties:
//   - make: "Toyota"
//   - model: "Camry"
//   - year: 2018
let car1 = {
	"make" : "Toyota",
	"model" : "Camry",
	"year" : 2018
}

let car2 = {
	"make" : "Tata",
	"model" : "Nexon",
	"year" : 2023
}

let car3 = {
	"make" : "Maruti",
	"model" : "Celerio",
	"year" : 2019
}
cars.push(car1)
cars.push(car2)
cars.push(car3)
console.log('cars contains (After adding 3 car objects) :', cars)

//3. Remove the first car object from the "cars" array.
cars.splice(0, 1)
console.log('cars contains (After removing 1st car object) :', cars)

//4. Add a new car object to the "cars" array with the following properties:
   //- make: "Honda"
   //- model: "Civic"
   //- year: 2020
let car4 = {
	"make" : "Honda",
	"model" : "Civic",
	"year" : 2020
} 
cars.push(car4)

console.log('cars contains (after adding new car object) :', cars)

//5. Update the "model" property of the second car object in the array to "Accord".
 cars[1].model = "Accord"
console.log('cars contains (after updating the 2nd car model) :', cars)

//6. Print the final "cars" array after performing the above operations.
console.log('cars contains  :', cars)
