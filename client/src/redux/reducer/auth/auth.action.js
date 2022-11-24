
import axios from "axios";

// redux types
import { SIGN_IN, SIGN_UP, } from "./auth.type";

export const signIn = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_FRONTEND_URL}auth/signin`,
      data: { credentials: userData },
    });

    localStorage.setItem(
      "WISDOM",
      JSON.stringify({ token: User.data.token })
    );

    axios.defaults.headers.common["Authorization"] = `Bearer ${User.data.token}`;

    // window.location.reload();

    return dispatch({ type: SIGN_IN, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};


export const signUp = (userData) => async (dispatch) => {
  try {
    const User = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_FRONTEND_URL}auth/signup`,
      data: { credentials: userData },
    });

    localStorage.setItem(
      "WISDOM",
      JSON.stringify({ token: User.data.token })
    );
    
    axios.defaults.headers.common["Authorization"] = `Bearer ${User.data.token}`;

    // window.location.reload();

    return dispatch({ type: SIGN_UP, payload: User.data });
  } catch (error) {
    return dispatch({ type: "ERROR", payload: error });
  }
};



