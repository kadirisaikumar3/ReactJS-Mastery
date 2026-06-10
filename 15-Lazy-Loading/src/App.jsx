import { lazy, Suspense } from "react";

const Home = lazy(() => import("./Home"));

function App() {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Home />
    </Suspense>
  );
}

export default App;