import React from "react";
import styled from "styled-components";
import { Grid, Text } from "../elementsJ";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as likeActions } from "../redux/modules/like";

const Like = (props) => {
    console.log(props)
    const dispatch = useDispatch();
    const likeList = useSelector((state) => state.like.list);
    console.log(likeList)
    React.useEffect(() => {
        dispatch(likeActions.likeUserListDB(props.commentId));
      }, []);
      const likeComment = () => {
        dispatch(likeActions.likeCommentDB(props.commentId,props.userId));
      };
      const unlikeComment = () => {
        dispatch(likeActions.unlikeCommentDB(props.commentId,props.userId));
      };

  return (
    <LikeButtonFrame>
      <LikeButton
        onClick={() => {
          likeComment();
        }}
      >
        좋아요
      </LikeButton>
      <UnlikeButton
        onClick={() => {
          unlikeComment();
        }}
      >
        좋아요
      </UnlikeButton>
    </LikeButtonFrame>
  );
};

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
export default Like;
