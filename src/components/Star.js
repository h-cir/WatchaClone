import React, { useState } from "react";
import styled from "styled-components";
import { IoIosStar } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";

const colors = {
    orange: "#ffd684",
    grey: "#E3E3E3"

};

const Star = () => {
    const dispatch = useDispatch()
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const stars = Array(5).fill(0)
    // 0으로된 배열 5개

    const handleClick = (value) => {
        setCurrentValue(value)
        // dispatch(starActions.startRatingDB(value))
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }


    return (

        <Box>

            <ItemStyle>

                {/* <svg width="33" height="33" viewBox="0 0 12 10" xmlns="http://www.w3.org/2000/svg" fill="#555765" class="css-1g90l0x" >
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 8.02L3.14233 9.91131C2.91094 10.0644 2.61352 9.84836 2.68767 9.58097L3.60334 6.27872L0.921531 4.14536C0.704379 3.97262 0.817982 3.62299 1.0952 3.61087L4.51878 3.46128L5.719 0.251483C5.81619 -0.00842059 6.18381 -0.00842094 6.281 0.251483L7.48122 3.46128L10.9048 3.61087C11.182 3.62299 11.2956 3.97262 11.0785 4.14536L8.39666 6.27872L9.31233 9.58097C9.38648 9.84836 9.08906 10.0644 8.85767 9.91131L6 8.02Z" ></path>
                </svg> */}
                {/* <svg version="1.1" xmlns="http://www.w3.org/2000/svg"
                    width="200" height="200">
                    <defs>
                        <linearGradient id="half_grad">
                            <stop offset="50%" stop-color="yellow" />
                            <stop offset="50%" stop-color="grey" stop-opacity="1" />
                        </linearGradient>
                    </defs>
                    <path d="M20.388,10.918L32,12.118l-8.735,7.749L25.914,
             31.4l-9.893-6.088L6.127,31.4l2.695-11.533L0,
             12.118l11.547-1.2L16.026,0.6L20.388,10.918z"
                        fill="url(#half_grad)" stroke-width="1" stroke="red" />
                </svg> */}
                {/* 시간날때 */}
                <div style={styles.stars}>
                    {stars.map((_, index) => {
                        return (
                            <IoIosStar
                                key={index}
                                size={32}
                                onClick={() => handleClick(index + 0.5)}
                                onMouseOver={() => handleMouseOver(index + 0.5)}
                                onMouseLeave={handleMouseLeave}
                                color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
                                style={{
                                    margin: "auto",
                                    cursor: "pointer",
                                    width: "100%"
                                }}
                            />
                        )
                    })}
                </div>
            </ItemStyle>
        </Box>
    );
};

const styles = {
    stars: {
        display: "flex",
        flexDirection: "row",
        //나란히 놓겠다.
    }
}



const Box = styled.div`
    margin: auto; 
    `;
const ItemStyle = styled.div`
    width: 100%;
    `;
export default Star;