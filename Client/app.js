import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Componets/Header";
import Body from "./src/Componets/Body";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import CreateUser from "./src/Componets/CreateUser";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/createUser",
        element: <CreateUser />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={approuter} />);
