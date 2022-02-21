import React, { useState } from "react";
import styled from "styled-components";
import { Grid, Text } from "../elementsJ";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "../components/MovieCard";

const Main = () => {
  const movieList = [
    {
      id: "",
      movieId: "",
      title: "언차티드",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/S52ec-Dy_DoATYuXd-ou8A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ETXlORFV5TmpjMk9UWTRNamMyTVRZaWZRLm1sNmozdURWMXRFU29JOVlsT2dnTDJDNl9uSkE2a2dfUUU4M3J1QXZLUnM",
      year: "2022",
      country: "미국",
      star: "2.8",
    },
    {
      id: "",
      movieId: "",
      title: "더 배트맨",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/62F_-T0pU5kQRtEuiGtFOw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ETXdOekkwTVRrME56QXlPRFkxTVRNaWZRLnJwU3dCTnp4ZnhSU0U5ejNxWXRYMk9TY2hYMlluNEx6bnZfUFFSNmZReE0",
      year: "2022",
      country: "미국",
      star: "3.0",
    },
    {
      id: "",
      movieId: "",
      title: "작은 아씨들",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/6p9tZhTcT_C8eKX6gDipLg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM1J0ZVdKNVkyTjRhWGRyZG5OMmFqWnBiMkZ1SW4wLjEtVXQ0dGxpenZHTUtYellrcjZ5UGVnQ1I1aS1janZqQ05IWDY5VmNDTFk",
      year: "2019",
      country: "미국",
      star: "4.0",
    },
    {
      id: "",
      movieId: "",
      title: "더 룸",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/iUF8F33hOSQPop-IqDzq4Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjlxZVRKb09HaHVjSGsxWm5wcGFYZGhaSEZ1SW4wLkpMT01PbGIycUdNNnR2V19fSjJ1OG51R0xaUnhRaXN2UV9SOWhiT0stR3M",
      year: "2019",
      country: "프랑스",
      star: "3.3",
    },
    {
      id: "",
      movieId: "",
      title: "아가씨",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/ws6AA5m4nRGYO_JdXQ86dw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM0o1Ym1Gb05IRmlaRGRxYzNobWMzaDNlR1p2SW4wLmxVWGRvWGFKMUtCT1N4cV9WYm9WOHlOQzU2a09kT1RjT1NuYk5QTlJwVkU",
      year: "2016",
      country: "한국",
      star: "3.8",
    },
    {
      id: "",
      movieId: "",
      title: "해길랍",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/1ouEsjEY5q1fvWzWMQ7-QQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1UVTNPVFV3TXpnek5EVTNNVEF5TnpVaWZRLktaWGg5X01kQ1c2aTVwV0ZqMnZXUUlBYk9STFk2dWdMQnhsR3VWUkFGazg",
      year: "2018",
      country: "대만",
      star: "2.5",
    },
    {
      id: "",
      movieId: "",
      title: "원라인",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/RBrFklst09Nha-CJV4HafQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMmxrZVc1aWRERndkSFEyYm00M2QzSjVaV2RySW4wLmhYaVduVDZJSUZwdzFUaFItOURRd09LQ3dOOXd1RXlPVUFsRzE4d1ZLZ1k",
      year: "2016",
      country: "한국",
      star: "3.3",
    },
    {
      id: "",
      movieId: "",
      title: "카센타",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/ltvpnjSmq2w8JOoBSX-Iow.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMnRwYVhwcGMzSnVkbk15YTJoblkzZHhaMmhvSW4wLkRYUjF2djlyd2FXTE8tVXNJQWt2Wkx4YU9RNzR5TThuc29Da2cyd1NkY3M",
      year: "2019",
      country: "한국",
      star: "2.7",
    },
    {
      id: "",
      movieId: "",
      title: "업",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/WT8lfYOLB7THGRrnJmuR2Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjVqWm1Gc2NqaGxOWGs1YzIxdWNuQndNVzlsSW4wLlhOdlp0V0xTSWc0RVJicl8zeF9FVEF6ZWMzZGRfYUpjT3BiMG9UdllmVjg",
      year: "2019",
      country: "미국",
      star: "4.1",
    },
    {
      id: "",
      movieId: "",
      title: "크루엘라",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/zLrqRmbDjDtpJTlHF2i4LQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qRXlNamt6TVRFNU5EY3hOakE1TWpFaWZRLjBoVWxTbS01V0dwd3NRQWxNMDl4TjdERUU2b2dPMjZGSHppZHdocm1XeHc",
      year: "2021",
      country: "미국",
      star: "4.0",
    },
    {
      id: "",
      movieId: "",
      title: "언차티드",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/S52ec-Dy_DoATYuXd-ou8A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ETXlORFV5TmpjMk9UWTRNamMyTVRZaWZRLm1sNmozdURWMXRFU29JOVlsT2dnTDJDNl9uSkE2a2dfUUU4M3J1QXZLUnM",
      year: "2022",
      country: "미국",
      star: "2.8",
    },
    {
      id: "",
      movieId: "",
      title: "더 배트맨",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/62F_-T0pU5kQRtEuiGtFOw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ETXdOekkwTVRrME56QXlPRFkxTVRNaWZRLnJwU3dCTnp4ZnhSU0U5ejNxWXRYMk9TY2hYMlluNEx6bnZfUFFSNmZReE0",
      year: "2022",
      country: "미국",
      star: "3.0",
    },
    {
      id: "",
      movieId: "",
      title: "작은 아씨들",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/6p9tZhTcT_C8eKX6gDipLg.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM1J0ZVdKNVkyTjRhWGRyZG5OMmFqWnBiMkZ1SW4wLjEtVXQ0dGxpenZHTUtYellrcjZ5UGVnQ1I1aS1janZqQ05IWDY5VmNDTFk",
      year: "2019",
      country: "미국",
      star: "4.0",
    },
    {
      id: "",
      movieId: "",
      title: "더 룸",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/iUF8F33hOSQPop-IqDzq4Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjlxZVRKb09HaHVjSGsxWm5wcGFYZGhaSEZ1SW4wLkpMT01PbGIycUdNNnR2V19fSjJ1OG51R0xaUnhRaXN2UV9SOWhiT0stR3M",
      year: "2019",
      country: "프랑스",
      star: "3.3",
    },
    {
      id: "",
      movieId: "",
      title: "아가씨",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/ws6AA5m4nRGYO_JdXQ86dw.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMM0o1Ym1Gb05IRmlaRGRxYzNobWMzaDNlR1p2SW4wLmxVWGRvWGFKMUtCT1N4cV9WYm9WOHlOQzU2a09kT1RjT1NuYk5QTlJwVkU",
      year: "2016",
      country: "한국",
      star: "3.8",
    },
    {
      id: "",
      movieId: "",
      title: "해길랍",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/1ouEsjEY5q1fvWzWMQ7-QQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1UVTNPVFV3TXpnek5EVTNNVEF5TnpVaWZRLktaWGg5X01kQ1c2aTVwV0ZqMnZXUUlBYk9STFk2dWdMQnhsR3VWUkFGazg",
      year: "2018",
      country: "대만",
      star: "2.5",
    },
    {
      id: "",
      movieId: "",
      title: "원라인",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/RBrFklst09Nha-CJV4HafQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMmxrZVc1aWRERndkSFEyYm00M2QzSjVaV2RySW4wLmhYaVduVDZJSUZwdzFUaFItOURRd09LQ3dOOXd1RXlPVUFsRzE4d1ZLZ1k",
      year: "2016",
      country: "한국",
      star: "3.3",
    },
    {
      id: "",
      movieId: "",
      title: "카센타",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/ltvpnjSmq2w8JOoBSX-Iow.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMnRwYVhwcGMzSnVkbk15YTJoblkzZHhaMmhvSW4wLkRYUjF2djlyd2FXTE8tVXNJQWt2Wkx4YU9RNzR5TThuc29Da2cyd1NkY3M",
      year: "2019",
      country: "한국",
      star: "2.7",
    },
    {
      id: "",
      movieId: "",
      title: "업",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/WT8lfYOLB7THGRrnJmuR2Q.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXhMMjVqWm1Gc2NqaGxOWGs1YzIxdWNuQndNVzlsSW4wLlhOdlp0V0xTSWc0RVJicl8zeF9FVEF6ZWMzZGRfYUpjT3BiMG9UdllmVjg",
      year: "2019",
      country: "미국",
      star: "4.1",
    },
    {
      id: "",
      movieId: "",
      title: "크루엘라",
      posterUrl:
        "https://an2-img.amz.wtchn.net/image/v2/zLrqRmbDjDtpJTlHF2i4LQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qRXlNamt6TVRFNU5EY3hOakE1TWpFaWZRLjBoVWxTbS01V0dwd3NRQWxNMDl4TjdERUU2b2dPMjZGSHppZHdocm1XeHc",
      year: "2021",
      country: "미국",
      star: "4.0",
    },
  ];
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
  };
  return (
    <React.Fragment>
      <Section>
        <RankingBox>
          <RankingTitle>
            <p>샘플 목록 20개</p>
          </RankingTitle>
          <Frame>
            <Frame2>
              <Tran>
                <ListFrame>
                  <StyledSlider {...settings}>
                    {movieList.map((v, i) => {
                      return <MovieCard key={i} {...v}/>;
                    })}
                  </StyledSlider>
                </ListFrame>
              </Tran>
            </Frame2>
          </Frame>
        </RankingBox>
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
.slick-prev, .slick-next {
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
