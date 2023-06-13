import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import ReactEcharts from "echarts-for-react";
import { Grid } from "@mui/material";
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

export default function Reviews() {
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
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: "#fff",
          borderWidth: 2,
        },
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
          { value: 1048, name: "Successful" },
          { value: 735, name: "Failed" },
          { value: 580, name: "Pending" },
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

  return (
    <div>
      <Grid
        container
        span={2}
        gap={5}
        sx={{ marginTop: "1rem", marginLeft: "2rem" }}
      >
        <Paper sx={{ width: "38vw", height: "42vh" }}>
          <h2 style={{ paddingLeft: "2rem", paddingTop: "1rem" }}>Status</h2>
          <ReactEcharts option={option} style={{}} />
        </Paper>

        <Paper sx={{ width: "42vw", height: "42vh", marginLeft: "-.5rem" }}>
          <h2 style={{ paddingLeft: "2rem", paddingTop: "1rem" }}>Amount</h2>
          <ReactEcharts
            option={op}
            style={{ height: "280px", width: "550px", paddingLeft: "2rem" }}
          />
        </Paper>
      </Grid>
      <Paper
        sx={{
          width: "95%",
          marginLeft: "2rem",
          marginTop: "2rem",
          height: "51vh",
        }}
      >
        <h2
          style={{
            paddingLeft: "1rem",
            paddingTop: "1rem",
            paddingBottom: "1rem",
          }}
        >
          Transaction History
        </h2>
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{ fontWeight: "bold", color: "gray" }}
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
                      key={row.TrannsactionId}
                    >
                      <TableCell align="left">{row.TrannsactionId}</TableCell>
                      <TableCell>{row.Date}</TableCell>
                      <TableCell>{row.Amount}</TableCell>
                      <TableCell>{row.Status}</TableCell>
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
    </div>
  );
}
