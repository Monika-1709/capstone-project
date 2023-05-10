import React from "react";
import dayjs from "dayjs";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Paper } from "@mui/material";
import DateRangePicker from "../Components/DateRangePicker";
import Comments from "../Components/Comments";
//import { DateRangePicker as DateRange } from '@mui/x-date-pickers-pro/DateRangePicker';

function Reviews() {
  const [range, setRange] = React.useState([
    dayjs("2022-01-17"),
    dayjs("2022-04-21"),
  ]);
  const startDate = range[0];
  const endDate = range[1];

  return (
    <div>
      <Grid container spacing={2} sx={{ paddingTop: "5%" }}>
        <Grid xs={6} md={8} sx={{ paddingLeft: "10%" }}>
          <h1>Reviews</h1>
        </Grid>
        <Grid xs={6} md={4} sx={{ marginLeft: "-8%" }}>
          <Paper sx={{ width: "25vw" }}>
            <DateRangePicker range={range} setRange={setRange} />
          </Paper>
        </Grid>
      </Grid>
      <Grid container spacing={3} sx={{ paddingTop: "25px" }}>
        <Grid xs={4} sx={{ paddingLeft: "10%" }}>
          <Paper
            elevation={0}
            sx={{
              "&": {
                paddingLeft: "15px",
                width: "320px",
                height: "120px",
                paddingTop: "10px",
              },
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <h4>Total Reviews</h4>
            <h2 style={{ paddingTop: "20px", fontSize: "30px" }}>10.0k</h2>
            <p style={{ paddingTop: "3%", color: "gray" }}>
              Growth in reviews in this year
            </p>
          </Paper>
        </Grid>
        <Grid xs={4} sx={{ paddingLeft: "65px" }}>
          <Paper
            elevation={0}
            sx={{
              "&": {
                paddingLeft: "15px",
                width: "320px",
                height: "120px",
                paddingTop: "10px",
              },
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <h4>Average Rating</h4>
            <div
              style={{
                whiteSpace: "nowrap",
                fontWeight: "bold",
                fontSize: "30px",
                paddingTop: "20px",
              }}
            >
              4.0 &nbsp;&nbsp;
              <Rating
                name="rating"
                defaultValue={4}
                precision={0.5}
                size="small"
                readOnly
              />
            </div>
            <p style={{ paddingTop: "3%", color: "gray" }}>
              Average rating on this year
            </p>
          </Paper>
        </Grid>
        <Grid xs={4} sx={{ paddingLeft: "0px" }}>
          <Paper
            elevation={0}
            sx={{
              "&": {
                paddingLeft: "15px",
                width: "320px",
                height: "120px",
                paddingTop: "10px",
              },
              "&:hover": {
                transform: "scale(1.1)",
              },
            }}
          >
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              5
              <Rating
                name="rating-line"
                value={5}
                precision={0.5}
                size="small"
                readOnly
                sx={{ paddingLeft: "10px" }}
              />
              &nbsp;&nbsp;10.0k
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              4
              <Rating
                name="rating-line"
                value={4}
                precision={0.5}
                size="small"
                readOnly
                sx={{ paddingLeft: "10px" }}
              />
              &nbsp;&nbsp;1.0k
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              3
              <Rating
                name="rating-line"
                value={3}
                precision={0.5}
                size="small"
                readOnly
                sx={{ paddingLeft: "10px" }}
              />
              &nbsp;&nbsp;500
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              2
              <Rating
                name="rating-line"
                value={2}
                precision={0.5}
                size="small"
                readOnly
                sx={{ paddingLeft: "10px" }}
              />
              &nbsp;&nbsp;20
            </div>
            <div style={{ fontSize: "18px", fontWeight: "bold" }}>
              {" "}
              1
              <Rating
                name="rating-line"
                value={1}
                precision={0.5}
                size="small"
                readOnly
                sx={{ paddingLeft: "10px" }}
              />
              &nbsp;&nbsp;OK
            </div>
          </Paper>
        </Grid>
      </Grid>
      <Box sx={{ paddingLeft: "9%", paddingTop: "30px" }}>
        <Paper
          elevation={0}
          sx={{
            paddingLeft: "15px",
            width: "72vw",
            height: "60vh",
            overflowY: "auto",
          }}
          variant="outlined"
        >
          <Comments startDate={startDate} endDate={endDate} />
        </Paper>
      </Box>
    </div>
  );
}

export default Reviews;
