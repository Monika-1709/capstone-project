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
          sx={{
            padding: "1rem",
            width: "18vw",
            backgroundColor:'	#e6e6fa'
           
          }}
        >
          <Avatar
            sx={{
              marginLeft: "5rem",
              width: 50,
              height: 50,
              backgroundColor: "#4682b4",
            }}
          >
            S
          </Avatar>

          <Typography variant="body1" style={{paddingLeft:'4rem'}}> Sajib Suprio</Typography>
          <Typography variant="body1" style={{paddingLeft:'3rem'}}> sajib12@gmail.com</Typography>
          <Button variant="contained" size="small" style={{color:'black',marginLeft:'4.5rem',marginTop:'1rem'}}>

          <Link href='#' >Sign Out</Link>
          </Button>
        </Box>
      </Popover>
    </>
  );
}

export default ProfileAvatar;
