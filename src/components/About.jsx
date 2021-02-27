import "../styles.css";
import { Row, Image, Container } from "react-bootstrap";
import React, { useEffect } from "react";
import about from "../data/about.json";
import logos from "../data/logo.js";


function About() {
  const aboutInfo = about.info.map((item, index) => (
    <>
      <Row className='col-sm-12'>
        <h1 className="ls-5 text-white fw-400 fs-75">
          ABOUT <span className="fw-700 text-orange">BMI TRACKER</span>{" "}
        </h1>
      </Row>

      <Row className='col-sm-12'>
        <p className="text-white mt-3">{item.paragraphOne}</p>
      </Row>

      <Row className='col-sm-12'>
        <p className="text-white mt-3">{item.paragraphTwo}</p>
      </Row>
      <Row className='col-sm-12'>
        <p className="text-white mt-3">{item.paragraphThree}</p>
      </Row>

    </>
  ));

  const features = about.info.map((item, index) => (
    <>
      <li className="my-3" key={index}>  {item.features[0]}</li>
      <li className="my-3" key={index}>  {item.features[1]}</li>
      <li className="my-3" key={index}>  {item.features[2]}</li>
      <li className="my-3" key={index}>  {item.features[3]}</li>
      <li className="my-3" key={index}>  {item.features[4]}</li>
    </>
  ));
  const inFuture = about.info.map((item, index) => (
    <>
      <li className="my-3" key={index}>  {item.inFuture[0]}</li>
      <li className="my-3" key={index}>  {item.inFuture[1]}</li>
      <li className="my-3" key={index}>  {item.inFuture[2]}</li>
      <li className="my-3" key={index}>  {item.inFuture[3]}</li>
      <li className="my-3" key={index}>  {item.inFuture[4]}</li>
    </>
  ));

  const logosInfo = logos.map((item, index) => (
    <Image className="logo" src={item} rounded />
  ));
  return (
    <>
      <Container className="mt-5">
        {aboutInfo}
        <Row className="d-flex flex-column mt-5 col-sm-12">
          <h3 className="text-orange ls-2">Features</h3>
          <ul className="text-white mt-3 list-unstyled ">{features}</ul>
          <h3 className="text-orange ls-2 text-right mt-5">In Future</h3>
          <ul className="text-white mt-3 list-unstyled text-right">{inFuture}</ul>
        </Row>
      </Container>
      <Container fluid>
        <p className="text-orange ls-5 text-center mt-5 fs-23 ">POWERED BY </p>
        <Row className="d-flex mt-5  justify-content-around col-sm-12">{logosInfo}</Row>
      </Container>
    </>
  );
}

export default About;

