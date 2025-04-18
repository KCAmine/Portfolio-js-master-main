import React from "react";
import Particle from "../Particle";
import InternshipCards from "./InternshipCards";
import { Container , Row, Col} from "react-bootstrap"; 
import { useNavigate } from "react-router-dom";
import MeetMagnet from "../../Assets/InternshipMeet/meetMagnet.png"
import InternshipProject from "./InternshipProject";
import Scrapper from "../../Assets/Projects/scrappeur.png"
import Appsmith from "../../Assets/InternshipMeet/Appsmith.png"


const InternshipMeet = () => {

    const navigate = useNavigate();

    
    return (
        <Container  className="internship-section">
            <Particle/>
            <Container>
                <h1 className="internship-heading"> Meet Magnet </h1>
            </Container>


        <section className="internship-heading">
            <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>

                <Col md={9} className="internship-card">
                    <InternshipProject
                    title="MeetMagnet  "
                    imgPath={MeetMagnet}
                  
                    description= "MeetMagnet est une entreprise française qui propose une plateforme SaaS utilisant l'intelligence artificielle pour aider les professionnels à identifier et contacter des prospects qualifiés au moment opportun."
                    ghLink="https://blog.meet-magnet.com/"
                    description2= "..."
                    />    
                </Col>

                 <Col md={6} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                    <InternshipProject 
                        title="Mission Scrapper"
                        imgPath={Scrapper}
                        
                        compTech="JavaScript (puppeteer), HTML "
                        description="Scrappeur web réalisé pour un particulier. Il gère la pagination, récupère les données sur chaque page, puis génère un fichier CSV contenant toutes les informations collectées."
                        comp1="Collecter, suivre et orienter des demandes"
                        comp2="Traiter des demandes concernant les applications"
                        ghLink="https://github.com/KCAmine/JavaScript"
                        />
                </Col>

                <Col md={6} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                    <InternshipProject
                        title="Mission Appsmit"
                        imgPath={Appsmith}
                        description="Installer et configurer Appsmith en self host pour créer des dashboards internes"
                        compTech="Docker, Linux , PostGreSQL"
                        comp1="Déployer un service"
                        comp2="Accompagner les utilisateurs dans la mise en place d'un service"
                        ghLink="https://www.appsmith.com/"
                    />                
                    
                    </Col>

            
            </Row>

                
        </section>
        </Container>
    )
}


export default InternshipMeet;



