import Friendetails from "../pages/friendetails/Friendetails";
import HomePage from "../pages/hompage/Homepage";
import Statspage from "../pages/StatsPage/StatsPage";
import Timelinepage from "../pages/Timelinepage/Timelinepage";
import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/timeline", element: <Timelinepage />},
      {path: "/stats", element: <Statspage  />},
      {path: "/friends/:id", element: <Friendetails />},
    ],
    errorElement: <h1>Not Found</h1>,
  },
]); 