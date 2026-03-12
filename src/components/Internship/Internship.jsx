import React from "react";
import Particle from "../Particle";
import { Container , Row, Col} from "react-bootstrap"; 
import InternshipCards from "./InternshipCards";
import Yole from "../../Assets/Internship/YoleGRoup.jpg";
import InternshipProject from "./InternshipProject";
import AccountPage from "../../Assets/Internship/AccountPage.png";
import UserStories from "../../Assets/Internship/UserStories.png"
import Archi from "../../Assets/Internship/Archi.png"
import PullRequest from "../../Assets/Internship/PullRequest.png"
import Agile from "../../Assets/Internship/Agile.jpg.jpg"
import { useNavigate } from "react-router-dom";
import AgilOtherOne from "../../Assets/Internship/AgilOtherOne.png"
import { useTranslation, Trans } from "react-i18next";


const Internship = () => {
    const navigate = useNavigate();
    const goToNewPage = () => { navigate("/internshipMeet"); }
    const { t } = useTranslation();

   return (
        <Container className="internship-section">
            <div style={{ zIndex: -1 }}><Particle /></div>
            
            <Container>
                <h1 className="internship-heading">
                  <Trans i18nKey="internship.yole.page_title">
                        Full-Stack Developer <strong className="purple"> Internship </strong>
                    </Trans>
                </h1>
                
                <section className="internship-overview">
                    <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>     
                        <Col md={5} className="internship-card">
                            <InternshipCards
                                imgPath={Yole}
                                title={t("internship.yole.company.title")}
                                description={t("internship.yole.company.desc")}
                                description2={t("internship.yole.company.desc2")}
                            />
                        </Col>

                       
                        <Col md={5} className="internship-card">
                            <InternshipCards 
                                imgPath={AccountPage}                        
                                title={t("internship.yole.project_admin.title")}
                                description={t("internship.yole.project_admin.desc")}
                                description2={t("internship.yole.project_admin.desc2")}
                            />
                        </Col>
      
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>
                            <InternshipProject
                                title={t("internship.yole.agile.title")}
                                imgPath={Agile}
                                hasModal={true}    
                                imgGallery={[AgilOtherOne]}           
                                compTech={t("internship.yole.agile.tech")}
                                comp1={t("internship.yole.agile.comp1")}
                                comp2={t("internship.yole.agile.comp2")}
                                description2={
                                    <>
                                        <h5>{t("internship.yole.agile.modal_title")}</h5>
                                        <p>{t("internship.yole.agile.modal_desc")}</p>
                                    </>
                                }
                            />
                        </Col>
 
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}> 
                            <InternshipProject 
                                title={t("internship.yole.requirements.title")}
                                imgPath={UserStories}                      
                                compTech={t("internship.yole.requirements.tech")}
                                comp1={t("internship.yole.requirements.comp1")}
                                comp2={t("internship.yole.requirements.comp2")}
                            />
                        </Col>
 
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>                   
                            <InternshipProject
                                title={t("internship.yole.stack.title")}
                                imgPath={Archi}
                                compTech={t("internship.yole.stack.tech")}
                                comp1={t("internship.yole.stack.comp1")}
                                comp2={t("internship.yole.stack.comp2")}
                            />
                        </Col>
    
                        <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>                    
                            <InternshipProject
                                title={t("internship.yole.git.title")}
                                imgPath={PullRequest}                        
                                compTech={t("internship.yole.git.tech")}
                                comp1={t("internship.yole.git.comp1")}
                                comp2={t("internship.yole.git.comp2")}
                            />
                        </Col>
                    </Row>

                    <button type="button" onClick={goToNewPage} className="btn btn-next"> {t("internship.common.next_exp")} </button>
                </section>
            </Container>
        </Container>
    );
}
export default Internship;