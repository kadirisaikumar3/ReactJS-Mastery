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
        background: "#1976d2",
        color: "white",
        padding: "15px 30px",
        display: "flex",
        justifyContent:
          "space-between",
        alignItems: "center",
      }}
    >
      <h2>
        Employee Dashboard
      </h2>

      <button
        className="btn"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
}

export default Navbar;