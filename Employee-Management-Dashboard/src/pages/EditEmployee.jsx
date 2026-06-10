import { useState } from "react";

import { useDispatch } from "react-redux";

import { updateEmployee } from "../redux/employeeSlice";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function EditEmployee() {
  const dispatch = useDispatch();

  const [name, setName] =
    useState("");

  const [department, setDepartment] =
    useState("");

  const handleUpdate = () => {
    dispatch(
      updateEmployee({
        id: 1,
        name,
        department,
        email:
          "updated@company.com",
      })
    );

    alert(
      "Employee Updated Successfully"
    );
  };

  return (
    <>
      <Navbar />

      <div className="container">
        <Sidebar />

        <div className="content">
          <h1>Edit Employee</h1>

          <br />

          <input
            className="input"
            type="text"
            placeholder="Employee Name"
            value={name}
            onChange={(e) =>
              setName(
                e.target.value
              )
            }
          />

          <br />
          <br />

          <input
            className="input"
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
          />

          <br />
          <br />

          <button
            className="btn"
            onClick={
              handleUpdate
            }
          >
            Update Employee
          </button>
        </div>
      </div>
    </>
  );
}

export default EditEmployee;