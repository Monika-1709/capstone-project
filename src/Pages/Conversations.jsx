import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import CustomTableRow from "../Components/CustomTableRow";
import DateRangePicker from "../Components/DateRangePicker";

import dayjs from "dayjs";
import { Box } from "@mui/material";
import { fetchConversation } from "../Services/Api";

const columns = [
  { id: "name", label: "Conversations Id", minWidth: 170 },
  { id: "phone", label: "Phone Number", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "stime", label: "Start Time", minWidth: 170 },
  { id: "edate", label: "End Time", minWidth: 170 },
  { id: "chat", label: "Conversations", minWidth: 170 },
];

export default function ColumnGroupingTable() {
  const [post, setConversations] = React.useState([]);

  React.useEffect(() => {
    fetchConversation(setConversations);
  }, []);

  const [range, setRange] = React.useState([
    dayjs("2023-01-17"),
    dayjs("2023-09-21"),
  ]);
  const startdate = range[0];
  const endDate = range[1];

  const filteredRows = post.filter((row) => {
    const rowDate = new Date(row.startDate);
    return rowDate >= new Date(startdate) && rowDate <= new Date(endDate);
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
    <Box
      sx={{ display: "flex", justifyContent: "space-evenly", margin: "1rem" }}
    >
      <Paper sx={{ width: "80vw", marginTop: "1rem" }}>
        <Box sx={{ display: "flex" }}>
          <h2 style={{ margin: "0.5rem 0 1rem 1rem", flexGrow: 1 }}>
            Conversations History
          </h2>
          <DateRangePicker range={range} setRange={setRange} />
        </Box>
        <TableContainer sx={{ height: "80vh" }}>
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
              {filteredRows.length > 0 ? (
                filteredRows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <CustomTableRow
                      key={index}
                      name={row.conversationId}
                      phone={row.phoneNumber}
                      date={row.startDate}
                      stime={row.startTime}
                      etime={row.endTime}
                      chat={row.messages}
                    />
                  ))
              ) : (
                <p>Loading...</p>
              )}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[25, 100]}
          component="div"
          count={post.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
