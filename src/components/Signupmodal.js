import React from "react";
import styled from "styled-components"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const style = {
    display: "inline-block",
    position: 'absolute',
    textAlign: "left",
    verticalAlign: "middle",
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: "rgb(255, 255, 255)",
    width: "375px",
    overflow: "auto",
    height: "auto",
    minHeight: "540px",
    borderRadius: "6px",
};

const Signupmodal = () => {
    const dispatch = useDispatch();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [userName, setUserName] = React.useState("");
    const [userId, setuserId] = React.useState("");
    const [password, setpassword] = React.useState("");
 
    
    const changeUserName = (e) => {
        setUserName(e.target.value);
    }
    const changeId = (e) => {
        setuserId(e.target.value);
    }

    
    const changePwd = (e) => {
        setpassword(e.target.value);
    }

    const signup = () => {
        dispatch(userActions.signUpDB(userId, password, userName));
    }
    return (
        <div>
            <HeaderButton onClick={handleOpen}>회원가입</HeaderButton>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div>
                    <input value={userName} onChange={changeUserName}type="text" placeholder="이름"></input>
                    </div>
                    <div>
                    <input value={userId} onChange={changeId} type="text" placeholder="이메일"></input>
                    </div>
                    <div>
                    <input value={password} onChange={changePwd} type="text" placeholder="비밀번호"></input>
                    </div>
                    <button onClick={signup}>회원가입</button>
                </Box>
            </Modal>
        </div>
    );
}
const Input = styled.input`
display: flex;
-webkit-box-align: center;
align-items: center;
background: rgb(245, 245, 245);
box-sizing: border-box;
width: 100%;
height: 44px;
padding: 0px 12px;
border-radius: 6px;
border:none;
:focus {
  outline:none;
}
caret-color: red
`
const LoginButton = styled.button`
padding: 0px;
border: none;
cursor: pointer;
background: rgb(255, 47, 110);
color: rgb(255, 255, 255);
text-align: center;
font-size: 17px;
font-weight: 400;
letter-spacing: -0.7px;
line-height: 22px;
width: 100%;
height: 44px;
border-radius: 6px;
margin: 16px 0px 0px;
`
const HeaderButton = styled.button`
    font-weight: 500;
    border-radius: 6px;
    text-align: center;
    cursor: pointer;
    line-height: 20px;
    box-sizing: border-box;
    width: auto;
    min-width: 72px;
    height: 32px;
    background: transparent;
    color: #353535;
    font-size: 14px;
    letter-spacing: -0.3px;
    padding: 5px 14px 6px 14px;
    border: 1px solid rgba(116,116,123,0.5);
    margin: 15px 0;
`

export default Signupmodal
