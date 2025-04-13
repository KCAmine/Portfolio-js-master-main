import React from "react";
import Particle from "../Particle";

import InternshipCards from "./InternshipCards";
import { Container , Row, Col} from "react-bootstrap"; 


const InternshipMeet = () => {
    return (
        <Container  className="internship-section">
            <Particle/>
            <Container>
                <h1 className="internship-heading"> Meet Magnet </h1>
            </Container>


        <section className="internship-heading">
            <Row style={{ justifyContent: "center", paddingBottom: "15px", paddingTop: "20px"}}>

                <Col md={5} className="internship-card">
                    <InternshipCards 
                    imgPath={false}
                    isBlog={false}
                    title="MeetMagnet / Carquefou "
                    description= " ... "
                    ghLink="https://www.meet-magnet.com/"
                    description2= "..."
                    />    
                </Col>

            
            </Row>

                
        </section>
        </Container>
    )
}


export default InternshipMeet;



