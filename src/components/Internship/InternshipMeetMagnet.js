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


                
                <Col md={9} className="internship-card">
                    <InternshipProject
                    title="Notion"
                    imgPath={NotionRename}
                    description= "Utilisation de notion "
                    ghLink="https://blog.meet-magnet.com/"
                    />    
                </Col>


                 <Col md={6} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                    <InternshipProject 
                        title="Mission Scrapper"
                        imgPath={Scrapper}
                        hasModal={true}
                        compTech="JavaScript (puppeteer), HTML "
                        description="Scrappeur web réalisé pour un particulier. Il gère la pagination, récupère les données sur chaque page, puis génère un fichier CSV contenant toutes les informations collectées."
                        comp1="Collecter, suivre et orienter des demandes"
                        comp2="Traiter des demandes concernant les applications"
                        ghLink="https://github.com/KCAmine/JavaScript"
                        imgGallery={[ notionScrapping ,BenchMarkScrapping ]}
                        
                        description2={
                            <>
                            <h5>🧪 Objectif du scraping</h5>
                            <p>Données ciblées lors du scraping :</p>
                            <ul>
                              <li>Price, Media, Domain rating, Domain authority</li>
                              <li>Authority score, Organic Traffic, Categories</li>
                              <li>Country, Language, Referring domains, Spam score</li>
                            </ul>
                        
                            <h5>🔍 Benchmark des outils testés</h5>
                            <ul>
                              <li><a href="https://rapidapi.com/" target="_blank">RapidAPI</a> – Bon accès API mais limité sans abonnement</li>
                              <li><a href="https://easyscraper.com/" target="_blank">Easy Scrapper </a> – Extension google </li>
                              <li><a href="https://pptr.dev/" target="_blank">Puppeteer Dooc </a> – Documentation pour l'installation et l'utilisation de puppeteer</li>
                              <li><a href="https://console.apify.com/actors/rHg1Nv0ktL3a3DPhh/source" target="_blank">Scraper Apify d’Étienne</a> – Bon point de départ pour test</li>
                            </ul>
                        
                            <h5>⚙️ Développement du scrapper</h5>
                            <ul>
                              <li>Script en JavaScript avec Puppeteer</li>
                              <li>Scraping <strong>page par page</strong> pour éviter le blocage</li>
                              
                            </ul>
                        
                            <h5>📦 Livrable</h5>
                            <p>Un scrapper fonctionnel qui collecte les données et les exporte en <strong>CSV</strong>.</p>
                            <p>Une démonstration de scraping sur le site cible (ex. <em>Bazoom</em>) a été réalisée avec succès.</p>
                          </>
                        }
                        />
                </Col>

                <Col md={6} className="internships-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                    <InternshipProject
                        title="Mission Appsmith"
                        hasModal={true}
                        imgPath={Appsmith}
                        description="Installer et configurer Appsmith en self host pour créer des dashboards internes"
                        compTech="Docker, Linux, PostGreSQL"
                        comp1="Déployer un service"
                        comp2="Accompagner les utilisateurs dans la mise en place d'un service"
                        ghLink="https://www.appsmith.com/"
                        imgGallery={[ TaskNotion ,BenchMark, InstallAppsmith ]}
                        description2={
                        <>
                            <ul>
                            <li>Benchmark d'outils no-code/self-host pour :
                                <ul>
                                <li>Créer facilement des apps internes</li>
                                <li>Connexion API avec n8n</li>
                                <li>Support de MongoDB (lecture/écriture)</li>
                                <li>Création de dashboards</li>
                                </ul>
                            </li>
                            <li>
                                Documentation suivie pour l'installation :{" "}
                                <a href="https://docs.appsmith.com/getting-started/setup/installation-guides/docker" target="_blank" rel="noopener noreferrer">
                                Docs Appsmith (Docker)
                                </a>

                            </li>
                            <li>
                                Configuration DNS : enregistrement A pour <code>tool.meetmagnet.fr</code> → IP du VPS (via OVH/Cloudflare).
                            </li>
                            </ul>
                        </>
                        }
                    />
                    </Col>

                    <Col md={9} className="internship-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>
                    <InternshipProject
                        title="Refonte de MeetMagnet - Configuration de supabase"
                        imgPath={SupaBaseMeet}
                        hasModal={true}
                        description = "Installation et configuration de Supabase pour le projet MeetMagnet. Connexion au backend, création des tables, gestion des données utilisateurs. Test de la récupération et de l’envoi de données via l’interface."
                        compTech="Supabase, PostGreSQL"
                        comp1="Déployer et configurer une base de données"
                        comp2="Tester les échanges client ↔ serveur"  
                        ghLink="https://supabase.com/dashboard/project/ursjxjcwumyvdwrmfndv/database/schemas" 
                        imgGallery={[SupaBaseCreate]}
                        description2= {
                            <>
                            <ul>
                                <li> Exemple d'un script de création des tables </li>
                            </ul>
                            </>
                        }
                    />      
                </Col>

                <Col md={9} className="internship-cards" style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "30px"}}>

                <InternshipProject
                        title="Refonte de MeetMagnet - Gestion des tâches "
                        imgPath={KanbanMeet}
                        hasModal={true}
                        description="Organisation du travail sur le projet MeetMagnet à l’aide de Notion en Kanban. Les tâches sont planifiées, découpées en sous-tâches et suivies de manière structurée. Utilisation de Git avec branches (dev, main) pour une bonne gestion de version."
                        compTech="Notion, Git, VSCode"
                        comp1="Gérer un projet avec planification et sous-tâches"
                        comp2="Travailler en équipe avec Git (branches, commit, merge)"
                        ghLink="https://www.notion.so/meetmagnet/Refonte-Meet-Magnet-1ba253f85881809ab143f521f62f41f8"
                        imgGallery={[OnboardingMeet,SupaBaseSQL, infoVue, FormTemp, SupaBaseInsert ]}
                        description2= {
                            <>
                            <ul>
                            <li> Voici un exemple de tâche rédigée et assignée par le tuteur dans Notion. Chaque tâche est :
                                <ul>
                                <li>Décomposée en sous-étapes claires à suivre</li>
                                <li>Accompagnée d’éléments visuels (maquettes, exemples)</li>
                                <li>Inclut de la documentation ou des instructions précises</li>
                               
                                </ul>
                            </li>
                            <li>
                                Exemple d'une documentation NuxtJS :{" "}
                                <a href="https://ui.nuxt.com/components/badge" target="_blank" rel="noopener noreferrer">
                                Docs NuxtJS
                                </a>

                            </li>
                           
                            </ul>
                        </>

                        }
                    />
                </Col>

                

            
            </Row>

                
        </section>
        </Container>
    )
}


export default InternshipMeet;



