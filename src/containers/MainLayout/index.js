import React from "react";
import styled from "styled-components";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Homepage from "../../components/Homepage";

function index() {
  return (
    <Container>
      <Header />
      <MainLayout>
        <Sidebar />
        <Homepage />
      </MainLayout>
    </Container>
  );
}

export default index;

const Container = styled.div``;

const MainLayout = styled.div`
  display: flex;
`;
