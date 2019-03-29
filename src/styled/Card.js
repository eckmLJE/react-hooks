import styled, { css } from "styled-components";

const Card = styled.div`
  position: relative;
  width: 300px;
  background: blue;
  height: 75px;
  transition: height 2s, margin-top 1.5s;
  margin: 8px;

  ${props =>
    props.view &&
    props.away &&
    css`
      height: 90vh;
      position: absolute;
      top: 25px;
    `}

  ${props =>
    !props.view &&
    props.away &&
    css`
      margin-top: 100vh;
    `}
`;

export default Card;
