import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <h1>Password Toggle</h1>

      <input
        type={show ? "text" : "password"}
      />

      <button
        onClick={() => setShow(!show)}
      >
        {show ? "Hide" : "Show"}
      </button>
    </>
  );
}

export default App;