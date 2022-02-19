import React from "react";
import styled from "styled-components"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useDispatch } from "react-redux";
import {actionCreators as userActions} from "../redux/modules/user";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
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
            <Button onClick={handleOpen}>회원가입</Button>
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

const MyButton = styled(Button)`
  // background-color: white;
`;

export default Signupmodal
