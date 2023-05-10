import React from "react";
import Avatar from "@mui/material/Avatar";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";

const rows = [
  {
    name: "Towdur Rahman",
    spending: "$200",
    reviews: 14,
    rating: 4,
    date: "2022-01-21",
    comment:
      "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much.",
  },
  {
    name: "John Doe",
    spending: "$100",
    reviews: 7,
    rating: 3.5,
    date: "2022-03-11",
    comment:
      "The hotel was decent for the price. The staff was friendly and accommodating. However, the room was a bit small and outdated. Overall, it was a satisfactory stay.",
  },
  {
    name: "Jane Smith",
    spending: "$50",
    reviews: 2,
    rating: 5,
    date: "2022-01-01",
    comment:
      "This hotel exceeded my expectations. The room was spacious and modern, with great amenities. The staff was friendly and went above and beyond to make my stay comfortable. Highly recommend!",
  },
  {
    name: "Towdur Rai",
    spending: "$200",
    reviews: 14,
    rating: 4,
    date: "12022-02-15",
    comment:
      "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much.",
  },
  {
    name: "John Doe",
    spending: "$100",
    reviews: 7,
    rating: 3.5,
    date: "2022-12-01",
    comment:
      "The hotel was decent for the price. The staff was friendly and accommodating. However, the room was a bit small and outdated. Overall, it was a satisfactory stay.",
  },
  {
    name: "Jane Smith",
    spending: "$50",
    reviews: 2,
    rating: 5,
    date: "2022-03-11",
    comment:
      "This hotel exceeded my expectations. The room was spacious and modern, with great amenities. The staff was friendly and went above and beyond to make my stay comfortable. Highly recommend!",
  },
  {
    name: "Towdur Rahman",
    spending: "$200",
    reviews: 14,
    rating: 4,
    date: "2022-09-21",
    comment:
      "The staff was great. The receptionists were very helpful and answered all our questions. The room was clean and bright, and the room service was always on time. Will be coming back! Thank you so much.",
  },
  {
    name: "John Doe",
    spending: "$100",
    reviews: 7,
    rating: 3.5,
    date: "2022-11-21",
    comment:
      "The hotel was decent for the price. The staff was friendly and accommodating. However, the room was a bit small and outdated. Overall, it was a satisfactory stay.",
  },
  {
    name: "Monica goel",
    spending: "$150",
    reviews: 4,
    rating: 5,
    date: "2022-04-11",
    comment:
      "This hotel exceeded my expectations. The room was spacious and modern, with great amenities. The staff was friendly and went above and beyond to make my stay comfortable. Highly recommend!",
  },
];

function Comments({ startDate, endDate }) {
      const filteredRows = rows.filter((row) => {
        const rowDate = new Date(row.date);
        return rowDate >= new Date(startDate) && rowDate <= new Date(endDate);
      });

  return (
    <>
      {filteredRows.map((row, index) => (
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
                backgroundColor: "pink",
              }}
              variant="rounded"
            />
          </Grid>
          <Grid sx={{ width: "350px", gap: "5px" }}>
            <h2>{row.name}</h2>
            <p style={{ paddingTop: "8px" }}>Total spend: {row.spending}</p>
            <p style={{ paddingTop: "3px" }}>Total Reviews: {row.reviews}</p>
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
                  value={row.rating}
                  precision={0.5}
                  size="small"
                  readOnly
                />
              </Grid>
              <Grid sx={{ paddingLeft: "15px" }}>{row.date}</Grid>
            </Grid>
            <p style={{ paddingTop: "10px" }}>{row.comment}</p>
          </Grid>
        </Grid>
      ))}
    </>
  );
}

export default Comments;
