import React from "react";
import styled from "styled-components";
import HeadDetail from "../components/HeadDetail";
import HeaderBottom from "../components/HeadBottom";
const DetailPage = (props) => {

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