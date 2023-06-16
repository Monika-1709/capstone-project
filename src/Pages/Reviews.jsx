import React from "react";
import dayjs from "dayjs";
import Rating from "@mui/material/Rating";
import Grid from "@mui/material/Unstable_Grid2";
import { Box, Paper } from "@mui/material";
import DateRangePicker from "../Components/DateRangePicker";
import Comments from "../Components/Comments";
import Sidebar from "../SideBar/Sidebar";

function Reviews() {
  const [range, setRange] = React.useState([
    dayjs("2022-01-17"),
    dayjs("2022-04-21"),
  ]);
  const startDate = range[0];
  const endDate = range[1];

  return (
    <Box>
      <Sidebar>
        <Paper
          elevation={1}
          sx={{
            width: "72vw",
            height: "9vh",
            marginLeft: "7.5rem",
            marginTop: "2rem",
          }}
        >
          <Grid container spacing={2} sx={{ width: "72vw" }}>
            <h1
              style={{ width: "35vw", marginLeft: "1rem", marginTop: "1.2rem" }}
            >
              Reviews
            </h1>
            <Grid sx={{ marginLeft: "6rem" }}>
              <DateRangePicker range={range} setRange={setRange} />
            </Grid>
          </Grid>
        </Paper>

        <Grid container spacing={3} sx={{ paddingTop: "25px" }}>
          <Grid xs={4} sx={{ paddingLeft: "10%" }}>
            <Paper
              elevation={1}
              sx={{
                paddingLeft: "15px",
                width: "320px",
                height: "120px",
                paddingTop: "10px",
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
              elevation={1}
              sx={{
                paddingLeft: "15px",
                width: "320px",
                height: "120px",
                paddingTop: "10px",
              }}
            >
              <h4>Average Rating</h4>
              <Box
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
              </Box>
              <p style={{ paddingTop: "3%", color: "gray" }}>
                Average rating on this year
              </p>
            </Paper>
          </Grid>
          <Grid xs={4} sx={{ paddingLeft: "0px" }}>
            <Paper
              elevation={1}
              sx={{
                paddingLeft: "15px",
                width: "320px",
                height: "120px",
                paddingTop: "10px",
              }}
            >
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
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
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
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
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
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
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
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
              </Box>
              <Box style={{ fontSize: "18px", fontWeight: "bold" }}>
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
              </Box>
            </Paper>
          </Grid>
        </Grid>
        <Box sx={{ paddingLeft: "9%", paddingTop: "30px" }}>
          <Paper
            elevation={1}
            sx={{
              paddingLeft: "15px",
              width: "72vw",
              height: "60vh",
              overflowY: "auto",
            }}
          >
            <Comments startDate={startDate} endDate={endDate} />
          </Paper>
        </Box>
      </Sidebar>
    </Box>
  );
}

export default Reviews;
