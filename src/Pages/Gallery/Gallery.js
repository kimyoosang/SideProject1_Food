import React from "react";
import gallery1 from "../../images/gallery-img-1.jpg";
import gallery2 from "../../images/gallery-img-2.jpg";
import gallery3 from "../../images/gallery-img-3.jpg";
import gallery4 from "../../images/gallery-img-4.jpg";
import gallery5 from "../../images/gallery-img-5.jpg";
import gallery6 from "../../images/gallery-img-6.jpg";

import "./Gallery.css";

function Gallery() {
  return (
    <>
      <section className="section-3">
        <h1 className="section-heading">Gallery</h1>
        <div className="gallery">
          <a href="#" className="gallery-link" title="Order Now">
            <img src={gallery1} className="food-img" />
            <h3 className="food-name">Pancakes</h3>
            <p className="food-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            </p>
          </a>
          <a href="#" className="gallery-link" title="Order Now">
            <img src={gallery2} className="food-img" />
            <h3 className="food-name">Cupcakes</h3>
            <p className="food-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            </p>
          </a>
          <a href="#" className="gallery-link" title="Order Now">
            <img src={gallery3} className="food-img" />
            <h3 className="food-name">Hummus</h3>
            <p className="food-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            </p>
          </a>
          <a href="#" className="gallery-link" title="Order Now">
            <img src={gallery4} className="food-img" />
            <h3 className="food-name">Hambergur</h3>
            <p className="food-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            </p>
          </a>
          <a href="#" className="gallery-link" title="Order Now">
            <img src={gallery5} className="food-img" />
            <h3 className="food-name">Salmon</h3>
            <p className="food-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            </p>
          </a>
          <a href="#" className="gallery-link" title="Order Now">
            <img src={gallery6} className="food-img" />
            <h3 className="food-name">Vegetables</h3>
            <p className="food-description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor,
            </p>
          </a>
        </div>
      </section>
    </>
  );
}

export default Gallery;
