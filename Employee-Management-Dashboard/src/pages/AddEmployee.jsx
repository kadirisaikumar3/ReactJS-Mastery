import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
        }}
      >
        <Sidebar />

        <div
          style={{
            padding: "20px",
          }}
        >
          <EmployeeForm />
        </div>
      </div>
    </>
  );
}

export default AddEmployee;