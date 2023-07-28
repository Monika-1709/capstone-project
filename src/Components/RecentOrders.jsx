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
  const { post } = props;

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
                  sx={{
                    // fontWeight: "bold",
                    fontSize:'25',
                    color: "gray",
                    // fontFamily: " Roboto, Helvetica, Arial, sans-serif",
                  }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {post.map((row) => {
              let statusColor = "";
              let statusTextColor = "";

              if (row.status === "Delivered") {
                statusColor = "	#c7f1c7";
                statusTextColor = "	#006400";
              } else if (row.status === "Processing") {
                statusColor = "		#e0ffff";
                statusTextColor = "	#1e90ff";
              } else if (row.status === "Cancelled") {
                statusColor = "	#ffe4e1";
                statusTextColor = "#FF0000";
              } else if (row.status === "Dispatch") {
                statusColor = "#fafad2";
                statusTextColor = "		#ffa500";
              } else if (row.status === "Pending") {
                statusColor = "	#ffe4e1";
                statusTextColor = "#FF0000";
              }

              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.orderId}>
                  <TableCell align="left">{row.userId}</TableCell>
                  <TableCell align="left">{row.orderId}</TableCell>
                  <TableCell>{row.orderDate}</TableCell>
                  <TableCell>{row.total}</TableCell>

                  <TableCell
                    sx={{
                      borderRadius: "4px",
                      padding: 0, // Remove the default padding
                    }}
                  >
                    <span
                      style={{
                        backgroundColor: statusColor,
                        color: statusTextColor,
                        padding: "0.2rem", // Adjust the padding value as per your requirement
                        borderRadius: "4px",
                        display: "inline-block", // Display as an inline-block element
                      }}
                    >
                      {row.status}
                    </span>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
