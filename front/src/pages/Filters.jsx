import React from "react";
import "../App.css";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export function Filters() {
  const [theme, setTheme] = useState([]);
  const [role, setRole] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [nbQuestions, setNbQuestions] = useState([]);
  console.log(selectedFilters);
  const getData = async () => {
    const { data } = await axios.get(
      `http://localhost:8000/rollerderby/api/v1/theme/`
    );
    const x = data.filter(
      (t) => (t.theme_number.length < 2) & (t.theme_number !== "6")
    );
    setTheme(x);
    const y = data.filter((t) => t.theme_number === "6");
    setRole(y);
  };
  useEffect(() => {
    getData();
  }, []);
  function handleThemeSubmit(themeValue, isChecked) {
    if (isChecked) {
      setSelectedFilters([...selectedFilters, { theme_id: themeValue }]);
    } else {
      setSelectedFilters(
        selectedFilters.filter((f) => f.theme_id !== themeValue)
      );
    }
  }
  function handleRoleSubmit(themeValue, role, isChecked) {
    if (role === "official") {
      setSelectedFilters([...selectedFilters, { theme_id: themeValue }]);
    } else {
      setSelectedFilters(
        selectedFilters.filter((f) => f.theme_id !== themeValue)
      );
    }
  }

  function handleChronoSubmit(isChecked) {
    if (isChecked) {
      setSelectedFilters([...selectedFilters, { chrono: true }]);
    } else {
      setSelectedFilters(selectedFilters.filter((f) => f.chrono !== true));
    }
  }

  function handleNbQuestionsSubmit(nbQuestions) {
    setSelectedFilters([]);
    if (nbQuestions > 0) {
      setSelectedFilters([...selectedFilters, { nbquestions: nbQuestions }]);
    }
  }

  return (
    <>
      <Navbar />
      <div className="filters">
        <h1>Entrainement</h1>
        <div className="role_filter">
          <Card>
            <Card.Body>
              {role.map((t) => (
                <div>
                  <input
                    type="radio"
                    name="status"
                    value="player"
                    onChange={(e) =>
                      handleRoleSubmit(t.theme_number, e.target.value)
                    }
                  />
                  Joueur
                  <input
                    type="radio"
                    name="status"
                    value="official"
                    onChange={(e) =>
                      handleRoleSubmit(t.theme_number, e.target.value)
                    }
                  />
                  Arbitre
                </div>
              ))}
            </Card.Body>
          </Card>
        </div>
        <br></br>
        <br></br>
        <Accordion defaultActiveKey="0" flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Selectionne les themes abordés dans le questionnaire
            </Accordion.Header>
            <Accordion.Body>
              {theme.map((t) => (
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="status"
                      onChange={(e) =>
                        handleThemeSubmit(t.theme_number, e.target.checked)
                      }
                    />{" "}
                    {t.theme_number} {t.theme_name}
                  </label>
                </div>
              ))}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br></br>
        <br></br>
        <Card>
          <Card.Body>
            <input
              type="checkbox"
              name="status"
              value="False"
              onChange={(e) => handleChronoSubmit(e.target.checked)}
            />
            Chronomètre: 20 secondes par question !
          </Card.Body>
        </Card>
        <br></br>
        <div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <input
              className="nb_Questions"
              type="number"
              placeholder="     Choisis ton nombre de question !"
              onChange={(e) => {
                setNbQuestions(e.target.value);
              }}
            ></input>
            <p>{nbQuestions}</p>
            <button
              type="submit"
              onClick={(e) => handleNbQuestionsSubmit(nbQuestions)}
            >
              {" "}
              <Link to="/quizz">Valider</Link>
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}
