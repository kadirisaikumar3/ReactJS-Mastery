import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = () => {
    dispatch(login());

    navigate("/dashboard");
  };

  return (
    <>
      <h1>Employee Dashboard Login</h1>

      <button onClick={handleLogin}>
        Login
      </button>
    </>
  );
}

export default Login;