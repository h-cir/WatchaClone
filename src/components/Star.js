import React, { useState } from "react";
import styled from "styled-components";
import { IoIosStar } from "react-icons/io";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as starActions } from "../redux/modules/star";

const colors = {
    orange: "#ffd684",
    grey: "#E3E3E3"

};

const Star = (props) => {
    const movieId = props.movieId
    const token = localStorage.getItem("is_login")
    const userInfo = useSelector((state) => state.star.list)
    const [toggle, setToggle] = React.useState(false);
   
    React.useEffect(() => {
        dispatch(starActions.setStarDB(movieId, token))

        if (userInfo[movieId] && userInfo[movieId][1] === 0) {
            setToggle(true);
        } else {
            setToggle(false);
        }

    }, [movieId])


    const dispatch = useDispatch()
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState(undefined);

    const stars = Array(5).fill(0)
    // 0으로된 배열 5개

    const handleClick = (value) => {
        if (!token) {
            return alert("로그인을 해주세요");
        }
        
        if (userInfo[movieId] && userInfo[movieId][1] == 0) {
            dispatch(starActions.addStarDB(value, movieId, token))
        } else {
            dispatch(starActions.cancelStarDB(movieId, token));
        }
    }

    const handleMouseOver = newHoverValue => {
        setHoverValue(newHoverValue)
    };

    const handleMouseLeave = () => {
        setHoverValue(undefined)
    }

    // if(toggle){
    //     <Box>
    //     <ItemStyle>
    //         <div style={styles.stars} >
    //             {stars.map((_, index) => {
    //                 return (
    //                     <IoIosStar
    //                         key={index}
    //                         size={32}
    //                         onClick={() => handleClick(index + 1)}
    //                         onMouseOver={() => handleMouseOver(index + 1)}
    //                         onMouseLeave={handleMouseLeave}
    //                         color={(hoverValue) > index ? colors.orange : colors.grey}
    //                         style={{
    //                             margin: "auto",
    //                             cursor: "pointer",
    //                             width: "100%"
    //                         }}
    //                     />
    //                 )
    //             })}
    //         </div>
    //     </ItemStyle>
    // </Box>
    // }
    return (
        <Box>
            <ItemStyle>
                <div style={styles.stars} >
                    {stars.map((_, index) => {
                        return (
                            <IoIosStar
                                key={index}
                                size={35}
                                onClick={() => handleClick(index + 1)}
                                onMouseOver={() => handleMouseOver(index + 1)}
                                onMouseLeave={handleMouseLeave}
                                color={((userInfo[movieId] && userInfo[movieId][1]) || hoverValue) > index ? colors.orange : colors.grey}
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

