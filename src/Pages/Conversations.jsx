import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CustomTableRow from "../Components/TableRow";

const columns = [
  { id: "name", label: "Customer Name", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "stime", label: "Start Time", minWidth: 170 },
  { id: "edate", label: "End Time", minWidth: 170 },
  { id: "chat", label: "Chat History", minWidth: 170 },
];

function createData(id, name, date, stime, etime, chat) {
  return { id, name, date, stime, etime, chat };
}

const rows = [
  createData(
    1,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "User: Hi, Bot : Hello "
  ),
  createData(
    2,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    3,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(4, "Ram", "201-01-12", "1:20am", "2:10am", "user:Hello , Bot :hi"),
  createData(5, "Shyam", "201-01-13", "2:30pm", "3:15pm", "User:Hello,Bot:Hi"),
  createData(
    6,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(7, "Ram", "201-01-12", "1:20am", "2:10am", "user:Hello , Bot :hi"),
  createData(
    8,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    9,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(
    10,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "user:Hello , Bot :hi"
  ),
  createData(
    11,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    12,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(
    13,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "user:Hello , Bot :hi"
  ),
  createData(
    14,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    15,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(
    16,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "user:Hello , Bot :hi"
  ),
  createData(
    17,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    18,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(
    19,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "user:Hello , Bot :hi"
  ),
  createData(
    20,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    21,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(
    22,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "user:Hello , Bot :hi"
  ),
  createData(
    23,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    24,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(
    25,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "user:Hello , Bot :hi"
  ),
  createData(
    26,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    27,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
  createData(
    28,
    "Ram",
    "201-01-12",
    "1:20am",
    "2:10am",
    "user:Hello , Bot :hi"
  ),
  createData(
    29,
    "Shyam",
    "201-01-13",
    "2:30pm",
    "3:15pm",
    "user:Hello , Bot :hi"
  ),
  createData(
    30,
    "Mohan",
    "201-01-14",
    "5:45am",
    "6:30am",
    "user:Hello , Bot :hi"
  ),
];

export default function ColumnGroupingTable() {
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
      <h1 style={{ marginLeft: "2rem", paddingTop: "1rem" }}>
        Conversations History
      </h1>
      <Paper sx={{ width: "80vw", marginLeft: "3rem", marginTop: "2rem" }}>
        <TableContainer sx={{ height: "84vh" }}>
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
                    <CustomTableRow
                      key={row.id}
                      name={row.name}
                      date={row.date}
                      stime={row.stime}
                      etime={row.etime}
                      chat={row.chat}
                    />
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
    </div>
  );
}
