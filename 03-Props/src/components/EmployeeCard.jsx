// function EmployeeCard(props) {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <p>Department: {props.department}</p>
//       <p>Salary: ₹{props.salary}</p>
//     </div>
//   );
// }

// export default EmployeeCard;

function EmployeeCard({
  name,
  department,
  salary
}) {
  return (
    <div>
      <h2>{name}</h2>
      <p>Department: {department}</p>
      <p>Salary: ₹{salary}</p>
    </div>
  );
}

export default EmployeeCard;