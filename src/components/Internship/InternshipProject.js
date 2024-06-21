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
          <Card.Text style={{textAlign: "justify"}}>
                {props.description}
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.comp} 
          </Card.Text>
          <Card.Text style={{textAlign: "justify"}}>
            Compétence : &nbsp;
                <strong>JavaScript (React.js), PostGreSQL, Jira, BitBucket</strong>
                &nbsp;
                {"\n"}
                {"\n"}
                <ul>&nbsp;
                    <li>{props.comp1}</li>                    
                    <li>{props.comp2} </li>
                </ul>
          </Card.Text>

          <Button variant="primary" href={props.ghLink} target="_blank">
            <FaUserGroup /> &nbsp;
            {props.ghLink? "Company " : "Framagit"}
          </Button>
          {"\n"}
          {"\n"}
          {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}  
    
        </Card.Body>
      </Card>
    );
}




export default InternshipProject;