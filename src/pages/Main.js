import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elementsJ";
import Moviecard from "../components/Moviecard";

const Main = () => {
  return (
    <React.Fragment>
      <Section>
        <Block>
          <BlockTitle>
            <p>박스오피스 순위</p>
          </BlockTitle>
          <CardBox>
            <div></div>
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
            <Moviecard />
          </CardBox>
        </Block>
      </Section>
    </React.Fragment>
  );
};

const Section = styled.div`
  margin-top: 74px;
`;
const Block = styled.div`
  @media (min-width: 1100px) {
    margin: 0 60px;
  }
  @media (min-width: 760px) {
    margin: 0 3.5%;
  }
  max-width: 1320px;
  display: block;
  list-style: none;
  padding: 0px;
  white-space: nowrap;
  margin-top: 0px;
  margin-bottom: 0px;
  margin-right: 0px !important;
  margin-left: 0px !important;
`;
const BlockTitle = styled.div`
  @media (min-width: 1440px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 1100px) {
    margin: 0 60px;
  }
  @media (min-width: 760px) {
    margin: 0 3.5%;
  }
  @media (min-width: 719px) {
    margin-right: 20px;
    margin-left: 20px;
  }
  white-space: nowrap;
  max-width: 1320px;
  padding: 12px 0 14px;
  margin-right: 15px;
  margin-left: 15px;
  max-height: 60px;
  line-height: 30px;
  p {
    margin: 0;
    color: #292a32;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 700;
    /* -webkit-letter-spacing: -0.4px;
    -moz-letter-spacing: -0.4px;
    -ms-letter-spacing: -0.4px; */
    letter-spacing: -0.4px;
    line-height: 30px;
  }
`;
const CardBox = styled.div`
  @media (min-width: 760px) {
    margin: 0 3.5%;
  }
  max-width: 1320px;
  line-height: normal;
  @media (min-width: 719px) {
    margin-right: 28px;
    margin-left: 20px;
  }
  margin-right: 20px;
  margin-left: 15px;

  div {
    position: relative;
    transform: translate3d(0px, 0px, 0px);
    margin: 0px -6px;
  }
  /* display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */
`;

export default Main;
