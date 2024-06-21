import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { FaUserGroup } from "react-icons/fa6"; 

function InternshipCards(props) {
    return (

        <Card className="project-card-view" >
        <Card.Title style={{textAlign: "center", paddingBottom: "10px", paddingTop: "20px"}}>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.imgPath} alt="" />
        <Card.Img variant="top" src={props.imgPath2} alt="" />
        <Card.Body>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <Card.Text style={{textAlign: "justify"}}>
            <ul>
              <li>{props.description2}</li>
            </ul>
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <FaUserGroup /> 
            {props.ghLink? "Company " : "Framagit"}
          </Button>
          {"\n"}
          {"\n"}
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        </Card.Body>
      </Card>
    );
}


export default InternshipCards;