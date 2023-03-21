import React from "react";
import { useEffect, useState } from "react";

import DisplayData from "./DisplayData";
import Edit from "./Edit";
import View from "./View";
// import FetchApi from "../api/FetchApi";

const Body = () => {
  const url = "http://localhost:3000/posts";
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log(data);
        setInfo(data);
      });
  }, []);

  console.log(info);

  return (
    <>
      <View/>
      <Edit />
      <DisplayData />
    </>
  );
};

export default Body;
