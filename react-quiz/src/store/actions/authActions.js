import axios from '../../axios/axios-quiz';
import { AUTH_LOGOUT, AUTH_SUCCESS } from './actionTypes';

export const auth = (email, password, isLogin) => {
  return async (dispatch) => {
    const authData = {
      email,
      password,
      returnSecureToken: true,
    };

    let url =
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAYF9tHhhQKP_w_h9TvCwGJKkc9l4YfJiw';

    if (isLogin) {
      url =
        'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAYF9tHhhQKP_w_h9TvCwGJKkc9l4YfJiw';
    }

    const response = await axios.post(url, authData);

    const data = response.data;
    const expirationDate = new Date(
      new Date().getTime() + data.expiresIn * 1000
    );

    localStorage.setItem('token', data.idToken);
    localStorage.setItem('userId', data.localId);
    localStorage.setItem('expirationDate', expirationDate);

    dispatch(authSuccess(data.idToken));
    dispatch(autoLogout(data.expiresIn));

    console.log(response.data);
  };
};

export const authSuccess = (token) => {
  return {
    type: AUTH_SUCCESS,
    token,
  };
};

export const autoLogout = (time) => {
  return (dispatch) => {
    setTimeout(() => {
      dispatch(logout());
    }, time * 1000);
  };
};

export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('userId');
  localStorage.removeItem('expirationDate');

  return {
    type: AUTH_LOGOUT,
  };
};

export const autologin = () => {
  return (dispatch) => {
    const token = localStorage.getItem('token');

    if (!token) {
      dispatch(logout());
    } else {
      const expirationDate = new Date(
        localStorage.getItem('expirationDate')
      );

      if (expirationDate <= new Date()) {
        dispatch(logout());
      } else {
        dispatch(authSuccess(token));

        dispatch(
          autoLogout(
            (expirationDate.getTime() - new Date().getTime()) / 1000
          )
        );
      }
    }
  };
};
