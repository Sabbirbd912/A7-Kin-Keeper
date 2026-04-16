import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router/dom";
import RootLayout from "./layout/RootLayout";
import { router } from "./router/routes";
import CalledFriendProvider, { CalledFriendContext } from "./context/CalledFriendProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CalledFriendProvider>
      <RouterProvider router={router} />
    </CalledFriendProvider>
  </StrictMode>,
);
