import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import contact from "../data/contact.json";
import { Card, Container, Row } from "react-bootstrap";
import "../styles.css";
import Particles from "./Particles";
const styles = {
  root: {
    fontFamily: "sans-serif",
    textAlign: "center",
    height: "100%",
    position: "absolute",
    background: "#1D2D50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }
};
function Contact() {
  const infoContact = contact.contact.map((item) => (
    <Card className="d-flex justify-content-center align-items-center bg-none text-white my-5 border-0 col-sm-12 col-md-4">
      <Card.Img variant="top" src={item.photo} className="rounded-circle " />
      <Card.Body className="justify-content-center align-items-center ">
        <Card.Title className="text-orange text-center fw-600 fs-23">
          {item.name}
          {item.lastname}
        </Card.Title>
        <Card.Title className="text-center fs-18 fw-200">
          {item.caption}
        </Card.Title>
        <Card.Text className="mt-5 ">
          <ul className="list-unstyled fw-200 ls-2">
            <li className="mt-2 ls-2">
              <FontAwesomeIcon className='mr-2' icon={faPhone} rotation={90} />
              {item.phonenum}
            </li>

            <li className="mt-2 ls-2">     <FontAwesomeIcon className='mr-2' icon={faGithub} />  {item.github}</li>

            <li className="mt-3 "> <FontAwesomeIcon className='mr-2' icon={faEnvelope} />{item.email}</li>
          </ul>
        </Card.Text>
      </Card.Body>
    </Card>
  ));
  return (
    <>
      <div style={styles.root}>
        <Particles />
      </div>
      <Container >

        <h1 className="text-white text-right mt-5 fs-75 fw-300 ls-5 col-xs-12">
          CONTACT <span className="text-orange fw-600 "> US</span>{" "}
        </h1>
        <Row >
          <div className="d-flex flex-wrap justify-content-center align-items-center col-md">
            {infoContact}
          </div>
        </Row>
      </Container>
    </>
  );
}

export default Contact;
