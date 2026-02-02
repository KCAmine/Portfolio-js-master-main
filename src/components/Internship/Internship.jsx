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
    const navigate = useNavigate();
    const goToNewPage = () => { navigate("/internshipMeet"); }

   return (
        <Container className="internship-section">
            <div style={{ zIndex: -1 }}><Particle /></div>
            
            <Container>
                <h1 className="internship-heading">
                    Full-Stack Developer <strong className="purple"> Internship </strong>
                </h1>
                
                <section className="internship-overview">
                    <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>
                        
                        {/* CONTEXTE ENTREPRISE */}
                        <Col md={5} className="internship-card">
                            <InternshipCards
                                imgPath={Yole}
                                title="Yole Group | High-Tech Market Analysis"
                                description="Yole Group provides market research, technology and strategy analysis, reverse engineering and costing, and photonics module performance evaluation, focused on the semiconductor industry and related fields"
                                description2="Context: Operating in a high-security environment with sensitive data from a high-tech firm."
                            />
                        </Col>

                        {/* CONTEXTE PROJET (TON TRAVAIL) */}
                        <Col md={5} className="internship-card">
                            <InternshipCards 
                                imgPath={AccountPage}                        
                                title="Project: Yole Digit Admin"
                                description="I worked on 'Yole Digit Admin', an internal enterprise platform. This tool is the backbone of the company's digital services, allowing admins to manage thousands of client accounts, product licenses, and data access."
                                description2="My Goal : Developing secure features to automate subscription management and user access."
                            />
                        </Col>

                        {/* METHODOLOGIE */}
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>
                            <InternshipProject
                                title="Agile Integration"
                                imgPath={Agile}
                                hasModal={true}    
                                imgGallery={[AgilOtherOne]}           
                                compTech="Scrum Methodology"
                                comp1="Working within a structured Agile team with daily stand-ups and bi-weekly sprints."
                                comp2="Bridging the gap between client requirements and technical execution."
                                description2={
                                    <>
                                        <h5>Agile Context</h5>
                                        <p>At Yole, software quality is priority #1. We followed a strict Scrum lifecycle to ensure every feature was tested and validated before moving to production.</p>
                                    </>
                                }
                            />
                        </Col>

                        {/* GESTION DE TACHES */}
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}> 
                            <InternshipProject 
                                title="Requirement Engineering"
                                imgPath={UserStories}                      
                                compTech="Jira & Technical Spec"
                                comp1="Translated complex business needs into actionable technical tickets."
                                comp2="Analyzed existing database schemas to ensure seamless feature integration."
                            />
                        </Col>

                        {/* DEVELOPPEMENT TECHNIQUE */}
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>                   
                            <InternshipProject
                                title="Full-Stack Implementation"
                                imgPath={Archi}
                                compTech="React.js & Java Spring Boot"
                                comp1="Developed scalable UI components using React and managed backend logic with Spring Boot."
                                comp2="Maintained code integrity within a large-scale enterprise architecture."
                            />
                        </Col>

                        {/* QUALITÉ CODE */}
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>                    
                            <InternshipProject
                                title="Version Control & Peer Review"
                                imgPath={PullRequest}                        
                                compTech="Git & BitBucket"
                                comp1="Used BitBucket for collaborative coding, following a strict branch naming convention."
                                comp2="Engaged in Pull Request reviews to maintain high security and performance standards."
                            />
                        </Col>

                    </Row>

                    <button type="button" onClick={goToNewPage} className="btn btn-next"> Next Experience </button>
                </section>
            </Container>
        </Container>
    );
}
export default Internship;