import { createBrowserRouter } from "react-router-dom";

import { Login } from "../page/Login";
import { Page404 } from "../page/Page404";
import { Home } from "../page/Home";
import { Setting } from "../page/Setting";
import { UserManagement } from "../page/UserManagement";
import App from "../../App";
import { HeaderLayout } from "../templates/HeaderLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Login />
      },
      {
        path: "home",
        element: <HeaderLayout />,
        children: [
          {
            index: true,
            element: <Home />
          },
          {
            path: "setting",
            element: <Setting />
          },
          {
            path: "usermanagement",
            element: <UserManagement />
          }
        ]
      }
    ]
  },
  { path: "*", element: <Page404 /> }
]);
