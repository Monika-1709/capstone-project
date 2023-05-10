import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import ReactEcharts from 'echarts-for-react';

const op = {
  // title: {
  //   text: 'Stacked Line'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};


const columns = [
   {
      id: 'code',
      label: 'TrannsactionId',
      minWidth: 170,
    },
  
    {
      id: 'date',
      label: 'Date',
       minWidth: 170,
    },
    {
      id: 'amount',
      label: 'Amount(Rs)',
      minWidth: 170,
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'status',
      label: 'Status',
      minWidth: 170,
    },
  ];
  


      
function createData(TrannsactionId,Date,Amount,Status) {
  return { TrannsactionId,Date,Amount,Status };
}

const rows = [
  createData('SBI10388', '3-1-2023', 4500, 'Successful'),
  createData('SBI10389', '1-1-2023', 5000, 'Successful'),
  createData('SBI10390', '12-12-2022', 6000, 'Pending'),
  createData('SBI10391', '14-12-2022', 7000, 'Successful'),
  createData('SBI10392', '19-12-2022', 8000, 'Successful'),
  createData('SBI10393', '20-11-2022', 9000, 'Failed'),
  createData('SBI10394', '21-11-2022', 10000, 'Successful'),
  createData('SBI10395', '24-11-2022', 11000, 'Successful'),
  createData('SBI10396', '28-11-2022', 12000, 'Successful'),
  createData('SBI10397', '29-11-2022', 13000, 'Successful'),
  createData('SBI10398', '29-11-2022', 14000, 'Successful'),
  createData('SBI10399', '1-10-2022', 15000, 'Successful'),
  createData('SBI10400', '1-10-2022', 16000, 'Successful'),
  createData('SBI10401', '1-10-2022', 17000, 'Successful'),
  createData('SBI10402', '2-10-2022', 18000, 'Successful'),
  createData('SBI10403', '2-10-2022', 19000, 'Successful'),
  createData('SBI10404', '4-10-2022', 20000, 'Successful'),
  createData('SBI10405', '10-9-2022', 21000, 'Successful'),
  createData('SBI10406', '14-9-2022', 22000, 'Successful'),
  createData('SBI10407', '20-8-2022', 23000, 'Successful'),
];

export default function Reviews() {
  const option = {
    tooltip: {
      trigger: 'item'
    },
    legend: {
      top: '5%',
      left: 'center'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2
        },
        label: {
          show: false,
          position: 'center'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: 'bold'
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 1048, name: 'Successful' },
          { value: 735, name: 'Unsuccesfull'},
          { value: 580, name: 'Pending' },
        
        ]
      }
    ]
  };
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <h1 style={{fontFamily:'cursiv'}}>Status Pie Charts</h1>
       <ReactEcharts option={option} 
        style={{
          position:'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          width:'500px',
          marginLeft:'200px',
          paddingBottom:'30%',
         }}
        />
        {/* <h1 style={{fontFamily:'cursiv',marginLeft:'50%',marginTop:'-20%'}} >Status Line Charts</h1>   */}
       <ReactEcharts
        option={op} 
        style={{ height: '300px',width: '550px',marginLeft:'550px'} }
      /> 
      
      <h1 style={{fontFamily:'cursiv',marginTop:'5%',marginLeft:'5%'}}>Transaction History</h1> 
      <Paper sx={{ width: '90%',marginLeft:'5%',marginTop:'15px'}}>
        <TableContainer sx={{ maxHeight: 340 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                    sx={{fontWeight:'bold'}}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <TableRow hover role="checkbox" tabIndex={-1} key={row.TrannsactionId}>
                      <TableCell align="left">{row.TrannsactionId}</TableCell>
                      <TableCell>{row.Date}</TableCell>
                      <TableCell>{row.Amount}</TableCell>
                      <TableCell>{row.Status}</TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
     </div> 
  );
}