import React, { useState } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function InternshipProject(props) {
  const [show, setShow] = useState(false);
  const { t } = useTranslation();

  return (
    <>
      <Card className="project-card-view">
        <Card.Title style={{ textAlign: "center", paddingTop: "30px" }}>{props.title}</Card.Title>

        <Card.Img variant="top" style={{ width: "100%", height: "60%"}} src={props.imgPath} alt="" />
            <p style={{ fontSize: "0.8rem", fontStyle: "italic", textAlign: "center", marginTop: "5px", color: "#888" }}>
               {t('internship.common.note')}
            </p>

        <Card.Body>
          {props.description && (
            <Card.Text style={{ textAlign: "justify" }}>{props.description}</Card.Text>
          )}

          {props.comp && (
            <Card.Text style={{ textAlign: "justify" }}>{props.comp}</Card.Text>
          )}

          {props.compTech && (
            <Card.Text><strong></strong>{t('internship.common.skills')} {props.compTech}</Card.Text>
          )}

          {(props.comp1 || props.comp2) && (
            <ul style={{ paddingLeft: "20px", textAlign: "left" }}>
              {props.comp1 && <li>{props.comp1}</li>}
              {props.comp2 && <li>{props.comp2}</li>}
            </ul>
          )}

          {props.hasModal && (
            <Button
              variant="secondary"
              onClick={() => setShow(true)}
              style={{ marginLeft: "10px" }}
            >
             {t('internship.common.details_btn')}
            </Button>
          )}
        </Card.Body>
      </Card>

      {props.hasModal && (
        <Modal
          show={show}
          onHide={() => setShow(false)}
          size="lg"
          centered
          contentClassName="custom-modal-dark"
        >
          <Modal.Header closeButton>
            <Modal.Title>{props.title} -{t('internship.common.overview')} </Modal.Title>
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
            <Button variant="secondary" onClick={() => setShow(false)}>{t('internship.common.close_btn')}</Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
}

export default InternshipProject;
