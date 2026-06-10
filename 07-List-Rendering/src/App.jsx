import { useState } from "react";
import EmployeeTable from "./components/EmployeeTable";

function App() {
  const [search, setSearch] = useState("");

  const employees = [
    {
      id: 1,
      name: "Saikumar",
      department: "Engineering",
      salary: 50000,
    },
    {
      id: 2,
      name: "Ravi",
      department: "HR",
      salary: 40000,
    },
    {
      id: 3,
      name: "Priya",
      department: "Finance",
      salary: 60000,
    },
  ];

  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1>Employee Management</h1>

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <EmployeeTable employees={filteredEmployees} />
    </>
  );
}

export default App;