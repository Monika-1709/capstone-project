import { Button, TableCell, TableRow } from "@mui/material";
import { useState } from "react";
import Popup from "./Popup";

export default function CustomTableRow({ name, phone,date, stime, etime, chat, }) {
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
      <TableCell>{phone}</TableCell>
      <TableCell>{date}</TableCell>
      <TableCell>{stime}</TableCell>
      <TableCell>{etime}</TableCell>
      <TableCell sx={{display: 'flex', justifyContent: 'center'}}>
        <Button variant="contained" onClick={handleOpen}>
       View 
        </Button>
        <Popup
          openPopup={popup}
          setOpenPopup={setPopup}
          onClick={handleClose}
        >{chat}</Popup>
      </TableCell>
    </TableRow>
  );
}
