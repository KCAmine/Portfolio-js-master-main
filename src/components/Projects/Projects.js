import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCards from "./ProjectCards";
import Particle from "../Particle";
import analyser from "../../Assets/Projects/srcAnalyser.png";
import scrappeur from "../../Assets/Projects/scrappeur.png"
import boardgame from "../../Assets/Projects/boardgame.png";
import Famille from "../../Assets/Projects/Acceuil_7Familles.png"
import Arabe from "../../Assets/Projects/AL-KHWARIZMI_7Familles.png"
import Trello from "../../Assets/Projects/TrelloPenate.png"
import Charge from "../../Assets/Projects/CahierDEsCharges.png"
import dev1 from "../../Assets/Projects/WorkflowDev1.png"
import dev2 from "../../Assets/Projects/WorkflowDev2.png"
import KanBan from "../../Assets/Projects/KanbanMiniStage.png"
import Branche from "../../Assets/Projects/BrancheMiniStage.png"
import Task from "../../Assets/Projects/TaskMiniStage.png"
import env from "../../Assets/Projects/VarEnvMiniStage.png"
import MiniStagePic from "../../Assets/Projects/MiniStagePic.png"
import Portfolio from "../../Assets/Projects/Portfolio.png"
import PortfolioStage from "../../Assets/Projects/PortfolioStage.png"
import runBuild from "../../Assets/Projects/RunBuild.png"
import InovaPerf from "../../Assets/Projects/InovaPerf.png"
import deployPortfolio from "../../Assets/Projects/DeployPortfolio.png"



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
              hasModal={true}
              title="Maison du Jeu"
              technologies="PHP8 , PostGresSQL, JavaScript, HTML, CSS "
              imgGallery={[Trello, Charge, dev1, dev2 ]}
              description="Un projet web complet où l’on peut voir chaque jeu de société loué, avec une représentation visuelle du jeu, ses règles, et quand il est disponible à la location."
              framagitLink="https://framagit.org/Hugo_wz/maisondujeu"
              description2={
                <>
                  <p>
                    Projet réalisé en groupe pour refondre le site de l’association Maison du Jeu.
                    Nouvelle version dynamique avec gestion des utilisateurs et des réservations.
                  </p>
                  <ul>
                    <li>📚 Base de données PostgreSQL pour gérer les jeux</li>
                    <li>🔐 Espace public + intranet avec authentification</li>
                    <li>💻 Backend en PHP pour traitement côté serveur</li>
                    <li>🛠️ Travail en mode projet avec Git (Framagit)</li>
                  </ul>
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
            <ProjectCards
              imgPath={Famille}
              hasModal={true}
              title="7 Famille"
              technologies="HTML, CSS "
              description="Site web statique basé sur le concept du jeu des 7 familles, adapté au domaine de l’informatique."
              framagitLink="https://framagit.org/Hugo_wz/maisondujeu"
              imgGallery={[Arabe]}
              description2={
                <>
                  <p>
                    Projet de groupe réalisé en HTML/CSS autour du jeu des 7 familles version informatique.
                    Chaque élève présentait un personnage historique lié à une thématique (pionniers, matériel...).
                  </p>
                  <ul>
                    <li>Site statique éco-conçu et responsive</li>
                    <li>Travail en groupe avec répartition des pages</li>
                    <li>Notions de SEO, accessibilité et écoconception appliquées</li>
                  </ul>
                </>
              }
            />
          </Col>

          <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
          <ProjectCards
          title="Ministages44"
          imgPath={MiniStagePic}
          technologies="Symfony, PHP, MySQL, JavaScript, Git"
          description="Plateforme de réservation de mini-stages pour les élèves, refaite en mode projet avec Symfony et sécurisation complète du site."
          ghLink="https://framagit.org/TON_PROJET"
          hasModal={true}
          imgGallery={[Task, env, KanBan, Branche]} // ← si tu veux afficher des images dans le modal
          description2={
            <>
              <p>
                Projet en équipe pour refondre un site de gestion de mini-stages : corrections, sécurité, nouvelle version Symfony.
              </p>

              <h5>🚀 Missions réalisées</h5>
              <ul>
                <li>Corrections de bugs + création d’une nouvelle base</li>
                <li>Développement Symfony 7 (backend + routes sécurisées)</li>
                <li>Réorganisation complète du projet en 4 équipes (admin, réservation...)</li>
              </ul>

              <h5>🔐 Sécurité</h5>
              <ul>
                <li>Controle d'accès pour chaque rôle utilisateurs </li>
                <li>Utilisation de requêtes préparées (anti-SQLi)</li>
                <li>Mise en place d'un fichier de configuration de variables d'environnement</li>
                <li>Validation et mise à jour des <code>expression régulières </code></li>
              </ul>

              <h5>📁 Travail collaboratif</h5>
              <ul>
                <li>Suivi par tickets / branches sur Framagit</li>
                <li>Scrum masters désignés chaque semaine</li>
                
              </ul>
            </>
          }
        />
        /</Col>

        <Col md={4} className="project-card"  style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
        <ProjectCards
          title="Portfolio personnel"
          imgPath={Portfolio}
          technologies="React.js, HTML, CSS, GitHub Pages"
          description="Développement de mon portfolio professionnel pour présenter mes projets, compétences et parcours de formation."
          ghLink="https://github.com/KCAmine/Portfolio-js-master-main"
          demoLink="https://mejdiamine.fr"
          hasModal={true}
          imgGallery={[PortfolioStage, InovaPerf, runBuild, deployPortfolio]}
          description2={
            <>
              <p>
                Portfolio développé pour centraliser et valoriser mes projets et compétences techniques, avec une mise en ligne publique.
              </p>

              <h5>🎯 Objectifs</h5>
              <ul>
                <li>Améliorer ma visibilité pro en ligne</li>
                <li>Référencement du site (balises, SEO de base)</li>
                <li>Hébergé sur InovaPerf avec déploiement manuel </li>
              </ul>

              <h5>📦 Compétences mobilisées</h5>
              <ul>
                <li><strong>Mettre à disposition un service :</strong> déploiement, mise en ligne</li>
                <li><strong>Développement pro :</strong> gestion de mon identité numérique et projet personnel</li>
              </ul>
            </>
          }
        />
        </Col>


        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
