import React from "react";
import VerticalLinearStepper from "./Stepper.jsx";
import whatsbmi from '../img/whatsbmi.png';
import '../styles.css';

function InfoBMI() {
  return (
    <div className="d-flex justify-content-center flex-column align-items-center">
      <img src={whatsbmi} className="w-75 mt-3" />
      <VerticalLinearStepper />
    </div>
  );
}

export default InfoBMI;
