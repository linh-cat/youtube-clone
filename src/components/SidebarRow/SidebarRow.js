import React from "react";
import styled from "styled-components";

function SidebarRow({ Icon, title }) {
  return (
    <Container>
      <Icon className="sidebarRow__icon" />
      <Title className="sidebarRow__title">{title}</Title>
    </Container>
  );
}

export default SidebarRow;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px 20px;

  &:hover {
    background-color: #4e4d4d;
    cursor: pointer;
  }
  .sidebarRow__icon {
    color: #606060;
    font-size: 26px;
  }
`;

const Title = styled.p`
  flex: 1;
  margin-left: 20px;
  font-size: 15px;
  font-weight: 500;
  color: white;
`;
