import React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import axios from "axios";

const baseURL="http://localhost:8082/feedback";



// const rows = [
//   {
//     name: "Towdur Rahman",
//     spending: "$200",
//     reviews: 14,
//     rating: 4,
//     date: "2022-01-21",
//     comment:
//       "I absolutely love shopping on this website! The products are high-quality, the prices are great, and the customer service is outstanding. Highly recommended!",
//   },
//   {
//     name: "John Doe",
//     spending: "$100",
//     reviews: 7,
//     rating: 3.5,
//     date: "2022-03-11",
//     comment:
//       "The shipping was incredibly fast, and the packaging was excellent. The product I ordered was exactly as described, and I'm very satisfied with my purchase.",
//   },
//   {
//     name: "Jane Smith",
//     spending: "$50",
//     reviews: 2,
//     rating: 5,
//     date: "2022-01-01",
//     comment:
//       "I had a small issue with my order, but the customer support team was quick to respond and resolve the problem. They were friendly and helpful throughout the process",
//   },
//   {
//     name: "Towdur Rai",
//     spending: "$200",
//     reviews: 14,
//     rating: 4,
//     date: "12022-02-15",
//     comment:
//       "The return process was hassle-free. I needed to exchange a product, and the team was responsive and efficient in handling my request. Great customer service!",
//   },
//   {
//     name: "John Doe",
//     spending: "$100",
//     reviews: 7,
//     rating: 4.5,
//     date: "2022-12-01",
//     comment:
//       "The checkout process is seamless, and I appreciate the various payment options available. It's convenient and secure, which gives me peace of mind while making a purchase.",
//   },
//   {
//     name: "Jane Smith",
//     spending: "$50",
//     reviews: 2,
//     rating: 5,
//     date: "2022-03-11",
//     comment:
//       "The shipping was incredibly fast, and the packaging was excellent. The product I ordered was exactly as described, and I'm very satisfied with my purchase.",
//   },
//   {
//     name: "Towdur Rahman",
//     spending: "$200",
//     reviews: 14,
//     rating: 4,
//     date: "2022-09-21",
//     comment:
//       "The delivery was prompt, and the tracking system kept me informed about the shipping progress. I received my order in perfect condition.",
//   },
//   {
//     name: "John Doe",
//     spending: "$100",
//     reviews: 7,
//     rating: 3.5,
//     date: "2022-11-21",
//     comment:
//       "The product quality exceeded my expectations. I've ordered multiple items from this website, and they have all been of excellent quality and durability.",
//   },
//   {
//     name: "Monica goel",
//     spending: "$150",
//     reviews: 4,
//     rating: 5,
//     date: "2022-04-11",
//     comment:
//       "I absolutely love shopping on this website! The products are high-quality, the prices are great, and the customer service is outstanding. Highly recommended!",
//   },
// ];

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
              {/* Total spend: {row.spending} */}
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
                  // value={row.rating}
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
