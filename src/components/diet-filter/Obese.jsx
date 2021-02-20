import React, { useEffect, useState } from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import "../../styles.css";
import DietCard from "../DietCard";
function Obese() {
  const [data, setData] = useState([]);
  const [nutrients, setNutrients] = useState([]);

  const apiKey = `https://api.spoonacular.com/mealplanner/generate?apiKey=fa86eae893c5475ebb6b0f1f79428cef&targetCalories=1400&diet=omnivore&timeFrame=day`;

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
      <h1> +30 </h1>
      {data.map((data) => (
        <DietCard {...data} nutrients={nutrients} key={data.id} />
      ))}
    </Container>
  );
}

export default Obese;
