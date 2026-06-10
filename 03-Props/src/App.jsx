import EmployeeCard from "./components/EmployeeCard";

function App() {
  return (
    <>
      <h1>Employee Dashboard</h1>

      <EmployeeCard
        name="Saikumar"
        department="Engineering"
        salary={50000}
      />

      <EmployeeCard
        name="Deepa"
        department="HR"
        salary={40000}
      />

      <EmployeeCard
        name="Siri"
        department="Finance"
        salary={60000}
      />
    </>
  );
}

export default App;

// import Card from "./components/Card";

// function App() {
//   return (
//     <Card>
//       <h1>Welcome to React Props</h1>
//       <p>This content comes through props.children</p>
//     </Card>
//   );
// }

// export default App;