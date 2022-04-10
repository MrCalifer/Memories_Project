import axios from "axios";

const url = "http://localhost:5000/";

export const fetchPost = () => axios.get(`${url}getPosts`);

export const createPost = (post) => axios.post(`${url}createPost`, post);
