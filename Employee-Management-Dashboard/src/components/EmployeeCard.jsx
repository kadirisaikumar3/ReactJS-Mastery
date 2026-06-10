import { useDispatch } from "react-redux";

import {
  deleteEmployee,
} from "../redux/employeeSlice";

function EmployeeCard({
  employee,
}) {
  const dispatch =
    useDispatch();

  return (
    <div className="card">
      <h2>{employee.name}</h2>

      <br />

      <p>
        Email:
        {" "}
        {employee.email}
      </p>

      <p>
        Department:
        {" "}
        {employee.department}
      </p>

      <br />

      <button
        className="btn"
        onClick={() =>
          dispatch(
            deleteEmployee(
              employee.id
            )
          )
        }
      >
        Delete
      </button>
    </div>
  );
}

export default EmployeeCard;