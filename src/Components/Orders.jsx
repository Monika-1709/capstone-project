import { Box, Paper } from "@mui/material";
import React from "react";
import Avatar from "@mui/material/Avatar";

function Orders(props) {
  const { icon, heading, totalOrder } = props;
  

  return (
    <div>
      <Paper sx={{ width: "18vw", height: "8rem" }}>
        <Box sx={{ display: "flex" }}>
          <Avatar
            sx={{
              width: 65,
              height: 65,
              margin: "1.5rem 0 0 1rem",
              backgroundColor: "rgb(35, 33, 33)",
            }}
          >
            {icon}
          </Avatar>
          <Box sx={{ margin: "1.5rem 0 0 2rem" }}>
            <h4>{heading}</h4>
            <h2>{totalOrder}</h2>
          </Box>
        </Box>
      </Paper>
    </div>
  );
}

export default Orders;
