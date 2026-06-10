function EmployeeCard({ employee }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        margin: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{employee.name}</h3>

      <p>
        <strong>Email:</strong> {employee.email}
      </p>

      <p>
        <strong>Phone:</strong> {employee.phone}
      </p>
    </div>
  );
}

export default EmployeeCard;