import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from './layout/RootLayout';
import HomePage from './pages/hompage/Homepage';
import Timelinepage from './pages/Timelinepage/Timelinepage';
import StatsPage from './pages/StatsPage/StatsPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {index: true, element: <HomePage />},
      {path: "/timeline", element: <Timelinepage />},
      {path: "/stats", element: <StatsPage />},
    ],
    errorElement: <h1>Not Found</h1>,
  },
]); 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
  