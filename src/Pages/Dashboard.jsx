import * as React from "react";
import {
  fetchDelivery,
  fetchVisitors,
  fetchPending,
  fetchCancellation,
  fetchProcessing,
  fetchDispatch,
  fetchreviews,
  fetchOrder,
  fetchTotalsales,
  fetchTotalUser,
  fetchData1,
  fetchDate,
} from "../Services/backend-api";
import ReactEcharts from "echarts-for-react";
import { Box, Paper } from "@mui/material";
import RecentOrders from "../Components/RecentOrders";
import Data from "../Components/Data";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

export default function Dashboard() {
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    fetchData1(setPost);
  }, []);

  const [visitor, setVisitor] = React.useState([]);

  React.useEffect(() => {
    fetchVisitors(setVisitor);
  }, []);

  const [delivered, setdelivered] = React.useState([]);

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

  const [totalDispatch, settotalDispatch] = React.useState([]);
  React.useEffect(() => {
    fetchDispatch(settotalDispatch);
  }, []);

  const [review, setreviews] = React.useState([]);
  React.useEffect(() => {
    fetchreviews(setreviews);
  }, []);

  const [totalOrder, settotalOrder] = React.useState(null);
  React.useEffect(() => {
    fetchOrder(settotalOrder);
  }, []);

  const [totalsales, settotalsales] = React.useState(null);
  React.useEffect(() => {
    fetchTotalsales(settotalsales);
  }, []);

  const [totalUser, settotalUser] = React.useState(null);
  React.useEffect(() => {
    fetchTotalUser(settotalUser);
  }, []);

  const [date, setDate] = React.useState(null);
  React.useEffect(() => {
    fetchDate(setDate);
  }, []);

  const reversedVisitor = [...visitor].reverse();

  const op = {
    tooltip: {
      trigger: "axis",
    },
    legend: {
      data: ["Visitors"],
    },
    grid: {
      left: "3%",
      right: "4%",
      bottom: "3%",
      containLabel: true,
    },
    xAxis: {
      type: "category",
      boundaryGap: true,
      data:reversedVisitor.map((item) => item._id),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Visitors",
        type: "line",
        stack: "Total",
        data:reversedVisitor.map((item) => item.count),
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
        data: review.map((item) => item._id),
        axisTick: {
          alignWithLabel: true,
        },
        axisLabel: {
          interval: 0,
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
        data: review.map((item) => item.count),
      },
    ],
  };

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
          { value: delivered, name: "Delivered" },
          { value: totalDispatch, name: "Dispatch" },
          { value: totalProcessing, name: "Processing" },
          { value: totalPending, name: "Pending" },
          { value: totalCancellation, name: "Cancelled" },
        ],
      },
    ],
  };
  const icon1 = (
    <ShoppingCartIcon
      style={{
        color: "white",
        fontSize: 35,
        marginLeft: "14px",
        marginTop: "12px",
      }}
    />
  );
  const backgroundColor1 = "#228b22";
  const heading1 = "Total Orders";
  const percentage1 = "+50%";

  const icon2 = (
    <SupervisorAccountIcon
      style={{
        color: "white",
        fontSize: 35,
        marginLeft: "14px",
        marginTop: "12px",
      }}
    />
  );
  const backgroundColor2 = "#4169e1";
  const heading2 = "Total Users";
  const percentage2 = "+5%";

  const icon3 = (
    <CurrencyRupeeIcon
      style={{
        color: "white",
        fontSize: 35,
        marginLeft: "14px",
        marginTop: "12px",
      }}
    />
  );
  const backgroundColor3 = "#ff1493";
  const heading3 = "Total Sales";
  const percentage3 = "+10%";

  return (
    <Box sx={{}}>
      <Paper
        elevation={0}
        variant="outlined"
        sx={{ height: "4.6rem", width: "100%" }}
      >
        <Box sx={{ display: "flex" }}>
          <p
            style={{
              marginLeft: "3rem",
              fontFamily: "sans-serif",
              paddingTop: "1rem",
              // flexGrow: 1,
              fontSize: "22px",
            }}
          >
            Welcome to Dashboard! <span>&#128588;</span>
          </p>

          {/* <Profile /> */}
        </Box>
      </Paper>

      <Box sx={{ margin: "1rem" }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <Paper
            elevation={3}
            sx={{ width: "26vw", height: "16.5vh", borderRadius: "5px" }}
          >
            <Data
              icon={icon1}
              backgroundColor={backgroundColor1}
              heading={heading1}
              percentage={percentage1}
              number={totalOrder}
              date={date}
            />
          </Paper>

          <Paper
            elevation={3}
            sx={{ width: "26vw", height: "16.5vh", borderRadius: "5px" }}
          >
            <Data
              icon={icon2}
              backgroundColor={backgroundColor2}
              heading={heading2}
              percentage={percentage2}
              number={totalUser}
              date={date}
            />
          </Paper>
          <Paper
            elevation={3}
            sx={{ width: "26vw", height: "16.5vh", borderRadius: "5px" }}
          >
            <Data
              icon={icon3}
              backgroundColor={backgroundColor3}
              heading={heading3}
              percentage={percentage3}
              number={totalsales}
              date={date}
            />
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <Paper sx={{ width: "47.5vw", height: "34vh" }} elevation={3}>
            <h2
              style={{
                paddingTop: "2%",
                paddingLeft: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Recent Visitors
            </h2>
            <ReactEcharts
              option={op}
              style={{ height: "27vh", width: "45vw" }}
            />
          </Paper>
          <Paper sx={{ width: "32.5vw", height: "34vh" }} elevation={3}>
            <h2
              style={{
                paddingTop: "1rem",
                paddingLeft: "1rem",
                fontFamily: "sans-serif",
              }}
            >
              Order Status
            </h2>
            <ReactEcharts
              option={option}
              style={{ marginTop: "-2rem", marginLeft: "3rem" }}
            />
          </Paper>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "1rem",
            marginTop: "1.5rem",
          }}
        >
          <Paper sx={{ width: "47.5vw", height: "30.5vh" }} elevation={3}>
            <h2
              style={{
                paddingTop: "1%",
                paddingLeft: "15px",
                fontFamily: "sans-serif",
              }}
            >
              Recent Orders
            </h2>
            <RecentOrders post={post} />
          </Paper>

          <Paper sx={{ width: "32.5vw", height: "29.5vh" }} elevation={3}>
            <h2
              style={{
                paddingTop: "2%",
                paddingLeft: "15px",
                fontFamily: "sans-serif",
              }}
            >
              Recent Reviews
            </h2>
            <ReactEcharts option={option2} style={{ height: "25vh" }} />
          </Paper>
        </Box>
      </Box>
    </Box>
  );
}
