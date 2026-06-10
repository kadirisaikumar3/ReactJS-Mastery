import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      style={{
        width: "200px",
        padding: "20px",
        borderRight: "1px solid gray",
      }}
    >
      <h3>Menu</h3>

      <ul>
        <li>
          <Link to="/dashboard">
            Dashboard
          </Link>
        </li>

        <li>
          <Link to="/employees">
            Employees
          </Link>
        </li>

        <li>
          <Link to="/add-employee">
            Add Employee
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;