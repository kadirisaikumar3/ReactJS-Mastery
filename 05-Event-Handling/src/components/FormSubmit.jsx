import { useState } from "react";

function FormSubmit() {

  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();  // prevents page refresh.

    alert(`Welcome ${name}`);
  };

  return (
    <>
      <h2>Form Submit</h2>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(e.target.value)
          }
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </>
  );
}

export default FormSubmit;