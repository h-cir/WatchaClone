import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elementsJ";

const Moviecard = () => {
  return (
    <React.Fragment>
      <Divv1>
        <div>
          <PosterFrame>
            <Div1>
              <Poster
                src="https://an2-img.amz.wtchn.net/image/v2/zLrqRmbDjDtpJTlHF2i4LQ.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk5Ea3dlRGN3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk1qRXlNamt6TVRFNU5EY3hOakE1TWpFaWZRLjBoVWxTbS01V0dwd3NRQWxNMDl4TjdERUU2b2dPMjZGSHppZHdocm1XeHc"
                alt=""
              />
            </Div1>
            <div>1</div>
          </PosterFrame>
          <Info>
            <div>크루엘라</div>
            <div>2022 미국</div>
            <div>
              <span>평균</span>
              <svg
                width="12"
                height="10"
                viewBox="0 0 12 10"
                xmlns="http://www.w3.org/2000/svg"
                fill="#555765"
                class="css-1g90l0x"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M6 8.02L3.14233 9.91131C2.91094 10.0644 2.61352 9.84836 2.68767 9.58097L3.60334 6.27872L0.921531 4.14536C0.704379 3.97262 0.817982 3.62299 1.0952 3.61087L4.51878 3.46128L5.719 0.251483C5.81619 -0.00842059 6.18381 -0.00842094 6.281 0.251483L7.48122 3.46128L10.9048 3.61087C11.182 3.62299 11.2956 3.97262 11.0785 4.14536L8.39666 6.27872L9.31233 9.58097C9.38648 9.84836 9.08906 10.0644 8.85767 9.91131L6 8.02Z"
                ></path>
              </svg>
              <span>2.8</span>
            </div>
          </Info>
        </div>
      </Divv1>
    </React.Fragment>
  );
};

const Divv1 = styled.div`
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 33.333333333333336%;
    padding: 0 5px;
    margin: 0 0 24px;
`;

const PosterFrame =styled.div`
    position: relative;
    width: 100%;
    height: 0;
    padding-bottom: 145.37037037037038%;
`;

const Div1 = styled.div`
    /* position: relative; */
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
    -webkit-transition: 300ms;
    transition: 300ms;
    display:block;
`;
const Poster = styled.img`
vertical-align: top;
    width: 100%;
    height: 100%;
    opacity: 1;
    object-fit: cover;
    transition: opacity 420ms ease 0s;
        border-style: none;

/* display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
    width: 33.333333333333336%;
    padding: 0 5px;
    margin: 0 0 24px; */
`;
const Info = styled.div`
text-align: left;
    width: calc(100% - 10px);
    margin: 5px 10px 0 0;
`;
export default Moviecard;
