import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
import { Grid, Text } from "../elementsJ";
import Loginmodal from "./Loginmodal";
import Signupmodal from "./Signupmodal";

const style = {
  display: "inline-block",
  position: "absolute",
  textAlign: "left",
  verticalAlign: "middle",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  background: "rgb(255, 255, 255)",
  width: "375px",
  overflow: "auto",
  height: "auto",
  minHeight: "540px",
  borderRadius: "6px",
};

const NouUserModal = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>nonuser</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ padding: "15px 0px 48px" }}>
            <section style={{ margin: "0 20px" }}>
            <div class="css-l84u8"><span src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K" class="css-1hj09ha"></span></div>
              <SignupButton>회원가입</SignupButton>
              <LoginButton>로그인</LoginButton>
              <Loginmodal />
              <Signupmodal />
            </section>
          </div>
        </Box>
      </Modal>
    </div>
  );
};

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
  border: none;
  :focus {
    outline: none;
  }
  caret-color: red;
`;
const LoginButton = styled.button`
  padding: 0px;
  border: none;
  cursor: pointer;
  color: rgb(255, 47, 110);
  background: rgb(255, 255, 255);
  text-align: center;
  font-size: 17px;
  font-weight: 400;
  letter-spacing: -0.7px;
  line-height: 22px;
  width: 100%;
  height: 44px;
  border-radius: 6px;
  margin: 16px 0px 0px;
`;
const SignupButton = styled.button`
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
`;

export default NouUserModal;
