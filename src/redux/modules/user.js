import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";
import { useState } from "react";

// actions
const LOG_OUT = "LOG_OUT";
const GET_USER = "GET_USER";
const SET_USER = "SET_USER";

// action creators
const logOut = createAction(LOG_OUT, (user) => ({ user }));
const getUser = createAction(GET_USER, (user) => ({ user }));
const setUser = createAction(SET_USER, () => ({}));

// initialState
const initialState = {
  user: null,
  is_login: false,
};

const loginDB = (userId, password) => {
  return function (dispatch, getState, { history }) {
    instance
    .post("/api/users/auth", { 
        userId: userId, 
        password: password })
    .then((res) => {
      console.log(res)
    //   localStorage.setItem("user_nick", res.data.user_nick);
      localStorage.setItem("is_login", res.data.token);
      dispatch(setUser());
      // history.push("/");
    });
  };
};

//회원가입 API
const signUpDB = (userId, password, userName) => {
  return function (dispatch, getState, { history }) {
        console.log(userId, password, userName)
    instance
      .post("/api/users/signup", {
        userId: userId,
        password: password,
        userName: userName,
      })
      .then((res) => {
        console.log(res)
        // history.push("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

//아이디 중복 제크 API
// const idDuplcheckDB = (id) => {
//   return function (dispatch, getState, { history }) {
//     console.log(id);
//     instance
//       .post("/api/register/check", {
//         user_id: id,
//       })
//       .then((res) => {
//         console.log(res);
//         window.alert(res.data.alert);
//       });
//   };
// };

const logoutDB = () => {
  return function (dispatch, getState, { history }) {
    dispatch(logOut());
    history.replace("/");
    //replace는 push와 달리 뒤로가기해도 원래 페이지가 나오지 않음.
  };
};

// //reducer
// //produce (immer) 이용하여 불변성 유지
export default handleActions(
  {
    [SET_USER]: (state, action) =>
      produce(state, (draft) => {
        draft.is_login = true;
      }),
    [LOG_OUT]: (state, action) =>
      produce(state, (draft) => {
        localStorage.clear();
        draft.user = null;
        draft.is_login = false;
      }),
    [GET_USER]: (state, action) => produce(state, (draft) => {}),
  },
  initialState
);

// action creator export

const actionCreators = {
  logOut,
//   getUser,
  loginDB,
  signUpDB,
  logoutDB,
//   idDuplcheckDB,
//   nickDuplcheckDB,
};

export { actionCreators };
