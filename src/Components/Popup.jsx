import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
  Typography,
} from "@mui/material";
import { Button } from "@mui/material";
// import AiFillRedditCircle from "react-icon"
import { Box } from "@mui/material";
import Divider from "@mui/material/Divider";
import RedditIcon from "@mui/icons-material/Reddit";
import { Avatar } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function Popup({ openPopup, children, onClick }) {
  const messages = children.map((message) => {
    return (
      <>
        {/* <DialogContentText sx={{ display: "flex" }}>
          <Typography variant="body1" fontWeight="bold">
            Human :
          </Typography>
          {message["human"]}
        </DialogContentText>
        <br />
        <DialogContentText sx={{ display: "flex" }}>
          <Typography variant="body1" fontWeight="bold">
            Bot:
          </Typography>
          {message["bot"]}
        </DialogContentText>
        <br /> */}
        {/* <DialogContentText sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ color: "#FF4081", marginRight: "0.5rem" }}
          >
            Human:
          </Typography>{" "}
          <Typography variant="body1" sx={{ color: "#FF4081" }}>
            {message["human"]}
          </Typography>
        </DialogContentText>

        <br />

        <DialogContentText sx={{ display: "flex" }}>
          <Typography
            variant="body1"
            fontWeight="bold"
            sx={{ color: "#3F51B5", marginRight: "0.5rem" }}
          >
            Bot:
          </Typography>{" "}
          <Typography
            variant="body1"
            sx={{ color: "#3F51B5"}}
          >
            {message["bot"]}
          </Typography>
          
        </DialogContentText>
        <br /> */}
        <Box style={{ display: "flex", flexDirection: "column" }}>
          <Box
            style={{
              display: "flex",
              alignItems: "flex-start",
              marginBottom: "0.5rem",
            }}
          >
            <Box
              style={{
                display: "flex",
                // alignItems: "center",
                alignSelf: "flex-end",

                marginRight: "0.5rem",
              }}
            >
              <Avatar />
            </Box>
            <Box
              style={{
                backgroundColor: "#E0E0E0",
                // borderRadius: "8px",
                borderRadius: "15px 15px 15px 0px",
                padding: "0.5rem",
              }}
            >
              <Typography variant="body1">{message["human"]}</Typography>
            </Box>
          </Box>
          <br />
          <Box
            style={{
              display: "flex",
              alignItems: "flex-end",
              marginBottom: "0.5rem",
            }}
          >
            <Box style={{ flex: 1 }}></Box>
            <Box
              style={{
                backgroundColor: "#DCF8C6",
                borderRadius: "15px 15px 0px 15px",
                padding: "0.5rem",
                marginLeft: "0.5rem",
              }}
            >
              <Typography variant="body1">{message["bot"]}</Typography>
            </Box>
            <Box
              style={{
                display: "flex",
                marginLeft: "0.5rem",
              }}
            >
              <Avatar
                style={{
                  backgroundColor: "#DCF8C6",
                  color: "	#008000",
                  fontSize: "30px",
                }}
              >
                <RedditIcon />
              </Avatar>
            </Box>
          </Box>
          <br />
        </Box>
      </>
    );
  });

  return (
    <Dialog open={openPopup} scroll="paper">
      <DialogTitle
        sx={{
          fontFamily: "serif",
          fontWeight: "bold",
          fontSize: 25,
          color: "	#dc143c",
        }}
      >
        Conversations
      </DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>{messages}</DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button variant="contained" onClick={onClick}>
          close
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Popup;
