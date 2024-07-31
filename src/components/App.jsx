// eslint-disable-next-line no-unused-vars
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormPage from "../pages/FormPage.jsx";
import Home from "../pages/home.jsx";
import Result from "../pages/Result.jsx";
import { DataProvider } from "../contexts/DataProvider.jsx";
import { FetchProvider } from "../contexts/FetchProvider.jsx";

function App() {
  return (
    <div>
      <DataProvider>
        <FetchProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/form" element={<FormPage />} />
              <Route path="/predict" element={<Result />} />
            </Routes>
          </BrowserRouter>
        </FetchProvider>
      </DataProvider>
    </div>
  );
}

export default App;
