import * as React from "react";
//import { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
//import Paper from "@mui/material/Paper";

// import TablePagination from "@mui/material/TablePagination";
// import { TableVirtuoso } from "react-virtuoso";
import axios from "axios";

const baseURL="http://localhost:8082/order/recent";

const columns = [
  {
    width: 100,
    label: "User ID",
  },
  {
    width: 100,
    label: "Order ID",
  
  },
  {
    width: 100,
    label: "Date",
   
  },
  {
    width: 100,
    label: "Cost (Rs)",
    
    numeric: true,
  },
  {
    width: 100,
    label: "Status",
    numeric: false,
  },
];


export default function RecentOrders() {
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);

  // const [page, setPage] = React.useState(0);
  // const [rowsPerPage, setRowsPerPage] = React.useState(25);

  // const handleChangePage = (event, newPage) => {
  //   setPage(newPage);
  // };

  // const handleChangeRowsPerPage = (event) => {
  //   setRowsPerPage(+event.target.value);
  //   setPage(0);
  // };
  return(
    <div>
    <TableContainer sx={{ height: "27vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{ fontWeight: "bold" }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
              {post
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        tabIndex={-1}
                        key={row.orderId}
                      >
                        <TableCell align="left">{row.userId}</TableCell>
                        <TableCell align="left">{row.orderId}</TableCell>
                        <TableCell>{row.orderDate}</TableCell>
                        <TableCell>{row.total}</TableCell>
                        <TableCell>{row.status}</TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          {/* <TablePagination
            component="div"
            count={post.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          /> */}
          </div>
  );
}