import SupervisorAccountIcon from "@mui/icons-material/SupervisorAccount";
import { Grid } from "@mui/material";
import React from "react";
import Paper from "@mui/material/Paper";

import Divider from "@mui/material/Divider";

function UsersData() {
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
              backgroundColor: " #4169e1",
              borderRadius: "10px",
            }}
          >
            <SupervisorAccountIcon
              style={{
                color: "white",
                fontSize: 35,
                marginLeft: "14px",
                marginTop: "12px",
              }}
            />
          </Paper>
        </Grid>
        <Grid
          sx={{
            width: "10vw",
            marginInlineStart: "3rem",
            marginTop: "1.5rem",
          }}
        >
          <p style={{ color: "gray" }}>Total Users</p>
          <h2 style={{ marginTop: "5px" }}>120k</h2>
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
          <p style={{ color: "	#32cd32" }}>+5%</p> &nbsp;&nbsp;
          <p style={{ color: "gray" }}>than last week</p>
        </Grid>

        <p style={{ marginLeft: "2rem", color: "gray" }}>20 January,2023</p>
      </Grid>
    </div>
  );
}

export default UsersData;
