import Friendetails from "../pages/friendetails/Friendetails";
import HomePage from "../pages/hompage/Homepage";
import Timelinepage from "../pages/timeline/Timelinepage";
import Statspage from "../pages/StatsPage/StatsPage";

import { createBrowserRouter } from "react-router";
import RootLayout from "../layout/RootLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/stats", element: <Statspage  />},
      {path: "/timeline", element: <Timelinepage />},
      {path: "/friends/:id", element: <Friendetails />},
    ],
    errorElement: <h1>Not Found</h1>,
  },
]); 