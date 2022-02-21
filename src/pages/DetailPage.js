import React from "react";
import styled from "styled-components";
import HeadDetail from "../components/HeadDetail";
import HeaderBottom from "../components/HeadBottom";
import { actionCreators as detailActions } from "../redux/modules/detail";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const DetailPage = (props) => {
    const dispatch = useDispatch();
    const movie_id = 634649
    const list = useSelector((state) => state.detail.list);
    console.log(list)
    React.useEffect(() => {
        dispatch(detailActions.getDetailMovieListDB(movie_id));
    }, []);


    return (
        <>
            <Section>
                <HeadDetail />
                <HeaderBottom />
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