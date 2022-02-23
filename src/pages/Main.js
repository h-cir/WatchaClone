import React, { useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Text } from "../elementsJ";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../components/MovieCard";
import { actionCreators as movieActions } from "../redux/modules/movie";

const Main = (props) => {

  const NextArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block" }}
        onClick={onClick}
      />
    );
  };
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // responsive: [
    //   {
    //     breakpoint: 1100,
    //     settings: {
    //       slidesToShow: 4,
    //       slidesToScroll: 4,
    //     }
    //   },
    //   {
    //     breakpoint: 760,
    //     settings: {
    //       slidesToShow: 3,
    //       slidesToScroll: 3,
    //       initialSlide: 2
    //     }
    //   },
    // ]
  };

  const dispatch = useDispatch();
  const movieList = useSelector((state) => state.movie.list);
  React.useEffect(() => {
    dispatch(movieActions.getMovieListDB());
  }, []);
  const category = [ "popular", "top_rated","now_playing", "upcoming"];

  return (
    <React.Fragment>
      <Section>
        {category.map((e, idx) => {
          return (
            <RankingBox key={idx}>
              <RankingTitle>
                <p>{e}</p>
              </RankingTitle>
              <Frame>
                <Frame2>
                  <Tran>
                    <ListFrame>
                      <StyledSlider {...settings}>
                        {movieList.map((v, i) => {
  
                          return (
                            v.category.includes(category[idx]) ? <MovieCard key={i} {...v}/> : null
                          )
                        })}
                      </StyledSlider>
                    </ListFrame>
                  </Tran>
                </Frame2>
              </Frame>
            </RankingBox>
          );
        })}
      </Section>
    </React.Fragment>
  );
};

const Section = styled.div`
  @media screen and (min-width: 1100px) {
    margin-top: 86px;
  }
  @media screen and (min-width: 760px) {
    margin-top: 80px;
  }
  @media screen and (min-width: 600px) {
    min-height: calc(100vh - 343px);
    margin-top: 74px;
  }
  min-height: calc(100vh - 136px);
  margin-top: 74px;
`;

const RankingBox = styled.div`
  @media screen and (min-width: 1100px) {
    margin-bottom: 42px;
  }
  @media screen and (min-width: 719px) {
    margin-bottom: 30px;
  }
  margin-bottom: 20px;
`;

const RankingTitle = styled.div`
  /* @media screen and (min-width: 1440px) {
    margin-right: auto;
    margin-left: auto;
  }
  @media screen and (min-width: 1100px) {
    margin: 0 60px;
  }
  @media screen and (min-width: 760px) {
    margin: 0 3.5%;
  }
  @media screen and (min-width: 719px) {
    margin-right: 20px;
    margin-left: 20px;
  } */
  white-space: nowrap;
  max-width: 1320px;
  padding: 12px 0 14px;
  margin: 0 3.5%;
  max-height: 60px;
  line-height: 30px;
  p {
    color: #292a32;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 22px;
    font-weight: 700;
    margin: 0px;
  }
`;

const Frame = styled.div`
  max-width: 1320px;
  margin: 0 3.5%;
`;
const Frame2 = styled.div`
  position: relative;
  transform: translate 3d (0px, 0px, 0px);
  margin: 0px -6px;
`;
const Tran = styled.div`
  transition: 500ms;
`;
const ListFrame = styled.div`
  margin-right: 20px;
  margin-left: 15px;
  @media screen and (min-width: 760px) {
    margin-right: 0;
    margin-left: 0;
  }
  @media screen and (min-width: 719px) {
    margin-right: 28px;
    margin-left: 20px;
  }
`;
const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 40%;
    display: block;
    padding: 0;
    transform: translate(0, -50%);
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: transparent;
  }
  .slick-arrow {
    z-index: 50;
  }
  .slick-next {
    right: -20px;
  }
  .slick-prev {
    left: -30px;
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0;
  }
  .slick-prev:before {
    content: "←";
  }
  .slick-prev:before,
  .slick-next:before {
    font-family: "slick";
    font-size: 31px;
    line-height: 1;
    opacity: 0.75;
    color: gray;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;
export default Main;
