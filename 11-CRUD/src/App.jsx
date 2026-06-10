import { useState } from "react";

import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";

function App() {

  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "Sai",
      department: "Engineering",
    },
    {
      id: 2,
      name: "Deepa",
      department: "Fashion",
    },
    {
      id: 3,
      name: "Siri",
      department: "Photographer",
    },
  ]);

  const [search, setSearch] = useState("");

  const addEmployee = (employee) => {
    setEmployees([
      ...employees,
      employee,
    ]);
  };

  const deleteEmployee = (id) => {
    setEmployees(
      employees.filter(
        (employee) =>
          employee.id !== id
      )
    );
  };

  const filteredEmployees =
    employees.filter((employee) =>
      employee.name
        .toLowerCase()
        .includes(search.toLowerCase())
    );

  return (
    <>
      <h1>Employee Management System</h1>

      <EmployeeForm
        addEmployee={addEmployee}
      />

      <br />

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <br />
      <br />

      <EmployeeTable
        employees={filteredEmployees}
        deleteEmployee={deleteEmployee}
      />
    </>
  );
}

export default App;