import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Title>{props.title}</Card.Title>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Text style={{ textAlign: "justify" }}>
            <ul>
              <li><strong>Technologies : {props.technologies}</strong></li>
            </ul>
          </Card.Text>

          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>

          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "Framagit"}
          </Button>

          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp;
              Demo
            </Button>
          )}

          {/* Détails via modal */}
          {props.hasModal && (
            <Button
              variant="secondary"
              onClick={() => setShow(true)}
              style={{ marginLeft: "10px" }}
            >
              Détails
            </Button>
          )}
        </Card.Body>
      </Card>

      {/* Modal détail */}
      {props.hasModal && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          centered
          contentClassName="custom-modal-dark"
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title} - Détails</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            {props.description2 && (
              <div style={{ marginTop: "10px" }}>{props.description2}</div>
            )}

            {props.imgGallery && props.imgGallery.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`detail-${index}`}
                style={{ width: "100%", marginTop: "20px", borderRadius: "8px" }}
              />
            ))}
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default ProjectCards;
