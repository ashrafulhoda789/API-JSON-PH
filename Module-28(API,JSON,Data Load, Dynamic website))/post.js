const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data))
};

const displayPost = (posts) => {

    // 1. get container
    const postContainer =  document.getElementById('post-container');
    // console.log(postContainer);


    posts.forEach(post => {
        // console.log(post.body);
        // 2. create HTML element
        const li = document.createElement('li');
        li.innerText = post.title;
        // console.log(li);

        // 3. add li into container
        postContainer.appendChild(li);
    })
}