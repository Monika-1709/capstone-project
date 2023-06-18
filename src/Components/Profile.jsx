import React, { useState } from "react";
import { Avatar, Box, Button, Popover, Typography } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Link } from "react-router-dom";


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
            marginLeft: "1rem",
            width: 50,
            height: 50,
            backgroundColor: "#4682b4",
          }}
        >
          S
        </Avatar>

        <p style={{  marginLeft: "8px", fontWeight: "bold",color:'black' }}>
          Sajib Suprio
        </p>
        <ExpandMoreIcon style={{color:'black'}}/>

      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <Box
          style={{
            padding: "1rem",
            width: "15vw",
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

          <Typography variant="body1"> Sajib Suprio</Typography>
          <Typography variant="body1"> sajib12@gmail.com</Typography>
          <Link href='#'>Sign Out</Link>
        </Box>
      </Popover>
    </>
  );
}

export default ProfileAvatar;
