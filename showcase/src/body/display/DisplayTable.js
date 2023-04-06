import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";
import DisplayView from "./DisplayView";
import { DeleteShop } from "../../data/Edit";

const DisplayTable = ({ Data }) => {
  const [opened, setOpened] = useState();
  const [modalInfo, setModalinfo] = useState({
    no: "",
    name: "",
    category: "",
    mail: "",
  });

  const handleDelete = (id) => {
    DeleteShop(id);
    window.location.reload(true);
  };

  const openModal = (id) => {
    setOpened(true);

    fetch(`http://localhost:3000/shops/${id}`)
      .then((resposne) => resposne.json())
      .then((res) => setModalinfo(res));
  };
  return (
    <TableContainer
      component={Paper}
      style={{
        maxHeight: "inherit",
        width: "85%",
        marginTop: "1.5rem",
        marginLeft: "auto",
        marginRight: "auto",
        marginBottom: "2rem",
        border: "0.5rem outset black",
        borderRadius: "20px",
        boxShadow: "10px 12px 2px 1px grey",
      }}
    >
      <Table>
        <TableHead style={{ backgroundColor: "black" }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>Shop&nbsp;No.</TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Name
            </TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Category
            </TableCell>
            <TableCell style={{ color: "white" }} align="right">
              E-mail
            </TableCell>
            <TableCell style={{ color: "white" }} align="right">
              Action
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((d) => (
            <TableRow
              key={d.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {d.no}
              </TableCell>
              <TableCell align="right">{d.name}</TableCell>
              <TableCell align="right">{d.category}</TableCell>
              <TableCell align="right">{d.mail}</TableCell>
              <TableCell align="right">
                <Button
                  color="info"
                  variant="contained"
                  sx={{ marginRight: 1 }}
                  onClick={(e) => openModal(d.id)}
                >
                  View
                </Button>
                <Button
                  color="error"
                  variant="contained"
                  onClick={() => handleDelete(d.id)}
                >
                  Delete
                </Button>
                <DisplayView
                  opened={opened}
                  close={() => setOpened(false)}
                  details={modalInfo}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DisplayTable;
