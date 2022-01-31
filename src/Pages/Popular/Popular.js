import React from "react";
import image1 from "../../images/card-img-1.png";
import image2 from "../../images/card-img-2.png";
import image3 from "../../images/card-img-3.png";
import "./Popular.css";
function Popular() {
  return (
    <>
      <section class="section-2">
        <h1 class="section-heading">popular meals</h1>
        <div class="cards-container">
          <div class="card">
            <img src={image1} class="card-img" />
            <h3 class="card-name">Fish</h3>
            <button class="card-btn">Order now</button>
          </div>
          <div class="card">
            <img src={image2} class="card-img" />
            <h3 class="card-name">Cake</h3>
            <button class="card-btn">Order now</button>
          </div>
          <div class="card">
            <img src={image3} class="card-img" />
            <h3 class="card-name">Lobster</h3>
            <button class="card-btn">Order now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Popular;
