/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useReducer } from "react";

const FetchContext = createContext();

const initialState = {
  data: null,
  isLoading: false,
  error: "",
};

const fetchReducer = (state, action) => {
  switch (action.type) {
    case "start":
      return { ...state, isLoading: true, error: "" };
    case "success":
      return { ...state, data: action.payload, isLoading: false, error: "" };
    case "error":
      return { ...state, error: action.payload, isLoading: false };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const FetchProvider = ({ children }) => {
  const [{ data, isLoading, error }, dispatch] = useReducer(
    fetchReducer,
    initialState
  );

  return (
    <FetchContext.Provider value={{ data, isLoading, error, dispatch }}>
      {children}
    </FetchContext.Provider>
  );
};

const useFetch = () => {
  const context = useContext(FetchContext);
  if (!context) {
    throw new Error("useFetch must be used within a FetchProvider");
  }
  return context;
};

export { FetchProvider, useFetch };
