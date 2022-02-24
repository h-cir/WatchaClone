import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const MovieCard = (props) => {
  const history = useHistory();
  return (
    <React.Fragment>
      <CardBox onClick={() => {
            history.push(`/detailpage/${props.movieId}`);
          }}>
        <PosterBox>
          <Poster>
            <img
              src={props.posterUrl}
              alt=""
            />
          </Poster>
          {/* <Rranking>{props.key}</Rranking> */}
        </PosterBox>
        <Info>
          <Title>{props.title}</Title>
          <Year>{props.year} ・ {props.country}</Year>
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
