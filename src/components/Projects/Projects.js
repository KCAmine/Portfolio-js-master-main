import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import Portfolio from "../../Assets/Projects/Portfolio.png"
import guideNPf from "../../Assets/Projects/ressourceBooster.png"
import miniStageNewPic from "../../Assets/Projects/miniStageNewPic.png"
import PortfolioHomePage from "../../Assets/Projects/portfolioHomePage.png"
import PortfolioImage from "../../Assets/Projects/portfolioImage.png"


function Projects() {

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Recents   <strong className="purple"> projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={guideNPf}
              isBlog={false}
              title="NPF Guide "
              technologies="Vitepress - Javascript - CSS"
              description="A personal web project focused on gaming guides. It offers clear, practical tips and well-structured content. Its goal is to help players optimize their runs."
              ghLink="https://github.com/KCAmine/guideFarm"
              demoLink="https://guide-npf.com"
            />
    
          </Col>

          
        <Col md={4} className="project-card" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px" }}>

      <ProjectCards
        title="Mini Stage  "
        imgPath={miniStageNewPic}
        technologies="Symfony - PHP  - JavaScript"
        description="MiniStage is an internship booking platform for students, redesigned as a project using Symfony with full website security."
        ghLink="https://framagit.org/coliniere/discover/ministagesymfo"
        hasModal={true}
        
        demoLink="https://ministages44.heberge.ac-nantes.fr/"
        description2={
          <>
            <p>
              Team project to redesign an internship booking management website: fixes, security improvements, and an upgrade from PHP7 to Symfony 7.
            </p>

            <h5> Completed tasks</h5>
            <ul>
              <li>Hotfixes + creation of a new database</li>
              <li>Symfony 7 development (backend + secured routes)</li>
              <li>Complete project reorganization into 4 teams (admin, booking...)</li>
            </ul>

            <h5> Security</h5>
            <ul>
              <li>Access control for each user role</li>
              <li>Use of prepared statements (anti-SQL injection)</li>
              <li>Environment variables configuration file setup</li>
              <li>Validation and update of <code>regular expressions</code></li>
            </ul>

            <h5> Collaborative work</h5>
            <ul>
              <li>Ticket and branch tracking on Framagit</li>
              <li>Weekly assigned Scrum Masters</li>
            </ul>
          </>
        }
      />
    </Col>

      

        <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
        <ProjectCards
          title="Personal Portfolio "
          imgPath={PortfolioImage}
          technologies="React JS - JavaScript - CSS "
          description="Development of my professional portfolio to showcase my projects, skills, and educational background."
          ghLink="https://github.com/KCAmine/Portfolio-js-master-main"
          demoLink="https://mejdiamine.fr"
          hasModal={false}
         
        />
        </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
