import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";

import App from "./App.tsx";
import Root from "./routes/root";
import Home from "./routes/home.tsx";
import Store from "./routes/drugstore.tsx";
import Schedule from "./routes/schedule.tsx";
import Account from "./routes/account.tsx";
import Chat from "./routes/chat.tsx";
import Detail from "./routes/detail.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/chat",
    element: <Chat />,
  },
  {
    path: "/detail",
    element: <Detail />,
  },
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "schedule",
        element: <Schedule />,
      },
      {
        path: "account",
        element: <Account />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
