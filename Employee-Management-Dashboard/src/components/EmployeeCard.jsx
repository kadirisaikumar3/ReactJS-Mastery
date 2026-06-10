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
    <div
      style={{
        border:
          "1px solid #ddd",
        padding: "15px",
        marginBottom: "10px",
        borderRadius: "10px",
      }}
    >
      <h3>
        {employee.name}
      </h3>

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

      <button
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