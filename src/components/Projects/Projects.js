import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import analyser from "../../Assets/Projects/srcAnalyser.png";
import scrappeur from "../../Assets/Projects/scrappeur.png"
import boardgame from "../../Assets/Projects/boardgame.png";



function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Récents  <strong className="purple"> projets </strong>
        </h1>
        <p style={{ color: "white" }}>
        Voici quelques projets personnels et scolaires récents. 
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={analyser}
              isBlog={false}
              title="Src Analyser"
              technologies="Python, ReactJS"
              description="Un outil d'analyse avancée dédié aux speedruns de missions Warframe (capture, espionnage, etc.). Il fournit des statistiques détaillées des performances en mission, des temps précis, et une analyse visuelle complète du tileset."
              ghLink="https://github.com/KCAmine/src_analyser"
            />
    
          </Col>

          <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
            <ProjectCards
              imgPath={boardgame}
              isBlog={false}
              title="Maison du Jeu"
              technologies="PHP8 , PostGresSQL, JavaScript, HTML, CSS "
              description="Un projet web complet où l’on peut voir chaque jeu de société loué, avec une représentation visuelle du jeu, ses règles, et quand il est disponible à la location."
              framagitLink="https://framagit.org/Hugo_wz/maisondujeu"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={scrappeur}
              isBlog={false}
              title="Scrappeur "
              technologies="JavaScript, HTML"
              description="Scrappeur web réalisé pour un particulier. Il gère la pagination, récupère les données sur chaque page, puis génère un fichier CSV contenant toutes les informations collectées."
              ghLink="https://github.com/KCAmine/JavaScript"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
