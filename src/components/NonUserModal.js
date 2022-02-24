import React from "react";
import styled from "styled-components";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useDispatch } from "react-redux";
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
  const [login, setLogin] = React.useState(true);
  const [signup, setSignup] = React.useState(true);
  const token = localStorage.getItem("is_login")

  return (
    <div>
      
      {/* <Button onClick={handleOpen}>nonuser</Button> */}
      <ConetentActionComment onClick={handleOpen}>
          <div style={{ margin: "0px 3px 0px 0px" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              className="injected-svg"
              data-src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9I
                                        jAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3
                                        JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTMgMTcuMjUyNVYyMS4wMDI1SDYu
                                        NzVMMTcuODEgOS45NDI1TDE0LjA2IDYuMTkyNUwzIDE3LjI1MjVaTTIwLjcxIDcuMD
                                        QyNUMyMS4xIDYuNjUyNSAyMS4xIDYuMDIyNSAyMC43MSA1LjYzMjVMMTguMzcgMy4yO
                                        TI1QzE3Ljk4IDIuOTAyNSAxNy4zNSAyLjkwMjUgMTYuOTYgMy4yOTI1TDE1LjEzIDU
                                        MTIyNUwxOC44OCA4Ljg3MjVMMjAuNzEgNy4wNDI1WiIgZmlsbD0iY3VycmVudENvbG
                                        9yIi8+Cjwvc3ZnPgo="
              xmlns="http://www.w3.org/1999/xlink"
            >
              <path
                d="M3 17.2525V21.0025H6.75L17.81 9.9425L14.06 6.1925L3 
                                            17.2525ZM20.71 7.0425C21.1 6.6525 21.1 6.0225 20.71 5.6325L18.37 
                                            3.2925C17.98 2.9025 17.35 2.9025 16.96 3.2925L15.13 5.1225L18.88
                                             8.8725L20.71 7.0425Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          코멘트
        </ConetentActionComment>
      {/* )} */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div style={{ padding: "15px 0px 48px" }}>
            <section style={{ margin: "0 20px" }}>
              <div style={{    display: "flex",
    flex: "1 1 0%",
    justifyContent: "center", 
    alignItems: "center",}}>
                <span
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K"
                ></span>
                <div style={{width:"100%", textAlign:"center",padding:"50px 0px",margin:"0px 20px"}}>
                <div
                  style={{
                    display: "inline-block",
                    width: "88px",
                    height: "88px",
                    margin: "0 0 47px",
                    background:
                      "url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxwYXRoIGZpbGw9IiM3ODc4NzgiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZD0iTTkuODU3IDE3Ljc4Nkw2IDIxdi00LjkxYy0xLjg0MS0xLjM3My0zLTMuMzY5LTMtNS41OUMzIDYuMzU4IDcuMDMgMyAxMiAzczkgMy4zNTggOSA3LjVjMCA0LjE0Mi00LjAzIDcuNS05IDcuNS0uNzM5IDAtMS40NTYtLjA3NC0yLjE0My0uMjE0eiIvPgo8L3N2Zz4K) center center / contain no-repeat",
                  }}
                ></div>
                <p
                  style={{
                    fontSize: "19px",
                    fontWeight: "700",
                    letterSpacing: "-0.7px",
                    lineHeight: "30px",
                    whiteSpace: "pre-line",
                    textAlign: "center",
                    margin:"0px"
                  }}
                >
                  지금 회원가입 혹은 로그인하시고, 경험한 감동을 기록해보세요.
                </p>
                </div>
              </div>
              <Signupmodal signup={signup}/>
              <Loginmodal login={login}/>
            </section>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
const ConetentActionComment = styled.button`
  @media only screen and (min-width: 1023px) {
    flex-direction: row;
    font-size: 14px;
    line-height: 14px;
    width: auto;
    height: unset;
  }
  @media only screen and (min-width: 719px) {
    min-width: 55px;
  }
  background: none;
  padding: 0;
  border: none;
  cursor: pointer;
  -webkit-box-align: center;
  align-items: center;
  text-align: center;
  color: #292a32;
  display: flex;
`;

export default NouUserModal;
