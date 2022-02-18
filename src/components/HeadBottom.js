import React from "react";
import styled from "styled-components";

const HeaderBottom = () => {
    return ( <Bottom>
        <BottomOne>
            <BottomContent>
                <BottomContentOne>
                    <BottomContentSectionOne>
                        <div>

                            <BottomContentSectionOneDiv1>
                                <BottomContentSectionOneBasic>
                                    기본정보
                                </BottomContentSectionOneBasic>
                            </BottomContentSectionOneDiv1>
                        </div>
                        <div>

                            <BottomContentSectionOneDiv2>
                                <BottomContentSectionOneArticle>
                                    <BottomContentSectionOneArticleOne>
                                        ドライブ・マイ・カー
                                        <br />
                                        <span>2021 · 일본 · 드라마</span>
                                        <br />
                                        <span>2시간 59분 · 15세</span>                                       </BottomContentSectionOneArticleOne>
                                    <BottomContentSectionOneArticleTwo>
                                        <BottomContentSectionOneArticleTwoDiv>
                                        누가 봐도 아름다운 부부 가후쿠와 오토. 우연히 아내의 외도를 목격한 가후쿠는 이유를 묻지 못한 채 갑작스럽게 아내의 죽음을 맞이하게 된다. 2년 후 히로시마의 연극제에 초청되...
                                        </BottomContentSectionOneArticleTwoDiv>
                                    </BottomContentSectionOneArticleTwo>
                                </BottomContentSectionOneArticle>
                            </BottomContentSectionOneDiv2>
                        </div>
                    </BottomContentSectionOne>

                    <BottomContentSectionTwo>출연/제작</BottomContentSectionTwo>
                    <BottomContentSectionThree>별점 그래프</BottomContentSectionThree>
                    <BottomContentSectionFour>코멘트</BottomContentSectionFour>
                </BottomContentOne>
            </BottomContent>



            <BottomSide>
            <BottomSideTwo>
            <div>
            <BottomGallery>사진</BottomGallery>
            <BottomVideo>비디오</BottomVideo>
            </div>
            </BottomSideTwo>
            </BottomSide>
        </BottomOne>
    </Bottom>)
}

const Bottom = styled.div`
padding: 28px 0px 48px;
overflow: hidden;
display: block;
`
const BottomOne = styled.div`
max-width: 976px;
margin: 0px auto;
display: block;
`
const BottomContent = styled.div`
float: left;
width: 640px;
padding: 0px 8px;
display: block;
`
const BottomContentOne = styled.div`
border-right: 1px solid;
    border-left: 1px solid;
    border-top: 1px solid;
    border-top-left-radius: 6px;
    border-top-right-radius: 6px;
    background: rgb(255, 255, 255);
    overflow: hidden;
    border-color: rgb(227, 227, 227) !important;
    display: block;
`
const BottomContentSectionOne = styled.div`
padding: 8px 0px 0px;
display: block;
`
const BottomContentSectionOneDiv1 = styled.div`
margin: 0px 20px;
display: block;
`
const BottomContentSectionOneBasic = styled.div`

color: rgb(0, 0, 0);
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin: 8px 0px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;
margin-inline-start: 0px;
margin-inline-end: 0px;
`
const BottomContentSectionOneDiv2 = styled.div`
margin: 0px 20px;
display: block;
`
const BottomContentSectionOneArticle = styled.div`
font-size: 15px;
font-weight: 400;
letter-spacing: -0.5px;
line-height: 20px;
color: rgb(74, 74, 74);
display: block;
`
const BottomContentSectionOneArticleOne = styled.div`
color: rgb(74, 74, 74);
font-size: 15px;
font-weight: 400;
letter-spacing: -0.2px;
line-height: 24px;
margin: 8px 0px;
display: block;
`
const BottomContentSectionOneArticleTwo = styled.div`
word-break: break-all;
max-height: 72px;
margin: 0px;
overflow: hidden;
font-size: 15px;
font-weight: 400;
letter-spacing: -0.5px;
line-height: 20px;
color: rgb(74, 74, 74);
display: block;
`
const BottomContentSectionOneArticleTwoDiv = styled.div`
white-space: pre-wrap;
color: rgb(74, 74, 74);
font-size: 15px;
font-weight: 400;
letter-spacing: -0.2px;
line-height: 24px;
`

const BottomContentSectionTwo = styled.div`
padding: 8px 0px 0px;
display: block;
`

const BottomContentSectionThree = styled.div`
padding: 8px 0px 0px;
display: block;
`
const BottomContentSectionFour = styled.div`
padding: 8px 0px 0px;
display: block;
`
const BottomSide = styled.div`
float: right;
width: 320px;
padding: 0px 8px;
display: block;
`
const BottomSideTwo = styled.div`
border: 1px solid;
border-radius: 6px;
background: rgb(255, 255, 255);
overflow: hidden;
border-color: rgb(227, 227, 227) !important;
display: block;
`
const BottomGallery = styled.div`
padding: 8px 0px 0px;
`
const BottomVideo = styled.div`
padding: 8px 0px 0px;
`
export default HeaderBottom