import React from "react";

import MainLayout from "../containers/MainLayout";

const appRoutes = [
  {
    exact: false,
    path: "/",
    component: MainLayout,
    routes: [
      {
        exact: true,
        path: "/",
        component: React.lazy(() =>
          import("../containers/MainLayout/Homepage")
        ),
      },
      {
        exact: true,
        path: "/watch/v/:videoId",
        component: React.lazy(() =>
          import("../containers/MainLayout/PlayVideo")
        ),
      },
    ],
  },
];
export default appRoutes;
