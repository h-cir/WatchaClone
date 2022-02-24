import React from "react";
import { BarChart, Bar, XAxis } from "recharts";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as starActions } from "../redux/modules/star";

const StarBar = (props) => {
    const dispatch = useDispatch()
    const movieId = props.movieId
    const starInfo = useSelector((state) => state.star.infoList)

    React.useEffect(() => {
        dispatch(starActions.infoStarDB(movieId))
    }, [movieId]);

    //movieId를 넣는 이유는 새고고침할 때 한 번 불러와야하기 때문에!
    //[0]을 배열의 순서를 지정해줄때는 새로고침할때 불러오지 못하기 때문에 starInfo.countsPerStars를 넣어줌
    const data = [
        {
            name: "1",
            uv: (starInfo.countsPerStars && starInfo.countsPerStars[0]),
        },
        {
            name: "2",
            uv: (starInfo.countsPerStars && starInfo.countsPerStars[1]),
        },
        {
            name: "3",
            uv: (starInfo.countsPerStars && starInfo.countsPerStars[2]),
        },
        {
            name: "4",
            uv: (starInfo.countsPerStars && starInfo.countsPerStars[3]),
        },
        {
            name: "5",
            uv: (starInfo.countsPerStars && starInfo.countsPerStars[4]),
        },
    ];
    const maxValue = Math.max.apply(null, starInfo.countsPerStars)
    
    const clone = (obj) => Object.assign({}, obj);
    const renameKey = (object, key, newKey) => {
        const clonedObj = clone(object);
        const targetKey = clonedObj[key];
        delete clonedObj[key];
        clonedObj[newKey] = targetKey;
        return clonedObj;
    };

    const highData = data.map((p, idx) => {
        return (
            p.uv === maxValue ? renameKey(p, 'uv', 'uv1')  : renameKey(p, 'uv', 'uv')
        )
    })
 


    return (
        <div style={{ padding: "8px 0px 0px" }}>
            <div>
                <div style={{ margin: "0 20px", overflow: "hidden" }}>
                    <h2 style={{ float: "left", fontSize: "19px", fontWeight: "700", letterSpacing: "0,7px", lineHeight: "28px", margin: "8px 0" }}>
                        별점그래프
                    </h2>
                    <span style={{ float: "right", color: "#282828", fontSize: "17px", fontWeight: "400", letterSpacing: "0,7px", lineHeight: "22px", textAlign: "right", margin: "10px 0 0" }}>
                        평균★{starInfo.averageStar && starInfo.averageStar.toFixed(1)}
                        <br />
                        <strong style={{ fontSize: "14px", fontWeight: "400", letterSpacing: "-0.3px", lineHeight: "19px", color: "#787878" }}>
                            ({starInfo.numRatings}명)
                        </strong>
                    </span>
                </div>
            </div>
            <div>
                <div style={{ margin: "15px 20px 0px 20px" }}>
                    <div style={{ maxWidth: "375px", margin: "auto" }}>
                        <BarChart width={375} height={200} data={highData} >
                            <XAxis stroke="none" dataKey="name" tick={{ stroke: '#a0a0a0', fontSize: "12px", strokeWidth: 0.4 }} />
                            <Bar stackId="uv" dataKey="uv" fill="#ffdd63" />
                            <Bar stackId="uv" dataKey="uv1" fill="#ffa136"/>
                        </BarChart>
                    </div>

                </div>
                <hr style={{ border: "0", borderBottom: "1px solid #f0f0f0", margin: "15px 20px 0 20px" }} />
            </div>
        </div>

    )
}
export default StarBar