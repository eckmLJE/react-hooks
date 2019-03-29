import styled, { css } from "styled-components";

const Card = styled.div`
  position: relative;
  width: 300px;
  background: blue;
  height: 75px;
  transition: all 0.5s;
  margin: 8px;

  ${props =>
    props.view &&
    props.away &&
    css`
      height: 300px;
      position: absolute;
      top: 50px;
    `}

  ${props =>
    !props.view &&
    props.away &&
    css`
      margin-top: 100vh;
    `}
`;

export default Card;
