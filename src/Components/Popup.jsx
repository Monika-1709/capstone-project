import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  DialogContentText,
} from "@mui/material";
import { Button } from "@mui/material";


function Popup(props) {
  const { openPopup, children, onClick } = props;
  
  return (
      <Dialog open={openPopup}>
        <DialogTitle>Chat History</DialogTitle>
        <DialogContent>
          <DialogContentText>{children}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={onClick}>close</Button>
        </DialogActions>
      </Dialog>
  );
}

export default Popup;
