import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { Button } from "@mui/material";

function Popup({ openPopup, children, onClick }) {
 
  const messages = children.map((message) => {
    return (
      <>
        <DialogContentText>Human : {message["human"]}</DialogContentText>
        <br />
        <DialogContentText>Bot : {message["bot"]}</DialogContentText>
        <br />
      </>
    );
  });

  return (
    <Dialog open={openPopup} scroll="paper">
      <DialogTitle>Chat History</DialogTitle>
      <DialogContent>
        <DialogContentText>{messages}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClick}>close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Popup;
