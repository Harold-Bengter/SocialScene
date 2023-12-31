import { Navigate, RouteObject, createBrowserRouter } from "react-router-dom";
import App from "../Layout/App";
import ActivityDashboard from "../../Features/activities/dashboard/ActivityDashboard";
import ActivityForm from "../../Features/activities/form/ActivityForm";
import ActivityDetails from "../../Features/activities/details/ActivityDetails";
import TestErrors from "../../Features/errors/TestError";
import ServerError from "../../Features/errors/ServerError";
import NotFound from "../../Features/errors/NotFound";
import LoginForm from "../../Features/users/LoginForm";
import ProfilePage from "../../Features/profiles/profilePage";
import RequireAuth from "./RequireAuth";

export const routes: RouteObject[] = [
  {
    path: "/",
    element: <App />,
    children: [
      { element: <RequireAuth />, children: [
        { path: "activities", element: <ActivityDashboard /> },
        { path: "activities/:id", element: <ActivityDetails /> },
        { path: "createActivity", element: <ActivityForm key="create" /> },
        { path: "manage/:id", element: <ActivityForm key="manage" /> },
        { path: "profiles/:username", element: <ProfilePage /> },
        { path: "login", element: <LoginForm /> },
        { path: "errors", element: <TestErrors /> },
      ]},
      { path: "not-found", element: <NotFound /> },
      { path: "server-error", element: <ServerError /> },
      { path: "*", element: <Navigate replace to="/not-found" /> },
    ],
  },
];

export const router = createBrowserRouter(routes);
