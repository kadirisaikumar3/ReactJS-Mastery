import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import EmployeeForm from "../components/EmployeeForm";

function AddEmployee() {
  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <EmployeeForm />
        </div>
      </div>
    </>
  );
}

export default AddEmployee;