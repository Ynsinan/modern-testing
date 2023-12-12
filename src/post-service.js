import axios from "axios";

const getPosts = async () => {
    return axios.get('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.data).catch((error) => {
        return {error: {
            message:"Data Bulunamadı",
        }}
    });
};

const getPost = async (id) => {
    return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then((response) => response.data);
}

const postService = {
    getPosts,
    getPost
};

export default postService;