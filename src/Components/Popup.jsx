import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { Button } from "@mui/material";
import Divider from "@mui/material/Divider";

function Popup({ openPopup, children, onClick }) {
 
  const messages = children.map((message) => {
    return (
      <>
        <DialogContentText sx={{}}>Human : {message["human"]}</DialogContentText>
        <br />
        <DialogContentText sx={{color:'	#4169e1'}}>Bot : {message["bot"]}</DialogContentText>
        <br />
      </>
    );
  });

  return (
    <Dialog open={openPopup} scroll="paper">
      <DialogTitle>Chat History</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>{messages}</DialogContentText>
      </DialogContent>
      <Divider />
      <DialogActions>
        <Button onClick={onClick}>close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Popup;
