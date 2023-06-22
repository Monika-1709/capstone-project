import React from "react";
import dayjs from "dayjs";
import Rating from "@mui/material/Rating";
import { Box, Paper } from "@mui/material";
import DateRangePicker from "../Components/DateRangePicker";
import Comments from "../Components/Comments";
import { fetchComments } from "../Services/Api";

function Reviews() {
  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    fetchComments(setPost);
  }, []);

  const [range, setRange] = React.useState([
    dayjs("2022-01-17"),
    dayjs("2023-04-21"),
  ]);
  const startDate = range[0];
  const endDate = range[1];

  return (
    <Box sx={{ margin: "1rem" }}>
      <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
        <Paper
          elevation={1}
          sx={{
            display: "flex",
            width: "80vw",
            height: "9vh",
          }}
        >
          <h1 style={{ flexGrow: 1, margin: "1rem 0 0 1rem" }}>Reviews</h1>
          <DateRangePicker range={range} setRange={setRange} />
        </Paper>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: "1rem",
          marginTop: "2rem",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "25vw",
            height: "18vh",
            paddingTop: "1.2rem",
            paddingLeft: "1rem",
          }}
        >
          <h4>Total Reviews</h4>
          <h2 style={{ paddingTop: "1.2rem", fontSize: "30px" }}>10.0k</h2>
          <p style={{ paddingTop: "3%", color: "gray" }}>
            Growth in reviews in this year
          </p>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            width: "25vw",
            height: "18vh",
            paddingTop: "1.2rem",
            paddingLeft: "1rem",
          }}
        >
          <h4>Average Rating</h4>
          <Box
            style={{
              display: "flex",
              fontWeight: "bold",
              fontSize: "30px",
              paddingTop: "1.2rem",
            }}
          >
            4.0 &nbsp;
            <Rating
              name="rating"
              defaultValue={4}
              precision={0.5}
              size="medium"
              readOnly
              style={{ paddingTop: "5px" }}
            />
          </Box>
          <p style={{ paddingTop: "3%", color: "gray" }}>
            Average rating on this year
          </p>
        </Paper>
        <Paper
          elevation={1}
          sx={{
            width: "25vw",
            height: "18vh",
            paddingTop: "1rem",
            paddingLeft: "2rem",
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
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
          paddingTop: "30px",
        }}
      >
        <Paper
          elevation={1}
          sx={{
            width: "80vw",
            height: "60vh",
            overflowY: "auto",
          }}
        >
          <Comments startDate={startDate} endDate={endDate} post={post} />
        </Paper>
      </Box>
    </Box>
  );
}

export default Reviews;
