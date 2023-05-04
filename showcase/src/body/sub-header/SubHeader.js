import Count from "./Count";
import SearchBar from "./SearchBar";
import Add from "./Add";

const SubHeader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        margin: "0%",
        padding: "0%",
      }}
    >
      <Count />
      <SearchBar />
      <Add />
    </div>
  );
};

export default SubHeader;
