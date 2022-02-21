import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//action
const GET_MOVIELIST = "MOVIELIST_GET";

//action creator
const getMovieList = createAction(GET_MOVIELIST, (movies) => ({movies}));

//initialState
const initialState = {
    list:[],
}

//axios
export const getMovieListDB = () => {
    return (dispatch, getState, { history }) => {
        instance
        .get("/api/movies")
        .then((response)=>{
            dispatch(getMovieList(response.data.movies));
        })
        .catch((error) => {
            console.log(error, "영화목록 가져오기 오류");
        })
    }
}

//reducer
export default handleActions(
    {
      [GET_MOVIELIST]: (state, action) => 
      produce(state, (draft) => {
        return { ...state, list: action.payload.movies };
      }),
    },
    initialState
  );
  
  const actionCreators = {
    getMovieList,
    getMovieListDB,
  };
  
  export { actionCreators };
  