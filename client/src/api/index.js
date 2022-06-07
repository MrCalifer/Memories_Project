import axios from "axios";

const API = axios.create({ baseURL: "https://mern-memories-califer.herokuapp.com/" });
API.interceptors.request.use((req) => {
  if (localStorage.getItem("Profile")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("Profile")).token
    }`;
  }

  return req;
});

export const fetchPost = (page) => API.get(`posts/getPosts?page=${page}`);
export const fetchPostByID = (id) => API.get(`posts/${id}`);
export const createPost = (post) => API.post(`posts/createPost`, post);
export const updatePost = (id, updatedPost) =>
  API.patch(`posts/updatePost/${id}`, updatedPost);
export const deletePost = (id) => API.delete(`posts/deletePost/${id}`);
export const likePost = (id) => API.patch(`posts/updatePost/${id}/likePost`);
export const comment = (value, id) =>
  API.post(`posts/${id}/commentPost`, { value });
export const fetchPostBySearch = (searchQuery) =>
  API.get(
    `posts/search?searchQuery=${searchQuery.search || "none"}&tags=${
      searchQuery.tags
    }`
  );

export const signin = (formData) => API.post(`user/signin`, formData);
export const signup = (formData) => API.post(`user/signup`, formData);
