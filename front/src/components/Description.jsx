// IMPORTS
import React from "react";
import "./DescriptionStyle.css";
import casque from "../assets/casque.jpg";
import balafre from "../assets/balafre.jpg";
import ref2 from "../assets/ref2.jpg";
import ref1 from "../assets/ref1.jpg";
import block from "../assets/NantesVSRennes.jpg";
import jammeuse from "../assets/jammeuseNatte.jpg";

function Description() {
  return (
    <div className="description">
      <h1>Des quiz pour tous les niveaux</h1>
      <p>
        Que tu sois fresh meat, joueur·se confirmé·e ou arbitre, un quiz
        t'attend
      </p>
      <DescriptionData
        className="descriptionA"
        heading="Préparation aux Minimum Skills"
        text="Pour te tester en conditions d'examen, génère un quiz de 40 questions à compléter en un temps imparti. Grâce à la page de correction, identifie les chapitres à revoir. 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dignissim diam quis enim lobortis scelerisque fermentum dui faucibus."
        btnLink="mst"
        btnText="Examen blanc"
        imgSrc1={casque}
        imgAlt1={
          "Le casque d'une personne de dos. Une illustration de Will Argunas."
        }
        imgSrc2={balafre}
        imgAlt2={
          "Une personne avec une balafre à la joue tient son casque. Une illustration de Will Argunas."
        }
      />
      <DescriptionData
        className="descriptionB"
        heading="Perfectionnement des connaissances"
        text="Le quiz est paramétrable : grâce aux nombreux filtres, cible uniquement tes points faibles pour continuer à t'améliorer. Tu peux choisir de réviser un chapitre en particulier ou décider de te tester sur les derniers changements apportés aux règles. Pratique pour les changements de ruleset ! Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Arcu dictum varius duis at consectetur lorem donec. Sit amet nisl suscipit adipiscing bibendum. "
        btnLink="filter"
        btnText="Perfectionnement"
        imgSrc1={jammeuse}
        imgAlt1={
          "Une jammeuse tournant sur le track. Une illustration de Will Argunas."
        }
        imgSrc2={block}
        imgAlt2={
          "Une pivot de Nantes bloque une jammeuse de Rennes. des Une illustration de Will Argunas."
        }
      />
      <DescriptionData
        className="descriptionA"
        heading="Formation à l'arbitrage"
        text="Nulla facilisi morbi tempus iaculis urna id volutpat lacus. Sed viverra tellus in hac habitasse platea dictumst vestibulum. Eu non diam phasellus vestibulum lorem sed risus ultricies tristique. Arcu dictum varius duis at consectetur lorem donec. Sit amet nisl suscipit adipiscing bibendum. "
        btnLink="filter"
        btnText="Arbitrage"
        imgSrc1={ref1}
        imgAlt1={
          "Une ref se tient debout, les mains dans le dos et un sifflet à la bouche. Une illustration de Will Argunas."
        }
        imgSrc2={ref2}
        imgAlt2={
          "Deux refs se tiennent debout en uniforme, de dos. Une illustration de Will Argunas."
        }
      />
    </div>
  );
}

function DescriptionData({
  className,
  heading,
  text,
  btnLink,
  btnText,
  imgSrc1,
  imgAlt1,
  imgSrc2,
  imgAlt2,
}) {
  return (
    <div className={className}>
      <div className="descriptionText">
        <h2>{heading}</h2>
        <p>{text}</p>
        <a href={btnLink}>{btnText}</a>
      </div>
      <div className="illustration">
        <img src={imgSrc1} alt={imgAlt1} />
        <img src={imgSrc2} alt={imgAlt2} />
      </div>
    </div>
  );
}

export default Description;
