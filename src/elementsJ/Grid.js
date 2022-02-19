import React from "react";
import styled from "styled-components";

const Grid = (props) => {
  const { width, margin, padding, bg, children, textalign, _onClick ,display, alignitems,justify, position} = props;

  const styles = {width, margin, padding, bg, textalign, display, alignitems,justify, position};
  return (
    <React.Fragment>
      <GridBox {...styles} onClick={_onClick}>{children}</GridBox>
    </React.Fragment>
  );
};

Grid.defaultProps = {
  chidren: null,
  width: "100%",
  padding: false,
  margin: false,
  bg: false,
  textalign: false,
  display: "flex",
  alignitems:  false,
  justify: false,
  _onClick: () => {},
  position: false,
};

const GridBox = styled.div`
  width: ${(props) => props.width};
  height: 100%;
  box-sizing: border-box;
  ${(props) => (props.padding ? `padding: ${props.padding};` : "")}
  ${(props) => (props.margin ? `margin: ${props.margin};` : "")}
  ${(props) => (props.bg ? `background-color: ${props.bg};` : "")}
  ${(props) => (props.textalign ? `text-align: center;` : "")}
  ${(props) => (props.display ? `display: ${props.display}` : "")}
  ${(props) => (props.alignitems ? `align-items: center;` : "")}
  ${(props) => (props.justify ? `justify-content: space-between;` : "")}
  ${(props) => (props.position ? `position: ${props.position};` : "")}
    /* @media only screen and (max-width: 768px) { padding: 5px; } ; */
`;

export default Grid;
