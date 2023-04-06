import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 2,
  p: 4,
};

const DisplayView = (props) => {
  console.log(props.opened);
  return (
    <div>
      <Modal open={props.opened} onClose={props.close}>
        <Box sx={style}>
          <Typography variant="h6">{props.details.name}</Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default DisplayView;
