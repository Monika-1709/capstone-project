import * as React from "react";
import { useState } from "react";
import Paper from "@mui/material/Paper";
import TableSortLabel from "@mui/material/TableSortLabel";
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
// import { fetchConversation } from "../Services/backend-api";
import axios from "axios";

const columns = [
  { id: "name", label: "Conversations Id", minWidth: 175, value: 'conversationId'},
  { id: "phone", label: "Phone Number", minWidth: 170,value: 'phoneNumber' },
  { id: "sdate", label: "Start Date", minWidth: 170, value: 'startDate' },
  { id: "stime", label: "Start Time", minWidth: 170, value: 'startTime' },
  { id: "edate", label: "End Date", minWidth: 170 , value: 'endDate'},
  { id: "etime", label: "End Time", minWidth: 170 ,value: 'endTime'},
  { id: "chat", label: "Conversations", minWidth: 170 },
];

export default function ColumnGroupingTable() {
  const [post, setConversations] = React.useState([]);
  const [post1, setPost] = React.useState([]);
  const [sortItem, setSortItem]= useState('');
  const [tableHeaderField, setTableHeaderField]= useState('')
  // const [page1, setPagebale] = React.useState([]);
  // const rows=post.content;

  React.useEffect(() => {
    // fetchConversation(setConversations, setPost);
  }, []);

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
  function handleHeaderClick(value){
    if(sortItem==='DESC'){
      setSortItem('ASC');
    }else{
      setSortItem('DESC');
    }
    setTableHeaderField(value);
    console.log(value, sortItem);
  }

  // const renderSortArrow = (columnId) => {
  //   if (sorting.column === columnId) {
  //     return sorting.direction === "asc" ? " ▲" : " ▼";
  //   }
  //   return null;
  // };
  const [range, setRange] = React.useState([
    dayjs("2023-01-17"),
    dayjs("2023-09-21"),
  ]);
  // const startdate = range[0];
  // const endDate = range[1];

  // const filteredRows = post.filter((row) => {
  //   const rowDate = new Date(row.startDate);
  //   return rowDate >= new Date(startdate) && rowDate <= new Date(endDate);
  // });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value,10));
    setPage(0);
  };
  function tableSize() {
    // const axios = require("axios");

    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8083/conversation?page=${page}&size=${rowsPerPage}&fieldName=${tableHeaderField}&sort=${sortItem}`,
      headers: {
        "Content-Type": "application/json",
      },
    };
    console.log(config.url)

    axios
      .request(config)
      .then((response) => {
        console.log(response.data);
        setPost(response.data);
        setConversations(response.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    tableSize();
    console.log("rowperPage", rowsPerPage)
  }, [sortItem, tableHeaderField, page, rowsPerPage]);
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-evenly", margin: "1rem" }}
    >
      <Paper sx={{ width: "100%", marginTop: "1rem" }}>
        <Box sx={{ display: "flex" }}>
          <h2
            style={{
              margin: "0.5rem 0 1rem 1rem",
              flexGrow: 1,
              fontFamily: "serif",
            }}
          >
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
                    sx={{ fontWeight: "bold", color: "rgb(123, 128, 154)" }}
                    onClick={()=>{handleHeaderClick(column.value)}}
                  >
                    {column.id === "chat" ? (
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
              {/* {filteredRows.length > 0 ? (
                filteredRows
                  .sort((a, b) => {
                    if (sorting.column === "name") {
                      return (
                        a.conversationId.localeCompare(b.conversationId) *
                        (sorting.direction === "asc" ? 1 : -1)
                      );
                    }
                    if (sorting.column === "phone") {
                      return (
                        a.phoneNumber.localeCompare(b.phoneNumber) *
                        (sorting.direction === "asc" ? 1 : -1)
                      );
                    }
                    if (sorting.column === "sdate") {
                      return (
                        new Date(a.startDate).getTime() -
                        new Date(b.startDate).getTime() *
                          (sorting.direction === "asc" ? 1 : -1)
                      );
                    }
                    if (sorting.column === "edate") {
                      return (
                        new Date(a.endDate).getTime() -
                        new Date(b.endDate).getTime() *
                          (sorting.direction === "asc" ? 1 : -1)
                      );
                    }
                    if (sorting.column === "stime") {
                      return (
                        a.startTime.localeCompare(b.startTime) *
                        (sorting.direction === "asc" ? 1 : -1)
                      );
                    }
                    if (sorting.column === "etime") {
                      return (
                        a.endTime.localeCompare(b.endTime) *
                        (sorting.direction === "asc" ? 1 : -1)
                      );
                    }

                    return 0;
                  })

                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <CustomTableRow
                      key={index}
                      name={row.conversationId}
                      phone={row.phoneNumber}
                      sdate={row.startDate}
                      edate={row.endDate}
                      stime={row.startTime}
                      etime={row.endTime}
                      chat={row.messages}
                      sorting={sorting}
                      handleSort={handleSort}
                      // renderSortArrow={renderSortArrow}
                    />
                  ))
              ) : (
                <p>Loading...</p>
              )} */}
              {
                post.map((row,index)=>(
                  <CustomTableRow
                      key={index}
                      name={row.conversationId}
                      phone={row.phoneNumber}
                      sdate={row.startDate}
                      edate={row.endDate}
                      stime={row.startTime}
                      etime={row.endTime}
                      chat={row.messages}
                      sorting={sorting}
                      handleSort={handleSort}
                      // renderSortArrow={renderSortArrow}
                    />
                ))
              }
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          // rowsPerPageOptions={[5,10, 25, 100]}
          component="div"
          count={post1.totalElements}
          // count={post.size}
          // count={post1.totalElements}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
