import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { setEmployees } from "../redux/employeeSlice";

import { getEmployees } from "../services/api";

import EmployeeCard from "../components/EmployeeCard";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";

function Employees() {
  const dispatch = useDispatch();

  const employees = useSelector(
    (state) => state.employee.employees
  );

  const [search, setSearch] = useState("");

  const [department, setDepartment] =
    useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await getEmployees();

      const employeesWithDepartment =
        data.map((employee, index) => ({
          ...employee,
          department:
            index % 3 === 0
              ? "Engineering"
              : index % 3 === 1
              ? "HR"
              : "Finance",
        }));

      dispatch(
        setEmployees(
          employeesWithDepartment
        )
      );
    };

    fetchData();
  }, [dispatch]);

  const filteredEmployees =
    employees.filter((employee) => {
      const matchesSearch =
        employee.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchesDepartment =
        department === "" ||
        employee.department ===
          department;

      return (
        matchesSearch &&
        matchesDepartment
      );
    });

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
            width: "100%",
          }}
        >
          <h1>Employees</h1>

          <input
            type="text"
            placeholder="Search Employee"
            value={search}
            onChange={(e) =>
              setSearch(
                e.target.value
              )
            }
          />

          <br />
          <br />

          <select
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
          >
            <option value="">
              All Departments
            </option>

            <option value="Engineering">
              Engineering
            </option>

            <option value="HR">
              HR
            </option>

            <option value="Finance">
              Finance
            </option>
          </select>

          <br />
          <br />

          {filteredEmployees.map(
            (employee) => (
              <EmployeeCard
                key={employee.id}
                employee={employee}
              />
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Employees;