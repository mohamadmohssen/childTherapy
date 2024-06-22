import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "../css/Questions.css";

const Question = () => {
  const [user, setUser] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [userAnswers, setUserAnswers] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [risk, setRisk] = useState(1);
  const [highRisk, setHighRisk] = useState(1);
  const [min, setMin] = useState();
  const [max, setMax] = useState();
  const [ageDataMin, setAgeDataMin] = useState([]); // State to store scores and types by age
  const [ageDataMax, setAgeDataMax] = useState([]);
  const [isFinished, setIsFinished] = useState(false);
  const [importantYesCount, setImportantYesCount] = useState(0);
  const { id, testCounter } = useParams();
  const questionsPerPage = 15;
  const userId = id;

  // Function to fetch data by age and handle setting state
  const fetchDataByAge = async (age, setState) => {
    try {
      const response = await axios.get(`/api/type/types/dg/age/${age}`);
      if (response.status === 200) {
        setState(response.data); // Use functional update to set the state
      } else {
        setError("Failed to fetch data by age");
      }
    } catch (error) {
      console.error("Error fetching data by age:", error);
      setError("Failed to fetch data by age");
    }
  };

  const fetchUser = async (userid) => {
    try {
      const response = await axios.get(`/api/user/getpatient/${userid}`);
      return response.data; // Return the data directly
    } catch (error) {
      console.error("Error fetching user:", error);
      setError("Failed to fetch user by id");
      return null;
    }
  };

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
  }, [userId, testCounter]);

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
    // Assuming questions marked with is_important should be counted
    return questions.reduce((count, question) => {
      if (question.is_important && userAnswers[question.question_id]) {
        return count + 1;
      }
      return count;
    }, 0);
  };

  const calculateRisk = (score, minn, maxx) => {
    console.log(minn, score, maxx);
    if (minn && maxx) {
      if (score > minn && score <= maxx) {
        return (
          <p style={{ color: "#FD9A24" }}>
            <b>High Risk</b>
          </p>
        );
      } else if (score > maxx) {
        return (
          <p style={{ color: "green" }}>
            <b>Normal</b>
          </p>
        );
      } else if (score <= minn) {
        return (
          <p style={{ color: "red" }}>
            <b>Very High Risk,</b> You should see a therapist
          </p>
        );
      }
    } else {
      return <p>nooo</p>;
    }
  };

  const fetchRisks = async () => {
    try {
      const response = await axios.get("/api/base");

      if (response.status === 200 && response.data.length > 0) {
        const data = response.data[0];

        setRisk(data.risk);
        setHighRisk(data.high_risk);
        if (userId) {
          const userData = await fetchUser(userId); // Await and fetch user data
          if (userData) {
            setUser(userData); // Set user state with fetched data
            const minVal = data.highRisk * userData.age;
            const maxVal = data.risk * userData.age;

            // Function to round based on decimal part
            function customRound(value) {
              return value % 1 >= 0.5 ? Math.ceil(value) : Math.floor(value);
            }

            // Apply custom rounding
            const roundedMinVal = customRound(minVal);
            const roundedMaxVal = customRound(maxVal);
            await fetchDataByAge(roundedMinVal, setAgeDataMin);
            await fetchDataByAge(roundedMaxVal, setAgeDataMax);
            // Compute min and max based on user age
          } else {
            console.error("Failed to fetch user data");
          }
        }
      } else {
        console.error("No data found or error fetching data");
        setError("No data available or error fetching data");
      }
    } catch (error) {
      console.error("Error during fetch:", error);
      setError("Failed to get the risk and high risk data");
    } finally {
      setLoading(false);
    }
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

  useEffect(() => {
    fetchRisks();
  }, []); // Run only once on component mount

  if (loading) {
    return <p>Loading...</p>;
  }

  if (isFinished) {
    return (
      <div className="questions-container" style={{ marginTop: "5.5rem" }}>
        <h1>Finished!</h1>
        <p>You have answered all the questions. Thank you!</p>
        <p>You answered "Yes" to {importantYesCount} important questions.</p>
        {calculateRisk(
          importantYesCount,
          ageDataMin[0].score,
          ageDataMax[0].score
        )}
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
