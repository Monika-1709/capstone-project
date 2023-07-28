// import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableSortLabel from "@mui/material/TableSortLabel";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import DateRangePicker from "../Components/DateRangePicker";
import { Box } from "@mui/material";
import Orders from "../Components/Orders";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import dayjs from "dayjs";
import CancelIcon from "@mui/icons-material/Cancel";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import HourglassFullIcon from "@mui/icons-material/HourglassFull";
import {
  fetchDelivery,
  fetchPending,
  fetchCancellation,
  fetchProcessing,
  fetchData,
} from "../Services/backend-api";
import axios from "axios";

const columns = [
  {
    id: "name",
    label: "User ID",
    minWidth: 170,
    value: "userId",
  },
  {
    id: "code",
    label: "Order ID",
    minWidth: 170,
    value: "orderId",
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
    value: "orderDate",
  },
  {
    id: "amount",
    label: "Cost (Rs)",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
    value: "total",
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

export default function OrderHistory() {
  // const [post, setdelivered] = React.useState([]);
  const [sortItem, setSortItem] = useState("");
  const [tableHeaderField, setTableHeaderField] = useState("");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [post1, setPost] = React.useState([]);
  const [orders, setOrders] = React.useState([]);

  const [post, setdelivered] = React.useState([]);
  React.useEffect(() => {
    fetchDelivery(setdelivered);
  }, []);

  const [totalPending, settotalPending] = React.useState([]);

  React.useEffect(() => {
    fetchPending(settotalPending);
  }, []);

  const [totalCancellation, settotalCancellation] = React.useState([]);

  React.useEffect(() => {
    fetchCancellation(settotalCancellation);
  }, []);

  const [totalProcessing, settotalProcessing] = React.useState([]);

  React.useEffect(() => {
    fetchProcessing(settotalProcessing);
  }, []);

  // const [rows, setrows] = React.useState([]);

  // React.useEffect(() => {
  //   fetchData(setrows);
  // }, []);

  const icon1 = <LocalShippingIcon style={{ fontSize: "2.2rem" }} />;
  const heading = "Delivered";
  const backgroundColor1 = "#4169e1";

  const icon2 = <AccessTimeFilledIcon style={{ fontSize: "2.2rem" }} />;
  const heading2 = "Pending";
  const backgroundColor2 = "#228b22";

  const icon3 = <CancelIcon style={{ fontSize: "2.2rem" }} />;
  const heading3 = "Concellation";
  const backgroundColor3 = "#ff1493";

  const icon4 = (
    <HourglassFullIcon style={{ fontSize: "2.2rem", color: "white" }} />
  );
  const heading4 = "Processing";
  const backgroundColor4 = "	#ffa500";

  const [range, setRange] = React.useState([
    dayjs("2022-01-17"),
    dayjs("2023-09-21"),
  ]);
  const [sorting, setSorting] = useState({
    column: "",
    direction: "asc",
  });

  const handleSort = (columnId) => {
    if (sorting.column === columnId) {
      setSorting({
        ...sorting,
        direction: sorting.direction === "desc" ? "asc" : "desc",
      });
    } else {
      setSorting({
        column: columnId,
        direction: "desc",
      });
    }
  };

  function handleHeaderClick(value) {
    if (sortItem === "DESC") {
      setSortItem("ASC");
    } else {
      setSortItem("DESC");
    }
    setTableHeaderField(value);
    console.log(value, sortItem);
  }
  function tableSize() {
    //  const axios = require('axios');

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8083/order?page=${page}&size=${rowsPerPage}&fieldName=${tableHeaderField}&sort=${sortItem}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
        setOrders(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    tableSize();
    console.log("rowperPage", rowsPerPage);
  }, [sortItem, tableHeaderField, page, rowsPerPage]);

  const startDate = range[0];
  const endDate = range[1];
  const filteredRows = orders.filter((row) => {
    const rowDate = dayjs(row.orderDate);
    return rowDate.isBetween(startDate, endDate, null, "[]");
  });

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [statusFilter, setStatusFilter] = useState("");

  const filteredRows2 = filteredRows.filter((row) =>
    statusFilter === "" ? true : row.status === statusFilter
  );

  return (
    <Box sx={{ margin: "1rem" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2rem",
        }}
      >
        <Paper sx={{ width: "80vw", height: "5rem", display: "flex" }}>
          <h2
            style={{
              flexGrow: 1,
              margin: "1.2rem 0 0 1rem",
              fontFamily: "serif",
            }}
          >
            Order History
          </h2>
          <DateRangePicker range={range} setRange={setRange} />
        </Paper>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          marginTop: "2rem",
          gap: 1,
        }}
      >
        <Orders
          icon={icon1}
          heading={heading}
          totalOrder={post}
          backgroundColor={backgroundColor1}
        />
        <Orders
          icon={icon2}
          heading={heading2}
          totalOrder={totalPending}
          backgroundColor={backgroundColor2}
        />
        <Orders
          icon={icon3}
          heading={heading3}
          totalOrder={totalCancellation}
          backgroundColor={backgroundColor3}
        />
        <Orders
          icon={icon4}
          heading={heading4}
          totalOrder={totalProcessing}
          backgroundColor={backgroundColor4}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          margin: "2rem",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "80vw",
            height: "60vh",
          }}
        >
          <Box sx={{ display: "flex" }}>
            <h2
              style={{
                paddingLeft: "1rem",
                marginTop: "1rem",
                fontFamily: "serif",
                flexGrow: 1,
              }}
            >
              Orders
            </h2>
            <FormControl sx={{ m: 0.5, minWidth: 120, paddingTop: "0.5rem" }}>
              <InputLabel htmlFor="status-filter">Status</InputLabel>
              <Select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                label="Status Filter"
                sx={{ height: "2.5rem" }}
                inputProps={{
                  name: "status-filter",
                  id: "status-filter",
                }}
              >
                <MenuItem value="">All</MenuItem>
                <MenuItem value="Delivered">Delivered</MenuItem>
                <MenuItem value="Pending">Pending</MenuItem>
                <MenuItem value="Cancelled">Cancelled</MenuItem>
                <MenuItem value="Processing">Processing</MenuItem>
                <MenuItem value="Dispatch">Dispatch</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TableContainer sx={{ height: "48vh" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                      sx={{ fontWeight: "bold" }}
                      onClick={() => {
                        handleHeaderClick(column.value);
                      }}
                    >
                      {column.id === "status" ? (
                        column.label
                      ) : (
                        <TableSortLabel
                          active={sorting.column === column.id}
                          direction={
                            sorting.column === column.id
                              ? sorting.direction
                              : "asc"
                          }
                          onClick={() => handleSort(column.id)}
                        >
                          {column.label}

                          {/* {renderSortArrow(column.id)} */}
                        </TableSortLabel>
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {
                  // .sort((a, b) => {
                  //   if (sorting.column === "name") {
                  //     return (
                  //       a.userId.localeCompare(b.userId) *
                  //       (sorting.direction === "asc" ? 1 : -1)
                  //     );
                  //   }
                  //   if (sorting.column === "code") {
                  //     return (
                  //       a.orderId.localeCompare(b.orderId) *
                  //       (sorting.direction === "asc" ? 1 : -1)
                  //     );
                  //   }
                  //   if (sorting.column === "date") {
                  //     return (
                  //       new Date(a.orderDate).getTime() -
                  //       new Date(b.orderDate).getTime() *
                  //         (sorting.direction === "asc" ? 1 : -1)
                  //     );
                  //   }

                  //   if (sorting.column === "amount") {
                  //     return (
                  //       (parseFloat(a.total) - parseFloat(b.total)) *
                  //       (sorting.direction === "asc" ? 1 : -1)
                  //     );
                  //   }

                  //   return 0;
                  // })
                  // .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  filteredRows2.map((row) => {
                    let statusColor = "";
                    let statusTextColor = "";

                    if (row.status === "Delivered") {
                      statusColor = "	#c7f1c7";
                      statusTextColor = "	#006400";
                    } else if (row.status === "Processing") {
                      statusColor = "		#e0ffff";
                      statusTextColor = "	#1e90ff";
                    } else if (row.status === "Cancelled") {
                      statusColor = "	#ffe4e1";
                      statusTextColor = "#FF0000";
                    } else if (row.status === "Dispatch") {
                      statusColor = "#fafad2";
                      statusTextColor = "		#ffa500";
                    } else if (row.status === "Pending") {
                      statusColor = "#ffa07a1A";
                      statusTextColor = "	#ff8c00";
                    }
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
                        <TableCell
                          sx={{
                            borderRadius: "4px",
                            padding: 0, 
                          }}
                        >
                          <span
                            style={{
                              backgroundColor: statusColor,
                              color: statusTextColor,
                              padding: "0.2rem",
                              borderRadius: "4px",
                              display: "inline-block",
                            }}
                          >
                            {row.status}
                          </span>
                        </TableCell>
                      </TableRow>
                    );
                  })
                }
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            component="div"
            count={post1.totalElements}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </Box>
  );
}
