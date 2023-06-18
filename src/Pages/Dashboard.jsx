import * as React from "react";
import ReactEcharts from "echarts-for-react";
import { Box, Paper } from "@mui/material";
import RecentOrders from "../Components/RecentOrders";
import Profile from "../Components/Profile";
import Data from "../Components/Data";
import axios from "axios";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";

const  baseURL="http://localhost:8082/visitor/daily-count";
const baseURL1 = "http://localhost:8082/count/delivered";
const baseURL2 = "http://localhost:8082/count/processing";
const baseURL3 = "http://localhost:8082/count/pending";
const baseURL4 = "http://localhost:8082/count/canceled";
const  baseURL5="http://localhost:8082/dispatch";
const  baseURL6="http://localhost:8082/feedback/daily-count";
const baseURL7 = "http://localhost:8080/count/orders";
const baseURL8="http://localhost:8080/count/users";
const baseURL9 = "http://localhost:8080/count/sales/amount";





export default function Dashboard() {



  const [visitor, setVisitor] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setVisitor(response.data);
    });
  }, []);
  
  const [delivered, setdelivered] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL1).then((response) => {
      console.log(response.data);
      setdelivered(response.data);
    });
  }, []);

  const [totalPending, settotalPending] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL3).then((response) => {
      console.log(response.data);
      settotalPending(response.data);
    });
  }, []);

  const [totalCancellation, settotalCancellation] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL4).then((response) => {
      console.log(response.data);
      settotalCancellation(response.data);
    });
  }, []);

  const [totalProcessing, settotalProcessing] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL2).then((response) => {
      console.log(response.data);
      settotalProcessing(response.data);
    });
  }, []);

  const [totalDispatch ,settotalDispatch ] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL5).then((response) => {
      console.log(response.data);
      settotalDispatch (response.data);
    });
  }, []);

  const [review ,setreviews] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL6).then((response) => {
      console.log(response.data);
      setreviews (response.data);
    });
  }, []);
  
  const [totalOrder, settotalOrder]=React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL7).then((response) => {
      settotalOrder(response.data);
    });
  }, []);

  const [totalsales, settotalsales] =React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL9).then((response) => {
      settotalsales(response.data);
    });
  }, []);

  const [totalUser, settotalUser]=React.useState(null);

  React.useEffect(() => {
    axios.get(baseURL8).then((response) => {
      settotalUser(response.data);
    });
  }, []);


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
     data: visitor.map((item) => item._id),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        name: "Visitors",
        type: "line",
        stack: "Total",
        data: visitor.map((item) => item.count),
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
        data:  review.map((item) => item._id),
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
        data:  review.map((item) => item.count),
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
  const icon1= <ShoppingCartIcon
  style={{
    color: "white",
    fontSize: 35,
    marginLeft: "14px",
    marginTop: "12px",}}  />;
  const backgroundColor1='#228b22';
  const heading1='Total Orders';
  const percentage1='+50%';
  

  const icon2= <SupervisorAccountIcon
  style={{
    color: "white",
    fontSize: 35,
    marginLeft: "14px",
    marginTop: "12px",}}  />;
  const backgroundColor2='#4169e1';
  const heading2='Total User';
  const percentage2='+5%';
  

  const icon3= <CurrencyRupeeIcon
  style={{
    color: "white",
    fontSize: 35,
    marginLeft: "14px",
    marginTop: "12px",}}  />;
  const backgroundColor3='#ff1493';
  const heading3='Total Sales';
  const percentage3='+10%';
  

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
                flexGrow: 1,
                fontSize: "22px",
              }}
            >
              Welcome to Dashboard! <span>&#128588;</span>
            </p>

            <Profile />
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
              <Data   icon={icon1}backgroundColor={backgroundColor1} heading={heading1} percentage={percentage1} number={totalOrder}/>
            </Paper>

            <Paper
              elevation={3}
              sx={{ width: "26vw", height: "16.5vh", borderRadius: "5px" }}
            >
              <Data   icon={icon2}backgroundColor={backgroundColor2} heading={heading2} percentage={percentage2} number={totalUser}/>
            </Paper>
            <Paper
              elevation={3}
              sx={{ width: "26vw", height: "16.5vh", borderRadius: "5px" }}
            >
              <Data   icon={icon3}backgroundColor={backgroundColor3} heading={heading3} percentage={percentage3} number={totalsales}/>
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
              <h2 style={{ paddingTop: "2%", paddingLeft: "20px" }}>
                Recent Visitors
              </h2>
              <ReactEcharts
                option={op}
                style={{ height: "27vh", width: "45vw" }}
              />
            </Paper>
            <Paper sx={{ width: "32.5vw", height: "34vh" }} elevation={3}>
              <h2 style={{ paddingTop: "1rem", paddingLeft: "1rem" }}>
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
            <Paper sx={{ width: "47.5vw", height: "29.5vh" }} elevation={3}>
              <h2 style={{ paddingTop: "2%", paddingLeft: "15px" }}>
                Recent Orders
              </h2>
              <RecentOrders />
            </Paper>

            <Paper sx={{ width: "32.5vw", height: "29.5vh" }} elevation={3}>
              <h2 style={{ paddingTop: "2%", paddingLeft: "15px" }}>
               Recent Reviews
              </h2>
              <ReactEcharts option={option2} style={{ height: "25vh" }} />
            </Paper>
          </Box>
        </Box>
      </Box>
 
  );
}