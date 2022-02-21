import axios from "axios";

const instance = axios.create({
<<<<<<< HEAD
	// baseURL: "https://6be3b6c9-875e-4de2-ad00-299e2a32a238.mock.pstmn.io" // 요청을 www.aa.com/user로 보낸다면, www.aa.com까지 기록
=======
	
>>>>>>> 8dcb12015a1c5f825b6d9fe4d065c0151bce6b93
	baseURL: "http://54.180.108.6:8080"
	
});

// 가지고 있는 토큰 넣어주기!
// 로그인 전이면 토큰이 없으니 못 넣어요.
// 그럴 땐 로그인 하고 토큰을 받아왔을 때 넣어줍시다.
// instance.defaults.headers.common["Authorization"] = USER_TOKEN; 

// const is_cookie = getCookie("is_login") ? true : false
// const getcookie = getCookie("is_login") 
// console.log(is_cookie)
// if(is_cookie) {
// 	instance.defaults.headers.common["Authorization"] = `Bearer ${getcookie}`

export default instance;
