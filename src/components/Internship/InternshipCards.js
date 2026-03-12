import React from "react";
import Card from "react-bootstrap/Card";
import { useTranslation } from "react-i18next";

function InternshipCards(props) {
    const { t } = useTranslation();
    return (
        <Card className="project-card-view" >
        <Card.Title style={{textAlign: "center", paddingBottom: "10px", paddingTop: "30px"}}>{props.title}</Card.Title>
        <Card.Img variant="top" style={{ width: "100%", height: "100%", objectFit: "cover" }} src={props.imgPath} alt="" />
    
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", textAlign: "center", marginTop: "5px", color: "#888" }}>
               {t('internship.common.note')}
            </p>
     
        <Card.Img variant="top" style={{  }} src={props.imgPath2} alt="" />
        <Card.Body>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <Card.Text style={{textAlign: "justify"}}>
            <ul>
              <li>{props.description2}</li>
            </ul>
          </Card.Text>

          {"\n"}
          {"\n"}
        </Card.Body>
      </Card>
    );
}


export default InternshipCards;