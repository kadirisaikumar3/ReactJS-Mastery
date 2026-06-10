import {
  useSelector,
  useDispatch,
} from "react-redux";

import {
  addEmployee,
  deleteEmployee,
} from "./redux/employeeSlice";

function App() {

  const employees =
    useSelector(
      (state) =>
        state.employee.employees
    );

  const dispatch =
    useDispatch();

  return (
    <>
      <h1>
        Employee Store
      </h1>

      <button
        onClick={() =>
          dispatch(
            addEmployee({
              id: Date.now(),
              name: "New Employee",
              department: "IT",
            })
          )
        }
      >
        Add Employee
      </button>

      <hr />

      {employees.map(
        (employee) => (
          <div
            key={employee.id}
          >
            <h3>
              {employee.name}
            </h3>

            <p>
              {
                employee.department
              }
            </p>

            <button
              onClick={() =>
                dispatch(
                  deleteEmployee(
                    employee.id
                  )
                )
              }
            >
              Delete
            </button>

            <hr />
          </div>
        )
      )}
    </>
  );
}

export default App;