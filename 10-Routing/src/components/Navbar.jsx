import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link> |{" "}
      <Link to="/employees">Employees</Link> |{" "}
      <Link to="/login">Login</Link> |{" "}
      <Link to="/add">Add Employee</Link>
    </nav>
  );
}

export default Navbar;