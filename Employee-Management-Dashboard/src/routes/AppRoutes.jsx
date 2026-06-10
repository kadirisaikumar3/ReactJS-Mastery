import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import ProtectedRoute from "../components/ProtectedRoute";

import Employees from "../pages/Employees";
import AddEmployee from "../pages/AddEmployee";

function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>
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

      </Routes>

    </BrowserRouter>
  );
}

export default AppRoutes;