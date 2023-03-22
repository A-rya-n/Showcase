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
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650, border: 1 }}>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="right">Product Name</TableCell>
            <TableCell align="right">Manufacuring Date</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((d) => (
            <TableRow key={d.id}>
              <TableCell component="th" scope="row">
                {d.id}
              </TableCell>
              <TableCell align="right">{d.name}</TableCell>
              <TableCell align="right">{d.mdate}</TableCell>
              <TableCell align="right">{d.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DisplayData;
