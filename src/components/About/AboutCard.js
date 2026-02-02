import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            My name is  <span className="purple">Amine Mejdi </span>
            I'm from <span className="purple"> Nantes - France   </span>
            and I'm 21 years old.
            <br />
            I just gratued computer sciences in college at  <span className="purple"> Lycée la coliniere </span>

            
            <br />
            
            <br />
          
            I'm currently looking for a first experience as a junior web developer .
            
            <br />
            <br />
            Outside of coding, here are some other activities I enjoy!
          </p>
          <ul>
            <li className="about-activity">
               Playing games 
            </li>
            <li className="about-activity">
             Learn new skills
            </li>
            <li className="about-activity">
              Traveling
            </li>
             

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
