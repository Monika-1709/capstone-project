import React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TablePagination from "@mui/material/TablePagination";
import DateRangePicker from "../Components/DateRangePicker";
import { Box} from "@mui/material";
import Orders from "../Components/Orders";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import dayjs from "dayjs";
import Sidebar from "../SideBar/Sidebar";
import CancelIcon from "@mui/icons-material/Cancel";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import CircularProgress from '@mui/material/CircularProgress';

const columns = [
  {
    id: "name",
    label: "Order by",
    minWidth: 170,
  },
  {
    id: "code",
    label: "Order ID",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "date",
    label: "Date",
    minWidth: 170,
  },
  {
    id: "amount",
    label: "Cost (Rs)",
    minWidth: 170,
    align: "left",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "status",
    label: "Status",
    minWidth: 170,
  },
];

function createData(OrderBy, OrderId, OrderDate, Amount, Status) {
  return { OrderBy, OrderId, OrderDate, Amount, Status };
}

const rows = [
  createData("Ram", 1, "January 1,2023", 4500, "Delivered"),
  createData("Shyam", 2, "January 12,2023", 5000, "Delivered"),
  createData("Gita", 3, "January 10,2023", 6000, "Pending"),
  createData("Hari", 4, "January 16,2023", 7000, "Delivered"),
  createData("Sita", 5, "January 19,2023", 8000, "Delivered"),
  createData("Ravi", 6, "January 14,2023", 9000, "Cancelled"),
  createData("Priya", 7, "January 16,2023", 10000, "Delivered"),
  createData("Amit", 8, "January 17,2023", 11000, "Delivered"),
  createData("Mohan", 9, "January 7,2023", 12000, "Delivered"),
  createData("Krishna", 10, "January 9,2023", 13000, "Delivered"),
  createData("Radha", 11, "January 6,2023", 14000, "Delivered"),
  createData("Vikas", 12, "January 1,2023", 15000, "Delivered"),
  createData("Deepak", 13, "February 8,2022", 16000, "Delivered"),
  createData("Kavita", 14, "February 6,2022", 17000, "Delivered"),
  createData("Aarti", 15, "February 9,2022", 18000, "Delivered"),
  createData("Neha", 16, "February 16,2022", 19000, "Delivered"),
  createData("Rohan", 17, "March 11,2022", 20000, "Delivered"),
  createData("Raj", 18, "March 10,2022", 21000, "Delivered"),
  createData("Aman", 19, "March 15,2022", 22000, "Delivered"),
  createData("Sangeeta", 20, "March 19,2022", 23000, "Delivered"),
  createData("Ram", 1, "March 21,2022", 4500, "Delivered"),
  createData("Shyam", 2, "March 10,2022", 5000, "Delivered"),
  createData("Gita", 3, "March 21,2022", 6000, "Pending"),
  createData("Hari", 4, "2March 22,2022", 7000, "Delivered"),
  createData("Sita", 5, "March 28,2022", 8000, "Delivered"),
  createData("Ravi", 6, "March 24,2022", 9000, "Cancelled"),
  createData("Priya", 7, "March 31,2022", 10000, "Delivered"),
  createData("Amit", 8, "March 28,2022", 11000, "Delivered"),
  createData("Mohan", 9, "February 6,2022", 12000, "Delivered"),
  createData("Krishna", 10, "February 8,2022", 13000, "Delivered"),
  createData("Radha", 11, "February 5,2022", 14000, "Delivered"),
  createData("Vikas", 12, "2February 7,2022", 15000, "Delivered"),
  createData("Deepak", 13, "February 11,2022", 16000, "Delivered"),
  createData("Kavita", 14, "February 13,2022", 17000, "Delivered"),
  createData("Aarti", 15, "February 12,2022", 18000, "Delivered"),
  createData("Neha", 16, "February 18,2022", 19000, "Delivered"),
  createData("Rohan", 17, "February 14,2022", 20000, "Delivered"),
  createData("Raj", 18, "February 23,2022", 21000, "Delivered"),
  createData("Aman", 19, "February 22,2022", 22000, "Delivered"),
  createData("Sangeeta", 20, "February 6,2022", 23000, "Delivered"),
];
export default function OrderHistory() {


  const icon1 = <LocalShippingIcon style={{fontSize:'2.2rem'}}/>;
  const heading = "Total Delivery";
  const totalOrder = 200;

  const icon2 = <AccessTimeFilledIcon style={{fontSize:'2.2rem'}} />;
  const heading2 = "Total Pending";
  const totalpending = 40;

  const icon3 = <CancelIcon style={{fontSize:'2.2rem'}}/>;
  const heading3 = "Total Concellation";
  const totalCancellation = 10;

  const icon4 = <CircularProgress style={{fontSize:'2.2rem',color:'white'}} />;
  const heading4 = "Total Process";
  const totalProcessing = 10;

  const [range, setRange] = React.useState([
    dayjs("2022-01-17"),
    dayjs("2023-04-21"),
  ]);
  const startDate = range[0];
  const endDate = range[1];
  const filteredRows = rows.filter((row) => {
    const rowDate = dayjs(row.OrderDate);
    return rowDate.isBetween(startDate, endDate, null, "[]");
  });

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(25);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
   
      <Box sx={{ margin: "1rem" }}>
        
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2rem",
          }}
        >
          <Paper sx={{ width: "80vw", height: "5rem" }}>
            <Box sx={{ display: "flex" }}>
              <h2 style={{ flexGrow: 1,margin:'1.2rem 0 0 1rem' }}>Order History</h2>
              <DateRangePicker range={range} setRange={setRange} />
            </Box>
          </Paper>
        </Box>

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "2rem",
            gap: 1,
          }}
        >
          <Orders icon={icon1} heading={heading} totalOrder={totalOrder}/>
          <Orders icon={icon2} heading={heading2} totalOrder={totalpending} />
          <Orders
            icon={icon3}
            heading={heading3}
            totalOrder={totalCancellation}
           
          />
          <Orders
            icon={icon4}
            heading={heading4}
            totalOrder={totalProcessing}
           
          />
        </Box>
        <Box sx={{display:'flex',justifyContent:'space-evenly',margin:'2rem'}}>
          <Paper
            elevation={1}
            sx={{
              width: "80vw",
              height: "60vh",
            }}
          >
            <h2 style={{ paddingLeft: "1rem", marginTop: "1rem" }}>
              All Oders
            </h2>
            <TableContainer sx={{ height: "48vh" }}>
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
                  {filteredRows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.OrderBy}
                        >
                          <TableCell align="left">{row.OrderBy}</TableCell>
                          <TableCell align="left">{row.OrderId}</TableCell>
                          <TableCell>{row.OrderDate}</TableCell>
                          <TableCell>{row.Amount}</TableCell>
                          <TableCell>{row.Status}</TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[25, 100]}
              component="div"
              count={filteredRows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </Box>
      </Box>
    
  );
}
