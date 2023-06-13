import { Grid, Paper } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CancelIcon from "@mui/icons-material/Cancel";

function Orders() {
  return (
    <div>
      <Grid
        container
        gap={5}
        flexWrap={"nowrap"}
        sx={{ marginLeft: "3rem", marginTop: "3%", width: "55vw" }}
      >
        <Grid>
          <Paper
            elevation={1}
            sx={{
              width: "24.5vw",
              height: "18vh",
              borderRadius: "12px",
             
            }}
          >
            <Grid container direction={"column"}>
              <Grid>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 80,
                    height: 80,
                    marginLeft: "35px",
                    position: "absolute",
                    marginTop: "30px",
                    backgroundColor: " rgba(28, 28, 28)",
                  }}
                >
                  <LocalShippingIcon
                    style={{ fontSize: "3vw" }}
                  />
                </Avatar>
              </Grid>
              <Grid sx={{ paddingLeft: "8.5rem", marginTop: "2rem" }}>
                <h2 style={{ fontSize: "1.6rem", color: "GrayText" }}>
                  Total Delivery
                </h2>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    paddingLeft: "1.2rem",
                    paddingTop: "5px",
                  }}
                >
                  {" "}
                  567
                </h2>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid>
          <Paper sx={{ width: "24.5vw", height: "18vh", borderRadius: "12px" }}>
            <Grid container direction={"column"}>
              <Grid>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 80,
                    height: 80,
                    marginLeft: "35px",
                    position: "absolute",
                    marginTop: "30px",
                    backgroundColor: "rgba(28, 28, 28)",
                    // backgroundColor:'#FFFFE0'
                  }}
                >
                  <AccessTimeFilledIcon
                    style={{  fontSize: "3vw" }}
                  />
                </Avatar>
              </Grid>
              <Grid sx={{ paddingLeft: "8.5rem", marginTop: "2rem" }}>
                <h2 style={{ fontSize: "1.6rem", color: "GrayText" }}>
                  Total Pending
                </h2>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    paddingLeft: "1.2rem",
                    paddingTop: "5px",
                  }}
                >
                  {" "}
                  56
                </h2>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid>
          <Paper sx={{ width: "24.5vw", height: "18vh", borderRadius: "12px" }}>
            <Grid container direction={"column"}>
              <Grid>
                <Avatar
                  alt="Remy Sharp"
                  src="/static/images/avatar/1.jpg"
                  sx={{
                    width: 80,
                    height: 80,
                    marginLeft: "35px",
                    position: "absolute",
                    marginTop: "30px",
                    backgroundColor: "rgba(28, 28, 28)",
                  }}
                >
                  <CancelIcon style={{ fontSize: "3vw" }} />
                </Avatar>
              </Grid>
              <Grid sx={{ paddingLeft: "8.5rem", marginTop: "2rem" }}>
                <h2 style={{ fontSize: "1.6rem", color: "GrayText" }}>
                  Total cancellation
                </h2>
                <h2
                  style={{
                    fontSize: "2.5rem",
                    paddingLeft: "1.2rem",
                    paddingTop: "5px",
                  }}
                >
                  {" "}
                  5
                </h2>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Orders;
