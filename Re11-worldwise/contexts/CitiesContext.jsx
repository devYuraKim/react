import { useContext } from "react";
import { useEffect, useState, useReducer } from "react";
import { createContext } from "react";

const SERVER_URL = "http://localhost:8000/cities";
const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
};

function reducer(action, state) {
  switch (action.type) {
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    default:
      return null;
  }
}

function CitiesProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const [cities, setCities] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentCity, setCurrentCity] = useState({});

  useEffect(function () {
    async function fetchCities() {
      setIsLoading(true);
      try {
        const res = await fetch(SERVER_URL);
        const data = await res.json();
        setCities(data);
      } catch (err) {
        console.log(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    fetchCities();
  }, []);

  async function getCurrentCity(id) {
    setIsLoading(true);
    try {
      //이 URL이면 특정 city 객체만 반환됨
      const res = await fetch(`${SERVER_URL}/${id}`);
      const data = await res.json();
      setCurrentCity(data);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function createCity(newCity) {
    setIsLoading(true);
    try {
      const res = await fetch(`${SERVER_URL}`, {
        method: "post",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      setCities((cities) => [...cities, data]);
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
    }
  }

  async function deleteCity(id) {
    setIsLoading(true);
    try {
      await fetch(`${SERVER_URL}`, {
        method: "delete",
      });
    } catch (err) {
      console.log(err.message);
    } finally {
      setIsLoading(false);
      setCities((cities) => cities.filter((city) => id !== city.id));
    }
  }

  return (
    <CitiesContext.Provider
      value={{
        cities,
        isLoading,
        currentCity,
        getCurrentCity,
        createCity,
        deleteCity,
      }}
    >
      {children}
    </CitiesContext.Provider>
  );
}

function useCities() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error("cities context was used outside CitiesProvider");
  return context;
}

export { CitiesProvider, useCities };
