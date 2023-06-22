import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";


const columns = [
  {
    width: 100,
    label: "User ID",
  },
  {
    width: 100,
    label: "Order ID",
  },
  {
    width: 100,
    label: "Date",
  },
  {
    width: 100,
    label: "Cost (Rs)",

    numeric: true,
  },
  {
    width: 100,
    label: "Status",
    numeric: false,
  },
];

export default function RecentOrders(props) {
  const {post}=props;

  return (
    <div>
      <TableContainer sx={{ height: "25vh" }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                  sx={{ fontWeight: "bold" }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {post
              .map((row) => {
                return (
                  <TableRow
                    hover
                    role="checkbox"
                    tabIndex={-1}
                    key={row.orderId}
                  >
                    <TableCell align="left">{row.userId}</TableCell>
                    <TableCell align="left">{row.orderId}</TableCell>
                    <TableCell>{row.orderDate}</TableCell>
                    <TableCell>{row.total}</TableCell>
                    <TableCell>{row.status}</TableCell>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
