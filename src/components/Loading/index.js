import React from "react";
import styled, { keyframes } from "styled-components";
// import "./index.css";

function index() {
  return (
    <Container className="container">
      <Loading></Loading>
    </Container>
  );
}

export default index;

const Container = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

const Spin = keyframes`
    to {
        transform: rotate(360deg);
    }
`;
const Pulse = keyframes`
    from {
        transform: scale(0.5);
    }
    to {
        transform: scale(1);
    }`;
const Loading = styled.div`
  display: flex;
  width: 3.5em;
  height: 3.5em;
  border: 3px solid transparent;
  border-top-color: red;
  border-bottom-color: red;
  border-radius: 50%;
  animation: ${Spin} 1.5s linear infinite;

  &::before {
    content: "";
    display: block;
    margin: auto;
    width: 0.75em;
    height: 0.75em;
    border: 3px solid red;
    border-radius: 50%;
    animation: ${Pulse} 1s alternate ease-in-out infinite;
  }
`;
