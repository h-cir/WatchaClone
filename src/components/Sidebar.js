import React from "react";
import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NextArrow from "../arrow/NextArrow"
import PrevArrow from "../arrow/PrevArrow"

const Sidebar = (props) => {
    const sliderRef = React.useRef(null)
    const list = props

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
        <>
            <div style={{ padding: "8px 0px 0px" }}>
                <div style={{ margin: "0px 20px" }}>
                    <BottomContentBasicInfo>
                        갤러리
                    </BottomContentBasicInfo>
                </div>
                <div style={{ position: "relative" }}>
                    <BottomVideo2>
                        <BottomVideo3>
                            <BottomVideo4>
                                <BottomVideo5>
                                    {/* 반복지점 */}
                                    <Container>
                                        <Slider ref={sliderRef} {...settings} >
                                            {list.galleryUrls && list.galleryUrls.map((v, idx) => {
                                                return (

                                                    <BottomVideo6 key={idx}>
                                                        <BottomVideo7>
                                                            <BottomGallery2 src={v} />
                                                        </BottomVideo7>
                                                    </BottomVideo6>
                                                )
                                            })}
                                        </Slider>
                                    </Container>
                                    {/* 반복지점 */}
                                </BottomVideo5>
                            </BottomVideo4>
                        </BottomVideo3>
                    </BottomVideo2>
                </div>
                <hr style={{ border: "0", borderBottom: "1px solid #f0f0f0", margin: "0px 20px" }} />
            </div>



            <BottomGallery>
                <div style={{ margin: "0px 20px" }}>
                    <header style={{ overflow: "hidden" }}>
                        <BottomGalleryh2>
                            동영상
                        </BottomGalleryh2>
                    </header>
                </div>
                <div style={{ position: "relative" }}>
                    <BottomVideo2>
                        <BottomVideo3>
                            <BottomVideo4>
                                <BottomVideo5>
                        
                                    {/* 반복지점 */}
                                    <Container>
                                        <StyledSlider {...settings} >
                                            {list.videoUrls && list.videoUrls.map((v, idx) => {
                                                const url = v.url
                                                const youtube_id = url.split('=')[1]
                                                const thumbnail = `https://img.youtube.com/vi/${youtube_id}/0.jpg`
                                                return (
                                                    <BottomVideo6 key={idx}>
                                                        <BottomNewVideo href={v.url}>
                                                            <BottomNewVideoVideo>
                                                                <BottomNewVideoVideo2 src={thumbnail} />
                                                                <BottomNewVideoVideo3>
                                                                    <BottomNewVideoVideo4 />
                                                                </BottomNewVideoVideo3>
                                                            </BottomNewVideoVideo>
                                                        </BottomNewVideo>
                                                        <BottomNewVideoText>
                                                            <div style={{ margin: "8px 0px 0px", maxHeight: "40px", margin: "0px", overflow: "hidden" }}>
                                                                <div style={{ whiteSpace: "pre-wrap" }}>{v.title}</div>
                                                            </div>
                                                        </BottomNewVideoText>
                                                    </BottomVideo6>
                                                )
                                            })}
                                        </StyledSlider>
                                    </Container>
                                    {/* 반복지점 */}
                                </BottomVideo5>
                            </BottomVideo4>
                        </BottomVideo3>
                    </BottomVideo2>
                </div>
            </BottomGallery>

        </>
    )
}

const BottomContentBasicInfo = styled.div`
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin-block-start: 0.83em;
margin-block-end: 0.83em;

`

const BottomGallery = styled.div`
padding: 8px 0px 0px;
`

const BottomGalleryh2 = styled.h2`
float: left;
color: rgb(0, 0, 0);
font-size: 19px;
font-weight: 700;
letter-spacing: -0.7px;
line-height: 28px;
margin: 8px 0px;
 `

const BottomVideo2 = styled.div`
 overflow: hidden;
 padding: 0px 5px;
 margin: 0px -5px;

 `
const BottomVideo3 = styled.div`
 transform: translateX(0px);
 transition: 500ms;
}
 `
const BottomVideo4 = styled.div`
 margin: 0px 20px;
}
`
const BottomVideo5 = styled.ul`
list-style: none;
padding: 0px;
white-space: nowrap;
margin-bottom: 25px;
margin-right: -5px !important;
margin-left: -5px !important;
}
`

//반복되는 지점
const BottomVideo6 = styled.li`
display: inline-block;
vertical-align: top;
box-sizing: border-box;
padding: 0px 5px;
`

const BottomVideo7 = styled.div`
position: relative;
overflow: hidden;
background: rgb(248, 248, 248);
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.08);
border-radius: 3px;
padding-bottom: 66.4615%;
`
const BottomGallery2 = styled.span`
background: url("${(props) => props.src}") center center / cover no-repeat;
display: inline-block;
position: absolute;
inset: 0px;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
opacity: 1;
transition: all 300ms ease 0s;
`

const BottomNewVideo = styled.a`
color: rgb(0, 0, 0);
text-decoration: none;
`
const BottomNewVideoVideo = styled.div`
overflow: hidden;
background: rgb(248, 248, 248);
box-sizing: border-box;
border: 1px solid rgba(0, 0, 0, 0.08);
border-radius: 3px;
position: relative;
padding-bottom: 66.4615%;
`
const BottomNewVideoVideo2 = styled.span`
display: inline-block;
position: absolute;
inset: 0px;
background-size: cover;
background-position: center center;
background-repeat: no-repeat;
opacity: 1;
transition: all 300ms ease 0s;
// background-image: url(https://img.youtube.com/vi/Eio2Kew3_6Y/0.jpg);
background: url("${(props) => props.src}") center center / cover no-repeat;
`
const BottomNewVideoVideo3 = styled.div`
display: flex;
position: absolute;
inset: 0px;
-webkit-box-pack: center;
justify-content: center;
-webkit-box-align: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.3);
`
const BottomNewVideoVideo4 = styled.span`
display: inline-block;
background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTUiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjUxIi8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTE2IDMwYzcuNzMyIDAgMTQtNi4yNjggMTQtMTQgMC03LjczMS02LjI2OC0xNC0xNC0xNFMyIDguMjY5IDIgMTZjMCA3LjczMiA2LjI2OCAxNCAxNCAxNG0wIDJDNy4xNjMgMzIgMCAyNC44MzcgMCAxNiAwIDcuMTY0IDcuMTYzIDAgMTYgMHMxNiA3LjE2NCAxNiAxNmMwIDguODM3LTcuMTYzIDE2LTE2IDE2Ii8+CiAgICAgICAgPHBhdGggZmlsbD0iI0ZGRiIgZD0iTTEyIDIyLjA5VjkuOTFhLjUuNSAwIDAgMSAuNzY5LS40MjFsOS41NjggNi4wODlhLjUuNSAwIDAgMSAwIC44NDRsLTkuNTY4IDYuMDlBLjUuNSAwIDAgMSAxMiAyMi4wOSIvPgogICAgPC9nPgo8L3N2Zz4K) center center / contain no-repeat;
width: 24px;
height: 24px;
`

const BottomNewVideoText = styled.div`
font-size: 13px;
font-weight: 600;
letter-spacing: -0.5px;
line-height: 20px;
margin-top: 2px
`

const StyledSlider = styled(Slider)`
  .slick-arrow {
    z-index: 50;
  }
  .slick-next {
    right: 0px
  }
  .slick-prev {
    left: -10px
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
 
`;
const Container = styled.div`
  width: 100%;
`;
export default Sidebar