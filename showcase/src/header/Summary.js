import React from "react";

import classes from "./Summary.module.css";
import cssimage from "../assets/coding.jpg";

const Summary = (props) => {
  return (
    <>
      <div className={classes["main-image"]}>
        <img src={cssimage} alt="A very delicious meal!" />
      </div>
      <section className={classes.summary}>
        <h2>Showcase, </h2>
        <p>
          A CRUD based application where you can where you can create, remove,
          update and delete your shops and their products.
        </p>
        <p>
          The shops and their products run on their own separate servers which
          this SPA app will fetch and modify the data as you choose.
        </p>
      </section>
    </>
  );
};

export default Summary;
