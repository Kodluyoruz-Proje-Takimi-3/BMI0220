import "./styles.css";
import React, { useEffect } from "react";

import Footer from "./components/Footer.jsx";
import { Route, BrowserRouter, Redirect, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import link from "./dummy-data/link.js";
import { getData, storeData } from "./helpers/localStorage";
import SwipeableTemporaryDrawer from "./components/NavBar.jsx";
import BMIForm from "./components/BMIForm.jsx";
import InfoCard from "./components/InfoCard.jsx";
import LineChart from "./components/LineChart.jsx";

function App() {
  const routeMap = link.map((item, index) => (
    <Route
      key={index}
      exact={item.isExact}
      path={item.link}
      component={item.component}
    />
  ));

  return (
    <>
      <BrowserRouter>
        <SwipeableTemporaryDrawer link={link} />
        <Switch>
          {routeMap}
          <Route path="*">
            <Redirect to="/404" />
          </Route>
        </Switch>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
