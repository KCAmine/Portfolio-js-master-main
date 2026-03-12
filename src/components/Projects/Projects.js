import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import guideNPf from "../../Assets/Projects/ressourceBooster.png"
import miniStageNewPic from "../../Assets/Projects/miniStageNewPic.png"
import PortfolioImage from "../../Assets/Projects/portfolioImage.png"
import Scrapper from "../../Assets/Projects/scrappeur.png"
import { useTranslation } from "react-i18next";

function Projects() {
  const { t } = useTranslation(); 

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          {t('projects.title')} <span className="purple"> {t('projects.title span class')} </span>
        </h1>
        <p style={{ color: "white" }}>
          {t('projects.description')}
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px"}}>
          <Col md={4} className="project-card">
            <ProjectCards
              imgPath={guideNPf}
              isBlog={false}
              title= {t('projects.project1.name')}
              technologies={t('projects.project1.technologies')}
              description={t('projects.project1.description')}
              ghLink="https://github.com/KCAmine/guideFarm"
              demoLink="https://guide-npf.com"
            />
    
          </Col>

          
        <Col md={4} className="project-card" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px" }}>

      <ProjectCards
        title={t('projects.project2.name')}
        imgPath={miniStageNewPic}
        technologies={t('projects.project2.technologies')}
        description={t('projects.project2.description')}
        ghLink="https://framagit.org/coliniere/discover/ministagesymfo"
        hasModal={true}
        
        demoLink="https://ministages44.heberge.ac-nantes.fr/"
        description2={
          <>
            <p>
              {t('projects.project2.description2')}
            </p>

            <h5> {t('projects.project2.task_title')} </h5>
            <ul>
              <li> {t('projects.project2.first_task')} </li>
              <li> {t('projects.project2.second_task')} </li>
              <li> {t('projects.project2.third_task')} </li>
            </ul>

            <h5> {t('projects.project2.security_title')} </h5>
            <ul>
              <li> {t('projects.project2.first_sec')} </li>
              <li> {t('projects.project2.second_sec')} </li>
              <li> {t('projects.project2.third_sec')} </li>
              <li> {t('projects.project2.fourth_sec')} </li>
            </ul>

            <h5> {t('projects.project2.colab_title')} </h5>
            <ul>
              <li> {t('projects.project2.first_colab')} </li>
              <li> {t('projects.project2.second_colab')} </li>
            </ul>
          </>
        }
      />
    </Col>

        <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
        <ProjectCards
          title={t('projects.project3.name')}
          imgPath={PortfolioImage}
          technologies={t('projects.project3.technologies')}
          description={t('projects.project3.description')}
          ghLink="https://github.com/KCAmine/Portfolio-js-master-main"
          demoLink="https://mejdiamine.fr"
          hasModal={false}
         
        />
        </Col>
        
         <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
        <ProjectCards
          title={t('projects.project4.name')}
          imgPath={Scrapper}
          technologies={t('projects.project4.technologies')}
          description={t('projects.project4.description')}
          ghLink="https://github.com/KCAmine/bazoomScrapper.git"
          
          hasModal={false}
         
        />
        </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
