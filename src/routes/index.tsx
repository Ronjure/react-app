import { createBrowserRouter } from "react-router-dom";

import { CustomLayout } from "../layout/layout";
import ErrorPage from "./errorPage";
import { RoutePage } from "../pages/route-page";
import { RouteBasic } from "../pages/routes/basic";
import { ReduxPage } from "../pages/redux-page";
import { ReduxBasic } from "../pages/redux/redux-basic";
import RouteParamWrapper from "../pages/routes/route-param-wrapper";
import RouteParams from "../pages/routes/route-params";
import Markdown from "../pages/markdown/index";
import MarkdownEditor from "../pages/markdown/editor";
import MarkdownViewer from "../pages/markdown/viewer";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <CustomLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/route",
        element: <RoutePage />,
        errorElement: <ErrorPage />,

        children: [
          {
            path: '/route/basic',
            element: <RouteBasic />,
            index: true,
          },
          {
            path: '/route/params',
            element: <RouteParamWrapper />,
            children: [
              {
                path: '/route/params/:param',
                element: <RouteParams></RouteParams>,

                loader: ({ request }) => {
                  return {
                    url: new URL(request.url)
                  }
                }
              }
            ],
          },
        ],
      },

      {
        path: '/redux',
        element: <ReduxPage />,
        errorElement: <ErrorPage />,

        children: [
          {
            path: '/redux/basic',
            element: <ReduxBasic />
          }
        ],
      },

      {
        path: '/markdown',
        element: <Markdown />,

        children: [
          {
            path: '/markdown/editor',
            element: <MarkdownEditor />,
          },
          {
            path: '/markdown/viewer',
            element: <MarkdownViewer />
          },
        ],
      },
    ],
  },
]);
