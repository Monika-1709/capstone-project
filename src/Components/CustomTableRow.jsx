// import { Button, TableCell, TableRow, TableSortLabel } from "@mui/material";
// import { useState } from "react";
// import Popup from "./Popup";

// export default function CustomTableRow({
//   name,
//   phone,
//   sdate,
//   edate,
//   stime,
//   etime,
//   chat,
// }) {
//   const [popup, setPopup] = useState(false);

//   function handleOpen() {
//     setPopup(!popup);
//   }

//   function handleClose() {
//     setPopup(!popup);
//   }
//   // const rowContainerStyle = {
//   //   height: "2rem", // Adjust the desired height here
//   // };

//   // const rowStyle = {
//   //   height: "100%",
//   // };

//   return (
//     <TableRow hover role="checkbox" tabIndex={-1} key={name}>
//       <TableCell align="left">{name}</TableCell>

//       <TableCell>{phone}</TableCell>
//       <TableCell>{sdate}</TableCell>
//       <TableCell>{stime}</TableCell>
//       <TableCell>{sdate}</TableCell>
//       <TableCell>{etime}</TableCell>
//       <TableCell>
//         <Button
//           variant="contained"
//           onClick={handleOpen}
//           sx={{ width: "7rem", height: "3.5vh" }}
//         >
//           View
//         </Button>
//         <Popup openPopup={popup} setOpenPopup={setPopup} onClick={handleClose}>
//           {chat}
//         </Popup>
//       </TableCell>
//     </TableRow>
//   );
// }

import { Button, TableCell, TableRow, TableSortLabel } from "@mui/material";
import { useState } from "react";
import Popup from "./Popup";

export default function CustomTableRow({
  name,
  phone,
  sdate,
  edate,
  stime,
  etime,
  chat,
  sorting,
  handleSort,
  renderSortArrow,
}) {
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
      <TableCell>{sdate}</TableCell>
      <TableCell>{stime}</TableCell>
      <TableCell>{sdate}</TableCell>
      <TableCell>{etime}</TableCell>
      <TableCell>
        <Button
          variant="contained"
          onClick={handleOpen}
          sx={{ width: "7rem", height: "3.5vh" }}
        >
          View
        </Button>
        <Popup openPopup={popup} setOpenPopup={setPopup} onClick={handleClose}>
          {chat}
        </Popup>
      </TableCell>
    </TableRow>
  );
}
