const loadPost = () => {
    const url = 'https://jsonplaceholder.typicode.com/posts';

    fetch(url)
    .then((res) => res.json())
    .then((data) => displayPost(data))
};

// {userId: 1, id: 1, title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit', body: 'quia et suscipit\nsuscipit recusandae consequuntur …strum rerum est autem sunt rem eveniet architecto'}

const displayPost = (posts) => {
    // 1. get the container and empty it
    const postContainer = document.getElementById('post-container');
    postContainer.innerHTML = "";

    posts.forEach(post => {
        // 2. create element
        const postCard = document.createElement("div");
        postCard.innerHTML = `
            <div class="post-card">
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>
        `;

        // 3. append postcard
        postContainer.appendChild(postCard);
    })
};

loadPost();