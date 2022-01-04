import React, { Suspense, useEffect, useState } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Loading from "./components/Loading";

import appRoutes from "./routes";

function App() {
  function showLayout(routes) {
    if (routes && routes.length > 0) {
      return routes.map((item, idx) => (
        <Route
          key={idx}
          exact={item.exact}
          path={item.path}
          render={(props) => <item.component {...props} routes={item.routes} />}
        />
      ));
    }
  }

  return (
    <BrowserRouter>
      <div className="app">
        <Suspense fallback={<Loading />}>
          <Switch>{showLayout(appRoutes)}</Switch>
        </Suspense>
      </div>
    </BrowserRouter>
  );
}

export default App;
