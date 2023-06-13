import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { TableVirtuoso } from "react-virtuoso";

const sample = [
  ["Monica", 23, "23-01-2023", 4000, "successful"],
  ["John", 28, "24-01-2023", 3500, "pending"],
  ["Emily", 32, "25-01-2023", 4800, "successful"],
  ["David", 26, "26-01-2023", 3900, "successful"],
  ["Sarah", 31, "27-01-2023", 4100, "successful"],
  ["Michael", 29, "28-01-2023", 3800, "pending"],
  ["Olivia", 27, "29-01-2023", 4200, "successful"],
];

function createData(id, orderBy, orderId, date, cost, status) {
  return { id, orderBy, orderId, date, cost, status };
}

const columns = [
  {
    width: 100,
    label: "Order By",
    dataKey: "orderBy",
    numeric: "false",
  },
  {
    width: 100,
    label: "Order ID",
    dataKey: "orderId",
    numeric: true,
  },
  {
    width: 100,
    label: "Date",
    dataKey: "date",
    numeric: "false",
  },
  {
    width: 100,
    label: "Cost (Rs)",
    dataKey: "cost",
    numeric: true,
  },
  {
    width: 100,
    label: "Status",
    dataKey: "status",
    numeric: false,
  },
];

const rows = Array.from({ length: 10 }, (_, index) => {
  const randomSelection = sample[Math.floor(Math.random() * sample.length)];
  return createData(index, ...randomSelection);
});

const VirtuosoTableComponents = {
  Scroller: React.forwardRef((props, ref) => (
    <TableContainer component={Paper} {...props} ref={ref} />
  )),
  Table: (props) => (
    <Table
      {...props}
      sx={{ borderCollapse: "separate", tableLayout: "fixed" }}
    />
  ),
  TableHead,
  TableRow: ({ item: _item, ...props }) => <TableRow {...props} />,
  TableBody: React.forwardRef((props, ref) => (
    <TableBody {...props} ref={ref} />
  )),
};

function fixedHeaderContent() {
  return (
    <TableRow>
      {columns.map((column) => (
        <TableCell
          key={column.dataKey}
          variant="head"
          style={{ width: column.width }}
          sx={{
            backgroundColor: "background.paper",
            color: "gray",
          }}
        >
          {column.label}
        </TableCell>
      ))}
    </TableRow>
  );
}

function rowContent(_index, row) {
  return (
    <React.Fragment>
      {columns.map((column) => (
        <TableCell key={column.dataKey}>{row[column.dataKey]}</TableCell>
      ))}
    </React.Fragment>
  );
}

export default function RecentOrders() {
  return (
    <Paper style={{ height: 212, width: "100%" }} elevation={0}>
      <TableVirtuoso
        data={rows}
        components={VirtuosoTableComponents}
        fixedHeaderContent={fixedHeaderContent}
        itemContent={rowContent}
      />
    </Paper>
  );
}
