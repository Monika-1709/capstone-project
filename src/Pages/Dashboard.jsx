import * as React from "react";
import Grid from "@mui/material/Grid";
import ReactEcharts from "echarts-for-react";
import { Box, Paper } from "@mui/material";
import RecentOrders from "../Components/RecentOrders";
import Profile from "../Components/Profile";
import Data1 from "../Components/OrderData";
import SalesData from "../Components/SalesData";
import UsersData from "../Components/UsersData";

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
        show: true,
        length: 20,
      },
      data: [
        { value: 1048, name: "Delivered" },
        { value: 735, name: "Dispatch" },
        { value: 580, name: "Pending" },
        { value: 484, name: "Cancelled" },
      ],
    },
  ],
};

const op = {
  tooltip: {
    trigger: "axis",
  },
  legend: {
    data: ["Search Engine"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  toolGrid: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: "category",
    boundaryGap: false,
    data: ["Mon", "tuesday", "Wed", "Thu", "Fri", "Sat", "Sun"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      name: "Visitors",
      type: "line",
      stack: "Total",
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
};
const option2 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      barWidth: "55%",
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
};

export default function Dashboard() {
  return (
    <Box>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{ height: "9vh", width: "100%" }}
      >
        <Grid container spacing={2} flexWrap="nowrap">
          <p
            style={{
              marginLeft: "3rem",
              paddingTop: "35px",
              fontWeight: "bold",
              fontSize: "27px",
              width: "67vw",
            }}
          >
            Welcome to Dashboard
          </p>

          <Profile />
          <Grid
            sx={{ marginTop: "2.5rem", marginLeft: "8px", fontWeight: "bold" }}
          >
            <p>Sajib Suprio</p>
          </Grid>
        </Grid>
      </Paper>

      <Grid
        container
        spacing={3}
        sx={{ paddingLeft: "50px", gap: "26px", paddingTop: "48px" }}
        flexWrap="nowrap"
      >
        <Paper
          elevation={3}
          sx={{ width: "26.5vw", height: "16.5vh", borderRadius: "5px" }}
        >
          <Data1 />
        </Paper>

        <Paper
          elevation={3}
          sx={{ width: "26.5vw", height: "16.5vh", borderRadius: "5px" }}
        >
          <UsersData />
        </Paper>

        <Paper
          elevation={3}
          sx={{ width: "26.5vw", height: "16.5vh", borderRadius: "5px" }}
        >
          <SalesData />
        </Paper>
      </Grid>

      <Grid container spacing={2} flexWrap="nowrap">
        <Grid sx={{ paddingTop: "37px", marginLeft: "40px" }}>
          <Paper sx={{ width: "48.5vw", height: "34vh" }} elevation={3}>
            <h2 style={{ paddingTop: "2%", paddingLeft: "20px" }}>
              Recent Visitors
            </h2>
            <ReactEcharts
              option={op}
              style={{ height: "30vh", width: "45vw", marginTop: "-15px" }}
            />
          </Paper>
        </Grid>

        <Grid sx={{ marginLeft: "28px", paddingTop: "37px" }}>
          <Paper sx={{ width: "32.5vw", height: "34vh" }} elevation={3}>
            <h2 style={{ paddingTop: "3%", paddingLeft: "15px" }}>
              {" "}
              Order Status
            </h2>
            <ReactEcharts
              option={option}
              style={{ marginTop: "-20px", marginLeft: "3rem" }}
            />
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={2} flexWrap="nowrap">
        <Grid sx={{ paddingTop: "2.5rem", paddingLeft: "40px" }}>
          <Paper sx={{ width: "48.5vw", height: "29.5vh" }} elevation={3}>
            <h2 style={{ paddingTop: "2%", paddingLeft: "15px" }}>
              Recent Orders
            </h2>
            <RecentOrders />
          </Paper>
        </Grid>
        <Grid sx={{ paddingTop: "2.5rem", paddingLeft: "28px" }}>
          <Paper sx={{ width: "32.5vw", height: "29.5vh" }} elevation={3}>
            <h2 style={{ paddingTop: "2%", paddingLeft: "15px" }}>
              Total Reviews
            </h2>
            <ReactEcharts option={option2} style={{ height: "25vh" }} />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
}
