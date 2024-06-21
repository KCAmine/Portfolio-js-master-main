import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import families7 from "../../Assets/Projects/families7.png";
import dataViz from "../../Assets/Projects/dataViz.png";
import maison from "../../Assets/Projects/maison.png";
import ProjectExtends from "./ProjectExtends";


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
            <ProjectCard
              imgPath={families7}
              isBlog={false}
              title="7 Families"
              description="Web Page where you can see 7 families in link with software development, web development, data science, and mathematics. Each Family has its own page which contains all the information about the family and a person that created."
              ghLink="https://framagit.org/KC-Amine/7-Families"
            />
            

          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={maison}
              isBlog={false}
              title="Gaming House"
              description="A whole web project where you can see each board-games that are rent and have a visual representation of the game and its rules and when you can rent it ."
              framagitLink="https://framagit.org/Hugo_wz/maisondujeu"
            />

          <ProjectExtends/>  
          
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dataViz}
              isBlog={false}
              title="Spotify Data Visualizer "
              description="A data visualizer for Spotify's top 200 songs. The data is visualized"
              ghLink="https://github.com/KC-Amine/Spotify-Data-Visualizer"
              demoLink="https://kc-amine.github.io/Spotify-Data-Visualizer/"

            />
          </Col>
          

         {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={null}
              isblog={false} 
              title="Pyxel Game"
              description="A  retro game where you can play and try to beat the high score developped with python ."
              ghLink="https://github.com/KC-Amine/Pyxel-Game"
              demoLink="https://kc-amine.github.io/Pyxel-Game/"
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
