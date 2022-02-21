import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elementsJ";
import { useHistory } from "react-router";

const MovieCard = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <CardBox onClick={() => {
            history.push(`/detailpage`);
          }}>
        <PosterBox>
          <Poster>
            <img
              src={props.posterUrl}
              alt=""
            />
          </Poster>
          <Rranking>1</Rranking>
        </PosterBox>
        <Info>
          <Title>{props.title}</Title>
          <Year>{props.year} ・ {props.country}</Year>
          <Star>
            <span>평균</span>
            <svg
              width="12"
              height="10"
              viewBox="0 0 12 10"
              xmlns="http://www.w3.org/2000/svg"
              fill="#555765"
              className="css-1g90l0x"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M6 8.02L3.14233 9.91131C2.91094 10.0644 2.61352 9.84836 2.68767 9.58097L3.60334 6.27872L0.921531 4.14536C0.704379 3.97262 0.817982 3.62299 1.0952 3.61087L4.51878 3.46128L5.719 0.251483C5.81619 -0.00842059 6.18381 -0.00842094 6.281 0.251483L7.48122 3.46128L10.9048 3.61087C11.182 3.62299 11.2956 3.97262 11.0785 4.14536L8.39666 6.27872L9.31233 9.58097C9.38648 9.84836 9.08906 10.0644 8.85767 9.91131L6 8.02Z"
              ></path>
            </svg>
            <span>{props.star}</span>
          </Star>
        </Info>
      </CardBox>
    </React.Fragment>
  );
  };
  const CardBox = styled.div`
    display: inline-block;
    text-decoration: none;
    padding: 0 -5px;
    width: 95%;
    cursor: pointer;
  `;
  const PosterBox = styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 145.37037037037038%;
  `;
  const Poster = styled.div`
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 1px solid #eae9e8;
    border-radius: 5px;
    background: #f8f8f8;
    transition: 300ms;
    img {
      vertical-align: top;
      width: 100%;
      height: 100%;
      opacity: 1;
      object-fit: cover;
      transition: opacity 420ms ease 0s;
    }
  `;
  const Rranking = styled.div`
    @media (min-width: 719px) {
      top: 6px;
      left: 6px;
      width: 28px;
      height: 28px;
      line-height: 27px;
    }
    @media screen and (min-width: 460px) {
      bottom: 6px;
      left: 6px;
    }
    @media screen and (min-width: 460px) {
      font-size: 16px;
    }
    position: absolute;
    bottom: 3px;
    left: 3px;
    background-color: rgba(0, 0, 0, 0.77);
    color: rgb(255, 255, 255);
    font-weight: 700;
    letter-spacing: normal;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    width: 24px;
    height: 24px;
    border-radius: 4px;
    opacity: 1;
    transition: opacity 300ms ease 0s;
  `;
  const Info = styled.div`
    text-align: left;
    width: calc(100% - 10px);
    margin: 5px 10px 0 0;
  `;
  const Title = styled.div`
    color: #292a32;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: -0.3px;
    line-height: 22px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    margin-bottom: 3px;
  `;
  const Year = styled.div`
    @media screen and (min-width: 719px) {
      display: block;
    }
    color: #292a32;
    padding-bottom: 1px;
    font-size: 14px;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 21px;
  `;
  const Star = styled.div`
    @media screen and (min-width: 719px) {
      margin-top: 2px;
    }
    font-weight: 400;
    color: #555765;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: flex;
    font-size: 14px;
    letter-spacing: 0;
    line-height: 14px;
    height: 15px;
  `;
  export default MovieCard;
