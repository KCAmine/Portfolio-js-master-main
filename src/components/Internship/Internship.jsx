import React from "react";
import Particle from "../Particle";
import { Container , Row, Col} from "react-bootstrap"; 
import InternshipCards from "./InternshipCards";
import Yole from "../../Assets/Internship/YoleGRoup.jpg";
import InternshipProject from "./InternshipProject";
import AccountPage from "../../Assets/Internship/AccountPage.png";
import UserStories from "../../Assets/Internship/UserStories.png"
import Archi from "../../Assets/Internship/Archi.png"
import Jira from "../../Assets/Internship/Jira.png"
import PullRequest from "../../Assets/Internship/PullRequest.png"
import Agile from "../../Assets/Internship/Agile.jpg.jpg"
import { useNavigate } from "react-router-dom";
import AgilOtherOne from "../../Assets/Internship/AgilOtherOne.png"



const Internship = () => {

        const navigate = useNavigate()

        const goToNewPage=()=>{
            navigate("/internshipMeet");
        }

    return (  
        <Container className="internship-section">
              
            <Container>
                <h1 className="internship-heading">
                    Yole Digit  <strong className="purple"> Admin </strong>
                </h1>
                
            <section className="internship-overview">
            <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>
               
                <Col md={5} className="internship-card">
                    <InternshipCards
                    imgPath={Yole}
                    title="Yole Group / Nantes"
                    description="
                    Le groupe Yole fournit des études de marché, des analyses technologiques et stratégiques, de la rétro-ingénierie et des calculs de coûts, ainsi que l'évaluation des performances des modules photoniques, en se concentrant sur l'industrie des semi-conducteurs et les domaines connexes. "
                    ghLink="https://www.yolegroup.com/"
                    description2="Évaluation des performances des modules photoniques, rétro-ingénierie et calcul des coûts, et études de marché."
                />
                </Col>
                <Col md={5} className="internship-card">
                    <InternshipCards 
                        imgPath={AccountPage}                        
                        title = "Yole Digit Admin"
                        description="Site web qui affiches les infos sur les produits de chaque clients  
                        pouvant ainsi gerer 
                        chaque informations de chaques clients leurs demande de produits , leur acces au produits,
                        leur page user "
                        description2="Technologies utilisés  : React JS , JAVA , Spring (framework Java ) , PostgreSQL  "
                        />
                    </Col>

                    <Col md={6} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                     <InternshipProject
                        title="Préparation à l'agile "
                        imgPath={Agile}
                        hasModal={true}    
                        imgGallery={[AgilOtherOne]}           
                        compTech="JavaScript (React.js), PostGreSQL, Jira, BitBucket"
                        comp1= "Définir les objectifs & cycle de vie "
                        comp2= "Prévoir le planning et la répartition des tâches avec des durées de sprint normées "
                        description2={
                            <>
                              <h5>📌 Introduction rapide à Agile</h5>
                              <ul>
                                <li>Travail divisé en **sprints** (périodes fixes)</li>
                                <li>Chaque sprint a : plan → dev → test → livraison</li>
                                <li>Objectifs clairs et livrables définis à l’avance</li>
                              </ul>
                      
                              <h5>🧩 Mise en place</h5>
                              <ul>
                                <li>Utilisation de <strong>Jira</strong> pour le suivi des tâches</li>
                                <li>Organisation en stories, tâches, sous-tâches</li>
                                <li>Rétrospective à chaque fin de sprint pour s’améliorer</li>
                              </ul>
                      
                              <h5>📋 Résultat</h5>
                              <p>
                                Une meilleure vision d'ensemble et un suivi précis des priorités.
                              </p>
                            </>
                          }

                        />

                </Col>

                <Col md={8} className="internship-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}> 
                     <InternshipProject 
                        title="Creation du ticket "
                        imgPath={UserStories}                       
                        compTech="JavaScript (React.js), PostGreSQL, Jira, BitBucket"
                        comp1="Collecter, suivre des demandes depuis les tickets Jira "    
                        comp2="Mettre en place son environnement d'apprentissage personal"
                        />
                </Col>
                <Col md={5} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                    <InternshipCards
                        title="Gestion du Projet "
                        imgPath={Jira}                       
                        compTech="JavaScript (React.js), PostGreSQL, Jira, BitBucket"
                        description="Tableau de cycle de résolution de tache permettant a l'administrateur de gerer les differents issues/tasks que chaque equipier effectuer,  l'adiministrateur "
                        description2="Gérer les différents états de la tache"
                        />
                </Col>
                <Col md= {6} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>                   
                    <InternshipProject
                        title=" Passer au developpement "
                        imgPath={Archi}
                        compTech="JavaScript (React.js), PostGreSQL, Jira, BitBucket"
                        comp1="Exploiter des référentiels, normes et standards
                         adoptés par le prestataire informatiqe"
                        comp2="Se reperer dans une grosse architecture "
                        />
                </Col>
                <Col md={9} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>                    
                    <InternshipProject
                        title="Création d'une Pull request  "
                        imgPath={PullRequest}                        
                        compTech=" PostGreSQL, Jira, BitBucket"
                        comp1= "Traiter des demandes "
                        comp2= "Crée une pull request pour passer son travail en revue par le chef de projet  afin qu'il puisse la valider ou alors la remmetre  en cour"
                        />
                </Col>
                
                  
                <button type="button" onClick={goToNewPage} className="btn btn-primary"> Stage suivant </button>
     

            </Row>
        </section>
        </Container>
        </Container>
    )
}

export default Internship;