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
              A  <span className="purple"> PROPOS </span> DE MOI 
            </h1>
            <p className="home-about-body">
            Je suis passionné par la programmation, et j’apprends un peu plus chaque jour ! 🤷‍♂️
              <br />
              <br />
              <br />
              J’aime particulièrement créer des 
              <i>
                <b className="purple">des applications web </b> et
                explorer les domaines liés à la {" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Je travaille principalement avec 
               <b className="purple"> React.js</b> et des frameworks 
              <i>
                <b className="purple">
                  {" "}
                  JavaScript.
                </b>
              </i>
              &nbsp;  modernes comme 
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar"> 
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>TROUVEZ MOI </h1>
            <p>
              N'hesitez pas à  <span className="purple">me contacter </span> sur 
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
                  href="https://twitter.com/MjdAmine"
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
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mjd.amnnn"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
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
