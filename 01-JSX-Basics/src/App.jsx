// function App() {
//   const name = "Saikumar";

//   return (
//     <div>
//       <h1>Hello {name}</h1>
//       <p>Welcome to React JSX Basics</p>
//     </div>
//   );
// }

// export default App;

// function App() {
//   const name = "Saikumar";

//   const skills = [
//     "Java",
//     "React",
//     "DSA",
//     "System Design"
//   ];

//   return (
//     <div>
//       <h1>Hello {name}</h1>

//       <h2>My Skills</h2>

//       {skills.map((skill, index) => (
//         <p key={index}>{skill}</p>
//       ))}
//     </div>
//   );
// }

// export default App;

function App() {
  const isLoggedIn = true;

  return (
    <div>
      <h1>JSX Basics</h1>

      {isLoggedIn ? (
        <h2>Welcome User</h2>
      ) : (
        <h2>Please Login</h2>
      )}
    </div>
  );
}

export default App;