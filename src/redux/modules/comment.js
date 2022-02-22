import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const token = localStorage.getItem("token");

//action
const ADD_COMMENT = "COMMENT_ADD";
const GET_COMMENT = "COMMENT_GET";
const GET_COMMENTLIST = "COMMENTLIST_GET";
const UPDATE_COMMENT = "COMMENT_UPDATE";
const DELETE_COMMENT = "COMMENT_DELETE";
const LIKE_COMMENT = "COMMENT_LIKE";
const UNLIKE_COMMENT = "COMMETN_UNLIKE"

//action creator
const addComment = createAction(ADD_COMMENT, (comments) => ({ comments }));
const getComment = createAction(GET_COMMENT, (comment) => ({ comment }));
const getCommentList = createAction(GET_COMMENTLIST, (comments) => ({ comments }));
const updateComment = createAction(UPDATE_COMMENT, (commentId, comment) => ({ commentId, comment }));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({ commentId }));
const likeComment = createAction(LIKE_COMMENT, (commentId) => ({ commentId,  }));
const unlikeComment = createAction(UNLIKE_COMMENT, (commentId) => ({ commentId,  }));

//initialState
const initialState = {
  list: [],
};

//axios
export const addCommentDB = (movieId, comment) => {
  return (dispatch, getState, { history }) => {
    instance
      .post(
        `/api/movies/${movieId}/comments`,
        {
          comment: "",
        },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response, "코멘트 작성 성공");
        console.log(response.data.message);
        // dispatch(addComment(movieId, comment));
      })
      .catch((error) => {
        console.log(error.response.data.message);
        console.log(error, "코멘트 작성 오류");
      });
  };
};

export const getCommentDB = (movieId) => {
  return (dispatch, getState, { history }) => {
    instance
      .get(`/api/movies/${movieId}/comments/me`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response, "내 코멘트 가져오기 성공");
        // dispatch(getComment(response.data.comments));
      })
      .catch((error) => {
        console.log(error, "내 코멘트 가져오기 오류");
      });
  };
};

export const getCommentListDB = (movieId) => {
  return (dispatch, getState, { history }) => {
    instance
      .get(`/api/movies/${movieId}/comments/me`)
      .then((res) => {
        console.log(res, "전체 코멘트 가져오기 성공");
        // dispatch(getComment(res.data.comments));
      })
      .catch((err) => {
        console.log(err, "전체 코멘트 가져오기 오류");
      });
  };
};
export const updateCommentDB = (commentId, comment) => {
  return (dispatch, getState, { history }) => {
    instance
      .patch(
        `/api/comments/${commentId}`,
        {
          comment: "123",
        },
        { headers: { authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response);
        // dispatch(updateComment(commentId,comment))
      })
      .catch((error) => {
        console.log(error, "코멘트 수정 오류");
        window.alert(error.response.data.errorMessage);
      });
  };
};
export const deleteCommentDB = (commentId) => {
  return (dispatch, getState, { history }) => {
    instance
      .delete(`/api/comments/${commentId}`, {
        headers: { authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        console.log(commentId);
        window.alert(response.data.message);
        dispatch(deleteComment(commentId));
      })
      .catch((error) => {
        console.log(error, "코멘트 삭제 오류");
        window.alert(error.response.data.errorMessage);
      });
  };
};

//reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.comments);
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // 내 댓글이 어떤 형식으로 들어오는지 확인하고 저장어떻게 할지 생각해봐야함
        return { ...state, list: action.payload.comments };
      }),
    [GET_COMMENTLIST]: (state, action) =>
      produce(state, (draft) => {
        return { ...state, list: action.payload.comments };
      }),
    [UPDATE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        let idx = draft.list.findIndex(
          (p) => p._id === action.payload.commentId
        );
        draft.list[idx] = { ...draft.list[idx], ...action.payload.comment };
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        console.log(action.payload.commentId);
        draft.list = draft.list.filter(
          (e) => e._id !== action.payload.commentId
        );
      }),
  },
  initialState
);

const actionCreators = {
  addComment,
  getComment,
  getCommentList,
  updateComment,
  deleteComment,
  addCommentDB,
  getCommentDB,
  getCommentListDB,
  updateCommentDB,
  deleteCommentDB,
};

export { actionCreators };
