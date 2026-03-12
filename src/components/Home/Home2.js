import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation, Trans } from "react-i18next"; 

function Home2() {
  const { t } = useTranslation(); 

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
                <span className="purple"> {t('home.about.title_span')}</span> {t('home.about.title_end')} 
            </h1>
            <p className="home-about-body">
              {t('home.about.body1')}
              <br />
              {t('home.about.body2')}
              <br /><br /><br />
              {t('home.about.love_building')} 
              <i>
                <b className="purple"> {t('home.about.tools')} </b> 
              </i>
              <br /><br />
              {t('home.about.work_with')} 
              <b className="purple"> Symfony, JavaScript </b> {t('home.about.frameworks')}
              <i>
                <b className="purple"> React and Next.js </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar"></Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>{t('home.about.social_title')}</h1>
            <p>
              <Trans i18nKey="home.about.social_p">
                Feel free to <span className="purple">contact me </span> on any of these platforms 
              </Trans>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a href="https://github.com/KCAmine" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiFillGithub /></a>
              </li>
              <li className="social-icons">
                <a href="https://x.com/mjd_amine" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><AiOutlineTwitter /></a>
              </li>
              <li className="social-icons">
                <a href="https://www.linkedin.com/in/amine-mejdi-ab38ab279/" target="_blank" rel="noreferrer" className="icon-colour home-social-icons"><FaLinkedinIn /></a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;