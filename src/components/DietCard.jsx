import React from "react";
import { Row, Col, Carousel, Container } from "react-bootstrap";
import "../styles.css";
import { Link } from "react-router-dom";
function DietCard({
  id,
  title,
  imageType,
  readyInMinutes,
  servings,
  sourceUrl,
  calories,
  nutrients
}) {
  return (
    <>
      <div class="card mb-3">
        <div class="row g-0">
          <div class="col-md-4">
            <img
              src={`https://spoonacular.com/recipeImages/${id}-${"240x150"}.${imageType} `}
              alt=""
            />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>

              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <p class="card-text">
                <small class="text-muted">
                  Ready in {readyInMinutes} minutes
                </small>
              </p>
              {/* <p class="card-text">
                <small> {nutrients.calories} </small>
                <small> {nutrients.fat} </small>
                <small> {nutrients.carbohydrates} </small>
                <small> {nutrients.protein} </small>
              </p> */}
              <a target="_blank" href={sourceUrl}>
                To see recipe
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DietCard;
