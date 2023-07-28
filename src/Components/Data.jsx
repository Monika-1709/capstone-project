import { Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";

function OrderData(props) {
  const { icon, backgroundColor, heading, percentage, number ,date} = props;
  
  return (
    <div>
      <Grid
        container
        spacing={2}
        sx={{ width: "25vw", height: "12vh", marginLeft: "1.5rem" }}
        flexWrap="nowrap"
      >
        <Grid sx={{ width: "12vw" }}>
          <Paper
            elevation={3}
            style={{
              display: "inline-block",
              width: 70,
              height: 65,
              padding: "4px",
              backgroundColor: backgroundColor,
              borderRadius: "10px",
            }}
          >
            {icon}
          </Paper>
        </Grid>
        <Grid
          sx={{
            width: "10vw",
            marginInlineStart: "3rem",
            marginTop: "1.5rem",
          }}
        >
          <p style={{ color: "gray" }}>{heading}</p>
          <h2 style={{ marginTop: "5px" }}>{number}</h2>
        </Grid>
      </Grid>
      <Grid>
        <Divider />
      </Grid>
      <Grid
        container
        spacing={2}
        flexWrap="nowrap"
        sx={{ width: "25vw", marginLeft: "1rem", marginTop: "1rem" }}
      >
        <Grid
          container
          spacing={2}
          sx={{ width: "14vw", marginLeft: "0px", marginTop: "1.4px" }}
        >
          <p style={{ color: "#32cd32" }}>{percentage}</p> &nbsp;&nbsp;
          <p style={{ color: "gray" }}>than last week</p>
        </Grid>
        <p style={{ marginLeft: "2rem", color: "gray" }}>{date}</p>
      </Grid>
    </div>
  );
}

export default OrderData;
