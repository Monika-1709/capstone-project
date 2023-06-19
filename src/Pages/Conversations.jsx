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
import { myAxios } from "../Services/Helper";
import { Box } from "@mui/material";

const columns = [
  { id: "name", label: "Conversations Id", minWidth: 170 },
  { id: "phone", label: "Phone Number", minWidth: 170 },
  { id: "date", label: "Date", minWidth: 170 },
  { id: "stime", label: "Start Time", minWidth: 170 },
  { id: "edate", label: "End Time", minWidth: 170 },
  { id: "chat", label: "Conversations", minWidth: 170 },
];

export default function ColumnGroupingTable() {
  const [post, setPost] = React.useState([]);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await myAxios.get("/conversation");
        console.log(response);

        setPost(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

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
      sx={{ display: "flex", justifyContent: "space-evenly", margin: "2rem" }}
    >
      <Paper sx={{ width: "80vw" }}>
        <h2 style={{ margin: "1rem 0 0 1rem" }}>Conversations History</h2>
        <TableContainer sx={{ height: "81vh" }}>
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
              {post.length > 0 ? (
                post
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
