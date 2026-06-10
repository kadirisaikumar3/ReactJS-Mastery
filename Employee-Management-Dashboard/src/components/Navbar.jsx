import { useDispatch } from "react-redux";
import { logout } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div
      style={{
        background: "#333",
        color: "white",
        padding: "15px",
      }}
    >
      <h2>
        Employee Dashboard
      </h2>

      <button onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
}

export default Navbar;