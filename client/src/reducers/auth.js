import { AUTH, LOGOUT } from "../constants/actionTypes";

const authReducer = (state = { authData: null }, action) => {
  switch (action.type) {
    case AUTH:
      console.log(action?.data);
      localStorage.setItem("Profile", JSON.stringify({ ...action?.data }));
      return { ...state, authData: action?.data };
    default:
      return state;
  }
};

export default authReducer;
