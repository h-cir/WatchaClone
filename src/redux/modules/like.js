import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

const token = localStorage.getItem("is_login");

const LOAD_USER = "LOAD_USER";
const LIKE_COMMENT = "LIKE_COMMENT";
const LIKE_USERLIST = "LIKE_USERLIST";
const UNLIKE_COMMENT = "UNLIKE_COMMENT";

const loadUser = createAction(LOAD_USER,( users) => ({users}));
const likeComment = createAction(LIKE_COMMENT, (commentId,likeUser) => (commentId,likeUser));
const likeUserList = createAction(LIKE_USERLIST, (comments) => ({ comments }));
const unlikeComment = createAction(UNLIKE_COMMENT, (commentId) => ({
  commentId,
}));

//initialState
const initialState = {
  list: [],
  like: [],
};

export const loadUserDB = (users) => {
  return (dispatch, getState, { history }) => {
    instance
      .get("/api/users/auth/me")
      .then((response) => {
        // console.log(response, "로그인 정보 조회 성공");
        dispatch(loadUser(response.data));
      })
      .catch((error) => {
        console.log(error, "로그인 정보 조회 오류");
      });
  };
};

export const likeCommentDB = (commentId,likeUser) => {
  return (dispatch, getState, { history }) => {
    instance
      .post(
        `/api/comments/${commentId}/likes`,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        console.log(response, "코멘트 좋아요 성공");
        // console.log(response.data.message);
        dispatch(likeComment(commentId,likeUser));
      })
      .catch((error) => {
        console.log(error.response.data.message, "코멘트 좋아요 실패");
        window.alert(error.response.data.message)
      });
  };
};
export const likeUserListDB = (commentId) => {
  return (dispatch, getState, { history }) => {
    instance
      .get(`/api/comments/${commentId}/likes`)
      .then((response) => {
        // console.log(response, "답변 좋아요 리스트 가져오기");
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
        console.log(error.response.errorMessage, "좋아요 취소 실패");
      });
  };
};

//reducer
export default handleActions(
  {
    [LOAD_USER]: (state, action) =>
      produce(state,(draft) => {
        return { ...state, userlist: action.payload.users};
      }),
    [LIKE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.like.push(action.payload.comments)
        draft.likelist="1"
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
  loadUser,
  loadUserDB,
  likeComment,
  likeCommentDB,
  likeUserList,
  likeUserListDB,
  unlikeComment,
  unlikeCommentDB,
};

export { actionCreators };
