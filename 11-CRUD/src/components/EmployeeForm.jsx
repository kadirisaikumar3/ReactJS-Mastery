import { useState } from "react";

function EmployeeForm({ addEmployee }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !department) return;

    addEmployee({
      id: Date.now(),
      name,
      department,
    });

    setName("");
    setDepartment("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Employee Name"
        value={name}
        onChange={(e) =>
          setName(e.target.value)
        }
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      />

      <button type="submit">
        Add Employee
      </button>
    </form>
  );
}

export default EmployeeForm;