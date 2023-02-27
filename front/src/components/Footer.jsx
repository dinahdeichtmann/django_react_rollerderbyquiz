import React from "react";
import "./FooterStyle.css";

function Footer() {
  return (
    <div className="footer">
      <div className="topRow">
        <div>
          <h1>Derby Rules</h1>
          <p>Site réalisé dans le cadre de notre formation</p>
        </div>
        <div>
          <a
            href="https://gitlab.com/filrouge-rollerderby/rollerderby-react-django"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-square-gitlab"></i>
          </a>
        </div>
      </div>

      <div className="bottomRow">
        <div>
          <h4>Développeur·ses</h4>
          <a
            href="https://gitlab.com/dinahdeichtmann"
            target="_blank"
            rel="noreferrer"
          >
            Dinah Deichtmann
          </a>
          <a
            href="https://gitlab.com/CelineSebe"
            target="_blank"
            rel="noreferrer"
          >
            Céline Sebe
          </a>
          <a
            href="https://gitlab.com/clement.tabouelle"
            target="_blank"
            rel="noreferrer"
          >
            Clément Tabouelle
          </a>
          <a href="https://gitlab.com/verdiel" target="_blank" rel="noreferrer">
            Loïc Verdier
          </a>
        </div>
        <div>
          <h4>Technologies</h4>
          <p>Django</p>
          <p>React</p>
          <p>PostgreSQL</p>
        </div>
        <div>
          <h4>Illustrations</h4>
          <a
            href="https://fineartamerica.com/"
            target="_blank"
            rel="noreferrer"
          >
            Will Argunas
          </a>
        </div>
        <div>
          <h4>WFTDA</h4>
          <a
            href="https://rules.wftda.com/fr/"
            target="_blank"
            rel="noreferrer"
          >
            Règles en français
          </a>
          <a href="https://rules.wftda.com/" target="_blank" rel="noreferrer">
            Règles en anglais
          </a>
          <a
            href="https://resources.wftda.org/officiating/"
            target="_blank"
            rel="noreferrer"
          >
            Documents d'arbitrage
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
