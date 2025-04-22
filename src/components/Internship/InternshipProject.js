import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaUserGroup } from "react-icons/fa6";

function InternshipProject(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>

        {/* Image principale dans la carte */}
        <Card.Img variant="top" src={props.imgPath} alt="" />

        <Card.Body>
          {props.description && (
            <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
          )}

          {props.comp && (
            <Card.Text style={{ textAlign: "justify" }}>{props.comp}</Card.Text>
          )}

          {props.compTech && (
            <Card.Text><strong>Compétence :</strong> {props.compTech}</Card.Text>
          )}

          {(props.comp1 || props.comp2) && (
            <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
              {props.comp1 && <li>{props.comp1}</li>}
              {props.comp2 && <li>{props.comp2}</li>}
            </ul>
          )}

          <Button variant="primary" href={props.ghLink} target="_blank">
            <FaUserGroup /> &nbsp;
            {props.ghLink?.includes("github.com")
              ? "GitHub"
              : props.ghLink?.includes("framagit.org")
              ? "Framagit"
              : props.ghLink?.includes("notion.so")
              ? "Notion"
              : props.ghLink?.includes("supabase.com")
              ? "Supabase"
              : "Informations"}
          </Button>

          {/* Affiche le bouton Détails uniquement si hasModal est true */}
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

      {/* Affiche le modal uniquement si hasModal est true */}
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
            <p>{props.description}</p>

            {props.description2 && (
              <div style={{ marginTop: "15px" }}>{props.description2}</div>
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
            <Button variant="secondary" onClick={() => setShow(false)}>Fermer</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default InternshipProject;
