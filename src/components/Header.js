import React from "react";
import styled from "styled-components";
import { useDispatch } from "react-redux";
import { Grid, Text } from "../elementsJ";
import Loginmodal from "./Loginmodal"
import Signupmodal from "./Signupmodal"
const Header = (props) => {

  return (
    <React.Fragment>
      <Frame>
        <Text color="rgb(255, 47, 110)" margin="0" size="25px" bold>
          WATCHA<span style={{ color:"black", fontSize: "20px" }}>PEDIA</span>
        </Text>
        <div>
          <Loginmodal />
          <Signupmodal />
        </div>
      </Frame>
    </React.Fragment>
  );
};
 
const Frame = styled.div`
  display: flex;
  position: fixed;
  top: 0px;
  left: 0;
  z-index: 51;
  background: #fff;
  color: #fff;
  text-align: center;
  width: 100%;
  height: 62px;
  box-shadow: 0 1px 0 0 rgb(0 0 0 / 8%);
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  padding: 0px 3.5%;
  /* padding: calc() */
  /* -webkit-transition: background-color 200ms; */
  /* transition: background-color 200ms; */
  //투명할때
  /* display: none;
    position: fixed;
    top: 0px;
    left: 0px;
    z-index: 51;
    background: transparent;
    color: rgb(255, 255, 255);
    text-align: center;
    width: 100%;
    height: 62px;
    transition: background-color 200ms ease 0s; */
  @media only screen and (max-width: 700px) {
    position: fixed;
    bottom: 0px;
    left: 0px;
    z-index: 51;
    background: yellow;
    box-sizing: border-box;
    height: 56px;
    padding: 8px 57px 4px;
    content: "";
    /* background: #fff; */
    /* height: env(safe-area-inset-bottom); */
  }
  div {
    display: flex;
  }
`;

Header.defaultProps = {};

export default Header;
