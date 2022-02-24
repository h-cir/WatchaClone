import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import instance from "../../shared/Request";
import { actionCreators as commentActions } from "./comment";
const SET_LIKE = "SET_LIKE";
const ADD_LIKE = "ADD_LIKE";
const CANCEL_LIKE = "CANCEL_LIKE";

const setLike = createAction(SET_LIKE, (commentId, user_list) => ({
  commentId,
  user_list,
}));
const addLike = createAction(ADD_LIKE, (commentId, userId) => ({
  commentId,
  userId,
}));

const cancelLike = createAction(CANCEL_LIKE, (commentId, userId) => ({
  commentId,
  userId,
}));

const initialState = {
  list: {},
};

const getLikeFB = (commentId) => {
  return function (dispatch, getState, { history }) {
    instance.get(`/api/comments/${commentId}/likes`,
      {},
    ).then((res) => {

      const data = res.data.likeUsers
      const user_list = []
      data.forEach((doc) => {
        user_list.push(doc);
        console.log(user_list)
      });

      dispatch(setLike(commentId, user_list));
    })
      .catch((error) => {
        console.log(error);
      });
  };
};

const addLikeFB = (commentId, userId) => {
  return function (dispatch, getState, { history }) {
    const commentList = getState().comment.list.find((l) => l.commentId === commentId);
    console.log(commentList.countLikes)
    const is_local = localStorage.getItem("is_login")

    instance.post(`/api/comments/${commentId}/likes`,
      {},
      instance.defaults.headers.common["Authorization"] = `Bearer ${is_local}`
    ).then((res) => {
      console.log(res)
      dispatch(addLike(commentId, userId))
    })
      .catch((error) => {
        console.log(error);
      });
  };
};

const cancelLikeFB = (commentId, userId) => {
  return function (dispatch, getState, { history }) {
    // dispatch(cancelLike(post_id, user_nick))
    // const post = getState().post.list.find((l) => l.post_id === post_id);
    const is_local = localStorage.getItem("is_login")
    instance.delete(`/api/comments/${commentId}/likes`,
      {},
      instance.defaults.headers.common["Authorization"] = `Bearer ${is_local}`
    ).then((res) => {
      console.log(res)
      dispatch(cancelLike(commentId, userId))
      // if (post) {
      //     dispatch(
      //       postActions.editPost(post_id, {
      //         like_count: parseInt(post.like_count) - 1,
      //       })
      //     );
      //   }
    })
      .catch((error) => {
        console.log(error);
      });
  };
};

export default handleActions(
  {
    [SET_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.commentId] = action.payload.user_list;
      }),
    [ADD_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.commentId].push(action.payload.userId);
        window.location.reload()
      }),
    [CANCEL_LIKE]: (state, action) =>
      produce(state, (draft) => {
        draft.list[action.payload.commentId] = draft.list[
          action.payload.commentId
        ].filter((l) => l !== action.payload.userId);
        window.location.reload()
      }),
  },
  initialState
);

const actionCreators = {
  getLikeFB,
  addLikeFB,
  cancelLikeFB,
};

export { actionCreators };
