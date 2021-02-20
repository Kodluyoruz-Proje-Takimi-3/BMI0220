import React, { useEffect, useState } from "react";
import Footer from "./components/Footer.jsx";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { v4 as uuidv4 } from "uuid";
import link from "./dummy-data/link.js";
import { getData, storeData } from "./helpers/localStorage";
import SwipeableTemporaryDrawer from "./components/NavBar.jsx";
import BMIForm from "./components/BMIForm.jsx";
import InfoCard from "./components/InfoCard.jsx";
import LineChart from "./components/LineChart.jsx";

const Context = () => {
  const initialState = () => getData("data") || [];
  const [state, setState] = useState(initialState);
  const [data, setData] = useState({});

  useEffect(() => {
    storeData("data", state);
    const date = state.map((obj) => obj.date);
    const bmi = state.map((obj) => obj.bmi);
    let newData = { date, bmi };
    setData(newData);
  }, [state]);

  const handleChange = (val) => {
    let heightToMeter = val.height / 100;
    val.bmi = (val.weight / (heightToMeter * heightToMeter)).toFixed(2);

    val.id = uuidv4();
    let newVal = [...state, val];
    setState(newVal);
  };

  const handleDelete = (id) => {
    storeData("lastState", state);
    let newState = state.filter((item) => {
      return item.id !== id;
    });
    setState(newState);
  };

  return (
    <>
      <BMIForm change={handleChange} />;
      <LineChart labelData={data.date} bmiData={data.bmi} />
      <InfoCard infos={state} deleteCard={handleDelete} />
    </>
  );
};

export default Context;
