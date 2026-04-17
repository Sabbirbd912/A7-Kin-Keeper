import Friendetails from "../pages/friendetails/Friendetails";
import HomePage from "../pages/hompage/Homepage";
import Timelinepage from "../pages/timeline/Timelinepage";


import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";
import Statspage from "../pages/statspage/Statspage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/timeline", element: <Timelinepage />},
      {path: "/friends/:id", element: <Friendetails />},
      {path: "/stats", element: <Statspage />},
    ],
    errorElement: <h1>Not Found</h1>,
  },
]); 