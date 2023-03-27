import View from "./View";
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
      <View />
      <SearchBar />
      <Add />
    </div>
  );
};

export default SubHeader;
