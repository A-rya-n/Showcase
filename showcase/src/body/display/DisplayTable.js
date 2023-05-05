import React, { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TablePagination,
  Divider,
  Box,
  Typography,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import DeleteIcon from "@mui/icons-material/Delete";
import DisplayView from "./DisplayView";
import { DeleteShop, DeleteProduct } from "../../data/Edit";
import { useSelector } from "react-redux";

const DisplayTable = () => {
  const shops = useSelector((state) => state.shops.shops);

  const [opened, setOpened] = useState(false);
  const [modalInfo, setModalinfo] = useState({
    no: "",
    name: "",
    category: "",
    mail: "",
  });

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [pageInfo, setPageInfo] = useState([]);
  const pages = `http://localhost:3000/shops?_page=${
    page + 1
  }&_limit=${rowsPerPage}`;

  const handleChangePage = (e, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  useEffect(() => {
    const fetchPage = () => {
      fetch(pages)
        .then((response) => response.json())
        .then((data) => {
          setPageInfo(data);
        })
        .catch((err) => {
          console.log("Error", err.message);
        });
    };
    fetchPage();
  }, [pages]);

  const handleDelete = (id, num, nam) => {
    DeleteShop(id);
    DeleteProduct(num, nam);
    window.location.reload(true);
  };

  const openModal = (id) => {
    setOpened(true);

    fetch(`http://localhost:3000/shops/${id}`)
      .then((resposne) => resposne.json())
      .then((res) => setModalinfo(res));
  };
  return (
    <>
      <TableContainer
        sx={{ position: "relative" }}
        component={Paper}
        style={{
          maxHeight: "inherit",
          minHeight: "23.7rem",
          width: "85%",
          marginTop: "1.5rem",
          marginLeft: "auto",
          marginRight: "auto",
          marginBottom: "2rem",
          borderRadius: "20px",
        }}
      >
        {pageInfo.length !== 0 ? (
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
              {pageInfo.map((d) => (
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
                      <VisibilityIcon />
                    </Button>
                    <Button
                      color="error"
                      variant="contained"
                      onClick={() => handleDelete(d.id, d.no, d.name)}
                    >
                      <DeleteIcon />
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
        ) : (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "360px",
            }}
          >
            <ReportGmailerrorredIcon fontSize="large" />
            <Typography sx={{ marginLeft: "5px" }}>
              Click 'ADD' to create your shop.
            </Typography>
          </Box>
        )}
        {pageInfo.length >= 5 || shops.length >= 5 ? (
          <>
            <Divider />
            <TablePagination
              component="div"
              count={shops.length}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={rowsPerPage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </>
        ) : null}
      </TableContainer>
    </>
  );
};
export default DisplayTable;
