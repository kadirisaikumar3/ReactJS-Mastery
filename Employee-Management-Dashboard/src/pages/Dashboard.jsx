import { useSelector } from "react-redux";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Dashboard() {
  const employees = useSelector(
    (state) => state.employee.employees
  );

  const engineeringCount =
    employees.filter(
      (employee) =>
        employee.department ===
        "Engineering"
    ).length;

  const hrCount =
    employees.filter(
      (employee) =>
        employee.department === "HR"
    ).length;

  const financeCount =
    employees.filter(
      (employee) =>
        employee.department ===
        "Finance"
    ).length;

  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <h1>Dashboard</h1>

          <div
            style={{
              display: "flex",
              gap: "20px",
              marginTop: "20px",
              flexWrap: "wrap",
            }}
          >
            <div className="card">
              <h3>Total Employees</h3>
              <h1>{employees.length}</h1>
            </div>

            <div className="card">
              <h3>Engineering</h3>
              <h1>{engineeringCount}</h1>
            </div>

            <div className="card">
              <h3>HR</h3>
              <h1>{hrCount}</h1>
            </div>

            <div className="card">
              <h3>Finance</h3>
              <h1>{financeCount}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Dashboard;