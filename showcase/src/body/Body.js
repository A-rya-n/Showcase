import React from "react";
import { useEffect, useState } from "react";

import DisplayData from "./DisplayData";
import Edit from "./Edit";
import View from "./View";
// import FetchApi from "../api/FetchApi";

const Body = () => {
  const url = "http://localhost:3000/items";
  const [info, setInfo] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);


  return (
    <>
      <View />
      <Edit />
      <DisplayData Data={info}/>
    </>
  );
};

export default Body;
