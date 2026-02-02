import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> ABOUT</span> ME 
            </h1>
            <p className="home-about-body">
            Passionated by programming I actually think I learnt something ! 🤷‍♂️
              <br />
              <br />
              <br />
              I love building new tools that matter like 
              <i>
                <b className="purple"> websites, software,  guides and more </b> 
                
              </i>
              <br />
              <br />
              I usually work with 
               <b className="purple"> Symfony ,    JavaScript  </b> and sometimes other frameworks such as
              <i>
                <b className="purple">
                  {" "}
                 React and Next.js
                </b>
              </i>
            
            </p>
          </Col>
          <Col md={4} className="myAvtar"> 
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON </h1>
            <p>
              Feel free to   <span className="purple">contact me </span> on any of these platforms 
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/KCAmine"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/mjd_amine"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amine-mejdi-ab38ab279/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
             
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
