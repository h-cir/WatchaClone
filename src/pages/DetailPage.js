import React from "react";
import styled from "styled-components";
import HeadDetail from "../components/HeadDetail";
import HeaderBottom from "../components/HeadBottom";
const DetailPage = (props) => {

    return (
        <>  <Section>
            <SectionTwo>
                <SectionThree>
                    <SectionFour>
                        <HeadDetail />
                        <HeaderBottom/>
                    </SectionFour>
                </SectionThree>
            </SectionTwo>
        </Section>

        </>
    )
}
DetailPage.defaultProps = {
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyeECGbHJNVzgkQhtsbsMfYQFWxyTZDAekDg&usqp=CAU"
}

const Section = styled.div`
    @media only screen and (min-width: 719px) {
        padding-top: 0px;
        padding-bottom: unset;
    }
    padding-top: 0px;
    padding-bottom: 56px;
    display: block;
`

const SectionTwo = styled.div`
    display: block;
}
`
const SectionThree = styled.div`
@media only screen and (min-width: 719px) {
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 0px);
    }
}
`
const SectionFour = styled.div`
@media only screen and (min-width: 719px) {
    flex: 1 1 0%;
    }
    background: rgb(248, 248, 248);
    display: block;
}
`

export default DetailPage