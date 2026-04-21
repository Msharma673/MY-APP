import React, { useState, useEffect } from "react";
import "./QuizPage.css";
import { useSelector, useDispatch } from "react-redux";
import Start from "../../components/QuizComponent/components/Start";
import Question from "../../components/QuizComponent/components/Question";
import End from "../../components/QuizComponent/components/End";
import quizData from "../../components/QuizComponent/data/quiz.json";
import NavBar from "../../components/NavBar/NavBar";
import Footer from "../../components/Footer/Footer";

let interval;

const QuizPage = () => {
  const dispatch = useDispatch();
  const { step, answers } = useSelector((state) => state.quizReducer);
  const [showModal, setShowModal] = useState(false);
  const [time, setTime] = useState(0);

  useEffect(() => {
    if (step === 3) {
      clearInterval(interval);
    }
  }, [step]);

  return (
    <div className="QuizTest">
      <NavBar />
      <div className="Quiz">
        {step === 1 && <Start />}
        {step === 2 && <Question />}
        {step === 3 && (
          <End
            data={quizData.data}
            time={time}
            onAnswersCheck={() => setShowModal(true)}
          />
        )}
      </div>
      <Footer />
    </div>
  );
};

export default QuizPage;
