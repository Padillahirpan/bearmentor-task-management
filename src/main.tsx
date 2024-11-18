import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./routes/root.tsx";
import { ErrorPage } from "./components/error-page.tsx";
import { AddGoal } from "./pages/create-goal.tsx";
import { ADD_GOAL_PAGE, HOME_PAGE } from "./data/goals-management.ts";

const router = createBrowserRouter([
  {
    path: HOME_PAGE,
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: Root.loader,
  },
  {
    path: ADD_GOAL_PAGE,
    element: <AddGoal />,
    errorElement: <ErrorPage />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
