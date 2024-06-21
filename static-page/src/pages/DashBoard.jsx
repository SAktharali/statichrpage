import React from 'react';
import '../styles/dashboard.css';
import Nav from './Nav.jsx';
import { Line, Bar } from 'react-chartjs-2';
import { Chart as ChartJs, LineElement, CategoryScale, LinearScale, PointElement, BarElement, Legend, Title, Tooltip } from 'chart.js/auto';

ChartJs.register(
  LineElement,
  BarElement,
  CategoryScale,
  PointElement,
  LinearScale,
  Legend,
  Title,
  Tooltip
);

const DashBoard = () => {
  const barData = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    datasets: [
      {
        label: 'Assigned Tasks',
        barThickness: 15,
        data: [12, 17, 22, 16, 18, 17],
        backgroundColor: '#3358FF',
      },
      {
        label: 'Completed Tasks',
        barPercentage: 0.5,
        data: [7, 13, 10, 7, 14, 10],
        backgroundColor: '#36A2EB',
      }
    ]
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        labels: {
          color: 'black',
          font: {
            weight: 'bolder'
          },
          usePointStyle: true,
          pointStyle: 'circle',
        },
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'grey',
        },
      },
      y: {
        grid: {
          display: true,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'grey',
        },
      },
    },
  };

  const lineData = {
    labels: ["Sep", "Oct", "Nov", "Dec", "Jan", "Feb", "Mar", "Apr", "May", "Jun", 'Jul', 'Aug'],
    datasets: [
      {
        data: [23, 20, 19, 20, 12, 15, 20, 25, 22, 18, 16, 14],
        lineTension: 0.5,
        borderColor: '#3358FF',
        pointBackgroundColor: '#3358FF',
        pointBorderColor: '#3358FF',
        pointStyle: false
      },
    ]
  };

  const lineOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          color: 'grey'
        },
      },
      y: {
        grid: {
          display: false,
        },
        border: {
          display: false,
        },
        ticks: {
          stepSize: 5,
          display: false
        },
      },
    },
  };

  return (
    <>
      <Nav />
      <main className='main-container'>
        <div className='card-container'>
          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <div className='content'>
                  <p className='text-secondary'>Attendance Status</p>
                  <p className='fw-bold mt-2'>96 Present</p>
                  <p className='text-secondary'>02 Absent</p>
                </div>
                <div className='image-container'>
                  <img src="https://www.purelytracking.com/blog/wp-content/uploads/2021/04/Touchless-Attendance-Software.png" alt="attendance" width={100} />
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <div className='content'>
                  <p className='text-secondary'>Time Lag Status</p>
                  <p className='fw-bold mt-2'>03 Late</p>
                  <p className='text-secondary'>02 Permissions</p>
                </div>
                <div className='image-container'>
                  <img src="https://www.purelytracking.com/blog/wp-content/uploads/2021/04/Touchless-Attendance-Software.png" alt="attendance" width={100} />
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <div className='content'>
                  <p className='text-secondary'>Remote Work</p>
                  <p className='fw-bold mt-2'>16</p>
                </div>
                <div className='image-container'>
                  <img src="https://www.purelytracking.com/blog/wp-content/uploads/2021/04/Touchless-Attendance-Software.png" alt="attendance" width={100} />
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='card-inner'>
                <div className='content'>
                  <p className='text-secondary'>Employee Turnover</p>
                  <p className='fw-bold mt-2 text-success'>160 Active</p>
                </div>
                <div className='image-container'>
                  <img src="https://www.purelytracking.com/blog/wp-content/uploads/2021/04/Touchless-Attendance-Software.png" alt="attendance" width={100} />
                </div>
              </div>
            </div>
          </div>

          <div className='charts'>
            <div className='chart-card-1'>
              <div className='chart-header'>
              <span style={{color:'#3358FF'}} className='chart-title'>Task Completion</span>
              <div className='chart-dropdown'>
<i className="fa-solid fa-calendar-days me-sm-2"></i>
<select className='outline-0'>
  <option value="Weekly">Weekly</option>
  <option value="Monthly">Monthly</option>
  <option value="Yearly">Yearly</option>
</select>
              </div>
              </div>
              <Bar 
                data={barData}
                options={barOptions}
                className='chart'
              />
            </div>
            <div className='chart-card-2'>
            <div className='chart-header'>
              <span style={{color:'#3358FF'}} className='chart-title'>Employee Performance</span>
              <div className='chart-dropdown'>
<i className="fa-solid fa-calendar-days me-sm-2"></i>
<select className='outline-0'>
  <option value="Weekly">Weekly</option>
  <option value="Monthly">Monthly</option>
  <option value="Yearly">Yearly</option>
</select>
              </div>
              </div>
              <Line
                data={lineData}
                options={lineOptions}
                className='chart'
              />
            </div>
         
          <div className="progress-card">
          <div className='progress-header'>
              <span style={{color:'#3358FF'}} className='progress-title'>Project Costing and Profit</span>
              <div className='progress-dropdown'>
<i className="fa-solid fa-calendar-days me-sm-2"></i>
<select className='outline-0'>
  <option value="Weekly">Weekly</option>
  <option value="Monthly">Monthly</option>
  <option value="Yearly">Yearly</option>
</select>
              </div>
              </div>
              <div className="progress-bar ">
  <div className='progress-item mt-3 d-flex align-items-center'>
    <span className='me-5 progress-text'>Project Cost</span>
    <div className="progress-line progress-line-1" data-percent='50'>
      <span style={{width:'80%'}}></span>
    </div>
    <span className='ms-5 progress-text'>&#8377; 24,25,520</span>
  </div>
</div>
<div className="progress-bar">
  <div className='progress-item d-flex align-items-center'>
    <span className='me-5 progress-text'>Project Profit</span>
    <div className="progress-line progress-line-2" data-percent='50'>
      <span  style={{width:'60%'}}></span>
    </div>
    <span className='ms-5 progress-text'>&#8377; 12,54,210</span>
  </div>
</div>
<div className="progress-bar">
  <div className='progress-item  d-flex align-items-center'>
    <span className='me-5 progress-text'>Expenses</span>
    <div className="progress-line progress-line-3" data-percent='50'>
      <span style={{width:'30%'}}></span>
    </div>
    <span className='ms-5 progress-text'>&#8377; 15,845</span>
  </div>
</div>
          </div>

              <div className="job-card">
  <span className='job-title'>Jobs</span>
  <div className='mt-3 d-flex justify-content-between'>
    <div className='d-flex flex-column'>
      <span className='text-center' style={{color:'#3358FF',fontWeight:'bold'}}>24</span>
      <span className='text-center' style={{color:'#80BCFA',fontWeight:'bold'}}>Job Posted</span>
    </div>
    <div className='d-flex flex-column'>
      <span className='text-center' style={{color:'#3358FF',fontWeight:'bold'}}>120</span>
      <span className='text-center'  style={{color:'#DB80DD',fontWeight:'bold'}}>Interview Schedule</span>
    </div>
    <div className='d-flex flex-column'>
      <span className='text-center' style={{color:'#3358FF',fontWeight:'bold'}}>120</span>
      <span className='text-center'  style={{color:'#D9AF71',fontWeight:'bold'}}>Shortlisted</span>
    </div>
    <div className='d-flex flex-column'>
      <span className='text-center' style={{color:'#3358FF',fontWeight:'bold'}}>15</span>
      <span className='text-center'  style={{color:'#FFB3A5',fontWeight:'bold'}}>Offered</span>
    </div>
    <div className='d-flex flex-column'>
      <span className='text-center' style={{color:'#3358FF',fontWeight:'bold'}}>750</span>
      <span className='text-center'  style={{color:'#22C4BB',fontWeight:'bold'}}>Total Applicants</span>
    </div>
  </div>
</div>

<div className="total-card d-flex justify-content-between" style={{ backgroundColor: '#f7f7f7', padding: '20px', borderRadius: '10px' }}>
  <div className="total-projects d-flex">
    <div className='mt-2 p-1' style={{ fontSize: '25px', color: '#337ab7' }}>
      <i class="fa-solid fa-briefcase "></i>
    </div>
    <div className='ms-2 mt-2 p-1 d-flex flex-column align-items-center'>
      <span style={{color:'#3358FF',fontWeight:'bold'}}>Total Projects</span>
      <span>04-04-2024</span>
    </div>
    <span className='text-center ms-5 mt-3' style={{color:'#3358FF',fontWeight:'bold'}}>26</span>
  </div>
  <div className="total-clients d-flex">
    <div  className='mt-2 p-1' style={{ fontSize: '25px', color: '#337ab7' }}>
    <i class="fa-solid fa-briefcase"></i>
    </div>
    <div className='ms-2 mt-2 p-1 d-flex flex-column align-items-center'>
      <span style={{color:'#3358FF',fontWeight:'bold'}}>Total Clients</span>
      <span >04-04-2024</span>
    </div>
    <span className='text-center ms-5 mt-3'  style={{color:'#3358FF',fontWeight:'bold'}}>11</span>
  </div>
</div>


<div className="alert-card d-flex">
<span className='alert-title'>Alert</span>
  <div className="alert-lists d-flex m-2 p-1"  >
    <div className='mt-2 p-1' style={{ fontSize: '25px', color: 'red' }}>
    <i class="fa-solid fa-a"></i>
    </div>
    <div className='ms-2 mt-2 p-1 d-flex flex-column align-items-center'  style={{width:"170px"}}>
      <span style={{color:'#3358FF',fontWeight:'bold'}}>Adobe</span>
      <span className='text-danger'>License Expired Today</span>
    </div>
  </div>
  <div className="alert-lists d-flex m-3 justify-content-center" >
    <div  className='mt-2' style={{ fontSize: '25px', color: 'red' }}>
    <i class="fa-solid fa-exclamation"></i>
    </div>
    <div className='ms-2 mt-2 d-flex flex-column align-items-center' style={{width:"170px"}}>
      <span style={{color:'#3358FF',fontWeight:'bold'}}>Report</span>
      <span className='text-danger' >Employee Raise Report</span>
    </div>
  </div>
  <div className="alert-lists d-flex m-3 justify-content-center">
    <div  className='mt-2 p-1' style={{ fontSize: '25px', color: 'red' }}>
    <i class="fa-solid fa-exclamation"></i>
    </div>
    <div className='ms-2 mt-2 d-flex flex-column align-items-center'  style={{width:"170px"}}>
      <span style={{color:'#3358FF',fontWeight:'bold'}} className='text-center'>Total Clients</span>
      <span className='text-danger'>Profile Report</span>
    </div>
  </div>
</div>

</div>
        </div>
      </main>
    </>
  )
}

export default DashBoard;