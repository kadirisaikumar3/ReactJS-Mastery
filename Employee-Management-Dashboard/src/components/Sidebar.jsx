import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "250px",
        background: "#222",
        color: "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h2>Menu</h2>

      <br />

      <ul
        style={{
          listStyle: "none",
        }}
      >
        <li>
          <Link
            to="/dashboard"
            style={{
              color: "white",
            }}
          >
            Dashboard
          </Link>
        </li>

        <br />

        <li>
          <Link
            to="/employees"
            style={{
              color: "white",
            }}
          >
            Employees
          </Link>
        </li>

        <br />

        <li>
          <Link
            to="/add-employee"
            style={{
              color: "white",
            }}
          >
            Add Employee
          </Link>
        </li>

        <br />

        <li>
          <Link
            to="/edit"
            style={{
              color: "white",
            }}
          >
            Edit Employee
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;