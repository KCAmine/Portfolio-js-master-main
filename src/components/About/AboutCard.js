import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function AboutCard() {
  const { t } = useTranslation();
  return (
      
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            {t('about.card.name')} <span className="purple">Amine Mejdi </span> . 
            <br />
            {t('about.card.from')} <span className="purple">Nantes - France </span> 
            {t('about.card.age')}
            <br />
           {t('about.card.graduated')} <span className="purple"> Lycée la coliniere </span>

            
            <br />
            
            <br />
           
            {t('about.card.looking')}
            
            <br />
            <br />
            {t('about.card.hobbies_title')}
          </p>
          <ul>
            <li className="about-activity">
              {t('about.card.hobby1')}
            </li>
            <li className="about-activity">
              {t('about.card.hobby2')}
            </li>
            <li className="about-activity">
              {t('about.card.hobby3')}
            </li>
             

          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
