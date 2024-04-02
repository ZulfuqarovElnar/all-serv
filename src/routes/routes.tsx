import { BrowserRouter as Router, RouteObject, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/main";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <MainLayout />,
    children: [],
  },
];

const RoutesComponent = () => {
  return (
    <Router>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={route.element}
          />
        ))}
      </Routes>
    </Router>
  );
};

export default RoutesComponent;
