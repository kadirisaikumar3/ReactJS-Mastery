import { createSlice } from "@reduxjs/toolkit";

const employeeSlice = createSlice({
  name: "employee",

  initialState: {
    employees: [],
  },

  reducers: {

    setEmployees: (
      state,
      action
    ) => {
      state.employees =
        action.payload;
    },

    addEmployee: (
      state,
      action
    ) => {
      state.employees.push(
        action.payload
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
    },
  },
});

export const {
  setEmployees,
  addEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;