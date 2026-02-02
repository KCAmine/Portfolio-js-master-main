import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { FaUserGroup } from "react-icons/fa6";

function InternshipProject(props) {
  const [show, setShow] = useState(false);

  return (
    <>
      <Card className="project-card-view">
        <Card.Title style={{ textAlign: "center", paddingTop: "30px" }}>{props.title}</Card.Title>

        {/* Image principale dans la carte */}
        <Card.Img variant="top" style={{ width: "100%", height: "60%"}} src={props.imgPath} alt="" />
         {/* Disclaimer for sensitive data */}
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", textAlign: "center", marginTop: "5px", color: "#888" }}>
                Note: Visuals are blurred or simplified to protect sensitive corporate data.
            </p>

        <Card.Body>
          {props.description && (
            <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
          )}

          {props.comp && (
            <Card.Text style={{ textAlign: "justify" }}>{props.comp}</Card.Text>
          )}

          {props.compTech && (
            <Card.Text><strong>Skills:</strong> {props.compTech}</Card.Text>
          )}

          {(props.comp1 || props.comp2) && (
            <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
              {props.comp1 && <li>{props.comp1}</li>}
              {props.comp2 && <li>{props.comp2}</li>}
            </ul>
          )}

        
            
              
       

          {/* Affiche le bouton Détails uniquement si hasModal est true */}
          {props.hasModal && (
            <Button
              variant="secondary"
              onClick={() => setShow(true)}
              style={{ marginLeft: "10px" }}
            >
              Details
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
            <Modal.Title>{props.title} - Overview </Modal.Title>
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
            <Button variant="secondary" onClick={() => setShow(false)}>Close</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default InternshipProject;
