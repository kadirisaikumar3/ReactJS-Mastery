// function Employees() {
//   return <h1>Employees Page</h1>;
// }

// export default Employees;
function Employees() {
  const employees = [
    {
      id: 1,
      name: "Sai",
      department: "Engineering"
    },
    {
      id: 2,
      name: "Deepa",
      department: "HR"
    },
    {
      id: 3,
      name: "Siri",
      department: "Finance"
    }
  ];

  return (
    <>
      <h1>Employees Page</h1>

      {employees.map(employee => (
        <div key={employee.id}>
          <h3>{employee.name}</h3>
          <p>{employee.department}</p>
          <hr />
        </div>
      ))}
    </>
  );
}

export default Employees;