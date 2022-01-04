import React, { useState, Suspense } from "react";
import { Route, Switch } from "react-router";

import styled from "styled-components";

import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import Loading from "../../components/Loading";

function Index({ routes }) {
  const [navbar, setNavbar] = useState(true);

  return (
    <Container>
      <Header setNavbar={setNavbar} navbar={navbar} />
      <Sidebar navbar={navbar} />
      <MainLayout>
        <Suspense fallback={<Loading />}>
          <Switch>
            {routes.map((item, idx) => (
              <Route
                key={idx}
                exact={item.exact}
                path={item.path}
                component={item.component}
              />
            ))}
          </Switch>
        </Suspense>
      </MainLayout>
    </Container>
  );
}

export default Index;

const Container = styled.div``;

const MainLayout = styled.div``;
