import { useState } from "react";
import { useDispatch } from "react-redux";

import { addEmployee } from "../redux/employeeSlice";

function EmployeeForm() {
  const dispatch = useDispatch();

  const [name, setName] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addEmployee({
        id: Date.now(),
        name,
        department,
        email:
          `${name}@company.com`,
      })
    );

    setName("");
    setDepartment("");
  };

  return (
    <div className="card">
      <h2>Add Employee</h2>

      <br />

      <form
        onSubmit={handleSubmit}
      >
        <input
          className="input"
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <br />
        <br />

        <select
          className="select"
          value={department}
          onChange={(e) =>
            setDepartment(
              e.target.value
            )
          }
        >
          <option value="">
            Select Department
          </option>

          <option value="Engineering">
            Engineering
          </option>

          <option value="HR">
            HR
          </option>

          <option value="Finance">
            Finance
          </option>
        </select>

        <br />
        <br />

        <button
          className="btn"
          type="submit"
        >
          Add Employee
        </button>
      </form>
    </div>
  );
}

export default EmployeeForm;