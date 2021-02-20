import React, { useEffect, useState } from "react";
import { Container, Accordion, Card, Button, ListGroup } from "react-bootstrap";
import "../../styles.css";
import DietCard from "../DietCard";
function Normal() {
  const [data, setData] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const apiKey = `https://api.spoonacular.com/mealplanner/generate?apiKey=fa86eae893c5475ebb6b0f1f79428cef&targetCalories=2400&diet=omnivore&timeFrame=day`;

  let myHeaders = new Headers();
  myHeaders.append(
    "Cookie",
    "__cfduid=db7824fd541fb931b56d6c863d111d1c81613646123"
  );

  let requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow"
  };

  useEffect(() => {
    getData(apiKey);
  }, []);

  const getData = (API) => {
    fetch(API, requestOptions)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setData(result.meals);
        setNutrients(result.nutrients);
        console.log(nutrients);
      })
      .catch((error) => console.log("error", error));
  };

  return (
    <Container>
      {/* <h1> 18.5 - 25 </h1> */}
      <ListGroup>
        <ListGroup.Item>
          <h5>DIET MENU FOR THE BMI RANGE OF 18.5 - 25</h5>
        </ListGroup.Item>
        <ListGroup.Item>Total Calories : {nutrients.calories}</ListGroup.Item>
        <ListGroup.Item>
          Total Protein Amount: {nutrients.protein}
        </ListGroup.Item>
        <ListGroup.Item>Total Fat Amount: {nutrients.fat}</ListGroup.Item>
        <ListGroup.Item>
          Total Carbohydrates Amount : {nutrients.carbohydrates}
        </ListGroup.Item>
      </ListGroup>
      <Accordion className="mt-5" defaultActiveKey="1">
        <Card>
          <Card.Header>
            <Accordion.Toggle as={Button} variant="link" eventKey="0">
              Tap to see your diet we have prepared
            </Accordion.Toggle>
          </Card.Header>
          <Accordion.Collapse eventKey="0">
            <Card.Body>
              {data.map((data) => (
                <DietCard {...data} nutrients={nutrients} key={data.id} />
              ))}
            </Card.Body>
          </Accordion.Collapse>
        </Card>
      </Accordion>
    </Container>
  );
}

export default Normal;
