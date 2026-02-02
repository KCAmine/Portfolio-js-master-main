import React from "react";
import Particle from "../Particle";
import InternshipCards from "./InternshipCards";
import { Container , Row, Col} from "react-bootstrap" 
import { useNavigate } from "react-router-dom"
import MeetMagnet from "../../Assets/InternshipMeet/meetMagnet.png"
import InternshipProject from "./InternshipProject"
import Scrapper from "../../Assets/Projects/scrappeur.png"
import Appsmith from "../../Assets/InternshipMeet/Appsmith.png"
import BillingMeet from "../../Assets/InternshipMeet/OnboardingMeet.png"
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
import NotionRename from "../../Assets/InternshipMeet/NotionRename.png"
import notionScrapping from "../../Assets/InternshipMeet/NotionScrapping.png"

const InternshipMeet = () => {
    const navigate = useNavigate();
    const goToLastPage = () => { navigate("/internship"); }

    return (
        <Container className="internship-section">
            <div style={{ zIndex: -1 }}>
                <Particle />
            </div>
            
            <Container>
                <h1 className="internship-heading"> MeetMagnet <strong className="purple"> Experience </strong></h1>
            </Container>

            <section className="internship-overview">
                <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>

                    {/* CONTEXTE ENTREPRISE */}
                    <Col md={5} style={{paddingTop: "30px"}} className="internship-card">
                        <InternshipProject
                            title="MeetMagnet | AI-Powered Sales Intelligence"
                            imgPath={MeetMagnet}
                            description="MeetMagnet is a French SaaS startup that leverages Artificial Intelligence to help sales teams identify and contact qualified prospects at the perfect moment."
                            description2="My role involved enhancing data acquisition tools and deploying internal infrastructure to support the platform's scaling."
                        />    
                    </Col>

                    {/* SCRAPING / DATA ACQUISITION */}
                    <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject 
                            title="Web Scraping & Data Automation"
                            imgPath={Scrapper}
                            hasModal={true}
                            compTech="JavaScript (Puppeteer), HTML, CSV Processing"
                            description="Developed a custom web scraper designed to automate the collection of SEO and domain metrics across multiple pages."
                            comp1="Automated data extraction including Domain Authority, Organic Traffic, and Spam Scores."
                            comp2="Built a pagination-handling engine with CSV export functionality for business analysis."
                            imgGallery={[ notionScrapping ,BenchMarkScrapping ]}
                            description2={
                                <>
                                    <h5>Scraping Objectives</h5>
                                    <p>The goal was to feed the AI engine with high-quality domain data:</p>
                                    <ul>
                                        <li>Metrics: Domain Rating, Authority Score, Referring Domains.</li>
                                        <li>Geographical and linguistic data for lead segmentation.</li>
                                    </ul>
                                    <h5>Development Approach</h5>
                                    <ul>
                                        <li>Scripted with Puppeteer to simulate human browsing and bypass basic bot detection.</li>
                                        <li>Implementation of sequential scraping to ensure data integrity and avoid server blocking.</li>
                                    </ul>
                                </>
                            }
                        />
                    </Col>

                    {/* INFRASTRUCTURE / INTERNAL TOOLS */}
                    <Col md={5} className="internships-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject
                            title="Internal Tooling & Cloud Infrastructure"
                            hasModal={true}
                            imgPath={Appsmith}
                            description="Self-hosted and configured Appsmith to build internal business dashboards, reducing dependency on third-party SaaS."
                            compTech="Docker, Linux VPS, DNS Management"
                            comp1="Deployed and managed containerized services using Docker."
                            comp2="Configured custom DNS records and SSL certificates for secure internal access."
                            imgGallery={[ TaskNotion ,BenchMark, InstallAppsmith ]}
                            description2={
                                <>
                                    <h5>Infrastructure Tasks</h5>
                                    <ul>
                                        <li>Conducted a benchmark of no-code/low-code tools for rapid internal app development.</li>
                                        <li>Integration with n8n and MongoDB for real-time data visualization.</li>
                                        <li>Deployment on a Linux VPS via Docker Compose.</li>
                                    </ul>
                                    <h5>Networking</h5>
                                    <p>Managed DNS A-records via Cloudflare to link 'tool.meetmagnet.fr' to the dedicated instance.</p>
                                </>
                            }
                        />
                    </Col>

                    {/* BACKEND & DATABASE MIGRATION */}
                    <Col md={5} className="internship-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject
                            title="Backend Infrastructure & Database Management"
                            imgPath={SupaBaseMeet}
                            hasModal={true}
                            description="Implementation and configuration of Supabase as the primary backend-as-a-service for the platform's reboot."
                            compTech="Supabase, PostgreSQL, Backend Logic"
                            comp1="Architected relational database tables and user authentication flows."
                            comp2="Validated client-server communication via API testing."
                            imgGallery={[SupaBaseCreate]}
                            description2={
                                <>
                                    <h5>Database Engineering</h5>
                                    <ul>
                                        <li>Schema design for scalable user data management.</li>
                                        <li>SQL script development for automated table creation and relational constraints.</li>
                                    </ul>
                                </>
                            }
                        />      
                    </Col>

                    {/* PROJECT MANAGEMENT */}
                    <Col md={5} className="internship-cards" style={{ paddingTop: "30px"}}>
                        <InternshipProject
                            title="Collaborative Development & Workflow"
                            imgPath={KanbanMeet}
                            hasModal={true}
                            description="Managed the development lifecycle of the platform reboot using Agile methodologies and modern version control."
                            compTech="Notion (Kanban), Git, NuxtJS"
                            comp1="Coordinated tasks through a structured Kanban board with clear sprint objectives."
                            comp2="Maintained a professional Git workflow using branch protection and peer-reviewed merges."
                            imgGallery={[OnboardingMeet,SupaBaseSQL, infoVue, FormTemp, SupaBaseInsert ]}
                            description2={
                                <>
                                    <h5>Project Execution</h5>
                                    <p>Followed high development standards to ensure code maintainability:</p>
                                    <ul>
                                        <li>Task breakdown: Each feature was split into technical sub-tasks with visual mockups.</li>
                                        <li>Documentation: Leveraged NuxtJS and Tailwind CSS documentation for modern UI development.</li>
                                        <li>Versioning: Managed Dev/Main branches to separate stable releases from ongoing features.</li>
                                    </ul>
                                </>
                            }
                        />
                    </Col>

                </Row>
                <button type="button" onClick={goToLastPage} className="btn btn-next"> Previous Experience </button>
            </section>
        </Container>
    )
}


export default InternshipMeet;



