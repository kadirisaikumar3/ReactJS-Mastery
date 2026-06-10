import Home from "./Home";
import withLogger from "./withLogger";

const EnhancedHome =
  withLogger(Home);

function App() {
  return (
    <EnhancedHome />
  );
}

export default App;