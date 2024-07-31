import { Link } from "react-router-dom";
import { useFetch } from "../contexts/FetchProvider";
import { useData } from "../contexts/DataProvider";
import "./Result.css";

function Result() {
  const { data } = useFetch();
  const { dispatch } = useData();
  return (
    <div className="page-container">
      <main className="main-content">
        <section className="section">
          <div className="content-container">
            <div className="text-container">
              <h2 className="main-heading">Your Prediction Result</h2>
              <p className="sub-heading">
                Based on the information you provided, your risk of developing
                heart disease using Machine Learning is
              </p>
            </div>
            <div className="result-card">
              <div className="result-content">
                <div
                  className={`result ${
                    !data?.prediction ? "  green" : "  red"
                  }`}
                >
                  {!data?.prediction
                    ? "You have Low risk levels"
                    : "You have High level risk"}
                </div>
                <p className="result-description">
                  {!data?.prediction
                    ? "This indicates a low risk level but continue maintaining a healthy lifestyle and regular check-ups with your healthcare provider."
                    : "This indicates a high risk level. We recommend speaking with your healthcare provider to discuss steps you can take to lower your risk."}
                </p>
                <div className="button-container">
                  <Link
                    to="/form"
                    className="custom-button"
                    onClick={() => dispatch({ type: "submit", payLoad: false })}
                  >
                    Back to Predict
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Result;
