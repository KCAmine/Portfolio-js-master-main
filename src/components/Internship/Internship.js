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




const Internship = () => {
    return (  
        <Container className="internship-section">
            <Particle />     
            <Container>
                <h1 className="internship-heading">
                    Internship at <strong className="purple"> Yole Group </strong>
                </h1>
                
            <section className="internship-overview">
                <h3>Who Is <strong className="purple">Yole Group ? </strong></h3>
            <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>
               
                <Col md={5} className="internship-card">
                    <InternshipCards
                    imgPath={Yole}
                    isBlog={false}
                    title="Introduction Image"
                    description="
                    Yole Group provides market research, technology and strategy analysis, reverse engineering and costing, and photonics module performance evaluation, focused on the semiconductor industry and related fields. "
                    ghLink="https://www.yolegroup.com/"
                />
                </Col>
                <Col md={5} className="internship-card">
                    <InternshipCards 
                        imgPath={AccountPage}
                        isBlog={false}
                        title = "Yole Digit Admin"
                        description="Site web qui affiches les infos sur les produits de chaque clients  
                        pouvant ainsi gerer 
                        chaque informations de chaques clients leurs demande de produits , leur acces au produits,
                        leur page user .. -- Parler de la stack "
                        />
                    </Col>
                <Col md={5} className="internship-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}> 
                     <InternshipProject 
                        title="Creation du ticket "
                        imgPath={UserStories}
                        isBlog={false} 
                        comp1="Collecter, suivre des demandes depuis les tickets Jira "    
                        comp2="Mettre en place son environnement d'apprentissage personal"
                        />
                </Col>
                <Col md={5} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                    <InternshipCards
                        title="Gestion du Projet "
                        imgPath={Jira}
                        isBlog={false}
                        description="Tableau de cycle de résolution de tache permettant a l'administrateur de gerer les differents issues/tasks que chaque equipier effectuer,  l'adiministrateur "
                        />
                </Col>
                <Col md= {9} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>                   
                    <InternshipProject
                        title=" Passer au developpement "
                        imgPath={Archi}
                        isBlog={false}
                        comp1="Exploiter des référentiels, normes et standards
                         adoptés par le prestataire informatiqe"
                        comp2="Se reperer dans une grosse architecture "
                        />
                </Col>
                <Col md={9} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>                    
                    <InternshipProject
                        title="Création d'une Pull request  "
                        imgPath2={PullRequest}
                        isBlog={false}
                        comp1= "Traiter des demandes "
                        comp2= "Crée une pull request pour passer son travail en revue par l'administrateur afin qu'il puisse la valider ou alors la remmetre  en cour"
                        />
                </Col>

                  
            </Row>
        </section>
        </Container>
        </Container>
    )
}

export default Internship;