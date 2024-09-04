import { useState, useEffect } from "react";

const KEY = "d9c29e1c";

export default function useMovies(query, setSelectedId, callback) {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(
    function () {
      //만약 callback 함수가 있으면 이걸 실행해라
      callback?.();
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
      setSelectedId(null);
      fetchMovies();

      return function () {
        controller.abort();
      };
    },
    [query, setSelectedId, callback]
  );

  return { movies, isLoading, error };
}
