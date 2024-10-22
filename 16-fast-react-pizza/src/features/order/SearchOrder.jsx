import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const inputMessage = "Search order #";
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  //Structure for navigating the user from the input form to the results page
  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder={inputMessage}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      ></input>
    </form>
  );
}

export default SearchOrder;
