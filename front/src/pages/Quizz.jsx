import React from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const Container = styled.div`
  margin-top: 100px;
  margin: 60px;
`;
const Title = styled.div`
  text-align: center;
  margin-top: 100px;
`;

function Quizz() {
  const [isCurrentQuestionText, setIsCurrentQuestionText] = useState("");
  const [isCurrentQuestionImage, setIsCurrentQuestionImage] = useState("");
  const [isCurrentQuestionVideo, setIsCurrentQuestion] = useState("");

  return (
    <>
      <Container>
        <Title>
          <h1>Quizz</h1>
        </Title>
        <Card>
          <Navbar />
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional
              content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </Container>
      <Footer />
    </>
  );
}

export default Quizz;
