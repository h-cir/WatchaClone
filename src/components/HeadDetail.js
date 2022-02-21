import React from "react";
import styled from "styled-components";
import Star from "./Star"
import CommentModal from "./CommentModal";

const HeadDetail = (props) => {
    return (
        <>
            <HeaderSection>
                <Header1>
                    <Header2>
                        <HeaderLeft />
                        <HeaderImage src={props.src}>
                            <LeftGradint />
                            <RightGradint />
                        </HeaderImage>
                        <HeaderRight />
                        <Headergradient />
                    </Header2>

                    <HeaderTitlePic>
                        <HeaderTitlePic2>
                            <HeaderTitlePic3>
                                <HeaderTitlePic4 src="https://an2-img.amz.wtchn.net/image/v2/PWQBMb7WWIlmH3crrJ8Qig.jpg?jwt=ZXlKaGJHY2lPaUpJVXpJMU5pSjkuZXlKdmNIUnpJanBiSW1SZk1qZ3dlRFF3TUhFNE1DSmRMQ0p3SWpvaUwzWXlMM04wYjNKbEwybHRZV2RsTHpFMk5ETXlORFV5TmpjMk9UWTRNamMyTVRZaWZRLjQtQnpYVlJpRnFBajNpd29XTDBYY3lNRV90WlhSN25MVWJNWHFPTEI2OU0"></HeaderTitlePic4>
                            </HeaderTitlePic3>
                        </HeaderTitlePic2>
                    </HeaderTitlePic>
                </Header1>
                <HeaderBottom>
                    <HeaderBottomOne>
                        <HeaderBottomLeft>
                            <Title>드라이브마이카</Title>
                            <Detail>2021 ・ 드라마 ・ 일본</Detail>
                            <ContentRating>평균 ★4.1 (9,644명)</ContentRating>
                            <ConetentAction>
                                <ConetentActionOne>
                                    <ConetentActionpyungga>
                                        <ConetentActionpyunggaOne>평가하기</ConetentActionpyunggaOne>
                                    </ConetentActionpyungga>

                                    <ConetentActionstar>
                                        <ConetentActionstarOne>
                                            <Star />
                                        </ConetentActionstarOne>
                                    </ConetentActionstar>
                                </ConetentActionOne>

                                <ConetentActionTwo />
                                <ConetentActionThree>
                                  
                                  
                                        <CommentModal/>
                                  
                                </ConetentActionThree>
                            </ConetentAction>
                        </HeaderBottomLeft>
                    </HeaderBottomOne>
                </HeaderBottom>
            </HeaderSection>

        </>
    )
}
HeadDetail.defaultProps = {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeECGbHJNVzgkQhtsbsMfYQFWxyTZDAekDg&usqp=CAU"
}
const HeaderSection = styled.div`
@media only screen and (min-width: 719px) {
    border-bottom: 1px solid rgb(227, 227, 227);
    }
    background: rgb(255, 255, 255);
    display: block;
`
const Header1 = styled.div`
@media only screen and (min-width: 719px) {
    padding: 300px 0px 0px;
    }
    position: relative;
    box-sizing: border-box;
    min-height: 209px;
    padding: 44px 0px 0px;
`
const Header2 = styled.div`
    display: flex;
    position: absolute;
    top: 0px;
    left: 0px;
    -webkit-box-pack: center;
    justify-content: center;
    background: black;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

const HeaderTitlePic = styled.div`
@media only screen and (min-width: 1023px) {
    max-width: 960px;
    }   
max-width: 640px;
margin: 0 auto;
`

const HeaderTitlePic2 = styled.div`
@media only screen and (min-width: 1023px) {
    padding: 0 0 0 166px;
    }   
position: relative;
bottom: unset;
padding: 0 0 0 153px;
display: flex;
align-items: flex-end;
`


const HeaderTitlePic3 = styled.div`
@media only screen and (min-width: 1023px) {
 
    }   
position: absolute;
top: -22px;
left: 0;
width: 153px;
height: 221px;
border-width: 2px;
box-shadow: 0 0 2px rgb(0 0 0 / 30%);
overflow: hidden;
display: block;
flex-shrink: 0;
box-sizing: border-box;
border: solid 1px #fff;
border-radius: 3px;
background: #f8f8f8;
transition: 300ms;
`
const HeaderTitlePic4 = styled.img`
vertical-align: top;
width: 100%;
height: 100%;
opacity: 1;
object-fit: cover;
transition: opacity 420ms ease 0s;
border-style: none;
`


const HeaderLeft = styled.div`
     flex: 1 1 0%;
     background: rgb(20, 20, 20);
`

const HeaderImage = styled.div`
    background: url("${(props) => props.src}") center center / cover no-repeat;
    position: relative;
    top: auto;
    left: auto;
    width: 1200px;
    height: 100%;
    filter: none;
    `

const HeaderRight = styled.div`
    flex: 1 1 0%;
    background: rgb(24, 22, 11);
`
const Headergradient = styled.div`
@media only screen and (min-width: 719px) {
    background-image: linear-gradient(-180deg, rgba(0, 0, 0, 0.35) 2%, rgba(0, 0, 0, 0.2) 70%, rgba(0, 0, 0, 0.5) 100%);
    }
    position: absolute;
    top: 0px;
    left: 0px;
    background-image: linear-gradient(-180deg, rgba(20, 20, 20, 0.3) 1%, rgba(20, 20, 20, 0.5) 67%, rgb(20, 20, 20) 98%);
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: block;
`
const LeftGradint = styled.div`
@media only screen and (min-width: 719px) {
    display: block;
    position: absolute;
    top: 0px;
    bottom: 0px;
    left: 0px;
    background-image: linear-gradient(-90deg, rgba(42, 28, 16, 0) 0%, rgb(42, 28, 16) 100%);
    width: 100px;
    }
}
`
const RightGradint = styled.div`
@media only screen and (min-width: 719px) {
    display: block;
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    background-image: linear-gradient(90deg, rgba(29, 31, 43, 0) 0%, rgb(29, 31, 43) 100%);
    width: 100px;
    }
`

const HeaderBottom = styled.div`
    padding: 14px 16px 22px;
`

const HeaderBottomOne = styled.div`
@media only screen and (min-width: 1023px) {
    max-width: 960px;
    }   
    max-width: 640px;
    margin: 0px auto;
    text-align: center;
`


const HeaderBottomLeft = styled.div`
@media only screen and (min-width: 1023px) {
    margin: 0 0 0 191px;
    }   
    text-align: left;
    margin: 0px 0px 0px 173px;
}
`
const Title = styled.h1`
display: block;
width: 520px;
font-size: 25px;
font-weight: 700;
letter-spacing: -0.9px;
line-height: 33px;
overflow: hidden;
text-overflow: ellipsis;
margin: 0px;
`

const Detail = styled.div`
display: block;
font-size: 17px;
font-weight: 400;
letter-spacing: -0.7px;
line-height: 22px;
margin-top: 4px;
color: rgba(0, 0, 0, 0.5);
}
`

const ContentRating = styled.div`
border-top: 1px solid rgb(237, 237, 237);
border-bottom: 1px solid rgb(237, 237, 237);
margin-top: 14px;
color: rgb(40, 40, 40);
font-size: 15px;
font-weight: 400;
letter-spacing: -0.5px;
line-height: 20px;
white-space: pre-wrap;
text-align: left;
box-sizing: border-box;
padding: 9px 0px;
`

const ConetentAction = styled.div`
flex-direction: row;
height: 58px;
margin-top: 20px;
display: flex;
-webkit-box-align: center;
align-items: center;
text-align: left;
}
`
const ConetentActionpyungga = styled.div`
font-size: 12px;
line-height: 16px;
color: rgb(120, 120, 120);
text-align: center;
display: block;
`
const ConetentActionpyunggaOne = styled.div`
display: inline-block;
font-size: 12px;
line-height: 16px;
color: rgb(120, 120, 120);
`
const ConetentActionstar = styled.div`
width: 190px;
margin: 3px auto 0px;
position: relative;
text-align: center;
cursor: pointer;
height: 40px;

`
const ConetentActionstarOne = styled.div`
display: inline-block;
vertical-align: top;
`
const ConetentActionOne = styled.div`
width: 238px;
height: 57px;
margin: 0px;
`
const ConetentActionTwo = styled.div`
width: 1px;
height: 100%;
float: left;
background: rgb(237, 237, 237);
`
const ConetentActionThree = styled.div`
@media only screen and (min-width: 1023px) {
    padding: 0 0 0 30px;
    margin: 0 -16px;
    }  
    width: auto;
    padding: 0px 20px;
    margin: 7.5px -1.5px;
    
`
export default HeadDetail