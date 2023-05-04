import React from "react";
// import { useEffect } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { fetchData } from "../features/DataSlice";

import SubHeader from "./sub-header/SubHeader";
import DisplayTable from "./display/DisplayTable";

const Body = () => {
  // const dispatch = useDispatch();
  // const { error } = useSelector((state) => state.data);
  // const dataStatus = useSelector((state) => state.data.status);

  // useEffect(() => {
  //   if (dataStatus === "idle") {
  //     dispatch(fetchData());
  //   }
  // }, [dataStatus, dispatch]);

  // if (dataStatus === "loading") {
  //   return <div>Loading...</div>;
  // }

  // if (dataStatus === "failed") {
  //   return <div>Error: {error}</div>;
  // }

  return (
    <>
      <SubHeader />
      <DisplayTable />
    </>
  );
};

export default Body;
