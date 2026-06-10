import { useState } from "react";

function App() {
  const [dark, setDark] = useState(false);

  return (
    <div
      style={{
        backgroundColor: dark ? "black" : "white",
        color: dark ? "white" : "black",
        minHeight: "100vh"
      }}
    >
      <h1>Dark Mode Toggle</h1>

      <button
        onClick={() => setDark(!dark)}
      >
        Toggle Theme
      </button>
    </div>
  );
}

export default App;