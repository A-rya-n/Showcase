import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

const DisplayProduct = (props) => {
  const url = `http://localhost:3001/products?Sno=${props.Snum}&Sname=${props.Snam}`;
  const [info, setInfo] = useState([]);

  useEffect(() => {
    const fetchProduct = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setInfo(data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    };
    fetchProduct();
  }, [url]);

  return (
    <>
      {info.length > 0 ? (
        <TableContainer
          component={Paper}
          style={{
            maxHeight: "inherit",
            width: "100%",
            marginTop: "1.5rem",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "2rem",
            borderRadius: "20px",
          }}
        >
          <Table>
            <TableHead style={{ backgroundColor: "black" }}>
              <TableRow>
                <TableCell style={{ color: "white" }} align="left">
                  Name
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  Category
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  Price
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  Mfg. Date
                </TableCell>
                <TableCell style={{ color: "white" }} align="left">
                  Description
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {info.map((i) => (
                <TableRow
                  key={i.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {i.Pname}
                  </TableCell>
                  <TableCell align="right">{i.Pcategory}</TableCell>
                  <TableCell align="right">{i.price}</TableCell>
                  <TableCell align="right">{i.mdate}</TableCell>
                  <TableCell align="right">{i.desc}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Typography
          variant="h6"
          sx={{
            width: "fit-content",
            padding: 2,
            display: "inline",
          }}
        >
          No Products
        </Typography>
      )}
    </>
  );
};

export default DisplayProduct;
