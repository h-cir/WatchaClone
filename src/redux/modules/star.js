import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

import instance from "../../shared/Request";

const SET_STAR = "SET_STAR";
const ADD_STAR = "ADD_STAR";
const CANCEL_STAR = "CANCEL_STAR";
const INFO_STAR = "INFO_STAR";

const setStar = createAction(SET_STAR, (movieId, user_list) => ({
  movieId,
  user_list,
}));
const addStar = createAction(ADD_STAR, (value, movieId, token) => ({
  value,
  movieId,
  token
}));

const cancelStar = createAction(CANCEL_STAR, (movieId) => ({
  movieId,
}));

const infoStar = createAction(INFO_STAR, (starInfo) => ({
  starInfo,
}));


const initialState = {
  list: {},
  infoList: {}
  ,
};

// *************************************꼭! 배열로 수정 const user_list = [] **************************************************
const setStarDB = (movieId, token) => {
  return function (dispatch, getState, { history }) {

    instance.get(`/api/movies/${movieId}/stars/me`,
      {},
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    ).then((res) => {
      const myStar = res.data.myStar
      const user_list = []
      user_list.push(token, myStar);
      // data.forEach((doc) => {
      //     user_list.push(doc.user_nick);
      // });
      dispatch((setStar(movieId, user_list)))
    })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addStarDB = (value, movieId, token) => {
  return function (dispatch, getState, { history }) {
    instance.post(`/api/movies/${movieId}/stars`,
      {
        stars: value
      },
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    ).then((res) => {
      console.log(res)
      dispatch(addStar(value, movieId, token))
    })
      .catch((error) => {
        console.log(error);
      });
  };
};

const cancelStarDB = (movieId, token) => {
  return function (dispatch, getState, { history }) {
    instance.delete(`/api/movies/${movieId}/stars`,
      {},
      instance.defaults.headers.common["Authorization"] = `Bearer ${token}`
    ).then((res) => {
      console.log(res)
      dispatch(cancelStar(movieId))
    })
      .catch((error) => {
        console.log(error);
      });
  };
};

const infoStarDB = (movieId) => {
  return function (dispatch, getState, { history }) {
    instance.get(`/api/movies/${movieId}/stars`,
      {},
    ).then((res) => {
      const starInfo = res.data
      dispatch(infoStar(starInfo))
    })
      .catch((error) => {
        console.log(error);
      });
  };
}

export default handleActions(
  {
    [SET_STAR]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.movieId] = action.payload.user_list
      }),
    [ADD_STAR]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.movieId].unshift(action.payload.token, action.payload.value);
      }),
    [CANCEL_STAR]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.movieId][1] = 0;
      }),
    [INFO_STAR]: (state, action) =>
      produce(state, (draft) => {
        draft.infoList = action.payload.starInfo
      }),
  },
  initialState
);

const actionCreators = {
  setStarDB,
  addStarDB,
  setStar,
  addStar,
  cancelStar,
  cancelStarDB,
  infoStarDB
};

export { actionCreators };
