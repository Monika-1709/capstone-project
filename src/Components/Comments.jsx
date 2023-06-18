import React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";

const baseURL="http://localhost:8082/feedback";

function Comments({ startDate, endDate }) {

  const [post, setPost] = React.useState([]);
  React.useEffect(() => {
    axios.get(baseURL).then((response) => {
      console.log(response.data);
      setPost(response.data);
    });
  }, []);
  // const filteredRows = Post.filter((row) => {
  //   const rowDate = new Date(row.date);
  //   return rowDate >= new Date(startDate) && rowDate <= new Date(endDate);
  // });

  return (
    <>
      {post.map((row, index) => (
        <Grid
          container
          spacing={3}
          flexWrap="nowrap"
          sx={{ paddingLeft: "28px", marginTop: "3%" }}
        >
          <Grid sx={{ width: "120px", paddingLeft: "45px", paddingTop: "5px" }}>
            <Avatar
              alt={row.name}
              src="/static/images/avatar/2.jpg"
              sx={{
                width: 68,
                height: 68,
                color: "black",
                backgroundColor: "lightblue",
              }}
              variant="rounded"
            />
          </Grid>
          <Grid sx={{ width: "350px", gap: "5px" }}>
            <h2>{row.userId}</h2>
            <p style={{ paddingTop: "8px", color: "gray" }}>
              
              Total spend: INR {Math.floor(Math.random()*500)+1000}
            </p>
            <p style={{ paddingTop: "3px", color: "gray" }}>
              Total Reviews: 1
            </p>
          </Grid>
          <Grid sx={{ width: "33vw", height: "15vh", paddingLeft: "10px" }}>
            <Grid
              container
              spacing={2}
              sx={{ paddingTop: "18px", paddingLeft: "15px" }}
            >
              <Grid>
                <Rating
                  name="rating-line"
                  value={Math.floor(Math.random()*2)+4}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </Grid>
              <Grid sx={{ paddingLeft: "15px" }}>{row.feedBackDate}</Grid>
            </Grid>
            <p style={{ paddingTop: "10px" }}>{row.feedback}</p>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default Comments;
