import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

const DisplayData = ({ Data }) => {
  return (
    <TableContainer component={Paper} sx={{margin: 5}}>
      <Table sx={{ flexGrow: 1, width: "max-content", margin: 0}}>
        <TableHead>
          <TableRow>
            <TableCell>Shop ID</TableCell>
            <TableCell align="right">Shop Name</TableCell>
            <TableCell align="right">Shop Category</TableCell>
            <TableCell align="right">Shop Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((d) => (
            <TableRow key={d.id}>
              <TableCell component="th" scope="row">
                {d.no}
              </TableCell>
              <TableCell align="right">{d.name}</TableCell>
              <TableCell align="right">{d.category}</TableCell>
              <TableCell align="right">{d.mail}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DisplayData;
