import { useEffect, useState } from "react";
import axios from "axios";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [employees, setEmployees] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );

      setEmployees(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredEmployees = employees.filter((employee) =>
    employee.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <>
      <h1>Employee Directory</h1>

      <input
        type="text"
        placeholder="Search Employee"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <br />
      <br />

      <button onClick={fetchEmployees}>
        Refresh
      </button>

      <hr />

      {filteredEmployees.map((employee) => (
        <EmployeeCard
          key={employee.id}
          employee={employee}
        />
      ))}
    </>
  );
}

export default App;