/* eslint-disable react/prop-types */
import { useState } from "react";
import { useData } from "../contexts/DataProvider";
import "./Form.css";

function Form({ isLoading }) {
  const [name, setName] = useState("");
  const { state, dispatch } = useData();
  const {
    age,
    sex,
    cp,
    trestbps,
    chol,
    fbs,
    restecg,
    thalach,
    exang,
    oldpeak,
    slope,
    ca,
    thal,
  } = state;

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "submit", payLoad: true });
  };

  return (
    <div className="form-container">
      <div className="form-header">
        <h1 className="form-title">Heart Disease Form</h1>
        <p className="form-description">
          Please fill out the following information to predict the likelihood of
          heart disease based on your medical data.
        </p>
      </div>
      <form className="form" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-grid">
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="Name" className="form-label">
                Name :
              </label>
              <div className="form-input">
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="age" className="form-label">
                Age :
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="age"
                  placeholder="43"
                  className="form-control"
                  min={0}
                  max={100}
                  value={age !== undefined ? age : ""}
                  onChange={(e) =>
                    dispatch({
                      type: "age",
                      payLoad:
                        e.target.value === 0
                          ? null
                          : e.target.value > 100
                          ? 0
                          : Number(e.target.value),
                    })
                  }
                  required
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="sex" className="form-label">
                Sex:
              </label>
              <div className="form-input">
                <select
                  className="form-control"
                  required
                  value={sex}
                  onChange={(e) =>
                    dispatch({ type: "sex", payLoad: Number(e.target.value) })
                  }
                >
                  <option value="1"> Male</option>
                  <option value="0">Female</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="cp" className="form-label">
                Chest Pain Type:
              </label>
              <div className="form-input">
                <select
                  className="form-control"
                  required
                  value={cp}
                  onChange={(e) =>
                    dispatch({ type: "cp", payLoad: Number(e.target.value) })
                  }
                >
                  <option value="0">Asymptomatic</option>
                  <option value="1">Atypical Angina</option>
                  <option value="2">Non-Anginal Pain</option>
                  <option value="3">Typical Angina</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="trestbps" className="form-label">
                Blood Pressure
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="trestbps"
                  placeholder="120"
                  min={0}
                  max={300}
                  className="form-control"
                  required
                  value={trestbps !== undefined ? trestbps : ""}
                  onChange={(e) =>
                    dispatch({
                      type: "trestbps",
                      payLoad: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="chol" className="form-label">
                Cholesterol
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="chol"
                  min="1"
                  max="300"
                  step="0.1"
                  placeholder="220.6"
                  className="form-control"
                  required
                  value={chol !== undefined ? chol : ""}
                  onChange={(e) =>
                    dispatch({
                      type: "chol",
                      payLoad: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="fbs" className="form-label">
                Fasting blood sugar
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="fbs"
                  min="0"
                  max="200"
                  placeholder="98"
                  className="form-control"
                  required
                  value={fbs !== undefined ? fbs : ""}
                  onChange={(e) =>
                    dispatch({
                      type: "fbs",
                      payLoad: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="restecg" className="form-label">
                Resting electrography
              </label>
              <div className="form-input">
                <select
                  name=""
                  className="form-control"
                  required
                  value={restecg}
                  onChange={(e) =>
                    dispatch({
                      type: "restecg",
                      payLoad: Number(e.target.value),
                    })
                  }
                >
                  <option value="0">
                    Probable or Definite Left ventricular hypertrophy
                  </option>
                  <option value="1">Normal hypertrophy</option>
                  <option value="2">ST-T wave Abnormality</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="thalach" className="form-label">
                Maximum heart rate
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="thalach"
                  min="0"
                  placeholder="80"
                  className="form-control"
                  required
                  value={thalach !== undefined ? thalach : ""}
                  onChange={(e) =>
                    dispatch({
                      type: "thalach",
                      payLoad: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="exang" className="form-label">
                Exercise induce angina
              </label>
              <div className="form-input">
                <select
                  name="exang"
                  className="form-control"
                  required
                  value={exang}
                  onChange={(e) =>
                    dispatch({
                      type: "exang",
                      payLoad: Number(e.target.value),
                    })
                  }
                >
                  <option value="0">No</option>
                  <option value="1">Yes</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="oldpeak" className="form-label">
                ST relates to ECG positions
              </label>
              <div className="form-input">
                <input
                  type="number"
                  name="oldpeak"
                  min="0"
                  max="100"
                  step="0.1"
                  placeholder="1.6"
                  className="form-control"
                  required
                  value={oldpeak !== undefined ? oldpeak : ""}
                  onChange={(e) =>
                    dispatch({
                      type: "oldpeak",
                      payLoad: Number(e.target.value),
                    })
                  }
                />
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="slope" className="form-label">
                Slope of Peak in Exercise ST
              </label>
              <div className="form-input">
                <select
                  name=""
                  className="form-control"
                  required
                  value={slope}
                  onChange={(e) =>
                    dispatch({
                      type: "slope",
                      payLoad: Number(e.target.value),
                    })
                  }
                >
                  <option value="0">Down Sloping</option>
                  <option value="1">Flat</option>
                  <option value="2">Up sloping</option>
                </select>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="form-field">
              <label htmlFor="ca" className="form-label">
                No of Major Vessels Coloured by Fluoroscopy
              </label>
              <div className="form-input">
                <select
                  name=""
                  className="form-control"
                  required
                  value={ca}
                  onChange={(e) =>
                    dispatch({
                      type: "ca",
                      payLoad: Number(e.target.value),
                    })
                  }
                >
                  <option value="0">0</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>
            </div>
            <div className="form-field">
              <label htmlFor="thal" className="form-label">
                Thallium heart scan
              </label>
              <div className="form-input">
                <select
                  name=""
                  className="form-control"
                  required
                  value={thal}
                  onChange={(e) =>
                    dispatch({
                      type: "thal",
                      payLoad: Number(e.target.value),
                    })
                  }
                >
                  <option value="0">Null</option>
                  <option value="1">Fixed Defect</option>
                  <option value="2">Normal Blood Flow</option>
                  <option value="3">Reversible Defect</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Loading" : "Predict"}
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
