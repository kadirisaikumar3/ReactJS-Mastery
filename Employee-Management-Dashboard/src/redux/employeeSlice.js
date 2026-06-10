import { createSlice } from "@reduxjs/toolkit";

const savedEmployees =
  JSON.parse(
    localStorage.getItem("employees")
  ) || [];

const employeeSlice = createSlice({
  name: "employee",

  initialState: {
    employees: savedEmployees,
  },

  reducers: {

    setEmployees: (
      state,
      action
    ) => {

      if (
        state.employees.length === 0
      ) {

        state.employees =
          action.payload;

        localStorage.setItem(
          "employees",
          JSON.stringify(
            state.employees
          )
        );
      }
    },

    addEmployee: (
      state,
      action
    ) => {

      state.employees.push(
        action.payload
      );

      localStorage.setItem(
        "employees",
        JSON.stringify(
          state.employees
        )
      );
    },

    deleteEmployee: (
      state,
      action
    ) => {

      state.employees =
        state.employees.filter(
          (employee) =>
            employee.id !==
            action.payload
        );

      localStorage.setItem(
        "employees",
        JSON.stringify(
          state.employees
        )
      );
    },

    updateEmployee: (
      state,
      action
    ) => {

      const index =
        state.employees.findIndex(
          (employee) =>
            employee.id ===
            action.payload.id
        );

      if (index !== -1) {

        state.employees[index] =
          action.payload;

        localStorage.setItem(
          "employees",
          JSON.stringify(
            state.employees
          )
        );
      }
    },
  },
});

export const {
  setEmployees,
  addEmployee,
  deleteEmployee,
  updateEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;