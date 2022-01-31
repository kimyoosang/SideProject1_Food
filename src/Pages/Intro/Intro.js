import React, { useEffect, useRef, useState } from "react";
import "./Intro.css";

function Intro() {
  const [iconList, setIconList] = useState([
    "fas fa-egg",
    "fas fa-stroopwafel",
    "fas fa-cheese",
    "fas fa-hotdog",
    "fas fa-drumstick-bite",
    "fas fa-apple-alt",
    "fas fa-ice-cream",
    "fas fa-fish",
    "fas fa-cookie",
    "fas fa-seedling",
  ]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setInterval(() => {
      console.log(iconList.length - 1);
      setCurrent((current) =>
        current === iconList.length - 1 ? (current = 0) : current + 1
      );
    }, 4000);
  }, []);

  return (
    <>
      <section className="section-1">
        <h1 className="section-heading">Variety of Foods</h1>
        <div className="section-1-icons">
          {iconList.map((el, idx) => (
            <i className={idx === current ? el + " change" : el} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Intro;
