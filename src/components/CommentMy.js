import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as commentActions } from "../redux/modules/comment";
import { actionCreators as likeActions } from "../redux/modules/like";
import CommentModal from "./CommentModal";

const CommentMy = (props) => {
  const params = useParams();
  const dispatch = useDispatch();
  const [edit, setEdit] = React.useState(true);
  const [title, setTitle] = React.useState();

  React.useEffect(() => {
    dispatch(commentActions.getCommentDB(params.movieid));
    dispatch(likeActions.loadUserDB());
  }, []);

  const deleteComment = () => {
    dispatch(commentActions.deleteCommentDB(myComment.commentId));
  };
  const updateComment = () => {
    dispatch(commentActions.updateCommentDB(myComment.commentId));
  };

  const myComment = useSelector((state) => state.comment.mylist);
  console.log(myComment);
  const exist = myComment ? true : false;
  console.log(exist);
  const myId = useSelector((state) => state.like.userlist?.userId);
  console.log(myId);
  const yesComment = myComment?.userId === myId ? true : false;

  if (exist && yesComment) {
    return (
      <React.Fragment>
        <SectionBlock>
          <Frame2>
            <div>
              <Frame3>
                <MyCommentSection>
                  <MyCommentBlock>
                    <div>
                      <Profile>
                        <ProfilePhotoImage></ProfilePhotoImage>
                      </Profile>
                    </div>
                    <StylelessLocalLink>
                      <MyComment>
                        <StyledSelf>
                          <StyledText>
                            {myComment && myComment.comment}
                          </StyledText>
                        </StyledSelf>
                      </MyComment>
                    </StylelessLocalLink>
                    <CommentUpdateButtons>
                      <CommentUpdateButtonListItem>
                        <CommentUpdateButton
                          onClick={() => {
                            deleteComment();
                          }}
                        >
                          <img
                            src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgdmlld0JveD0iMCAwIDE4IDE4Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI0EwQTBBMCIgZD0iTTUuMjUgMTQuMjVoNy41di03LjVoMS41VjE1YS43NS43NSAwIDAgMS0uNzUuNzVoLTlhLjc1Ljc1IDAgMCAxLS43NS0uNzVWNi43NWgxLjV2Ny41ek0xMiA0LjVoMy43NVY2SDIuMjVWNC41SDZWM2EuNzUuNzUgMCAwIDEgLjc1LS43NWg0LjVBLjc1Ljc1IDAgMCAxIDEyIDN2MS41em0tMS41IDB2LS43NWgtM3YuNzVoM3pNNi43NSA2Ljc1aDEuNXY2Ljc1aC0xLjVWNi43NXptMyAwaDEuNXY2Ljc1aC0xLjVWNi43NXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="
                            alt="delete comment"
                            style={{
                              verticalAlign: "top",
                              margin: "0px 3px 0px 0px",
                              borderStyle: "none",
                            }}
                          />
                          삭제
                        </CommentUpdateButton>
                      </CommentUpdateButtonListItem>
                      <After></After>
                      <CommentUpdateButtonListItem>
                        <CommentModal edit={edit}/>
                      </CommentUpdateButtonListItem>
                    </CommentUpdateButtons>
                  </MyCommentBlock>
                </MyCommentSection>
              </Frame3>
            </div>
          </Frame2>
        </SectionBlock>
      </React.Fragment>
    );
  }
  return <></>;
};

const SectionBlock = styled.div`
  @media (min-width: 719px) {
    margin: 0px 0px 12px;
  }
`;
const Frame2 = styled.div`
  border: 1px solid;
  border-radius: 6px;
  background: rgb(255, 255, 255);
  overflow: hidden;
  border-color: rgb(227, 227, 227) !important;
`;
const Frame3 = styled.div`
  margin: 0px 20px;
`;

const MyCommentSection = styled.div`
  @media (min-width: 719px) {
    padding: 20px 0px;
    border-top: 0px;
  }
  text-align: center;
  padding: 24px 0px 8px;
  border-top: 1px solid rgb(237, 237, 237);
`;

const MyCommentBlock = styled.div`
  @media (min-width: 719px) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
  }
`;

const Profile = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 50%;
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 56px;
  height: 56px;
  overflow: hidden;
  margin: 0px auto;
`;

const ProfilePhotoImage = styled.div`
  position: relative;
  z-index: 1;
  background: url(https://an2-img.amz.wtchn.net/image/v2/ZfxY2XnJ2K7s5JVKKhXv7A.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1UQXdlREV3TUNKZExDSndJam9pTDNZeUwzTjBiM0psTDNWelpYSXZWMUpSZUVSUk1WRlNiWEZrYkM5d2NtOW1hV3hsTHpFMk1UVTVPRFl6T0RReE9ERXhNamszT0RRaWZRLkpwcm1tLVNpSDdETldhNTlmYjhfNUl3STFCYmZPajd0UDhjQXlBNlRZMjQ)
    no-repeat center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const StylelessLocalLink = styled.div`
  color: rgb(0, 0, 0);
  text-decoration: none;
  flex: 1 1 0%;
`;

const MyComment = styled.div`
  @media (min-width: 719px) {
    flex: 1 1 0%;
    text-align: left;
    margin: 0px 16px;
  }
  font-size: 15px;
  font-weight: 400;
  letter-spacing: -0.5px;
  line-height: 20px;
  word-break: break-all;
  margin: 8px 0px 0px;
`;

const StyledSelf = styled.div`
  word-break: break-all;
  max-height: 60px;
  margin: 0px;
  overflow: hidden;
`;

const StyledText = styled.div`
  white-space: pre-wrap;
`;

const CommentUpdateButtons = styled.div`
  list-style: none;
  margin: 0px;
  font-size: 12px;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 16px;
  text-align: center;
  padding: 16px 0px 13px;
  /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px; */
`;
const CommentUpdateButton = styled.button`
  background: none;
  padding: 0px;
  border: none;
  margin: 0px;
  cursor: pointer;
  color: rgb(140, 140, 140);
  vertical-align: top;
  font-size: 100%;
  line-height: normal;
`;
const CommentUpdateButtonListItem = styled.div`
  display: inline-block;
`;
const After = styled.div`
  content: "";
  display: inline-block;
  background: rgb(140, 140, 140);
  width: 1px;
  height: 8px;
  margin: 0px 17px;
`;

export default CommentMy;
