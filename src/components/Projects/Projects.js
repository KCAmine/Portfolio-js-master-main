import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import families7 from "../../Assets/Projects/families7.png";
import dataViz from "../../Assets/Projects/dataViz.png";
import maison from "../../Assets/Projects/maison.png";



function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={families7}
              isBlog={false}
              title="7 Families"
              technologies="HTML, CSS"
              description="Web Page where you can see 7 families in link with software development, web development, data science, and mathematics. Each Family has its own page which contains all the information about the family and a person that created."
              ghLink="https://framagit.org/KC-Amine/7-Families"
            />
            

          </Col>

          <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
            <ProjectCards
              imgPath={maison}
              isBlog={false}
              title="Gaming House"
              technologies="PHP8 , PostGresSQL, JavaScript, HTML, CSS "
              description="A whole web project where you can see each board-games that are rent and have a visual representation of the game and its rules and when you can rent it ."
              framagitLink="https://framagit.org/Hugo_wz/maisondujeu"
            />

          
          
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={dataViz}
              isBlog={false}
              title="Spotify Data Visualizer "
              technologies="PYTHON (matplotlib), HTML"
              description="A data visualizer for Spotify's top 200 songs. The data is visualized"
              ghLink="https://github.com/KC-Amine/Spotify-Data-Visualizer"

            />
          </Col>
  
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
