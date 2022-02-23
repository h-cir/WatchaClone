import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const token = localStorage.getItem("is_login");

const LIKE_COMMENT = "LIKE_COMMENT";
const LIKE_USERLIST = "LIKE_USERLIST";
const UNLIKE_COMMENT = "UNLIKE_COMMENT";

const likeComment = createAction(LIKE_COMMENT, (userId) => ({ userId }));
const likeUserList = createAction(LIKE_USERLIST, (comments) => ({ comments }));
const unlikeComment = createAction(UNLIKE_COMMENT, (commentId) => ({
  commentId,
}));

//initialState
const initialState = {
  list: [],
};

export const likeCommentDB = (commentId, userId) => {
  return (dispatch, getState, { history }) => {
    instance
      .post(
        `/api/comments/${commentId}/likes`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response, "코멘트 좋아요 성공");
        console.log(response.data.message);
        dispatch(likeComment(userId));
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage, "코멘트 좋아요 실패");
      });
  };
};
export const likeUserListDB = (commentId) => {
  return (dispatch, getState, { history }) => {
    instance
      .get(`/api/comments/${commentId}/likes`)
      .then((response) => {
        console.log(response, "답변 좋아요 리스트 가져오기");
        dispatch(likeUserList(response.data));
      })
      .catch((error) => {
        console.log(
          error.response.data.errorMessage,
          "답변 좋아요 리스트 가져오기 오류"
        );
      });
  };
};

export const unlikeCommentDB = (commentId) => {
  return (dispatch, getState, { history }) => {
    instance
      .delete(`/api/comments/${commentId}/likes`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        console.log(commentId);
        window.alert(response.data.message);
        dispatch(unlikeComment(commentId));
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage, "좋아요 취소 실패");
      });
  };
};

//reducer
export default handleActions(
  {
    [LIKE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list.push(action.payload.userId);
      }),
    [LIKE_USERLIST]: (state, action) =>
      produce(state, (draft) => {
        return { ...state, list: action.payload.comments.likeUsers };
      }),
    [UNLIKE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
          draft.list = "";
      }),
  },
  initialState
);

const actionCreators = {
  likeComment,
  likeCommentDB,
  likeUserList,
  likeUserListDB,
  unlikeComment,
  unlikeCommentDB,
};

export { actionCreators };
