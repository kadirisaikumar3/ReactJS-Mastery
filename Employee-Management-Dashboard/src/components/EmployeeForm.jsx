import { useState } from "react";
import { useDispatch } from "react-redux";

import { addEmployee } from "../redux/employeeSlice";

function EmployeeForm() {
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !department) return;

    dispatch(
      addEmployee({
        id: Date.now(),
        name,
        department,
        email: `${name}@company.com`,
      })
    );

    setName("");
    setDepartment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Employee</h2>

      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <br /><br />

      <select
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
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

      <br /><br />

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;