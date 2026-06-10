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
          "1px solid gray",
        margin: "10px",
        padding: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>
        {employee.name}
      </h3>

      <p>
        {employee.email}
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