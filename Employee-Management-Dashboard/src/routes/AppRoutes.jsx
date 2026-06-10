import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import {
  lazy,
  Suspense,
} from "react";

import ProtectedRoute from "../components/ProtectedRoute";

const Login = lazy(() =>
  import("../pages/Login")
);

const Dashboard = lazy(() =>
  import("../pages/Dashboard")
);

const Employees = lazy(() =>
  import("../pages/Employees")
);

const AddEmployee = lazy(() =>
  import(
    "../pages/AddEmployee"
  )
);

const EditEmployee = lazy(() =>
  import(
    "../pages/EditEmployee"
  )
);

function AppRoutes() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <h1>Loading...</h1>
        }
      >
        <Routes>

          <Route
            path="/"
            element={<Login />}
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          <Route
            path="/employees"
            element={
              <ProtectedRoute>
                <Employees />
              </ProtectedRoute>
            }
          />

          <Route
            path="/add-employee"
            element={
              <ProtectedRoute>
                <AddEmployee />
              </ProtectedRoute>
            }
          />

          <Route
            path="/edit"
            element={
              <ProtectedRoute>
                <EditEmployee />
              </ProtectedRoute>
            }
          />

          <Route
            path="*"
            element={
              <Navigate to="/" />
            }
          />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default AppRoutes;