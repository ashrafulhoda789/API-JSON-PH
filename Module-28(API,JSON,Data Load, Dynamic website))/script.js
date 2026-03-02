
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => res.json())
    .then((data) => console.log(data))
};







// const person = {
//     name: "Jamshed",
//     fruit : "Banana",
//     dish : 'Vortha',
//     friends : ["Mumir", "Jammir", "Mir"],
//     isRich : false,
//     money : 3500,
// };

// console.log(person, typeof person);

// // JSON --> JS object with Notation
// // JSON.stringify --> JSON
// // JSON.parse --> object

// const personJSON = JSON.stringify(person); // convert object into JSON
// console.log(personJSON, typeof personJSON);

// const parseJSON = JSON.parse(personJSON); // convert JSON into object
// console.log(parseJSON, typeof parseJSON);