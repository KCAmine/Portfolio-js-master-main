import React from "react";
import Particle from "../Particle";
import { Container , Row, Col} from "react-bootstrap" 
import { useNavigate } from "react-router-dom"
import MeetMagnet from "../../Assets/InternshipMeet/meetMagnet.png"
import InternshipProject from "./InternshipProject"
import Scrapper from "../../Assets/Projects/scrappeur.png"
import Appsmith from "../../Assets/InternshipMeet/Appsmith.png"
import KanbanMeet from "../../Assets/InternshipMeet/KanbanMeet.png"
import OnboardingMeet from "../../Assets/InternshipMeet/OnboardingMeet.png"
import SupaBaseMeet from "../../Assets/InternshipMeet/SupaBaseMeet.png"
import InstallAppsmith from "../../Assets/InternshipMeet/InstallAppsmith.png"
import BenchMark from "../../Assets/InternshipMeet/BenchMark.png"
import FormTemp from "../../Assets/InternshipMeet/FormTemp.png"
import infoVue from "../../Assets/InternshipMeet/infoVue.png"
import SupaBaseInsert from "../../Assets/InternshipMeet/SupaBaseInsert.png"
import SupaBaseSQL from "../../Assets/InternshipMeet/SupaBaseSQL.png"
import SupaBaseCreate from "../../Assets/InternshipMeet/SupaBaseCreate.png"
import BenchMarkScrapping from "../../Assets/InternshipMeet/BenchMarkScrapping.png"
import TaskNotion from "../../Assets/InternshipMeet/TasksNotiion.png"
import notionScrapping from "../../Assets/InternshipMeet/NotionScrapping.png"
import { useTranslation, Trans } from "react-i18next";

const InternshipMeet = () => {
    const navigate = useNavigate();
    const goToLastPage = () => { navigate("/internship"); }
    const { t } = useTranslation();

    return (
        <Container className="internship-section">
            <div style={{ zIndex: -1 }}>
                <Particle />
            </div>
            
            <Container>
                <h1 className="internship-heading">

                     <Trans i18nKey="internship.meetmagnet.page_title">
                        MeetMagnet <strong className="purple"> Experience </strong>
                    </Trans>
                </h1>
            </Container>

            <section className="internship-overview">
                <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>
                    <Col md={5} style={{paddingTop: "30px"}} className="internship-card">
                        <InternshipProject
                            title={t('internship.meetmagnet.company.title')}
                            imgPath={MeetMagnet}
                            description={t('internship.meetmagnet.company.desc')}
                            description2={t('internship.meetmagnet.company.desc2')}
                        />    
                    </Col>

                    <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject 
                            title={t('internship.meetmagnet.scraping.title')}
                            imgPath={Scrapper}
                            hasModal={true}
                            compTech={t('internship.meetmagnet.scraping.tech')}
                            description={t('internship.meetmagnet.scraping.desc')}
                            comp1={t('internship.meetmagnet.scraping.comp1')}
                            comp2={t('internship.meetmagnet.scraping.comp2')}
                            imgGallery={[ notionScrapping ,BenchMarkScrapping ]}
                            description2={
                                <>
                                    <h5>{t('internship.meetmagnet.scraping.modal_h1')}</h5>
                                    <p>{t('internship.meetmagnet.scraping.modal_p1')}</p>
                                    <ul>
                                        <li>{t('internship.meetmagnet.scraping.modal_li1')}</li>
                                        <li>{t('internship.meetmagnet.scraping.modal_li2')}</li>
                                    </ul>
                                    <h5>{t('internship.meetmagnet.scraping.modal_h2')}</h5>
                                    <ul>
                                        <li>{t('internship.meetmagnet.scraping.modal_li3')}</li>
                                        <li>{t('internship.meetmagnet.scraping.modal_li4')}</li>
                                    </ul>
                                </>
                            }
                        />
                    </Col>

                    <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject
                            title={t('internship.meetmagnet.infra.title')}

                            hasModal={true}
                            imgPath={Appsmith}
                            description={t('internship.meetmagnet.infra.desc')}
                            compTech={t('internship.meetmagnet.infra.tech')}
                            comp1={t('internship.meetmagnet.infra.comp1')}
                            comp2={t('internship.meetmagnet.infra.comp2')}
                            imgGallery={[ TaskNotion ,BenchMark, InstallAppsmith ]}
                            description2={
                                <>
                                    <h5>{t('internship.meetmagnet.infra.modal_h1')}</h5>
                                    <ul>
                                        <li>{t('internship.meetmagnet.infra.modal_li1')}</li>
                                        <li>{t('internship.meetmagnet.infra.modal_li2')}</li>
                                        <li>{t('internship.meetmagnet.infra.modal_li3')}</li>
                                    </ul>
                                    <h5>{t('internship.meetmagnet.infra.modal_h2')}</h5>
                                    <p>{t('internship.meetmagnet.infra.modal_p1')}</p>
                                </>
                            }
                        />
                    </Col>

                    <Col md={5} className="internship-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject
                            title={t('internship.meetmagnet.backend.title')}
                            imgPath={SupaBaseMeet}
                            hasModal={true}
                            description={t('internship.meetmagnet.backend.desc')}
                            compTech={t('internship.meetmagnet.backend.tech')}
                            comp1={t('internship.meetmagnet.backend.comp1')}
                            comp2={t('internship.meetmagnet.backend.comp2')}
                            imgGallery={[SupaBaseCreate]}
                            description2={
                                <>
                                    <h5> {t('internship.meetmagnet.backend.modal_h1')} </h5>
                                    <ul>
                                        <li>{t('internship.meetmagnet.backend.modal_li1')}</li>
                                        <li>{t('internship.meetmagnet.backend.modal_li2')}</li>
                                    </ul>
                                </>
                            }
                        />      
                    </Col>

                    <Col md={5} className="internship-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject
                            title={t('internship.meetmagnet.management.title')}
                            imgPath={KanbanMeet}
                            hasModal={true}
                            description={t('internship.meetmagnet.management.desc')}
                            compTech={t('internship.meetmagnet.management.tech')}
                            comp1={t('internship.meetmagnet.management.comp1')}
                            comp2={t('internship.meetmagnet.management.comp2')}
                            imgGallery={[OnboardingMeet,SupaBaseSQL, infoVue, FormTemp, SupaBaseInsert ]}
                            description2={
                                <>
                                    <h5>{t('internship.meetmagnet.management.modal_h1')}</h5>
                                    <p>{t('internship.meetmagnet.management.modal_p1')}</p>
                                    <ul>
                                        <li>  <li>{t('internship.meetmagnet.management.modal_li1')}</li>
                                        <li>{t('internship.meetmagnet.management.modal_li2')}</li></li>
                                        <li> {t('internship.meetmagnet.management.modal_li3')}</li>
                                    </ul>
                                </>
                            }
                        />
                    </Col>
                </Row>
                <button type="button" onClick={goToLastPage} className="btn btn-next"> {t('internship.common.prev_exp')} </button>
            </section>
        </Container>
    )
}

export default InternshipMeet;



