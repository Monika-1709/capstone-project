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
import { Grid } from "@mui/material";
import Orders from "../Components/Orders";
import dayjs from "dayjs";

const columns = [
  {
    id: "name",
    label: "Order by",
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

function createData(OrderBy, OrderId, OrderDate, Amount, Status) {
  return { OrderBy, OrderId, OrderDate, Amount, Status };
}

const rows = [
  createData("Ram", 1, "2023-01-03", 4500, "Delivered"),
  createData("Shyam", 2, "2023-04-04", 5000, "Delivered"),
  createData("Gita", 3, "2023-01-05", 6000, "Pending"),
  createData("Hari", 4, "2022-07-02", 7000, "Delivered"),
  createData("Sita", 5, "2023-01-07", 8000, "Delivered"),
  createData("Ravi", 6, "2023-01-01", 9000, "Cancelled"),
  createData("Priya", 7, "2023-03-09", 10000, "Delivered"),
  createData("Amit", 8, "2022-01-10", 11000, "Delivered"),
  createData("Mohan", 9, "2023-01-11", 12000, "Delivered"),
  createData("Krishna", 10, "2022-04-12", 13000, "Delivered"),
  createData("Radha", 11, "2023-01-13", 14000, "Delivered"),
  createData("Vikas", 12, "2023-01-14", 15000, "Delivered"),
  createData("Deepak", 13, "2023-01-15", 16000, "Delivered"),
  createData("Kavita", 14, "2022-09-16", 17000, "Delivered"),
  createData("Aarti", 15, "2022-01-17", 18000, "Delivered"),
  createData("Neha", 16, "2023-01-18", 19000, "Delivered"),
  createData("Rohan", 17, "2023-08-19", 20000, "Delivered"),
  createData("Raj", 18, "2023-01-20", 21000, "Delivered"),
  createData("Aman", 19, "2023-01-21", 22000, "Delivered"),
  createData("Sangeeta", 20, "2023-01-22", 23000, "Delivered"),
  createData("Ram", 1, "2023-01-03", 4500, "Delivered"),
  createData("Shyam", 2, "2023-07-04", 5000, "Delivered"),
  createData("Gita", 3, "2023-01-05", 6000, "Pending"),
  createData("Hari", 4, "2023-01-06", 7000, "Delivered"),
  createData("Sita", 5, "2023-01-07", 8000, "Delivered"),
  createData("Ravi", 6, "2023-01-08", 9000, "Cancelled"),
  createData("Priya", 7, "2023-01-09", 10000, "Delivered"),
  createData("Amit", 8, "2023-01-10", 11000, "Delivered"),
  createData("Mohan", 9, "2022-01-11", 12000, "Delivered"),
  createData("Krishna", 10, "2023-01-12", 13000, "Delivered"),
  createData("Radha", 11, "2023-01-13", 14000, "Delivered"),
  createData("Vikas", 12, "2023-01-14", 15000, "Delivered"),
  createData("Deepak", 13, "2023-01-15", 16000, "Delivered"),
  createData("Kavita", 14, "2023-09-16", 17000, "Delivered"),
  createData("Aarti", 15, "2023-01-17", 18000, "Delivered"),
  createData("Neha", 16, "2023-01-18", 19000, "Delivered"),
  createData("Rohan", 17, "2023-01-19", 20000, "Delivered"),
  createData("Raj", 18, "2023-01-20", 21000, "Delivered"),
  createData("Aman", 19, "2023-01-21", 22000, "Delivered"),
  createData("Sangeeta", 20, "2023-01-22", 23000, "Delivered"),
];
export default function OrderHistory() {
  const [range, setRange] = React.useState([
    dayjs("2022-01-17"),
    dayjs("2023-04-21"),
  ]);
  const startDate = range[0];
  const endDate = range[1];
  const filteredRows = rows.filter((row) => {
    const rowDate = new Date(row.OrderDate);
    return rowDate >= new Date(startDate) && rowDate <= new Date(endDate);
  });
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
    <div>
      <Grid
        container
        span={2}
        sx={{
          marginLeft: "5%",
          marginTop: "3%",
          flexWrap: "nowrap",
          width: "70vw",
        }}
      >
        <Grid>
          <h2 style={{ fontSize: "30px", width: "45vw" }}>Order History</h2>
        </Grid>
        <Grid>
          <Paper sx={{ width: "20vw", marginLeft: "67%" }}>
            <DateRangePicker range={range} setRange={setRange} />
          </Paper>
        </Grid>
      </Grid>
      <Orders />
      <h2 style={{ paddingLeft: "5%", marginTop: "3%" }}>All Oders</h2>
      <Paper
        sx={{
          width: "80vw",
          overflow: "hidden",
          marginLeft: "62px",
          marginTop: "35px",
        }}
      >
        <TableContainer sx={{ height: "50vh" }}>
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
              {filteredRows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.OrderBy}
                    >
                      <TableCell align="left">{row.OrderBy}</TableCell>
                      <TableCell align="left">{row.OrderId}</TableCell>
                      <TableCell>{row.OrderDate}</TableCell>
                      <TableCell>{row.Amount}</TableCell>
                      <TableCell>{row.Status}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 100]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </div>
  );
}
