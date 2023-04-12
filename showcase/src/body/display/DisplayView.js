import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Backdrop } from "@mui/material";

const style = {
  position: "relative",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "none",
  boxShadow: 2,
  borderRadius: "15px",
  p: 4,
};

const DisplayView = (props) => {
  console.log(props.opened);
  return (
    <div>
      <Backdrop
        open={props.opened}
        sx={{ backgroundColor: "rgba( 0 , 0 , 0 , 0.3 )", zIndex: 0 }}
        onClick={props.close}
      />
      <Modal
        open={props.opened}
        onClose={props.close}
        sx={{ "& .MuiBackdrop-root": { backgroundColor: "transparent" } }}
      >
        <Box sx={style}>
          <Typography variant="h1">{props.details.no}</Typography>
          <Typography variant="h2">{props.details.name}</Typography>
          <Typography variant="h3">{props.details.category}</Typography>
          <Typography variant="h6">{props.details.mail}</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayView;
