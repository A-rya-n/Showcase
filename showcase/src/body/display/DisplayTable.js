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

const DisplayTable = ({ Data }) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell>Shop&nbsp;No.</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {Data.map((d) => (
            <TableRow
              key={d.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
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
export default DisplayTable;
