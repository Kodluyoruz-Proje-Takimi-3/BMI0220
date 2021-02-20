import { RestaurantRounded } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Form,
  Col,
  Row,
  Card,
  ListGroup,
  Accordion,
  ToggleButton
} from "react-bootstrap";
import BMIForm from "./BMIForm";

const InfoCard = ({ infos, deleteCard }) => {
  // const handleDelete = () => {
  //   deleteCard(infos.id);
  // };
  return (
    <>
      <Container>
        {infos.map((info, index) => (
          <Card key={index} className="mt-5 col-md-6">
            <Card.Body>
              <div className="d-flex justify-content-between mb-2">
                <Card.Title>Your Informations</Card.Title>
                <Button
                  onClick={() => {
                    deleteCard(info.id);
                  }}
                >
                  ❌
                </Button>
              </div>
              <div className="d-flex">
                <ListGroup className="col-md-10">
                  <ListGroup.Item>Your weight: {info.weight} kg</ListGroup.Item>
                  <ListGroup.Item>Your height: {info.height}cm</ListGroup.Item>
                  <ListGroup.Item>Your BMI:{info.bmi} </ListGroup.Item>
                </ListGroup>
                <ListGroup className="col-md-2">
                  <ListGroup.Item>
                    {info.bmi < 18.5
                      ? " UNDERWEIGHT"
                      : info.bmi > 18.5 && info.bmi < 25
                      ? `NORMAL`
                      : info.bmi >= 25 && info.bmi < 30
                      ? " OVERWEIGHT"
                      : info.bmi >= 30
                      ? " OBESE"
                      : "I couldnt find your bmi range"}{" "}
                  </ListGroup.Item>
                </ListGroup>
              </div>
              <Accordion defaultActiveKey="1">
                <Card>
                  <Card.Header>
                    <Accordion.Toggle as={Button} variant="link" eventKey="0">
                      TAP TO SEE THE DIET RECOMMEND 🙂
                    </Accordion.Toggle>
                  </Card.Header>

                  <Accordion.Collapse eventKey="0">
                    <ListGroup>
                      <ListGroup.Item>
                        Please choose your BMI range{" "}
                      </ListGroup.Item>

                      <ListGroup.Item className="d-flex justify-content-around">
                        <Link to={`/underweight`}>
                          <ToggleButton
                            type="checkbox"
                            variant="danger"
                            value="1"
                          >
                            less than 18.5
                          </ToggleButton>
                        </Link>
                        <Link to={`/normal`}>
                          <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="1"
                          >
                            18 - 24.9
                          </ToggleButton>
                        </Link>
                        <Link to={`/overweight`}>
                          <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="1"
                          >
                            25 - 29.99
                          </ToggleButton>
                        </Link>
                        <Link to={`/obese`}>
                          <ToggleButton
                            type="checkbox"
                            variant="secondary"
                            value="1"
                          >
                            More than 30
                          </ToggleButton>
                        </Link>
                      </ListGroup.Item>
                    </ListGroup>
                  </Accordion.Collapse>
                </Card>
              </Accordion>
            </Card.Body>
          </Card>
        ))}
      </Container>
      );
    </>
  );
};

export default InfoCard;
