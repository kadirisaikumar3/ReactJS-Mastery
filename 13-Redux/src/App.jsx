import {
  useDispatch,
  useSelector,
} from "react-redux";

function App() {

  const count =
    useSelector(
      (state) => state.count
    );

  const dispatch =
    useDispatch();

  return (
    <>
      <h1>
        Count: {count}
      </h1>

      <button
        onClick={() =>
          dispatch({
            type: "INCREMENT",
          })
        }
      >
        Increment
      </button>

      <button
        onClick={() =>
          dispatch({
            type: "DECREMENT",
          })
        }
      >
        Decrement
      </button>
    </>
  );
}

export default App;