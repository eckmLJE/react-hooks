import styled, { css } from "styled-components";

const Card = styled.div`
  position: relative;
  width: 300px;
  /* background: blue; */
  border: 3px solid darkblue;
  height: 75px;
  transition: height 2s, margin-top 1.5s;
  transition-delay: 0.2s, 0s;
  margin: 8px;
  margin-top: 0px;
  opacity: 0.75;

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
      margin-top: 1000px;
    `}
`;

export default Card;
