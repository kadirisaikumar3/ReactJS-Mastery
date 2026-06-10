import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  employees: [
    {
      id: 1,
      name: "Sai",
      department: "Engineering",
    },
  ],
};

const employeeSlice = createSlice({
  name: "employee",

  initialState,

  reducers: {

    addEmployee: (state, action) => {
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
  addEmployee,
  deleteEmployee,
} = employeeSlice.actions;

export default employeeSlice.reducer;