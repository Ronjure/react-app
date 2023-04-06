import { createBrowserRouter } from "react-router-dom";

import { CustomLayout } from "../layout/layout";
import ErrorPage from "./errorPage";
import { RoutePage } from "../pages/route-page";
import { RouteBasic } from "../pages/routes/basic";
import { ReduxPage } from "../pages/redux-page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/route",
        element: <RoutePage />,

        children: [
          {
            path: '/route/basic',
            element: <RouteBasic />
          },
        ],
      },

      {
        path: '/redux',
        element: <ReduxPage />,

        children: [
          {
            path: '/redux/basic',
            element: <RouteBasic />
          }
        ],
      },
    ],
  },
]);
