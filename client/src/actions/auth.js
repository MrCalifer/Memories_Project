import { AUTH } from "../constants/actionTypes";
import * as api from "../api/index.js";

export const signin = (formData, histroy) => async (dispatch) => {
  try {
    const { data } = await api.signin(formData);
    dispatch({ type: AUTH, data });
    histroy.push("/");
  } catch (error) {
    console.log(error);
  }
};

export const signup = (formData, histroy) => async (dispatch) => {
  try {
    const { data } = await api.signup(formData);
    dispatch({ type: AUTH, data });
    histroy.push("/");
  } catch (error) {
    console.log(error);
  }
};
