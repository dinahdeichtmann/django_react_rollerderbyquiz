import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";

import Home from "../src/pages/Home";
import Rules from "../src/pages/Rules";
import { Filters } from "../src/pages/Filters";
import Quizz from "../src/pages/Quizz";
import Correction from "../src/pages/Correction";

const GlobalStyle = createGlobalStyle`
    * {
      margin: 0px;
      font-family: "Lato", sans-serif;
      box-sizing: border-box;
    }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/filter" element={<Filters />} />
          <Route exact path="/rules" element={<Rules />} />
          <Route exact path="/quizz" element={<Quizz />} />
          <Route exact path="/correction" element={<Correction />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
