import {
  FETCH_ALL_POST,
  CREATE_POST,
  UPDATE_POST,
  DELETE_POST,
  FETCH_POST_BY_SEARCH,
  START_LOADING,
  STOP_LOADING,
  FETCH_POST_BY_ID,
  COMMENT,
} from "../constants/actionTypes";
import * as api from "../api";

export const getPost = (page) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPost(page);
    console.log(data);
    dispatch({ type: FETCH_ALL_POST, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostByID = (id) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.fetchPostByID(id);
    console.log(data);
    dispatch({ type: FETCH_POST_BY_ID, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error.message);
  }
};

export const getPostBySearch = (searchQuery) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const {
      data: { data },
    } = await api.fetchPostBySearch(searchQuery);
    dispatch({ type: FETCH_POST_BY_SEARCH, payload: data });
    dispatch({ type: STOP_LOADING });
  } catch (error) {
    console.log(error);
  }
};

export const createPost = (post, history) => async (dispatch) => {
  try {
    dispatch({ type: START_LOADING });
    const { data } = await api.createPost(post);
    dispatch({ type: CREATE_POST, payload: data });
    console.log("Actions");
    console.log(data);
    history.push(`/`);
    // history.push(`/posts/${data._id}`);
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type: DELETE_POST, payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const likePost = (id) => async (dispatch) => {
  const user = JSON.parse(localStorage.getItem("Profile"));
  try {
    const { data } = await api.likePost(id, user?.token);
    dispatch({ type: UPDATE_POST, payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const commentPost = (value, id) => async (dispatch) => {
  try {
    const { data } = await api.comment(value, id);
    dispatch({ type: COMMENT, payload: data });
    return data.comment;
  } catch (error) {
    console.log(error);
  }
};
