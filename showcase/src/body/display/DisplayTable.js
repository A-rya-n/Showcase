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
  const handleDelete = (id) => {
    DeleteShop(id);
    window.location.reload(true);
  };

  const openModal = () => {
    setOpened(true);
  };
  const closeModal = () => {
    setOpened(false);
  };

  return (
    <TableContainer
      component={Paper}
      style={{
        maxHeight: "inherit",
        width: "85%",
        marginLeft: "auto",
        marginRight: "auto",
        borderRadius: "20px",
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
                  onClick={ openModal}
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
                <DisplayView opened={opened} close={closeModal} />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DisplayTable;
