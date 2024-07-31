// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import { useData } from "../contexts/DataProvider";
import { useFetch } from "../contexts/FetchProvider";
import { useNavigate } from "react-router";
import Form from "../components/Form";
import Nav from "../components/Nav";
const apiUrl = import.meta.env.VITE_API_URL;
function FormPage() {
  const navigate = useNavigate();
  const { state: formDataState } = useData();
  const { dispatch: fetchDispatch } = useFetch();
  const [inputData, setInputData] = useState(null);

  useEffect(() => {
    if (formDataState.isSubmitted) {
      setInputData([
        formDataState.age,
        formDataState.sex,
        formDataState.cp,
        formDataState.trestbps,
        formDataState.chol,
        formDataState.fbs,
        formDataState.restecg,
        formDataState.thalach,
        formDataState.exang,
        formDataState.oldpeak,
        formDataState.slope,
        formDataState.ca,
        formDataState.thal,
      ]);
    } else {
      setInputData(null);
    }
  }, [formDataState]);

  useEffect(() => {
    async function fetchPrediction() {
      if (inputData && formDataState.isSubmitted) {
        fetchDispatch({ type: "start" });

        try {
          const response = await fetch(`${apiUrl}/predict`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ input_data: inputData }),
          });

          if (!response.ok) {
            throw new Error("Failed to fetch prediction");
          }

          const data = await response.json();
          fetchDispatch({ type: "success", payload: data });
        } catch (error) {
          fetchDispatch({ type: "error", payload: error.message });
        }
      }
    }

    if (inputData && formDataState.isSubmitted) {
      fetchPrediction();
      navigate("/predict");
    }
  }, [inputData, formDataState.isSubmitted, fetchDispatch, navigate]);
  return (
    <>
      <Nav />
      <div>
        <Form isLoading={false} />
      </div>
    </>
  );
}

export default FormPage;
