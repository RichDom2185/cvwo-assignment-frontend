import { createBrowserRouter, RouteObject, RouterProvider } from "react-router";
import "./App.scss";
import DetailsPage from "./pages/DetailsPage";
import LoginPage from "./pages/LoginPage";
import MainPage from "./pages/MainPage";

const routes = [
  { path: "/", Component: MainPage },
  { path: "/login", element: <LoginPage type="login" /> },
  { path: "/signup", element: <LoginPage type="signup" /> },
  { path: "/details/:id", Component: DetailsPage },
] as const satisfies RouteObject[];

const router = createBrowserRouter(routes);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
