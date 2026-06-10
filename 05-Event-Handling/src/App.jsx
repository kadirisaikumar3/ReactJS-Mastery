import ButtonClick from "./components/ButtonClick";
import SearchInput from "./components/SearchInput";
import FormSubmit from "./components/FormSubmit";
import MouseEvent from "./components/MouseEvent";
import KeyboardEvent from "./components/KeyboardEvent";

function App() {
  return (
    <>
      <ButtonClick />
      <hr />

      <SearchInput />
      <hr />

      <FormSubmit />
      <hr />

      <MouseEvent />
      <hr />

      <KeyboardEvent />
    </>
  );
}

export default App;