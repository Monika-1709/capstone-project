// import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ReactEcharts from "echarts-for-react";
import { Box } from "@mui/material";
import React, { useState } from "react";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";

const op = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Amount"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Amount",
      type: "line",
      stack: "Total",
      data: [10050, 11932, 10501, 15500, 11290, 13330, 12320],
    },
  ],
};

const columns = [
  {
    id: "code",
    label: "TrannsactionId",
    minWidth: 170,
  },

  {
    id: "date",
    label: "Date",
    minWidth: 170,
  },
  {
    id: "amount",
    label: "Amount(Rs)",
    minWidth: 170,
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

function createData(TrannsactionId, Date, Amount, Status) {
  return { TrannsactionId, Date, Amount, Status };
}

const rows = [
  createData("SBI10388", "January 4,2023", 450, "Successful"),
  createData("SBI10389", "January 1,2023", 1000, "Successful"),
  createData("SBI10390", "February 3,2022", 600, "Pending"),
  createData("SBI10391", "February 5,2022", 700, "Successful"),
  createData("SBI10392", "February 5,2022", 900, "Successful"),
  createData("SBI10393", "February 6,2022", 900, "Failed"),
  createData("SBI10394", "February 6,2022", 1000, "Successful"),
  createData("SBI10395", "February 2,2022", 200, "Successful"),
  createData("SBI10396", "February 8,2022", 2000, "Successful"),
  createData("SBI10397", "March 1,2022", 1000, "Successful"),
  createData("SBI10398", "March 12,2022", 1000, "Successful"),
  createData("SBI10399", "March 11,2022", 1500, "Successful"),
  createData("SBI10400", "March 13,2022", 600, "Successful"),
  createData("SBI10401", "March 16,2022", 1000, "Successful"),
  createData("SBI10402", "March 17,2022", 800, "Successful"),
  createData("SBI10403", "March 21,2022", 900, "Successful"),
  createData("SBI10404", "March 22,2022", 1000, "Successful"),
  createData("SBI10405", "March 25,2022", 1000, "Successful"),
  createData("SBI10406", "March 28,2022", 2000, "Successful"),
  createData("SBI10407", "March 30,2022", 2000, "Successful"),
];

export default function Tra() {
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      orient: "vertical",
      left: "left",
      top: "middle",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["45%", "80%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: 1048, name: "successful" },
          { value: 735, name: "Pending" },

          { value: 484, name: "failed" },
        ],
      },
    ],
  };

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [statusFilter, setStatusFilter] = useState("");

  const filteredRows2 = rows.filter((row) =>
    statusFilter === "" ? true : row.Status === statusFilter
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
        <Paper sx={{ width: "45%", height: "40vh" }}>
          <h2
            style={{
              paddingLeft: "2rem",
              paddingTop: "1rem",
              fontFamily: "serif",
            }}
          >
            Status
          </h2>
          <ReactEcharts option={option} />
        </Paper>

        <Paper sx={{ width: "45%", height: "40vh" }}>
          <h2
            style={{
              paddingLeft: "2rem",
              paddingTop: "1rem",
              fontFamily: "serif",
            }}
          >
            Amount
          </h2>
          <ReactEcharts
            option={op}
            style={{ height: "280px", width: "550px", paddingLeft: "2rem" }}
          />
        </Paper>
      </Box>
      <Paper
        sx={{
          width: "94%",
          marginLeft: "2.5rem",
          marginTop: "2rem",
          height: "51vh",
        }}
      >
        <Box sx={{ display: "flex" }}>
          <h2
            style={{
              paddingLeft: "1rem",
              paddingTop: "1rem",
              paddingBottom: "1rem",
              fontFamily: "serif",
              flexGrow: 1,
            }}
          >
            Transaction History
          </h2>
          <FormControl sx={{ m: 0.5, minWidth: 120 ,paddingTop:'0.5rem'}}>
            <InputLabel htmlFor="status-filter">Status</InputLabel>
            <Select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status Filter"
              sx={{height:'2.5rem'}}
              inputProps={{
                name: "status-filter",
                id: "status-filter",
              }}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Successful">Successful</MenuItem>
              <MenuItem value="Pending">Pending</MenuItem>
              <MenuItem value="Failed">Failed</MenuItem>
              {/* <MenuItem value="Processing">Processing</MenuItem>
              <MenuItem value="Dispatch">Dispatch</MenuItem> */}
            </Select>
          </FormControl>
        </Box>
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{
                      fontWeight: "bold",
                      color: "gray",

                      fontFamily: "sans-serif",
                    }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows2
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  let statusColor = "";
                  let statusTextColor = "";

                  if (row.Status === "Successful") {
                    statusColor = "	#c7f1c7";
                    statusTextColor = "	#006400";
                  } else if (row.Status === "Pending") {
                    statusColor = "#fafad2";
                    statusTextColor = "	#ffa500";
                  } else if (row.Status === "Failed") {
                    statusColor = "	#ffe4e1";
                    statusTextColor = "#FF0000";
                  }
                  return (
                    <TableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.TrannsactionId}
                    >
                      <TableCell align="left">{row.TrannsactionId}</TableCell>
                      <TableCell>{row.Date}</TableCell>
                      <TableCell>{row.Amount}</TableCell>
                      <TableCell
                        sx={{
                          borderRadius: "4px",
                          // padding: 0,
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
                          {row.Status}
                        </span>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
