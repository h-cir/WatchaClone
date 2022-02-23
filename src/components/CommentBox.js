import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elementsJ";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreators as likeActions } from "../redux/modules/like";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Like from "./Like"

const CommentBox = (props) => {
  const params = useParams();
  const movieId = params.movieid;
  const dispatch = useDispatch();
  const commentList = useSelector((state) => state.comment.list);
  console.log(commentList);

  React.useEffect(() => {
    dispatch(commentActions.getCommentListDB(movieId));
  }, []);
  const LikeComment = () => {
  };

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
    slidesToShow: 2,
    slidesToScroll: 2,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <React.Fragment>
      <div style={{ padding: "8px 0px 0px" }}>
        <div style={{ margin: "0 20px" }}>
          <header style={{ overflow: "hidden" }}>
            <h2
              style={{
                float: "left",
                color: "#000",
                fontSize: "19px",
                fontWeight: "700",
                letterSpacing: "-0.7px",
                lineHeight: "28px",
                margin: "8px 0",
              }}
            >
              코멘트
            </h2>
            <span
              style={{
                display: "inline-block",
                color: "#a0a0a0",
                fontSize: "15px",
                fonwWeight: "400",
                letterSpacing: "-0.5px",
                lineHeight: "20px",
                margin: "12px 0 12px 6px",
              }}
            >
              {commentList.length}
            </span>
          </header>
        </div>
        <div style={{ overflow: "hidden", padding: "0 5px" }}>
          <ul
            style={{
              listStyle: "none",
              padding: "0px",
              whiteSpace: "nowrap",
              marginRight: "-5px !important",
              marginLeft: "-5px !important",
              margin: "14px 20px 30px",
            }}
          >
            <Container>
              <StyledSlider {...settings}>
                {commentList.map((e, i) => {
                  console.log(e)
                  return (
                    <CommentCardFrame key={i}>
                      <UserFrame>
                        <User>
                          <p>{e.userId}</p>
                        </User>
                        <StarFrame>
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM0QTRBNEEiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTEyIDE3Ljk4bC02LjAxNSA0LjM5MmMtLjUwOC4zNzItMS4xOTQtLjEyNi0uOTk4LS43MjVsMi4zMTctNy4wODEtNi4wMzUtNC4zNjdjLS41MS0uMzY5LS4yNDctMS4xNzUuMzgyLTEuMTc0bDcuNDQ3LjAxNiAyLjI4Ni03LjA5MWMuMTkyLS42IDEuMDQtLjYgMS4yMzMgMGwyLjI4NiA3LjA5IDcuNDQ3LS4wMTVjLjYyOS0uMDAxLjg5LjgwNS4zOCAxLjE3NGwtNi4wMzMgNC4zNjcgMi4zMTYgNy4wOGMuMTk2LjYtLjQ5IDEuMDk4LS45OTkuNzI2TDEyIDE3Ljk4eiIvPgo8L3N2Zz4K"
                            width="16px"
                            height="16px"
                            alt="star"
                          />
                          <span>2.0</span>
                        </StarFrame>
                      </UserFrame>
                      <CommentFrame>
                        <CommentBoard>
                          <p>{e.comment}</p>
                        </CommentBoard>
                      </CommentFrame>
                      <LikesFrame>
                        <ThumsUp></ThumsUp>
                        <em>{e.countLikes}</em>
                        {/* 대댓글 갯수 */}
                        {/* <span></span>
          <em>0</em> */}
                      </LikesFrame>
                      <Like commentId={e.commentId} userId={e.userId}/>
                      {/* <LikeButtonFrame>
                        <LikeButton
                          onClick={() => {
                            LikeComment();                         
                          }}
                        >
                          좋아요
                        </LikeButton>
                        <UnlikeButton
                          onClick={() => {
                            // deleteComment();                            
                          }}
                        >
                          좋아요
                        </UnlikeButton>

                      </LikeButtonFrame> */}
                    </CommentCardFrame>
                  );
                })}
              </StyledSlider>
            </Container>
          </ul>
        </div>
      </div>
    </React.Fragment>
  );
};

const Container = styled.div`
  width: 590px;
`;
const StyledSlider = styled(Slider)`
  .slick-prev,
  .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
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
const CommentCardFrame = styled.div`
  background-color: rgb(242, 242, 242);
  box-sizing: border-box;
  padding: 0px 12px;
  border-radius: 6px;
  overflow: hidden;
`;
const UserFrame = styled.div`
  display: flex;
  border-bottom: 1px solid rgb(229, 229, 229);
  overflow: hidden;
`;
const User = styled.div`
  display: flex;
  flex: 1 1 0%;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(0, 0, 0);
  text-decoration: none;
  p {
    color: rgb(31, 31, 31);
    font-size: 17px;
    font-weight: 400;
    letter-spacing: -0.7px;
    line-height: 22px;
    margin-bottom: 2px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const StarFrame = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  background: rgb(255, 255, 255);
  color: rgb(74, 74, 74);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 19px;
  box-sizing: border-box;
  min-width: 55px;
  height: 26px;
  padding: 0px 8px;
  border: 1px solid rgb(234, 234, 234);
  border-radius: 13px;
  margin: 15px 0px 0px 16px;
  img {
    vertical-align: top;
    margin: 0px 3px 0px 0px;
    border-style: none;
    width: 16px;
    aspect-ratio: auto 16 / 16;
    height: 16px;
  }
`;
const CommentFrame = styled.div`
  position: relative;
  height: 120px;
  margin: 12px 0px 15px;
  a {
    /* color: rgb(0, 0, 0);
    text-decoration: none;
}
a {
    background-color: transparent;
} */
  }
`;
const CommentBoard = styled.div`
  word-break: break-all;
  max-height: 120px;
  margin: 0px;
  overflow: hidden;
  p {
    white-space: pre-wrap;
    opacity: 1;
    transition: opacity 400ms ease 0s;
  }
`;
const LikesFrame = styled.div`
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  color: rgb(120, 120, 120);
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.3px;
  line-height: 19px;
  height: 44px;
  border-top: 1px solid rgb(229, 229, 229);
  border-bottom: 1px solid rgb(229, 229, 229);
  overflow: hidden;
`;
const ThumsUp = styled.div`
  display: inline-block;
  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgZmlsbD0iIzc4Nzg3OCI+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik02Ljc1IDkuNDg1aC0zYTEgMSAwIDAgMC0xIDF2MTBhMSAxIDAgMCAwIDEgMWgzYTEgMSAwIDAgMCAxLTF2LTEwYTEgMSAwIDAgMC0xLTFNMjAuNjU3IDguNTY2YTIuMzYzIDIuMzYzIDAgMCAwLTEuNzc5LS44MTNIMTYuNjJsLjE2NC0uNjI3Yy4xMzctLjUyOC4yMDEtMS4xMi4yMDEtMS44NjMgMC0xLjkxOS0xLjM3NS0yLjc3OC0yLjczOC0yLjc3OC0uNDQ0IDAtLjc2Ni4xMjMtLjk4Ni4zNzYtLjIuMjI3LS4yODIuNTMtLjI0My45MzVsLjAzIDEuMjMtMi45MDMgMi45NGMtLjU5My42LS44OTQgMS4yMy0uODk0IDEuODcydjkuNjQ3YS41LjUgMCAwIDAgLjUuNWg3LjY4N2EyLjM4OCAyLjM4OCAwIDAgMCAyLjM0OC0yLjA3bDEuNDQ1LTcuNDUyYTIuNDQgMi40NCAwIDAgMC0uNTc0LTEuODk3Ii8+CiAgICAgICAgPC9nPgogICAgPC9nPgo8L3N2Zz4K)
    center center / contain no-repeat;
  width: 18px;
  height: 18px;
  margin: 0px 3px;
`;
/* 대댓글 갯수 */
/* span{
    display: inline-block;
background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K) center center / contain no-repeat;
width: 18px;
height: 18px;
margin: 0px 3px 0px 13px;
} */

const LikeButtonFrame = styled.div`
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 9.5px 0px;
  margin: 0px -4px;
`;

const LikeButton = styled.button`
  background: rgb(255, 47, 110);
  color: rgb(255, 47, 110);
  border-radius: 3px;
  background: none;
  border: none;
  margin: 0px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 2px 8px;
`;
//이미 좋아요이면 이 버튼
const UnlikeButton = styled.button`
  border: none;
  margin: 0px;
  cursor: pointer;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  padding: 2px 8px;
  background: rgb(255, 47, 110);
  color: rgb(255, 255, 255);
  border-radius: 3px;
`;

export default CommentBox;
