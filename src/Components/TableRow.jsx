import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import Popup from "./Popup";

export default function CustomTableRow({ name, date, stime, etime, chat }) {
  const [popup, setPopup] = useState(false);

  function handleOpen() {
    setPopup(!popup);
  }

  function handleClose() {
    setPopup(!popup);
  }

  return (
    <TableRow hover role="checkbox" tabIndex={-1} key={name}>
      <TableCell align="left">{name}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{stime}</TableCell>
      <TableCell>{etime}</TableCell>
      <TableCell>
        <Button variant="outlined" onClick={handleOpen}>
          Open dialog
        </Button>
        <Popup
          openPopup={popup}
          setOpenPopup={setPopup}
          onClick={handleClose}
          children={chat}
        />
      </TableCell>
    </TableRow>
  );
}
