import { Grid, Paper } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import CancelIcon from '@mui/icons-material/Cancel';

function Orders() {
  return (
    <div>
      <Grid
        container
        gap={5}
        flexWrap={"nowrap"}
        sx={{ marginLeft: "5%", marginTop: "3%", width: "55vw" }}
      >
        <Grid>
          <Paper sx={{ width: "24.5vw", height: "15vh" }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 86, height: 86 }}
            >
              <LocalShippingIcon style={{ color: "black" }} />
            </Avatar>
          </Paper>
        </Grid>
        <Grid>
          <Paper sx={{ width: "24.5vw", height: "15vh" }}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 86, height: 86 }}
            >
              <AccessTimeIcon style={{ color: "black" }} />
            </Avatar>
          </Paper>
        </Grid>
        <Grid>
          <Paper sx={{ width: "24.5vw", height: "15vh" ,borderRadius:'12px'}}>
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{ width: 86, height: 86 }}
            >
              < CancelIcon style={{ color: "black" }} />
            </Avatar>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}

export default Orders;
