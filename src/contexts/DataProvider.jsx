/* eslint-disable react/prop-types */
/* eslint-disable react-refresh/only-export-components */
// eslint-disable-next-line no-unused-vars
import React, { createContext, useContext, useReducer } from "react";

const DataContext = createContext();

const initialState = {
  age: undefined,
  sex: 0,
  cp: 0,
  trestbps: undefined,
  chol: undefined,
  fbs: undefined,
  restecg: 0,
  thalach: undefined,
  exang: 0,
  oldpeak: undefined,
  slope: 0,
  ca: 0,
  thal: 0,
  prediction: undefined,
  isSubmitted: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "age":
      return { ...state, age: action.payLoad };
    case "sex":
      return { ...state, sex: action.payLoad };
    case "cp":
      return { ...state, cp: action.payLoad };
    case "trestbps":
      return { ...state, trestbps: action.payLoad };
    case "chol":
      return { ...state, chol: action.payLoad };
    case "fbs":
      return { ...state, fbs: action.payLoad };
    case "restecg":
      return { ...state, restecg: action.payLoad };
    case "thalach":
      return { ...state, thalach: action.payLoad };
    case "exang":
      return { ...state, exang: action.payLoad };
    case "oldpeak":
      return { ...state, oldpeak: action.payLoad };
    case "slope":
      return { ...state, slope: action.payLoad };
    case "ca":
      return { ...state, ca: action.payLoad };
    case "thal":
      return { ...state, thal: action.payLoad };
    case "prediction":
      return { ...state, prediction: action.payLoad };
    case "submit":
      return { ...state, isSubmitted: action.payLoad };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <DataContext.Provider value={{ state, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useData must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useData };
