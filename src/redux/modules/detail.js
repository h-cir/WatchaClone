import instance from "../../shared/Request";
import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";

//action
const DETAILMOVIELIST = "DETAILMOVIELIST";

//action creator
const getDetailMovieList = createAction(DETAILMOVIELIST, (movies) => ({movies}));

//initialState
const initialState = {
    list:[],
}

//axios
export const getDetailMovieListDB = (movie_id) => {

    return (dispatch, getState, { history }) => {
        instance
        .get(`/api/movies/${movie_id}/details`)
        .then((res)=>{
            const movies = res.data.movieInfo
    
            dispatch(getDetailMovieList(movies));
        })
        .catch((err) => {
            console.log(err, "영화목록 가져오기 오류");
        })
    }
}

//reducer
export default handleActions(
    {
      [DETAILMOVIELIST]: (state, action) => 
      produce(state, (draft) => {
        draft.list = action.payload.movies
      }),
    },
    initialState
  );
  
  const actionCreators = {
    getDetailMovieList,
    getDetailMovieListDB,
  };
  
  export { actionCreators };
  