import { useContext } from "react";
import { useEffect, useState, useReducer } from "react";
import { createContext } from "react";

const SERVER_URL = "http://localhost:8000/cities";
const CitiesContext = createContext();

const initialState = {
  cities: [],
  isLoading: false,
  currentCity: {},
  error: null,
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true, error: null };
    case "cities/loaded":
      return {
        ...state,
        isLoading: false,
        cities: action.payload,
      };
    case "city/loaded":
      return {
        ...state,
        isLoading: false,
        currentCity: action.payload,
      };
    case "city/created":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities, action.payload],
      };
    case "city/deleted":
      return {
        ...state,
        isLoading: false,
        cities: [...state.cities.filter((city) => action.payload !== city.id)],
      };
    case "rejected":
      return { ...state, isLoading: false, error: action.payload };

    default:
      throw new Error("unknown action type");
  }
}

function CitiesProvider({ children }) {
  const [{ cities, isLoading, currentCity }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(function () {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        const res = await fetch(SERVER_URL);
        const data = await res.json();
        dispatch({ type: "cities/loaded", payload: data });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading the cities",
        });
      }
    }
    fetchCities();
  }, []);

  async function getCurrentCity(id) {
    dispatch({ type: "loading" });
    try {
      //이 URL이면 특정 city 객체만 반환됨
      const res = await fetch(`${SERVER_URL}/${id}`);
      const data = await res.json();
      dispatch({ type: "city/loaded", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error loading the city",
      });
    }
  }

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      const res = await fetch(`${SERVER_URL}`, {
        method: "post",
        body: JSON.stringify(newCity),
        headers: { "Content-Type": "application/json" },
      });
      const data = await res.json();
      dispatch({ type: "city/created", payload: data });
    } catch {
      dispatch({
        type: "rejected",
        payload: "There was an error creating the city",
      });
    }
  }

  async function deleteCity(id) {
    dispatch({ type: "loading" });
    try {
      await fetch(`${SERVER_URL}/${id}`, {
        method: "delete",
      });
      dispatch({ type: "city/deleted", payload: id });
    } catch (err) {
      dispatch({
        type: "rejected",
        payload: "There was an error deleting the city",
      });
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
