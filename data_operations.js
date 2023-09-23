//**Assignment: Array Mapping, Filtering, and Chaining with User Data and Movie Data**
// **Objective:**
// The objective of this assignment is to practice array manipulation using mapping, filtering, and chaining operations with both user data and movie data.
// **Instructions:**
// **Part 1: User Data Array Manipulation**
// 1. Create a new JavaScript file (e.g., `data_operations.js`) to complete the following tasks.
// 2. Define an array `users` containing at least 15 objects, where each object represents a user with the following properties: `name`, `age`, `gender`, and `location`.
let users = [
	{"name" : "A1", "age" : 19, "gender" : "male", "location" : "location1"},
	{"name" : "A2", "age" : 20, "gender" : "male", "location" : "location2"},
	{"name" : "A3", "age" : 21, "gender" : "male", "location" : "location3"},
	{"name" : "A4", "age" : 22, "gender" : "male", "location" : "location4"},
	{"name" : "A5", "age" : 23, "gender" : "male", "location" : "location5"},
	{"name" : "B1", "age" : 18, "gender" : "female", "location" : "location6"},
	{"name" : "B2", "age" : 17, "gender" : "female", "location" : "location7"},
	{"name" : "B3", "age" : 16, "gender" : "female", "location" : "location8"},
	{"name" : "B4", "age" : 15, "gender" : "female", "location" : "location9"},
	{"name" : "B5", "age" : 14, "gender" : "female", "location" : "location10"},
	{"name" : "A6", "age" : 24, "gender" : "male", "location" : "location11"},
	{"name" : "A7", "age" : 15, "gender" : "male", "location" : "location12"},
	{"name" : "A8", "age" : 16, "gender" : "male", "location" : "location13"},
	{"name" : "A9", "age" : 17, "gender" : "male", "location" : "location14"},
	{"name" : "A10", "age" : 18, "gender" : "male", "location" : "location15"},
];
console.log("Users =>", users);
// 3. Implement a function `isAdult` that takes a user object as input and returns `true` if the user is 18 years or older, otherwise `false`.
isAdult = (user) => {
	return user.age >= 18 ? true : false ;
};

// 4. Use the `filter` function to create a new array `adultUsers` by selecting only the users who are adults using the `isAdult` function.
let adultUsers = users.filter(isAdult); //TBD
console.log("filtered for adult =>", adultUsers);

//5. Implement a function `getFullName` that takes a user object as input and returns the user's full name (combine `name` and `location` properties).
getFullName = (user) => {
	return user.name + user.location;
};

//6. Use the `map` function to create a new array `userNames` containing the full names of all users.
let userNames = users.map(function (user) {
	return user.name;
});
console.log("New array with userNames :", userNames);

//**Part 2: Chaining User Data Operations**
// 1. Implement a function `filterByGender` that takes a user object as input and a gender string (e.g., "male" or "female") and returns `true` if the user's gender matches the input gender, otherwise `false`.
filterByGender = (user, gender) => {
	return user.gender == gender ? true : false;
};

// 2. Use chaining to manipulate the `users` array in the following sequence:
// a. Filter and create a new array `femaleUsers` containing female users using the `filterByGender` function.
// let femaleUsers = users.filter(filterByGender(user, "female")).map(function (user) {
// 	return user;
// });
let femaleUsers = users.filter((user)=>{return filterByGender(user, "female")}).map( (user) => {
	return user;
});
console.log("femaleUsers :", femaleUsers);

// b. Use the `map` function to apply the `getFullName` function to each element of the `femaleUsers` array.
let femaleFullname = femaleUsers.map((user) => {
	return getFullName(user);
});
console.log("Full name of femaleUsers :", femaleFullname);

// **Part 3: Movie Data Array Manipulation**
// 1. Define an array `movies` containing at least 10 objects, where each object represents a movie with properties: `title`, `genre`, `year`, and `rating`.
let movies = [
	{"title" : "movie1", "genre" : "comedy", "year" : 2011, "rating" : 4},
	{"title" : "movie2", "genre" : "action", "year" : 2010, "rating" : 3},
	{"title" : "movie3", "genre" : "suspense", "year" : 2009, "rating" : 2},
	{"title" : "movie4", "genre" : "comedy", "year" : 2008, "rating" : 1},
	{"title" : "movie5", "genre" : "thriller", "year" : 2007, "rating" : 0},
	{"title" : "movie6", "genre" : "action", "year" : 2006, "rating" : 5},
	{"title" : "movie7", "genre" : "comedy", "year" : 2005, "rating" : 1},
	{"title" : "movie8", "genre" : "horror", "year" : 2004, "rating" : 2},
	{"title" : "movie9", "genre" : "action", "year" : 2003, "rating" : 3},
	{"title" : "movie10", "genre" : "comedy", "year" : 2023, "rating" : 4},
];

console.log("Movies :", movies);

// **Part 4: Chaining Movie Data Operations**
// 1. Implement a function `filterByGenre` that takes a movie object as input and a genre string (e.g., "action" or "comedy") and returns `true` if the movie's genre matches the input genre, otherwise `false`.
filterByGenre = (movie, genre) => {
	return movie.genre === genre ? true : false;
};

// 2. Use chaining to manipulate the `movies` array in the following sequence:
// a. Filter and create a new array `actionMovies` containing movies with the "action" genre using the `filterByGenre` function.
let actionMovies = movies.filter((movie) => {return filterByGenre(movie, "action")});
console.log("actionMovies :", actionMovies);

// b. Use the `map` function to create a new array `movieTitles` containing the titles of all movies in `actionMovies`.
let movieTitles = actionMovies.map((movie) => {
	return movie.title;
});
console.log("movieTitles:", movieTitles);

// **Part 5: Integration and Output**
// 1. Combine the results from Part 1 (`adultUsers` and `userNames` arrays) and Part 2 (`femaleUsers` array with full names), and Part 4 (`movieTitles` array) into a final object `combinedResults` that contains these pieces of information.
let combinedResults = [...adultUsers, ...userNames, ...femaleFullname, ...movieTitles];

// 2. Print the contents of `combinedResults` to the console.
console.log("combinedResults :", combinedResults);

