import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { FaUserGroup } from "react-icons/fa6"; 

function InternshipProject(props) {
    return (
        <Card className="project-card-view" >
        &nbsp;
        
        <Card.Title style={{textAlign: "center"}}>{props.title}</Card.Title>
        
        <Card.Img variant="top" src={props.imgPath} alt="" />
        <Card.Img variant="top" src={props.imgPath2} alt=""/>

        <Card.Body>
        {props.description && (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
        )}

          {props.comp && (
          <Card.Text style={{ textAlign: "justify" }}>
            {props.comp}
          </Card.Text>
        )}


         {props.compTech && (
          <Card.Text style={{ textAlign: "justify" }}>
            <strong>Compétence :</strong> {props.compTech}
          </Card.Text>
        )}

        {(props.comp1 || props.comp2) && (
          <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
          {props.comp1 && <li>{props.comp1}</li>}
          {props.comp2 && <li>{props.comp2}</li>}
        </ul>
        )}

          <Button variant="primary" href={props.ghLink} target="_blank">
            <FaUserGroup /> &nbsp;
            {props.ghLink?.includes("github.com")
            ? "GitHub"
            : props.ghLink?.includes("framagit.org")
            ? "Framagit"
            : "Company"}
          </Button>
          {"\n"}
          {"\n"}
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}  
    
        </Card.Body>
      </Card>
    );
}




export default InternshipProject;