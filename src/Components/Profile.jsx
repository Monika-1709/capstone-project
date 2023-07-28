import React, { useState } from "react";
import { Avatar, Box, Button, Popover, Typography } from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import LogoutIcon from "@mui/icons-material/Logout";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function ProfileAvatar(props) {
  const {isOpen,toggle}=props;
  const key = isOpen.toString() + toggle.toString();

  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

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
            
            marginLeft:isOpen? "0.5rem":"1px",
            width: 45,
            height: 45,
            backgroundColor: "		#ffa500",
          }}
        >
          S
        </Avatar>

        <Box sx={{display:'flex'}}>
        {isOpen ? (
            <h4
              style={{
                marginLeft: "8px",
                fontWeight: "bold",
                color: "white",
              }}
            >
              Sajib Suprio
            </h4>
          ) : null}
          {isOpen ? (
            <MoreVertIcon sx={{ color: "white" }} />
          ) : null}
        </Box>
      </Button>
      <Popover
        id={popoverId}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Box
          sx={{
            padding: "1rem",
            width: "14vw",
          }}
        >
          {/* <Avatar
            sx={{
              marginLeft: "5rem",
              width: 50,
              height: 50,
              backgroundColor: "#4682b4",
            }}
          >
            S
          </Avatar> */}

          <Typography variant="body1" style={{ paddingLeft: "2.5rem" }}>
            {" "}
            Sajib Suprio
          </Typography>
          <Typography variant="body1" style={{ paddingLeft: "2rem" }}>
            {" "}
            sajib12@gmail.com
          </Typography>
          <Button
            variant="contained"
            sx={{ marginLeft: "3.2rem", display: "flex" }}
          >
            <LogoutIcon onClick={() => navigate("/")} />
            {/* <Link
              onClick={() => navigate("/")}
              sx={{
                color: "rgba(194, 193, 193, 0.837)",
                fontSize: "19px",
                marginLeft: "1rem",
                textDecoration: "none",
                display: isOpen ? "block" : "none",
              }}
            > */}
            {/* Log Out */}
            {/* </Link> */}
          </Button>
          {/* <Button variant="contained" size="small" style={{color:'black',marginLeft:'4.5rem',marginTop:'1rem'}}>

          <Link href='#' >Sign Out</Link>
          </Button> */}
        </Box>
      </Popover>
    </>
  );
}

export default ProfileAvatar;
