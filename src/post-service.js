const getPosts = async () => {
    return fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((response) => response.data);
};

const getPost = async (id) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
   .then((response) => response.json())
    .then((response) => response.data);
}

const postService = {
    getPosts,
    getPost
};

export default postService;