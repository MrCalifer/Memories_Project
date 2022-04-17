import axios from "axios";

const url = "http://localhost:5000/";

export const fetchPost = () => axios.get(`${url}getPosts`);

export const createPost = (post) => axios.post(`${url}createPost`, post);

export const updatePost = (id , updatedPost) => axios.patch(`${url}updatePost/${id}`,updatedPost);

export const deletePost = (id) => axios.delete(`${url}deletePost/${id}`);

export const likePost = (id) => axios.patch(`${url}updatePost/${id}/likePost`);