import React from "react";
import styled from "styled-components";
import HeadDetail from "../components/HeadDetail";
import HeaderBottom from "../components/HeadBottom";
import { actionCreators as detailActions } from "../redux/modules/detail";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { history } from "../redux/configureStore";
import { actionCreators as movieActions } from "../redux/modules/movie";
const DetailPage = (props) => {
    const dispatch = useDispatch();
    const movie_id = props.match.params.movieid;
    const list = useSelector((state) => state.detail.list);
    React.useEffect(() => {
        dispatch(detailActions.getDetailMovieListDB(movie_id));
    }, []);
   
    return (
        <>
            <Section>
                <HeadDetail {...list} />
                <HeaderBottom {...list} />
            </Section>
        </>
    )
}

const Section = styled.div`
@media only screen and (min-width: 719px) {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 0px);
    }
    padding-top: 0px;
    padding-bottom: unset;
    background: rgb(248, 248, 248);
`

export default DetailPage