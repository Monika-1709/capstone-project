import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
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
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import HourglassFullIcon from '@mui/icons-material/HourglassFull';
import {
  fetchDelivery,
  fetchPending,
  fetchCancellation,
  fetchProcessing,
  fetchData,
} from "../Services/Api";


const columns = [
  {
    id: "name",
    label: "User ID",
    minWidth: 170,
  },
  {
    id: "code",
    label: "Order ID",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
  },
  {
    id: "amount",
    label: "Cost (Rs)",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

export default function OrderHistory() {
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

  const [rows, setrows] = React.useState([]);

  React.useEffect(() => {
    fetchData(setrows);
  }, []);

  const icon1 = <LocalShippingIcon style={{ fontSize: "2.2rem" }} />;
  const heading = "Total Delivery";
  const backgroundColor1 = "#4169e1";

  const icon2 = <AccessTimeFilledIcon style={{ fontSize: "2.2rem" }} />;
  const heading2 = "Total Pending";
  const backgroundColor2 = "#228b22";

  const icon3 = <CancelIcon style={{ fontSize: "2.2rem" }} />;
  const heading3 = "Total Concellation";
  const backgroundColor3 = "#ff1493";

  const icon4 = (
    <HourglassFullIcon style={{ fontSize: "2.2rem", color: "white" }} />
  );
  const heading4 = "Total Processing";
  const backgroundColor4 = "	#ffa500";

  const [range, setRange] = React.useState([
    dayjs("2022-01-17"),
    dayjs("2023-04-21"),
  ]);
  // const startDate = range[0];
  // const endDate = range[1];
  // const filteredRows = rows.filter((row) => {
  //   const rowDate = dayjs(row.orderDate);
  //   return rowDate.isBetween(startDate, endDate, null, "[]");
  // });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

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
          <h2 style={{ flexGrow: 1, margin: "1.2rem 0 0 1rem" }}>
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
          <h2 style={{ paddingLeft: "1rem", marginTop: "1rem" }}>All Oders</h2>
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
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
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
          <TablePagination
            rowsPerPageOptions={[25, 100]}
            component="div"
            count={rows.length}
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
