import Box from "@mui/material/Box";
import { Typography, Modal, Backdrop, Divider, Chip } from "@mui/material";
import DisplayProduct from "./DisplayProduct";

const style = {
  bgcolor: "#343F71",
  color: "#eee",
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  border: "none",
  boxShadow: 2,
  borderRadius: "15px",
  p: 4,
};

const DisplayView = (props) => {
  // console.log(props.opened);
  return (
    <div>
      <Backdrop
        open={props.opened}
        // open={true}
        sx={{ backgroundColor: "rgba( 0 , 0 , 0 , 0.3 )", zIndex: 0 }}
        onClick={props.close}
      />

      <Modal
        open={props.opened}
        // open={true}
        onClose={props.close}
        sx={{ "& .MuiBackdrop-root": { backgroundColor: "transparent" } }}
      >
        <Box sx={style}>
          <Typography
            variant="h1"
            sx={{
              backgroundColor: "#F34C19",
              borderRadius: "10px",
              width: "fit-content",
              padding: 2,
            }}
          >
            {props.details.no}
          </Typography>
          <Divider
            variant="middle"
            sx={{ backgroundColor: "white", marginTop: 3, marginBottom: 3 }}
          />
          <Typography
            variant="h3"
            sx={{
              width: "fit-content",
              padding: 2,
              display: "inline",
              marginRight: 2,
            }}
          >
            {props.details.name}
          </Typography>
          <Typography
            variant="h3"
            sx={{
              width: "fit-content",
              padding: 2,
              display: "inline",
            }}
          >
            {props.details.category}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              width: "fit-content",
              padding: 2,
              marginTop: 3,
            }}
          >
            {props.details.mail}
          </Typography>
          <Divider variant="middle" sx={{ marginTop: 3, marginBottom: 3 }}>
            <Chip label="PRODUCTS" sx={{ color: "white" }} />
          </Divider>
          <DisplayProduct Snum={props.details.no} Snam={props.details.name} />
          {/* {console.log("Hello",props.details.no, props.details.name)} */}
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayView;
