//Object Operations
//Objective: Practice adding, removing, and updating values in objects.

//1. Create an empty object called "person".
let person = {}
console.log('Is person an array ? :', Array.isArray(person))
console.log('person is =>', typeof(person))
console.log('person contains (empty) :', person)

//2. Add the following properties to the "person" object:
//   - name: "John"
//   - age: 30
//   - city: "New York"
person.name = "John"
person.age = 30
person.city = "New York"
console.log('person contains (after adding few elements) :', person)

//3. Remove the "age" property from the "person" object.
delete person.age;
console.log('person contains (after deleting age) :', person)

//4. Add a new property called "job" with the value "Engineer" to the "person" object.
person.job = "Engineer"
console.log('person contains (after adding job) :', person)

//5. Update the "city" property of the "person" object to "San Francisco".
person.city = "San Francisco"
console.log('person contains (after updating the city) :', person)

//6. Print the final "person" object after performing the above operations.
console.log('person contains  :', person)