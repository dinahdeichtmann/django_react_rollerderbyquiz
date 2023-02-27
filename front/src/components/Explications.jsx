//IMPORTS
import { useState, useEffect } from "react";
import axios from "axios";

function Explications() {
  // CONSTANTS
  const [reponse, setReponse] = useState("");
  const [raisonnement, setRaisonnement] = useState("");
  const [remarque, setRemarque] = useState("");

  const questionId = 10;

  // FUNCTIONS
  async function fetchReponse(id) {
    const choices = await axios.get(
      `http://localhost:3002/api/choices?question_id=${id}&iscorrect=true`
    );

    const answerList = [];

    for (const choice of choices.data) {
      answerList.push(choice.answer);
    }

    // if (answerList.length > 1) {
    //   answerList.map((answer) => "<li>" + answer + "</li>").join("");
    // } else {
    //   answerList.join("");
    // }

    setReponse(answerList);
  }

  async function fetchRaisonnement(id) {
    const response = await axios.get(
      `http://localhost:3002/api/questions?id=${id}`
    );
    setRaisonnement(response.data[0].raisonnement);
  }

  async function fetchRemarque(id) {
    const response = await axios.get(
      `http://localhost:3002/api/questions?id=${id}`
    );
    setRemarque(response.data[0].remarque);
  }

  // ON MOUNT
  useEffect(() => {
    fetchReponse(questionId);
    fetchRaisonnement(questionId);
    fetchRemarque(questionId);
  }, []);

  return (
    <div className="container">
      <h2>Explications :</h2>
      <hr />
      <h3>Réponse</h3>
      <p>{reponse}</p>
      {raisonnement && (
        <>
          <h3>Raisonnement</h3>
          <p>{raisonnement}</p>
        </>
      )}
      {remarque && (
        <>
          <h3>Remarque</h3>
          <p>{remarque}</p>
        </>
      )}
    </div>
  );
}

export default Explications;
