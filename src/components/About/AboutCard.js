import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Je m'appelle <span className="purple">Amine Mejdi </span>
            je suis de  <span className="purple"> Nantes en France </span>
            <br />
            Je prépare actuellement un BTS en développement logiciel.
            <br />
            J'ai obtenu mon bac professionnel en Systèmes Numériques.
            
            <br />
            <br />
            En dehors du code, voici quelques autres activités que j'aime faire !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jouez aux jeux 
            </li>
            <li className="about-activity">
              <ImPointRight /> Lire
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
