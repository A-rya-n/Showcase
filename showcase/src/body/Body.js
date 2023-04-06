import React from "react";
import { useEffect, useState } from "react";

import SubHeader from "./sub-header/SubHeader";
import DisplayTable from "./display/DisplayTable";

const Body = () => {
  const url = "http://localhost:3000/shops";
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
      <SubHeader />
      <DisplayTable Data={info} />
    </>
  );
};

export default Body;
