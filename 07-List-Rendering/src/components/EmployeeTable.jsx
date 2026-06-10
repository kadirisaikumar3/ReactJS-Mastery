function EmployeeTable({ employees }) {
  return (
    <> <select
  onChange={(e) => console.log(e.target.value)}
>
  <option>All</option>
  <option>Engineering</option>
  <option>HR</option>
  <option>Finance</option>
</select>
    <table border="1" cellPadding="10">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Department</th>
          <th>Salary</th>
        </tr>
      </thead>

      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id}>
            <td>{employee.id}</td>
            <td>{employee.name}</td>
            <td>{employee.department}</td>
            <td>{employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table></>
  );
}

export default EmployeeTable;