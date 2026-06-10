import "./App.css";

import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let validationErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    }

    if (!formData.department.trim()) {
      validationErrors.department = "Department is required";
    }

    if (!formData.salary.trim()) {
      validationErrors.salary = "Salary is required";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Employee Registered Successfully");

      console.log(formData);

      setFormData({
        name: "",
        email: "",
        department: "",
        salary: ""
      });
    }
  };

  return (
    <>
      <h1>Employee Registration Form</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
        />
        <br />
        <span>{errors.name}</span>

        <br /><br />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />
        <span>{errors.email}</span>

        <br /><br />

        <input
          type="text"
          name="department"
          placeholder="Enter Department"
          value={formData.department}
          onChange={handleChange}
        />
        <br />
        <span>{errors.department}</span>

        <br /><br />

        <input
          type="number"
          name="salary"
          placeholder="Enter Salary"
          value={formData.salary}
          onChange={handleChange}
        />
        <br />
        <span>{errors.salary}</span>

        <br /><br />

        <button type="submit">
          Register Employee
        </button>

      </form>
    </>
  );
}

export default App;