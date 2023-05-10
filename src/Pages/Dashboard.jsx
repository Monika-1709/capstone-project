import * as React from 'react';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
//import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
//import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ReactEcharts from 'echarts-for-react';
import { Box, Paper } from '@mui/material';


const option2 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};
const option = {
  legend: {
    top: 'bottom'
  },
  toolbox: {
    show: true,
    feature: {
      mark: { show: true },
      dataView: { show: true, readOnly: false },
      restore: { show: true },
      saveAsImage: { show: true }
    }
  },
  series: [
    {
      name: 'Nightingale Chart',
      type: 'pie',
      radius: [25, 100],
      center: ['50%', '50%'],
      roseType: 'area',
      itemStyle: {
        borderRadius: 8
      },
      data: [
        { value: 40, name: 'rose 1' },
        { value: 38, name: 'rose 2' },
        { value: 32, name: 'rose 3' },
        { value: 30, name: 'rose 4' },
        { value: 28, name: 'rose 5' },
        { value: 22, name: 'rose 6' },

      ]
    }
  ]
};

const op = {
  // title: {
  //   text: 'Stacked Line'
  // },
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: [  'Video Ads', 'Direct', 'Search Engine']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolGrid: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'tuesday', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    
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



const card = (
  <Card>
    <CardContent>
      <Typography sx={{ fontSize: 16,fontWeight:'bold' }} gutterBottom>
         Total Order
      </Typography>
      <Typography >
           2.5k+
      </Typography>
    </CardContent>
  </Card>  
  
);




export default function Dashboard() {
  
  return (
   <Box m='20px'>
       <Box  justifyContent="space-between" alignItems="center">
          <h2 style={{marginLeft:'20px'}}>Welcome to Dashboard</h2>
       </Box>
       <Grid container spacing={2} flexWrap="nowrap">
          <Grid sx={{paddingTop:'5%'}}> 
              <Grid 
                  container spacing={3}
                  sx={{marginLeft:'40px',gap:'25px'}}
              >
                
                    <Grid sx={{width:'230px'}} >
                      <Card >{card}</Card>
                    </Grid>
                    <Grid  sx={{width:'230px'}}  >
                      <Card >{card}</Card>
                    </Grid>
                    <Grid  sx={{width:'230px'}} >
                      <Card >{card}</Card>
                    </Grid>
            
                </Grid>
                <Grid  sx={{width:'740px',paddingTop:'2%',marginLeft:'40px'}}  >
                  <Paper sx={{height:'250px'}}>
                      <h2 style={{paddingTop:'2%',paddingLeft:'40px'}}>Total Visitors</h2> 
                      <ReactEcharts
                          option={op} 
                          style={{ height: '200px',width: '700px',marginTop:'2px'} }
                        /> 
                  </Paper>
                </Grid>
          </Grid>  
          <Grid  sx={{marginLeft:'40px',paddingTop:'37px'}}>
                <Paper  sx={{width:'470px',height:'360px'}}>
                  <h2 style={{paddingTop:'3%',paddingLeft:'15px'}}> Total Transaction</h2>
                  <ReactEcharts option={option} />
                </Paper>
          </Grid>            
      </Grid>
      <Grid container spacing={2}  flexWrap="nowrap">
          <Grid sx={{paddingTop:'3%',paddingLeft:'40px'}}>
              <Paper  sx={{width:'740px',height:'400px'}}>
                <h2 style={{paddingTop:'2%',paddingLeft:'15px'}}>Recent Orders</h2>
                
              </Paper>
          </Grid>  
          <Grid  sx={{paddingTop:'3%',paddingLeft:'40px'}}>
              <Paper  sx={{width:'470px',height:'400px'}}> 
                <h2 style={{paddingTop:'2%',paddingLeft:'15px'}}>Total Reviews</h2>
                <ReactEcharts option={option2} />
              </Paper>
          </Grid>  
      </Grid>
   </Box>
  );
}