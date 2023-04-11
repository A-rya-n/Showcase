import Count from "./Count";
import SearchBar from "./SearchBar";
import Add from "./Add";

const SubHeader = (props) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "0%",
        padding: "0%",
      }}
    >
      <Count counting={props.Data} />
      <SearchBar />
      <Add />
    </div>
  );
};

export default SubHeader;
