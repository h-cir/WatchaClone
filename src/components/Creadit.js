import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Creadit = (props) => {
    const list = props
  
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
        rows: 3,
        slidesToShow: 2,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        
    };

    return (
        <div style={{ padding: "8px 0px 0px" }}>
            <div style={{ margin: "0px 20px" }}>
                <div style={{ overflow: "hidden" }}>
                    <BottomContentSectionTwocontent>
                        출연/제작
                    </BottomContentSectionTwocontent>
                </div>
            </div>

            <div style={{ position: "relative", transform: "translate3d(0,0,0)" }}>
                <div style={{ overflowX: "hidden", overflowY: "hidden" }}>
                    <div style={{ transform: "translateX(0px)", transition: "500ms" }}>
                        <div style={{ margin: "0 15px 0 25px" }}>
                            <BottomContentSectionTwoActorBox>
                                <Container>
                                    <StyledSlider {...settings} >
                                        {list.credits && list.credits.map((v, idx) => {
                                            return (
                                                <li key={idx} style={{ width: "50%", boxSizing: "border-box", paddingRight: "15px" }}>
                                                    <BottomContentSectionTwoActor2>
                                                        <BottomContentSectionTwoActor3 src={v.image} />
                                                        <BottomContentSectionTwoActor4>
                                                            <BottomContentSectionTwoActor5>
                                                                <BottomContentSectionTwoActor6>{v.name}</BottomContentSectionTwoActor6>
                                                                <BottomContentSectionTwoActor7>{v.role}</BottomContentSectionTwoActor7>
                                                            </BottomContentSectionTwoActor5>
                                                        </BottomContentSectionTwoActor4>
                                                    </BottomContentSectionTwoActor2>
                                                </li>
                                            )
                                        })}
                                    </StyledSlider>
                                </Container>
                            </BottomContentSectionTwoActorBox>
                        </div>
                    </div>
                </div>
            </div>
            <hr style={{ border: "0", borderBottom: "1px solid #f0f0f0", margin: "24px 20px 0 20px" }} />
        </div>
    )
}

const BottomContentSectionTwocontent = styled.h2`
float: left;
color: #000;
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin: 8px 0;
`

const BottomContentSectionTwoActorBox = styled.div`
list-style: none;
padding: 0px;
height: 228px;
display: flex;
flex-flow: column wrap;
align-content: flex-start;
margin: 4px -5px 16px;
`

const BottomContentSectionTwoActor2 = styled.a`
display: flex;
-webkit-box-align: center;
align-items: center;
color: inherit;
text-decoration: none;
height: 76px;

`
const BottomContentSectionTwoActor3 = styled.div`
display: flex;
position: relative;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
width: 56px;
height: 56px;
overflow: hidden;
border: none;
margin: 0px 12px 0px 0px;
border-radius: 5px !important;
box-shadow: rgb(0 0 0 / 8%) 0px 0px 0px 1px inset;
background: url("${(props) => props.src}") center center / cover no-repeat;

`

const BottomContentSectionTwoActor4 = styled.div`
display: flex;
flex: 1 1 0%;
-webkit-box-align: center;
align-items: center;
box-sizing: border-box;
height: 100%;
border-bottom: 1px solid rgb(240, 240, 240);
overflow: hidden;
text-overflow: ellipsis;
`
const BottomContentSectionTwoActor5 = styled.div`
flex-direction: column;
-webkit-box-pack: center;
justify-content: center;
padding: 0px 10px 0px 0px;
overflow: hidden;
text-overflow: ellipsis;
`
const BottomContentSectionTwoActor6 = styled.div`
color: rgb(30, 30, 30);
font-size: 17px;
font-weight: 400;
line-height: 22px;
letter-spacing: 0px;
white-space: nowrap;
overflow: hidden;
text-overflow: ellipsis;
`
const BottomContentSectionTwoActor7 = styled.div`
color: rgb(140, 140, 140);
font-size: 14px;
font-weight: 400;
letter-spacing: -0.3px;
line-height: 19px;
white-space: nowrap;
margin-top: 4px;
overflow: hidden;
text-overflow: ellipsis;
`

const StyledSlider = styled(Slider)`
.slick-arrow {
    z-index: 50;
  }
  .slick-next {
    right: 0px
  }
  .slick-prev {
    left: -15px
  }
  .slick-prev.slick-disabled:before,
  .slick-next.slick-disabled:before {
    opacity: 0;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 30px;
    opacity: 1;
    color: gray;
    
  }
 
   
}
`;
const Container = styled.div`
  width: 600px;
`;

export default Creadit