import styles from "./home.module.css";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";

export default function Component() {
  return (
    <>
      <Nav />
      <div className={`${styles.flex} ${styles.minHScreen} ${styles.flexCol}`}>
        <header
          className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.hScreen} ${styles.bgPrimary} ${styles.textPrimaryForeground}`}
        >
          <div
            className={`${styles.container} ${styles.mxAuto} ${styles.px4} ${styles.mdPx6} ${styles.maxW4xl} ${styles.textCenter} ${styles.spaceY6}`}
          >
            <h1
              className={`${styles.text4xl} ${styles.mdText6xl} ${styles.fontBold}`}
            >
              Predict Your Heart Health
            </h1>
            <p
              className={`${styles.textLg} ${styles.mdTextXl} ${styles.textMutedForeground}`}
            >
              This heart disease predictor, developed using Python and machine
              learning, helps you understand your risk and take proactive steps
              towards a healthier future.
            </p>
            <Link
              to="/form"
              className={`${styles.inlineFlex} ${styles.h10} ${styles.itemsCenter} ${styles.justifyCenter} ${styles.roundedMd} ${styles.bgButton} ${styles.px6} ${styles.textSm} ${styles.fontMedium} ${styles.textButton} ${styles.shadow} ${styles.transitionColors} ${styles.hoverBgPrimary90} ${styles.focusVisibleOutlineNone} ${styles.focusVisibleRing} ${styles.disabledPointerEventsNone} ${styles.disabledOpacity50}`}
            >
              Start Prediction
            </Link>
          </div>
        </header>
        <main className={styles.flex1}>
          <section className={`${styles.py12} ${styles.mdPy20}`}>
            <div
              className={`${styles.container} ${styles.mxAuto} ${styles.px4} ${styles.mdPx6} ${styles.maxW4xl} ${styles.spaceY8}`}
            >
              <div className={styles.spaceY4}>
                <h2
                  className={`${styles.text3xl} ${styles.mdText4xl} ${styles.fontBold}`}
                >
                  About the Project.
                </h2>
                <p className={styles.textMutedForeground}>
                  The dataset originates from the Machine Learning Repository
                  and pertains to heart disease. Initial steps include managing
                  missing data, encoding categorical variables, and normalizing
                  or scaling features using Python libraries such as pandas,
                  numpy, and scikit-learn. These preparatory tasks ensure the
                  data is suitable for analysis and model training
                </p>
              </div>
              <div className={styles.spaceY4}>
                <ul
                  className={`${styles.grid} ${styles.gridCols1} ${styles.mdGridCols2} ${styles.gap4}`}
                >
                  <li
                    className={`${styles.flex} ${styles.itemsStart} ${styles.gap4}`}
                  >
                    <div>
                      <h3 className={`${styles.textXl} ${styles.fontBold}`}>
                        Algorithm Used
                      </h3>
                      <p className={styles.textMutedForeground}>
                        Logistic regression serves as the chosen algorithm for
                        predicting heart disease. The dataset is split into
                        training and testing sets to train the model using
                        scikit-learn. Evaluation metrics such as accuracy and
                        precision are utilized to measure the model&apos;s
                        performance.
                      </p>
                    </div>
                  </li>
                  <li
                    className={`${styles.flex} ${styles.itemsStart} ${styles.gap4}`}
                  >
                    <div>
                      <h3 className={`${styles.textXl} ${styles.fontBold}`}>
                        Accuracy
                      </h3>
                      <p className={styles.textMutedForeground}>
                        The logistic regression model achieved an accuracy of
                        85.5%, indicating its capability to predict heart
                        disease outcomes with a high level of correctness.
                      </p>
                    </div>
                  </li>
                  <li
                    className={`${styles.flex} ${styles.itemsStart} ${styles.gap4}`}
                  >
                    <div>
                      <h3 className={`${styles.textXl} ${styles.fontBold}`}>
                        Tools Used
                      </h3>
                      <p className={styles.textMutedForeground}>
                        The project leverages Python libraries including pandas
                        for data manipulation, numpy for numerical operations,
                        and scikit-learn for machine learning tasks. These tools
                        facilitate robust data preprocessing, model training,
                        and evaluation for accurate heart disease prediction.
                      </p>
                    </div>
                  </li>
                  <li
                    className={`${styles.flex} ${styles.itemsStart} ${styles.gap4}`}
                  >
                    <div>
                      <h3 className={`${styles.textXl} ${styles.fontBold}`}>
                        Challenge in Training
                      </h3>
                      <p className={styles.textMutedForeground}>
                        Key challenges include managing data quality issues and
                        optimizing the logistic regression model for better
                        predictive accuracy. These steps are crucial in refining
                        the model&apos;s capability to effectively predict heart
                        disease.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
