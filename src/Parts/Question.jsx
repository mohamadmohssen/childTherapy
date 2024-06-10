import React, { useState, useEffect } from "react";
import axios from "axios";
import "../css/Questions.css";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const questionsPerPage = 15;

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const response = await axios.get("/api/question/getAllQuestions");
        setQuestions(response.data);
      } catch (error) {
        console.error("Error fetching questions:", error);
      }
    };

    fetchQuestions();
  }, []);

  const handleAnswerChange = (questionId, value) => {
    const answer = value === "yes" ? 1 : 0;
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    setErrorMessage(""); // Clear error message when an answer is selected
  };

  const handleSubmitAnswers = async () => {
    const answers = Object.keys(userAnswers).map((questionId) => ({
      questionId: parseInt(questionId),
      answer: userAnswers[questionId],
      testCounter: 1, // Assuming 1 for simplicity, can be dynamic
    }));
    const userId = 1; // Make sure to replace this with dynamic user ID if available
    try {
      await axios.post("/api/userquestion/answers", {
        userId,
        answers,
      });
    } catch (error) {
      console.error("Error submitting answers:", error);
    }
  };

  const handleNextPage = () => {
    const startIndex = (currentPage - 1) * questionsPerPage;
    const currentQuestions = questions.slice(
      startIndex,
      startIndex + questionsPerPage
    );

    const unansweredQuestions = currentQuestions.filter(
      (question) => userAnswers[question.question_id] === undefined
    );

    if (unansweredQuestions.length > 0) {
      alert("Please answer all the questions before proceeding.");
      return;
    }

    handleSubmitAnswers();
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  return (
    <div className="questions-container">
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {currentQuestions.map((question) => (
        <div
          key={question.question_id}
          className="question-card"
          style={{ borderTop: "3px solid #00b999" }}
        >
          <p className="question-text">{question.question_english}</p>
          <p className="question-text">{question.question_arabic}</p>
          <div className="answer-radio">
            <label className="radio-option">
              <input
                type="radio"
                name={`question-${question.question_id}`}
                value="yes"
                checked={userAnswers[question.question_id] === 1}
                onChange={() => handleAnswerChange(question.question_id, "yes")}
              />
              Yes
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name={`question-${question.question_id}`}
                value="no"
                checked={userAnswers[question.question_id] === 0}
                onChange={() => handleAnswerChange(question.question_id, "no")}
              />
              No
            </label>
          </div>
        </div>
      ))}
      <div className="button-container">
        <button
          className="prev-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button className="next-button" onClick={handleNextPage}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Question;
