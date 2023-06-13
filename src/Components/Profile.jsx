import React, { useState } from "react";
import { Avatar, Box, Button, Popover, Typography } from "@mui/material";

function ProfileAvatar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const popoverId = open ? "profile-popover" : undefined;

  return (
    <>
      <Button onClick={handleClick}>
        <Avatar
          style={{
            marginLeft: "3.5rem",
            marginTop: "1.4rem",
            width: 50,
            height: 50,
            backgroundColor: "#4682b4",
          }}
        >
          S
        </Avatar>
      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          style={{
            padding: "1rem",
            width:'15vw'
          }}
        >
          <Avatar
            style={{
              marginLeft: "3.5rem",
              width: 50,
              height: 50,
              backgroundColor: "#4682b4",
            }}
          >
            S
          </Avatar>

          <Typography variant="body1">Name: Sajib Suprio</Typography>
          <Typography variant="body1">Email: sajib12@gmail.com</Typography>
        </Box>
      </Popover>
    </>
  );
}

export default ProfileAvatar;
