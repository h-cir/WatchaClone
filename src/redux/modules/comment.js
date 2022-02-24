import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";


const token = localStorage.getItem("is_login");

//action
const ADD_COMMENT = "ADD_COMMENT";
const GET_COMMENTLIST = "GET_COMMENTLIST";
const GET_COMMENT = "GET_COMMENT";
const UPDATE_COMMENT = "UPDATE_COMMENT";
const DELETE_COMMENT = "DELETE_COMMENT";

//action creator
const addComment = createAction(ADD_COMMENT, (comments) => ({comments}));
const getCommentList = createAction(GET_COMMENTLIST, (comments) => ({ comments }));
const getComment = createAction(GET_COMMENT, (comment) => ({ comment }));
const updateComment = createAction(UPDATE_COMMENT, (commentId, comment) => ({ commentId, comment }));
const deleteComment = createAction(DELETE_COMMENT, (commentId) => ({ commentId }));

//initialState
const initialState = {
  list: [],
  mylist: [],
};

//axios
export const addCommentDB = (movieId,comment) => {
  return (dispatch, getState, { history }) => {
    instance
      .post(`/api/movies/${movieId}/comments`,
        {
          comment: comment,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
  
        dispatch(addComment(comment));
      })
      .catch((error) => {
        console.log(error,"코멘트 작성 오류");
      });
  };
};

export const getCommentListDB = (movieId) => {
  return (dispatch, getState, { history }) => {
    instance
      .get(`/api/movies/${movieId}/comments`)
      .then((response) => {
        // console.log(response, "전체 코멘트 가져오기 성공");
        dispatch(getCommentList(response.data));
      })
      .catch((error) => {
        console.log(error,"전체 코멘트 가져오기 오류");
      });
  };
};
export const getCommentDB = (movieId) => {
  return (dispatch, getState, { history }) => {
    instance
      .get(`/api/movies/${movieId}/comments/me`,
      { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((response) => {
        // console.log(response, "내 코멘트 가져오기 성공");
        dispatch(getComment(response.data));
      })
      .catch((error) => {
        console.log(error)
        // console.log(error.response.errorMessage,"내 코멘트 가져오기 오류");
      });
  };
};

export const updateCommentDB = (commentId, comment) => {
  return (dispatch, getState, { history }) => {
    instance
      .patch(
        `/api/comments/${commentId}`,
        {
          comment: comment,
        },
        { headers: { Authorization: `Bearer ${token}` } ,}
      )
      .then((response) => {
        console.log(response);
        dispatch(updateComment(commentId,comment))
      })
      .catch((error) => {
        window.alert(error.response.data.errorMessage,"코멘트 수정 오류");
      });
  };
};
export const deleteCommentDB = (commentId) => {
  return (dispatch, getState, { history }) => {
    instance
      .delete(`/api/comments/${commentId}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        console.log(response);
        // window.alert(response.data.message);
        dispatch(deleteComment(commentId));
      })
      .catch((error) => {
        console.log(error.response.data.errorMessage,"코멘트 삭제 오류")
      });
  };
};

//reducer
export default handleActions(
  {
    [ADD_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        window.location.reload()
      }),
    [GET_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        // 내 댓글이 어떤 형식으로 들어오는지 확인하고 저장어떻게 할지 생각해봐야함
        return { ...state, mylist: action.payload.comment};
      }),
    [GET_COMMENTLIST]: (state, action) =>
      produce(state, (draft) => {
        return { ...state, list: action.payload.comments};
      }),
    [UPDATE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
 
        draft.mylist.comment=action.payload.comment
  
      }),
    [DELETE_COMMENT]: (state, action) =>
      produce(state, (draft) => {
        draft.list = draft.list.filter(
          (e) => e._id !== action.payload.commentId
        );
        draft.mylist = "";
      }),
  },
  initialState
);

const actionCreators = {
  addComment,
  getCommentList,
  getComment,
  updateComment,
  deleteComment,
  addCommentDB,
  getCommentListDB,
  getCommentDB,
  updateCommentDB,
  deleteCommentDB,
};

export { actionCreators };
