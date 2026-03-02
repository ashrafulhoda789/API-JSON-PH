
const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/1') // promise of response
    .then((res) => res.json()) // promise of json data
    .then((data) => console.log(data))
};

// const loadPost = () => {
//     const url = 'https://jsonplaceholder.typicode.com/posts';

//     fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data);
//         displayPost(data);
//     })
// };

// const displayPost = (posts) =>{
//     posts.forEach(post => {
//         console.log(post);
//     });
// }







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