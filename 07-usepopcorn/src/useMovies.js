import { useEffect, useState } from "react";

const KEY = "d9c29e1c";

export function useMovies(query) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      const controller = new AbortController();
      async function fetchMovies() {
        try {
          setError(null);
          setIsLoading(true);
          const res = await fetch(
            `https://www.omdbapi.com/?apikey=${KEY}&s=${query}`,
            { signal: controller.signal }
          );
          if (!res.ok) throw new Error("Lost Connection");

          const data = await res.json();
          if (data.Response === "False") throw new Error("No Result");

          setMovies(data.Search);
          setIsLoading(false);
          setError(null);
        } catch (err) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (!query.length) {
        setMovies([]);
        setError(null);
        return;
      }

      fetchMovies();
      // with every keystroke, the component re-renders and calls on abort function to abort the current fetch request
      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return { movies, isLoading, error };
}
