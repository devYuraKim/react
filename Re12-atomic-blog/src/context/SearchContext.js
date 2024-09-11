import { createContext, useState, useContext } from "react";

const SearchContext = createContext();

function SearchProvider({ children }) {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider
      value={{
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function useSearchContext() {
  const context = useContext(SearchContext);
  if (!context) throw new Error("context used outside Search Provider");
  return context;
}

export { SearchProvider, useSearchContext };
