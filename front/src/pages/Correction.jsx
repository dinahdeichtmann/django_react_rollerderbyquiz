import "../App.css";
import Explications from "../components/Explications";
import { useState } from "react";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div className="container">
      <h1>Quiz</h1>
      <p>
        Question : Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
        do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <ol>
        <li>Mollis nunc sed id</li>
        <li>Amet purus gravida quis</li>
        <li>Turpis egestas sed</li>
        <li>Volutpat commodo sed</li>
      </ol>
      <button
        onClick={() => {
          setShow(!show);
          console.log(show);
        }}
      >
        Réponse
      </button>
      {show && <Explications />}
    </div>
  );
}

export default App;
