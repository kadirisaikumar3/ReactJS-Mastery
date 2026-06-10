import { useState } from "react";

function SearchInput() {

  const [search, setSearch] = useState("");

  return (
    <>
      <h2>Search Input</h2>

      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />

      <p>You typed: {search}</p>
    </>
  );
}

export default SearchInput;