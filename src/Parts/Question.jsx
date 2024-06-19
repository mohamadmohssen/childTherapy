import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Questions.css";

const Question = () => {
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(true);
  const [isFinished, setIsFinished] = useState(false);
  const [importantYesCount, setImportantYesCount] = useState(0);
  const { id, testCounter } = useParams();
  const questionsPerPage = 15;
  const userId = id;
  console.log("the id is:", id, "the tstcount is", testCounter);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const [questionsResponse, userAnswersResponse] = await Promise.all([
          axios.get("/api/question/getAllQuestions"),
          axios.get(`/api/userquestion/answers/${userId}/${testCounter}`),
        ]);

        const userAnswersData = userAnswersResponse.data.reduce(
          (acc, answer) => {
            acc[answer.question_id] = answer.answer;
            return acc;
          },
          {}
        );

        setQuestions(questionsResponse.data);
        setUserAnswers(userAnswersData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);

  const handleAnswerChange = (questionId, value) => {
    const answer = value === "yes";
    setUserAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
    setErrorMessage("");
  };

  const handleSubmitAnswers = async () => {
    const answers = Object.keys(userAnswers).map((questionId) => ({
      questionId: parseInt(questionId, 10),
      answer: !!userAnswers[questionId],
      testCounter: parseInt(testCounter, 10),
    }));

    try {
      await axios.post("/api/userquestion/answers", {
        userId,
        answers,
      });
      console.log("User answers saved successfully.");
    } catch (error) {
      console.error("Error saving user answers:", error);
    }
  };

  const calculateResultsByType = () => {
    const results = {};
    questions.forEach((question) => {
      const type = question.type;
      if (!results[type]) {
        results[type] = 0;
      }
      if (userAnswers[question.question_id]) {
        results[type] += 1;
      }
    });
    return results;
  };
  const calculateImportantYesCount = () => {
    // Assuming questions marked with `is_important` should be counted
    return questions.reduce((count, question) => {
      if (question.is_important && userAnswers[question.question_id]) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const handleNextPage = async () => {
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

    if (currentPage < Math.ceil(questions.length / questionsPerPage)) {
      setCurrentPage((prevPage) => prevPage + 1);
    } else {
      try {
        await axios.post(`/api/user/finish/${userId}`);
        console.log("User marked as finished.");

        // Calculate the results by type
        const resultsByType = calculateResultsByType();

        // Send the counts to the backend to update the user's results
        await axios.post("/api/user/updateResultsByType", {
          userId,
          resultsByType,
        });
        const importantYesCount = calculateImportantYesCount();
        setImportantYesCount(importantYesCount);

        // Send the count to the backend to update the user's result
        await axios.post("/api/user/updateResult", {
          userId,
          importantYesCount,
        });
        setIsFinished(true);
      } catch (error) {
        console.error("Error updating user to finished:", error);
      }
    }
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : 1));
  };

  const startIndex = (currentPage - 1) * questionsPerPage;
  const currentQuestions = questions.slice(
    startIndex,
    startIndex + questionsPerPage
  );

  const answeredQuestionsCount = Object.keys(userAnswers).length;
  const totalQuestionsCount = questions.length;

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isFinished) {
    return (
      <div className="questions-container" style={{ marginTop: "5.5rem" }}>
        <h1>Finished!</h1>
        <p>You have answered all the questions. Thank you!</p>
        <p>You answered "Yes" to {importantYesCount} important questions.</p>
        <p>Results have been saved to your profile.</p>
      </div>
    );
  }

  return (
    <div className="questions-container" style={{ marginTop: "5.5rem" }}>
      <h1>Fill the questions here.</h1>

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
            <label className="radio-option me-3">
              <input
                type="radio"
                name={`question-${question.question_id}`}
                value="yes"
                checked={userAnswers[question.question_id] === true}
                onChange={() => handleAnswerChange(question.question_id, "yes")}
              />
              Yes / نعم
            </label>
            <label className="radio-option">
              <input
                type="radio"
                name={`question-${question.question_id}`}
                value="no"
                checked={userAnswers[question.question_id] === false}
                onChange={() => handleAnswerChange(question.question_id, "no")}
              />
              No / لا
            </label>
          </div>
        </div>
      ))}
      <div className="button-container">
        <div className="question-count">
          {answeredQuestionsCount}/{totalQuestionsCount} Answered Questions
        </div>
        <button
          className="prev-button"
          onClick={handlePreviousPage}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <button className="next-button" onClick={handleNextPage}>
          {currentPage < Math.ceil(questions.length / questionsPerPage)
            ? "Next"
            : "Finish"}
        </button>
      </div>
    </div>
  );
};

export default Question;
