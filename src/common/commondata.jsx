import React from 'react';
import ReactApexChart from 'react-apexcharts';
import { Imagesdata } from '../common/commonimages';

//*** AlertsData ***//
//Basic alert Data

export const BasicData = [
  { id: 1, heading: 'Well done!', description: 'You successfully read this important alert message.', color: 'success' },
  { id: 2, heading: 'Heads up!', description: 'This alert needs your attention, but its not super important.', color: 'info' },
  { id: 3, heading: 'Warning!', description: 'Better check yourself, you are not looking too good.', color: 'warning' },
  { id: 4, heading: 'Oh snap!', description: 'Change a few things up and try submitting again.', color: 'danger' }
]

//Outline alert Data
export const outlineAlert = [
  { id: 1, heading: 'Well done!', description: 'You successfully read this important alert message.', class: 'alert-outline-success' },
  { id: 2, heading: 'Heads up!', description: 'This alert needs your attention, but its not super important.', class: 'alert-outline-info' },
  { id: 3, heading: 'Warning!', description: 'Better check yourself, you are not looking too good.', class: 'alert-outline-warning' },
  { id: 4, heading: 'Oh snap!', description: 'Change a few things up and try submitting again.', class: 'alert-outline-danger' }

]
//Solid colored Alert

export const solidAlert = [
  { id: 1, heading: 'Well done!', description: 'You successfully read this important alert message.', class: ' alert-solid-success' },
  { id: 2, heading: 'Heads up!', description: 'This alert needs your attention, but its not super important.', class: ' alert-solid-info' },
  { id: 3, heading: 'Warning!', description: 'Better check yourself, you are not looking too good.', class: ' alert-solid-warning' },
  { id: 4, heading: 'Oh snap!', description: 'Change a few things up and try submitting again.', class: ' alert-solid-danger' }
]

//LINK COLOR ALERTS

export const linkAlert = [
  { id: 1, text: 'primary', color: 'primary', class: '' },
  { id: 2, text: 'secondary', color: 'secondary', class: '' },
  { id: 3, text: 'success', color: 'success', class: '' },
  { id: 4, text: 'danger', color: 'danger', class: '' },
  { id: 5, text: 'warning', color: 'warning', class: '' },
  { id: 6, text: 'info', color: 'info', class: '' },
  { id: 7, text: 'light', color: 'light', class: '' },
  { id: 8, text: 'dark', color: 'dark', class: 'mb-0' }
]

//DISMISSING ALERTS

export const dismissAlert = [
  { id: 1, color: 'default', class: 'fade show alert-dismissible' },
  { id: 2, color: 'success', class: 'fade show alert-dismissible' },
  { id: 3, color: 'danger', class: 'fade show alert-dismissible' },
  { id: 4, color: 'info', class: 'fade show alert-dismissible' }
]
//ALERT WITH ICON

export const iconAlert = [
  { id: 1, text: 'default', icon: <i className="fe fe-download"></i>, color: 'default', class: '' },
  { id: 2, text: 'primary', icon: <i className="fe fe-check-square"></i>, color: 'primary', class: '' },
  { id: 3, text: 'success', icon: <i className="fe fe-thumbs-up"></i>, color: 'success', class: '' },
  { id: 4, text: 'info', icon: <i className="ti-bell"></i>, color: 'info', class: '' },
  { id: 5, text: 'warning', icon: <i className="fe fe-info"></i>, color: 'warning', class: '' },
  { id: 6, text: 'danger', icon: <i className="fe fe-slash"></i>, color: 'danger', class: 'mb-0' }
]

//ALERT WITH ICON DISMISSING

export const iconDismissable = [
  { id: 1, text: 'default', icon: <i className="fe fe-download"></i>, color: 'default', class: 'fade show' },
  { id: 2, text: 'primary', icon: <i className="fe fe-check-square"></i>, color: 'primary', class: 'fade show' },
  { id: 3, text: 'success', icon: <i className="fe fe-thumbs-up"></i>, color: 'success', class: 'fade show' },
  { id: 4, text: 'info', icon: <i className="ti-bell"></i>, color: 'info', class: 'fade show' },
  { id: 5, text: 'warning', icon: <i className="fe fe-info"></i>, color: 'warning', class: 'fade show' },
  { id: 6, text: 'danger', icon: <i className="fe fe-slash"></i>, color: 'danger', class: 'fade show mb-0' }
]
//*** PopoversData ***//
//Default popover
export const popoverData = [
  {
    id: "1",
    heading: 'POPOVER TOP',
    placement: 'top',

  },
  {
    id: "2",
    heading: 'POPOVER RIGHT',
    placement: 'right',

  },
  {
    id: "3",
    heading: 'POPOVER LEFT',
    placement: 'left',

  },
  {
    id: "4",
    heading: 'POPOVER BOTTOM',
    placement: 'bottom',

  }
];


//Custom Header Change


export const popoverHeading = [
  {
    id: "1",
    heading: 'POPOVER TOP',
    placement: 'top',
    class: ' bg-primary text-white'
  },
  {
    id: "2",
    heading: 'POPOVER BOTTOM',
    placement: 'bottom',
    class: 'bg-secondary text-white'
  }
];


//Custom Backround Change

export const popoverBody = [
  {
    id: "1",
    heading: 'POPOVER TOP',
    placement: 'top',
    class: 'popover-primary'
  },
  {
    id: "2",
    heading: 'POPOVER BOTTOM',
    placement: 'bottom',
    class: 'popover-secondary'
  }
];
export const stateValue = [
  { value: "...", label: "..." },
  { value: "...", label: "..." }
]
//*** IndexpageData ***//
//Map



// TODAY ORDERS

const oprderSeries = [
  {
    data: [5, 9, 5, 6, 4, 12, 18, 14, 10, 15, 12, 5, 8, 5, 12, 5, 12, 10, 16, 12]
  }
];

const orderOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function Order() {
  return (
    <div id="chart">
      <ReactApexChart options={orderOptions} className="pt-1" series={oprderSeries} type="area" height={25} />
    </div>
  )
};


// TODAY DANGER EARNINGS

const earningSeries = [
  {
    data: [3, 2, 4, 6, 12, 14, 8, 7, 14, 16, 12, 7, 8, 4, 3, 2, 2, 5, 6, 7]
  }
];

const earningOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function DangerEarnings() {
  return (
    <div id="chart">
      <ReactApexChart options={earningOptions} className="pt-1" series={earningSeries} type="area" height={25} />
    </div>
  )
};

// TODAY SUCCESS EARNINGS 

const earningsSeries = [
  {
    data: [5, 10, 5, 20, 22, 12, 15, 18, 20, 15, 8, 12, 22, 5, 10, 12, 22, 15, 16, 10]
  }
];

const earningsOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function SuccessEarning() {
  return (
    <div id="chart">
      <ReactApexChart options={earningsOptions} className="pt-1" series={earningsSeries} type="area" height={25} />
    </div>
  )
};

// PRODUCT SOLD

const soldSeries = [
  {
    data: [5, 9, 5, 6, 4, 12, 18, 14, 10, 15, 12, 5, 8, 5, 12, 5, 12, 10, 16, 12]
  }
];

const soldOptions = {
  chart: {
    type: 'area',
    height: 30,
    sparkline: {
      enabled: true
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  tooltip: {
    enabled: false,
  },
  fill: {
    opacity: 0.3
  },
  xaxis: {
    crosshairs: {
      width: 1
    },
  },
  yaxis: {
    min: 0
  },
  colors: ['#DCE6EC'],
};


export function Sold() {
  return (
    <div id="chart">
      <ReactApexChart options={soldOptions} className="pt-1" series={soldSeries} type="area" height={25} />
    </div>
  )
};

// Order Status 

const Statusseries = [
  {
    name: 'Impressions',
    data: [74, 85, 57, 56, 76, 35, 61, 98, 36, 50, 48, 29, 57],
    color: '#0074d9'
  },
  {
    name: 'Turnover',
    data: [46, 35, 101, 98, 44, 55, 57, 56, 55, 34, 79, 46, 76],
    color: '#dc3545'
  },
  {
    name: 'In progress',
    data: [26, 35, 41, 78, 34, 65, 27, 46, 37, 65, 49, 23, 49],
    color: '#fd7e14'
  }
];

const Statusoptions = {
  legend: {
    position: 'top',
    horizontalAlign: 'left',

  },
  chart: {
    toolbar: {
      show: false,
    },
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 3,
    colors: ['transparent']
  },
  xaxis: {
    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
  },
  fill: {
    opacity: 1
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
    }
  }
};

export function OrderStatus() {

  return (

    <div id="chart">
      <ReactApexChart className="sales-bar mt-1" options={Statusoptions} series={Statusseries} type="bar" height={280} />
    </div>

  )
}

// USA MAP


//RECENT CUSTOMERS

//row#1

const rowSeries = [
  {
    data: [25, 66, 41, 59, 25, 44, 12, 36, 9, 21]
  }
];

const rowOption = {
  chart: {
    id: 'spark1',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'straight',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#0a9ae1']
};


export function Samantha() {
  return (
    <div id="chart">
      <ReactApexChart options={rowOption} className="wd-100p" series={rowSeries} height={30} />
    </div>
  )
};

//row#2

const jimmySeries = [
  {
    data: [12, 14, 2, 47, 32, 44, 14, 55, 41, 69]
  }
];

const jimmyOption = {
  chart: {
    id: 'spark2',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  markers: {
    size: 0
  },
  colors: ['#ff516e']
};


export function Jimmy() {
  return (
    <div id="chart">
      <ReactApexChart options={jimmyOption} className="wd-100p" series={jimmySeries} height={30} />
    </div>
  )
};

//row#3

const GabeSeries = [
  {
    data: [47, 45, 74, 32, 56, 31, 44, 33, 45, 19]
  }
];

const GabeOption = {
  chart: {
    id: 'spark3',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#28b98a'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
};


export function Gabe() {
  return (
    <div id="chart">
      <ReactApexChart options={GabeOption} className="wd-100p" series={GabeSeries} height={30} />
    </div>
  )
};

//row#4

const ManuelSeries = [
  {
    data: [15, 75, 47, 65, 14, 32, 19, 54, 44, 61]
  }
];

const ManuelOption = {
  chart: {
    id: 'spark4',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#f48846'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
};


export function Manuel() {
  return (
    <div id="chart">
      <ReactApexChart options={ManuelOption} className="wd-100p" series={ManuelSeries} height={30} />
    </div>
  )
};

//row#5

const SharonSeries = [
  {
    data: [12, 25, 76, 35, 17, 43, 10, 26, 69, 31]
  }
];

const SharonOption = {
  chart: {
    id: 'spark5',
    group: 'sparks',
    type: 'line',
    height: 38,
    responsive: 'true',
    sparkline: {
      enabled: true
    },
    dropShadow: {
      enabled: true,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 0.1,
    }
  },
  stroke: {
    curve: 'smooth',
    width: 2
  },
  markers: {
    size: 0
  },
  grid: {
    padding: {
      top: 10,
      bottom: 10,
      left: 50
    }
  },
  colors: ['#673ab7'],
  xaxis: {
    crosshairs: {
      width: 1
    },
  }
};


export function Sharon() {
  return (
    <div id="chart">
      <ReactApexChart options={SharonOption} className="wd-100p" series={SharonSeries} height={30} />
    </div>
  )
};

//Recent Order

export class RecentOrder extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      series: [83],
      options: {
        chart: {
          width: 200,
          height: 205,
          responsive: 'true',
          reset: 'true',
          type: 'radialBar',
          offsetX: 0,
          offsetY: 0,
        },
        plotOptions: {
          radialBar: {
            responsive: 'true',
            startAngle: -135,
            endAngle: 135,
            size: 120,
            imageWidth: 50,
            imageHeight: 50,

            track: {
              strokeWidth: "80%",
              background: '#ecf0fa',
            },
            dropShadow: {
              enabled: false,
              top: 0,
              left: 0,
              bottom: 0,
              blur: 3,
              opacity: 0.5
            },
            dataLabels: {
              name: {
                fontSize: '16px',
                offsetY: 30,
              },
              hollow: {
                size: "60%"
              },
              value: {
                offsetY: -10,
                fontSize: '22px',
                formatter: function (val) {
                  return val + "%";
                }
              }
            }
          }
        },
        colors: ['#0047aa',],
        fill: {
          type: "gradient",
          gradient: {
            shade: "dark",
            shadeIntensity: .6,
            gradientToColors: "#0082a3",
            inverseColors: true,
            opacityFrom: 1,
            opacityTo: 1,
            stops: [0, 100]
          }
        },
        stroke: {
          dashArray: 4
        },
        series: [83],
        labels: [""]
      }
    }
  }

  render() {
    return (

      <div id="chart" className='recent_order ht-240'>
        <ReactApexChart options={this.state.options} series={this.state.series} type="radialBar" height={205} />
      </div>


    );
  }
}

//Map Data Source

//*** AboutUs Data ***//
export const archivments = [
  { id: 1, data: '256', Color: 'primary', description: 'Completed Projects', icon: <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#834fde" d="M10.313 16.094a.997.997 0 0 1-.708-.293l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413l-6.188 6.188a.997.997 0 0 1-.707.293Z" opacity=".99" /><path fill="#b495eb" d="M12 2a10 10 0 1 0 10 10A10.011 10.011 0 0 0 12 2Zm5.207 7.613-6.188 6.188a1 1 0 0 1-1.414 0l-2.812-2.813a1 1 0 0 1 1.414-1.414l2.105 2.106 5.481-5.48a1 1 0 0 1 1.414 1.413Z" /></svg> },
  { id: 2, data: '7,234', Color: 'danger', description: 'Total Customers', icon: <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="10" cy="8.5" r="5" fill="#fbb8c7" /><path fill="#fa95ac" d="M13.30884,12.22253C12.42566,13.00806,11.27496,13.5,10,13.5s-2.42566-0.49194-3.30884-1.27747C3.92603,13.48206,2,16.26324,2,19.5c0,0.00018,0,0.00037,0,0.00055C2.00012,20.05267,2.44788,20.50012,3,20.5h14c0.00018,0,0.00037,0,0.00055,0c0.55212-0.00012,0.99957-0.44788,0.99945-1C18,16.26324,16.07397,13.48206,13.30884,12.22253z" /><path fill="#f74f75" d="M18.3335,13.5c-0.26526,0.0003-0.51971-0.10515-0.707-0.293l-1.3335-1.333c-0.38694-0.39399-0.38123-1.02706,0.01275-1.414c0.38897-0.38202,1.01228-0.38202,1.40125,0l0.62647,0.626l1.95953-1.96c0.39399-0.38694,1.02706-0.38123,1.414,0.01275c0.38202,0.38897,0.38202,1.01227,0,1.40125l-2.6665,2.667C18.85321,13.39485,18.59877,13.5003,18.3335,13.5z" /></svg> },
  { id: 3, data: '846', Color: 'warning', description: 'Available Employeed', icon: <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#ffd79c" d="M12,14.5c-3.26461,0.00094-6.4876-0.73267-9.43018-2.14648C2.22156,12.18802,1.99974,11.83676,2,11.45117V9.5c0.00181-1.65611,1.34389-2.99819,3-3h14c1.65611,0.00181,2.99819,1.34389,3,3v1.95215c0.00003,0.3859-0.22189,0.73741-0.57031,0.90332C18.48677,13.76762,15.26418,14.50051,12,14.5z M21,11.45215L21,11.45215z" /><path fill="#ffbd5a" d="M10,6.5v-1c0.00055-0.55206,0.44794-0.99945,1-1h2c0.55206,0.00055,0.99945,0.44794,1,1v1h2v-1c-0.00183-1.65613-1.34387-2.99817-3-3h-2c-1.65613,0.00183-2.99817,1.34387-3,3v1H10z" /><path fill="#ffe4bd" d="M21.42969,12.35547C18.48676,13.76764,15.26416,14.50049,12,14.5c-3.26459,0.00092-6.48761-0.73267-9.43018-2.14648C2.22156,12.18805,1.99976,11.83673,2,11.45117V18.5c0.00183,1.65613,1.34387,2.99817,3,3h14c1.65613-0.00183,2.99817-1.34387,3-3v-7.04785C22.00006,11.83807,21.77814,12.18958,21.42969,12.35547z" /><path fill="#ffbd5a" d="M8,15.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948C7,14.50035,7,14.50017,7,14.5v-2c0-0.55229,0.44772-1,1-1s1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C8.00035,15.5,8.00017,15.5,8,15.5z M16,15.5c-0.55214,0.00014-0.99986-0.44734-1-0.99948c0-0.00017,0-0.00035,0-0.00052v-2c0-0.55229,0.44771-1,1-1c0.55228,0,1,0.44771,1,1v2c0.00014,0.55214-0.44734,0.99986-0.99948,1C16.00035,15.5,16.00017,15.5,16,15.5z" /></svg> },
  { id: 4, data: '153', Color: 'info', description: 'Awards won', icon: <svg className="about-icons" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><circle cx="12" cy="9.25" r="6" fill="#b8e6f9" /><path fill="#94daf6" d="M19.57391,17.01288L17.00854,12.56l-0.00873,0.00433C15.92511,14.18231,14.08795,15.25,12,15.25c-0.1286,0-0.25439-0.01123-0.38098-0.01923l0.38953,0.66925l2.37408,4.11218c0.13806,0.23914,0.44385,0.32111,0.68304,0.18304c0.07391-0.04266,0.13562-0.10358,0.17938-0.17682l1.32349-2.21844l2.57941-0.0376c0.27612-0.00397,0.4967-0.23108,0.49268-0.5072C19.6394,17.17004,19.61646,17.08667,19.57391,17.01288z" /><path fill="#4ec2f0" d="M11.61896,15.23071c-1.92963-0.12152-3.61176-1.14911-4.62012-2.66864l-2.56421,4.45081c-0.04248,0.07379-0.06549,0.15717-0.06671,0.24231c-0.00397,0.27612,0.21661,0.50323,0.49274,0.5072L7.44,17.79999l1.32355,2.21844c0.0437,0.07324,0.10547,0.13416,0.17938,0.17682c0.23914,0.13806,0.54492,0.05609,0.68298-0.18304L12,15.90002l0.00427-0.00732l-0.38525-0.66193L11.61896,15.23071z" /></svg> },
]

export const Team = [

  { id: 1, image: Imagesdata("faces1"), name: 'Rosen Berg', role: 'Chief Manager' },
  { id: 2, image: Imagesdata("faces2"), name: 'Mclaren mcannen', role: 'Sales Manager' },
  { id: 3, image: Imagesdata("faces3"), name: 'Shimpa Craig', role: 'Author & writer' },
  { id: 4, image: Imagesdata("faces4"), name: 'Limo Peter', role: 'Operations Head' },

]

//*** MailData ***//
export const mailingData = [
  {
    id: 1,
    class: 'unread',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces5"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Adrian Monino',
    title: 'Someone who believes in you',
    description: 'enean commodo li gula eget dolor cum socia eget dolor enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: <i className="typcn typcn-attachment"></i>,
    time: '11:30am'
  },
  {
    id: 2,
    class: 'unread',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: 'active',
    pic: Imagesdata("faces2"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Albert Ansing',
    title: 'Here is What You Missed This Week',
    description: 'enean commodo li gula eget dolor cum socia eget dolor enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: '06:50am'
  },
  {
    id: 3,
    class: '',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces9"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Carla Guden',
    title: '4 Ways to Optimize Your Search',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: <i className="typcn typcn-attachment"></i>,
    time: 'Yesterday'
  },
  {
    id: 4,
    class: 'unread',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces10"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Reven Galeon',
    title: 'We are Giving a Macbook for Free',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Yesterday'
  },
  {
    id: 5,
    class: '',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces12"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Elisse Tan',
    title: 'Keep Your Personal Data Safe',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Oct 13'
  },
  {
    id: 6,
    class: '',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces14"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Marianne Audrey',
    title: 'We have Made Some Changes',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Oct 13'
  },
  {
    id: 7,
    class: '',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: '',
    picClass: 'main-avatar bg-gray-800',
    content: 'J',
    badgecolor: 'gray',
    username: 'Jane Phoebe',
    title: 'Grab Our Holiday Deals',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Oct 12'
  },
  {
    id: 8,
    class: '',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces15"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Raffy Godinez',
    title: 'Just a Few Steps Away',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Oct 05'
  },
  {
    id: 9,
    class: '',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: 'active',
    pic: Imagesdata("faces7"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Allan Cadungog',
    title: 'Credit Card Promos',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Oct 04'
  },
  {
    id: 10,
    class: '',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces10"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Alfie Salinas',
    title: '4 Ways to Optimize Your Search',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Oct 02'
  },
  {
    id: 11,
    class: 'border-bottom-0',
    staricon: <i className="typcn typcn-star"></i>,
    starActive: '',
    pic: Imagesdata("faces1"),
    picClass: 'main-img-user',
    content: '',
    badgecolor: 'gray',
    username: 'Jove Guden',
    title: 'Keep Your Personal Data Safe',
    description: 'viva mus elemen tum semper nisi enean vulputat enean commodo li gula eget dolor cum socia eget dolor',
    attachicon: '',
    time: 'Oct 02'
  }
]

//*** MailSettingData ***//
export const Lang = [
  { value: "Us English", label: "Us English" },
  { value: "Arabic", label: "Arabic" },
  { value: "Korean", label: "Korean" },
];

export const Timezone = [

  { value: "Pacific/Midway", label: "(GMT - 11: 00) Midway Island, Samoa" },
  { value: "America/Adak", label: "(GMT - 10: 00) Hawaii - Aleutian" },
  { value: "Etc/GMT+10", label: "(GMT - 10: 00) Hawaii" },
  { value: "Pacific/Marquesas", label: "(GMT - 09: 30) Marquesas Islands" },
  { value: "Pacific/Gambier", label: "(GMT - 09: 00) Gambier Islands" },
  { value: "America/Anchorage", label: "(GMT-09:00) Alaska" },
  { value: "America/Ensenada", label: "(GMT-08:00) Tijuana, Baja California" },
  { value: "Etc/GMT+8", label: "(GMT-08:00) Pitcairn Islands" },
  { value: "America/Los_Angeles", label: "(GMT-08:00) Pacific Time (US & Canada)" },
  { value: "America/Denver", label: "(GMT-07:00) Mountain Time (US & Canada)" },
  { value: "America/Chihuahua", label: "(GMT-07:00) Chihuahua, La Paz, Mazatlan" },
  { value: "America/Dawson_Creek", label: "(GMT-07:00) Arizona" },
  { value: "America/Belize", label: "(GMT-06:00) Saskatchewan, Central America" },
  { value: "America/Cancun", label: "(GMT-06:00) Guadalajara, Mexico City, Monterrey" },
  { value: "Chile/EasterIsland", label: "(GMT-06:00) Easter Island" },
  { value: "America/Chicago", label: "(GMT-06:00) Central Time (US & Canada)" },
  { value: "America/New_York", label: "(GMT-05:00) Eastern Time (US & Canada)" },
  { value: "America/Havana", label: "(GMT-05:00) Cuba" },
  { value: "America/Bogota", label: "(GMT-05:00) Bogota, Lima, Quito, Rio Branco" },
  { value: "America/Caracas", label: "(GMT-04:30) Caracas" },
  { value: "America/Santiago", label: "(GMT-04:00) Santiago" },
  { value: "America/La_Paz", label: "(GMT-04:00) La Paz" },
  { value: "Atlantic/Stanley", label: "(GMT-04:00) Faukland Islands" },
  { value: "America/Campo_Grande", label: "(GMT-04:00) Brazil" },
  { value: "America/Goose_Bay", label: "(GMT-04:00) Atlantic Time (Goose Bay)" },
  { value: "America/Glace_Bay", label: "(GMT-04:00) Atlantic Time (Canada)" },
  { value: "America/St_Johns", label: "(GMT-03:30) Newfoundland" },
  { value: "America/Araguaina", label: "(GMT-03:00) UTC-3" },
  { value: "America/Montevideo", label: "(GMT-03:00) Montevideo" },
  { value: "America/Miquelon", label: "(GMT-03:00) Miquelon, St. Pierre" },
  { value: "America/Godthab", label: "(GMT-03:00) Greenland" },
  { value: "America/Argentina/Buenos_Aires", label: "(GMT-03:00) Buenos Aires" },
  { value: "America/Sao_Paulo", label: "(GMT-03:00) Brasilia" },
  { value: "America/Noronha", label: "(GMT-02:00) Mid-Atlantic" },
  { value: "Atlantic/Cape_Verde", label: "(GMT-01:00) Cape Verde Is." },
  { value: "Atlantic/Azores", label: "(GMT-01:00) Azores" },
  { value: "Europe/Belfast", label: "(GMT) Greenwich Mean Time : Belfast" },
  { value: "Europe/Dublin", label: "(GMT) Greenwich Mean Time : Dublin" },
  { value: "Europe/Lisbon", label: "(GMT) Greenwich Mean Time : Lisbon" },
  { value: "Europe/London", label: "(GMT) Greenwich Mean Time : London" },
  { value: "Africa/Abidjan", label: "(GMT) Monrovia, Reykjavik" },
  { value: "Europe/Amsterdam", label: "(GMT+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" },
  { value: "Europe/Belgrade", label: "(GMT+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague" },
  { value: "Europe/Brussels", label: "(GMT+01:00) Brussels, Copenhagen, Madrid, Paris" },
  { value: "Africa/Algiers", label: "(GMT+01:00) West Central Africa" },
  { value: "Africa/Windhoek", label: "(GMT+01:00) Windhoek" },
  { value: "Asia/Beirut", label: "(GMT+02:00) Beirut" },
  { value: "Africa/Cairo", label: "(GMT+02:00) Cairo" },
  { value: "Asia/Gaza", label: "(GMT+02:00) Gaza" },
  { value: "Africa/Blantyre", label: "(GMT+02:00) Harare, Pretoria" },
  { value: "Asia/Jerusalem", label: "(GMT+02:00) Jerusalem" },
  { value: "Europe/Minsk", label: "(GMT+02:00) Minsk" },
  { value: "Asia/Damascus", label: "(GMT+02:00) Syria" },
  { value: "Europe/Moscow", label: "(GMT+03:00) Moscow, St. Petersburg, Volgograd" },
  { value: "Africa/Addis_Ababa", label: "(GMT+03:00) Nairobi" },
  { value: "Asia/Tehran", label: "(GMT+03:30) Tehran" },
  { value: "Asia/Dubai", label: "(GMT+04:00) Abu Dhabi, Muscat" },
  { value: "Asia/Yerevan", label: "(GMT+04:00) Yerevan" },
  { value: "Asia/Kabul", label: "(GMT+04:30) Kabul" },
  { value: "Asia/Yekaterinburg", label: "(GMT+05:00) Ekaterinburg" },
  { value: "Asia/Tashkent", label: "(GMT+05:00) Tashkent" },
  { value: "Asia/Kolkata", label: "(GMT+05:30) Chennai, Kolkata, Mumbai, New Delhi" },
  { value: "Asia/Katmandu", label: "(GMT+05:45) Kathmandu" },
  { value: "Asia/Dhaka", label: "(GMT+06:00) Astana, Dhaka" },
  { value: "Asia/Novosibirsk", label: "(GMT+06:00) Novosibirsk" },
  { value: "Asia/Rangoon", label: "(GMT+06:30) Yangon (Rangoon)" },
  { value: "Asia/Bangkok", label: "(GMT+07:00) Bangkok, Hanoi, Jakarta" },
  { value: "Asia/Krasnoyarsk", label: "(GMT+07:00) Krasnoyarsk" },
  { value: "Asia/Hong_Kong", label: "(GMT+08:00) Beijing, Chongqing, Hong Kong, Urumqi" },
  { value: "Asia/Irkutsk", label: "(GMT+08:00) Irkutsk, Ulaan Bataar" },
  { value: "Australia/Perth", label: "(GMT+08:00) Perth" },
  { value: "Australia/Eucla", label: "(GMT+08:45) Eucla" },
  { value: "Asia/Tokyo", label: "(GMT+09:00) Osaka, Sapporo, Tokyo" },
  { value: "Asia/Seoul", label: "(GMT+09:00) Seoul" },
  { value: "Asia/Yakutsk", label: "(GMT+09:00) Yakutsk" },
  { value: "Australia/Adelaide", label: "(GMT+09:30) Adelaide" },
  { value: "Australia/Darwin", label: "(GMT+09:30) Darwin" },
  { value: "Australia/Brisbane", label: "(GMT+10:00) Brisbane" },
  { value: "Australia/Hobart", label: "(GMT+10:00) Hobart" },
  { value: "Asia/Vladivostok", label: "(GMT+10:00) Vladivostok" },
  { value: "Australia/Lord_Howe", label: "(GMT+10:30) Lord Howe Island" },
  { value: "Etc/GMT-11", label: "(GMT+11:00) Solomon Is., New Caledonia" },
  { value: "Asia/Magadan", label: "(GMT+11:00) Magadan" },
  { value: "Pacific/Norfolk", label: "(GMT+11:30) Norfolk Island" },
  { value: "Asia/Anadyr", label: "(GMT+12:00) Anadyr, Kamchatka" },
  { value: "Pacific/Auckland", label: "(GMT+12:00) Auckland, Wellington" },
  { value: "Etc/GMT-12", label: "(GMT+12:00) Fiji, Kamchatka, Marshall Is." },
  { value: "Pacific/Chatham", label: "(GMT+12:45) Chatham Islands" },
  { value: "Pacific/Tongatapu", label: "(GMT+13:00) Nuku'alofa" },
  { value: "Pacific/Kiritimati", label: "(GMT+14:00) Kiritimati" },

];
//*** PricingData ***//
export const pricingData = [
  { id: 1, cardname: 'BASIC', data: '$10', domain: '2', apps: '2', database: '1', color: 'primary' },
  { id: 2, cardname: 'PREMIUM', data: '$49', domain: '3', apps: '5', database: '3', color: 'pink' },
  { id: 3, cardname: 'ENTERPRISE', data: '$99', domain: '10', apps: '10', database: '8', color: 'warning' },
  { id: 4, cardname: 'UNLIMITED', data: '$139', domain: '12', apps: '10', database: '6', color: 'danger' },
]

export const pricingTable = [
  { id: 1, cardname: 'FREE', data: '$0', ads: '4', days: '30', icon1: <i className="fe fe-check text-success me-2"></i>, icon2: <i className="fe fe-x text-danger me-2"></i>, icon3: <i className="fe fe-x text-danger me-2"></i>, color: 'primary' },
  { id: 2, cardname: 'UNLIMITED', data: '$150', ads: 'Unlimited', days: '365', icon1: <i className="fe fe-check text-success me-2"></i>, icon2: <i className="fe fe-check text-success me-2"></i>, icon3: <i className="fe fe-check text-success me-2"></i>, color: 'warning' },
  { id: 3, cardname: 'PREMIUM', data: '$65', ads: '50', days: '60', icon1: <i className="fe fe-check text-success me-2"></i>, icon2: <i className="fe fe-x text-danger me-2"></i>, icon3: <i className="fe fe-x text-danger me-2"></i>, color: 'success' },
  { id: 4, cardname: 'ENTERPRISE', data: '$100', ads: '100', days: '180', icon1: <i className="fe fe-check text-success me-2"></i>, icon2: <i className="fe fe-check text-success me-2"></i>, icon3: <i className="fe fe-x text-danger me-2"></i>, color: 'danger' },
]

export const pricingCards = [
  { id: 1, cardname: 'PERSONAL', data: '$15', name1: '2', name2: '3', name3: '1', color: 'primary' },
  { id: 2, cardname: 'TEAM', data: '$25', name1: '3', name2: '4', name3: '2', color: 'warning' },
  { id: 3, cardname: 'BUSINESSS', data: '$99', name1: '5', name2: '8', name3: '2', color: 'success' },
  { id: 4, cardname: 'CORPORATE', data: '$35', name1: '4', name2: '6', name3: '2', color: 'danger' },
]

//*** SettingsData ***//
export const Setting = [
  { id: 1, title: 'Dashboard', description: 'Dashboard Settings such as sidemenu,header and main page can be Controlled.', icon: <i className="fe fe-home"></i> },
  { id: 2, title: 'Webapps', description: 'Web apps settings such as Apps,Elements,Advanced Ui & Mail can be Controlled.', icon: <i className="fe fe-grid"></i> },
  { id: 3, title: 'General', description: 'General settings such as Icons,Charts,Ecommerce can be Controlled.', icon: <i className="fe fe-server"></i> },
  { id: 4, title: 'Region & language', description: 'In this settings we can change the region and language manually.', icon: <i className="fe fe-flag"></i> },
  { id: 5, title: 'Notification', description: 'Notification settings we can control the notification privacy and security.', icon: <i className="fe fe-bell"></i> },
  { id: 6, title: 'Blog', description: 'In this settings we can modify all Blog related settings in this template.', icon: <i className="fe fe-settings"></i> },

]

//*** TodoTaskData ***//
export const taskData = [
  {
    id: 1,
    pic: Imagesdata("faces1"),
    badge: 9,
    badgecolor: 'purple',
    description: 'Work Assigned By Clients ,Try To Get New Work',
    pendingDescription: 'Sed Ut Perspiciatis Unde Omnis Iste Natus',
    assign: 'disabled'
  },
  {
    id: 2,
    pic: Imagesdata("faces12"),
    badge: 2,
    badgecolor: 'info',
    description: 'Voluptatem Accusantium Dolo Laudantium',
    pendingDescription: 'Inventore Veritatis Et Quasi Architecto',
    assign: ''
  },
  {
    id: 3,
    pic: Imagesdata("faces9"),
    badge: 6,
    badgecolor: 'danger',
    description: 'Nemo Enim Ipsam Voluptatem Quia Voluptas',
    pendingDescription: 'Vero Eos Et Accusamus Et Iusto Odio Dignissimos',
    assign: ''
  },
  {
    id: 4,
    pic: Imagesdata("faces4"),
    badge: 9,
    badgecolor: 'info',
    description: 'Ut Enim Ad Minima Veniam Nostrum Exercitationem',
    pendingDescription: 'Quis Autem Vel Eum Iure Reprehenderit Qui',
    assign: 'disabled'
  },
  {
    id: 5,
    pic: Imagesdata("faces15"),
    badge: 7,
    badgecolor: 'primary',
    description: 'I Must Explain To You How All This Mistaken',
    pendingDescription: 'I Will Give You A Complete Account Of The System',
    assign: ''
  },
  {
    id: 6,
    pic: Imagesdata("faces5"),
    badge: 4,
    badgecolor: 'info',
    description: 'Rationally Encounter Quences Extremely Painful',
    pendingDescription: 'Which Of Us Ever Undertakes Laborious Physical',
    assign: ''
  },
]
//*** WidgetsData ***//
//Row1

export const userData = [
  { id: 1, title: 'REAL TIME USERS', data1: '154', data2: '(+0.98%)', color: 'success', class: 'primary', value: 70, class1: '', icon: <i className="typcn typcn-group-outline text-primary tx-24"></i> },
  { id: 2, title: 'TOTAL VISITS', data1: '5274', data2: '(-12.45%)', color: 'danger', class: 'pink', value: 50, class1: '', icon: <i className="typcn typcn-chart-line-outline text-pink tx-24"></i> },
  { id: 3, title: 'BOUNCE RATE', data1: '76.3%', data2: '(+13.52%)', color: 'success', class: 'teal', value: 60, class1: '', icon: <i className="typcn typcn-chart-bar-outline text-teal tx-20"></i> },
  { id: 4, title: 'VISITS DURATION', data1: '5m 24s', data2: '(+19.5%)', color: 'success', class: 'purple', value: 40, class1: 'd-inline-flex', icon: <i className="typcn typcn-time  text-purple tx-24"></i> },
]

//Row2
export const baseData = [
  { id: 1, title: 'New users', data1: '3,672', data2: '50%', data3: 'Monthly users', icon: <i className="mdi mdi-account-multiple icon-size float-start text-primary text-primary-shadow"></i> },
  { id: 2, title: 'Total Tax', data1: '$89,265', data2: '$7,893', data3: 'Monthly Income', icon: <i className="mdi mdi-cube icon-size float-start text-success text-success-shadow"></i> },
  { id: 3, title: 'Total Profit', data1: '$23,987', data2: '$4,678', data3: 'Monthly Profit', icon: <i className="icon-size mdi mdi-poll-box   float-start text-warning text-warning-shadow"></i> },
  { id: 4, title: 'Total Sales', data1: '46,486', data2: '3,756', data3: 'Monthly Sales', icon: <i className="fa fa-cart-plus icon-size float-start text-danger text-danger-shadow"></i> }
]

//Row3

export const revenueData = [
  { id: 1, title: 'App Views', data1: '19.89K', data2: '(+25%)', value: '60', color: 'primary', class1: '', icon: <i className="fe fe-eye project bg-primary-transparent text-primary"></i> },
  { id: 2, title: 'New Users', data1: '692', data2: '(+15%)', value: '50', color: 'secondary', class1: '', icon: <i className="fe fe-users project bg-pink-transparent text-pink"></i> },
  { id: 3, title: 'Churned Users', data1: '286', data2: '(+08%)', value: '30', color: 'danger', class1: '', icon: <i className="ti-pulse project bg-warning-transparent text-warning"></i> },
  { id: 4, title: 'Total Revenue', data1: '$2.98M', data2: '(+35%)', value: '25', color: 'success', class1: 'd-inline-flex', icon: <i className="ti-bar-chart-alt project bg-success-transparent text-success"></i> }
]

export const profitData = [
  { id: 1, title: 'Total Revenue', data1: '$125.465', icon: <i className="ti-bar-chart project bg-primary-transparent mx-auto text-primary "></i> },
  { id: 2, title: 'Marketing Spend', data1: '$75.045', icon: <i className="ti-pie-chart project bg-pink-transparent mx-auto text-pink "></i> },
  { id: 3, title: 'Total Profit', data1: '$46.352', icon: <i className="ti-pulse  project bg-teal-transparent mx-auto text-teal "></i> },
  { id: 4, title: 'Total Investiment', data1: '62%', icon: <i className="ti-stats-up project bg-success-transparent mx-auto text-success "></i> },

]

//*** Ecommerece Pages ***//

//cart data
export const cartData = [
  {
    id: 1,
    preview: Imagesdata("Ecom1"),
    name: 'FLOWER POT',
    size: 'XXL',
    color: 'Green and Black color',
    newprice: '1200',
  },
  {
    id: 2,
    preview: Imagesdata("Ecom6"),
    name: 'COLLEGE BAG',
    size: 'XL',
    color: 'Black color',
    newprice: '1167',
  },
  {
    id: 3,
    preview: Imagesdata("Ecom8"),
    name: 'SMART WATCH',
    size: 'XL',
    color: 'LightPink color',
    newprice: '967',
  },
  {
    id: 4,
    preview: Imagesdata("Ecom2"),
    name: 'CHAIR',
    size: '11-12 inches',
    color: 'LightGray color',
    newprice: '767',
  }
]
export const Quantity = [
  { value: "1", label: "1" },
  { value: "2", label: "2" },
  { value: "3", label: "3" },
  { value: "4", label: "4" }
];

//Productdetails data
export const productData = [
  {
    id: 1,
    pic: Imagesdata("Ecom1"),
    type: 'Home Decor item',
    title: 'Wodden Flower Vase',
    oldprice: '$2498',
    newprice: '$1967'
  },
  {
    id: 4,
    pic: Imagesdata("Ecom4"),
    type: 'Accessories',
    title: 'Headphones',
    oldprice: '$4998',
    newprice: '$2925'
  },
  {
    id: 9,
    pic: Imagesdata("Ecom7"),
    type: 'Electronics',
    title: 'lence Laptop',
    oldprice: '$1499',
    newprice: '$1299'
  },
  {
    id: 8,
    pic: Imagesdata("Ecom8"),
    type: 'Accessories',
    title: 'Mens Digital Watch',
    oldprice: '$2498',
    newprice: '$1967'
  }
]

//ShopData
//Select 2 Data Sources

export const Mens = [
  { value: "Foot wear", label: "Foot wear" },
  { value: "Top wear", label: "Top wear" },
  { value: "Bootom wear", label: "Bootom wear" },
  { value: "Men's Groming", label: "Men's Groming" },
  { value: "Accessories", label: "Accessories" }
];

export const women = [
  { value: "Western wear", label: "Western wear" },
  { value: "Foot wear", label: "Foot wear" },
  { value: "Top wear", label: "Top wear" },
  { value: "Bootom wear", label: "Bootom wear" },
  { value: "Beuty Groming", label: "Beuty Groming" },
  { value: "Accessories", label: "Accessories" },
  { value: "jewellery", label: "jewellery" }
];

export const children = [
  { value: "Boys clothing", label: "Boys clothing" },
  { value: "girls Clothing", label: "girls Clothing" },
  { value: "Toys", label: "Toys" },
  { value: "Baby Care", label: "Baby Care" },
  { value: "Kids footwear", label: "Kids footwear" }
];

export const Electronics = [
  { value: "Mobiles", label: "Mobiles" },
  { value: "Laptops", label: "Laptops" },
  { value: "Gaming & Accessories", label: "Gaming & Accessories" },
  { value: "Health care Appliances", label: "Health care Appliances" }
];

export const Extra = [
  { value: "Stationery", label: "Stationery" },
  { value: "Books", label: "Books" },
  { value: "Gaming", label: "Gaming" },
  { value: "Music", label: "Music" },
  { value: "Exercise & fitness", label: "Exercise & fitness" }
];

export const Brand = [
  { value: "Wallmart", label: "Wallmart" },
  { value: "Catseye", label: "Catseye" },
  { value: "Moonsoon", label: "Moonsoon" },
  { value: "Textmart", label: "Textmart" }
];

export const Type = [
  { value: "Small", label: "Small" },
  { value: "Medium", label: "Medium" },
  { value: "Large", label: "Large" },
  { value: "Extra Large", label: "Extra Large" }
];
export const productData2 = [
  {
    id: 1,
    pic: Imagesdata("ecommerce1"),
    badgecolor: 'pink',
    title: 'FLOWER POT',
    price: '$26',
    altprice: '$59'
  },
  {
    id: 2,
    pic: Imagesdata("ecommerce2"),
    badgecolor: '',
    wishicon: <i className="mdi mdi-heart text-danger ms-auto wishlist"></i>,
    title: 'CHAIR',
    price: '$35',
    altprice: '$79'
  },
  {
    id: 3,
    pic: Imagesdata("ecommerce3"),
    badgecolor: 'success',
    title: 'HIKING BOOTS',
    price: '$25',
    altprice: '$59'
  },
  {
    id: 4,
    pic: Imagesdata("ecommerce6"),
    badgecolor: 'success',
    title: 'COLLEGE BAG',
    price: '$35',
    altprice: '$69'
  },
  {
    id: 5,
    pic: Imagesdata("ecommerce4"),
    badgecolor: '',
    wishicon: <i className="mdi mdi-heart ms-auto wishlist text-danger"></i>,
    title: 'HEADPHONES',
    price: '$46',
    altprice: '$89'
  },
  {
    id: 6,
    pic: Imagesdata("ecommerce5"),
    badgecolor: '',
    title: 'CAMERA LENS',
    price: '$159',
    altprice: '$299'
  },
  {
    id: 7,
    pic: Imagesdata("ecommerce9"),
    badgecolor: 'purple',
    wishicon: <i className="mdi mdi-heart ms-auto wishlist text-danger"></i>,
    title: 'CAMERA',
    price: '$129',
    altprice: '$189'
  },
  {
    id: 8,
    pic: Imagesdata("ecommerce11"),
    badgecolor: '',
    title: 'HANDBAG',
    price: '$19',
    altprice: '$39'
  },
  {
    id: 9,
    pic: Imagesdata("ecommerce7"),
    badgecolor: 'info',
    wishicon: <i className="mdi mdi-heart ms-auto wishlist text-danger"></i>,
    title: 'LAPTOP',
    price: '$89',
    altprice: '$120'
  }
];

//WishListData
export const productData1 = [
  {
    id: 1,
    pic: Imagesdata("Ecom1"),
    imgs: [
      { "img": Imagesdata("Ecom01") },
    ],
    rating: '(23)',
    oldprice: '2498',
    newprice: '1967',
    title: 'Wodden Flower Vase'
  },
  {
    id: 2,
    pic: Imagesdata("Ecom2"),
    pic2: Imagesdata("ecommerce22"),
    pic3: Imagesdata("ecommerce23"),
    rating: '(64)',
    oldprice: '2999',
    newprice: '1999',
    title: 'Simple Black Chair'
  },
  {
    id: 3,
    pic: Imagesdata("Ecom3"),
    pic2: Imagesdata("ecommerce32"),
    pic3: Imagesdata("ecommerce33"),
    rating: '(41)',
    oldprice: '1499',
    newprice: '999',
    title: 'Mens Formal Red Shoes'
  },
  {
    id: 4,
    pic: Imagesdata("Ecom4"),
    pic2: Imagesdata("ecommerce42"),
    pic3: Imagesdata("ecommerce43"),
    rating: '(232)',
    oldprice: '4998',
    newprice: '2925',
    title: 'Black Classic Headphones'
  },
  {
    id: 5,
    pic: Imagesdata("Ecom5"),
    pic2: Imagesdata("ecommerce52"),
    pic3: Imagesdata("ecommerce53"),
    rating: '(143)',
    oldprice: '2998',
    newprice: '1998',
    title: 'Lence Camera Lens'
  },
  {
    id: 6,
    pic: Imagesdata("Ecom6"),
    pic2: Imagesdata("ecommerce62"),
    pic3: Imagesdata("ecommerce63"),
    rating: '(29)',
    oldprice: '2999',
    newprice: '2499',
    title: 'Energy School Bag'
  },
  {
    id: 7,
    pic: Imagesdata("Ecom9"),
    pic2: Imagesdata("ecommerce92"),
    pic3: Imagesdata("ecommerce93"),
    rating: '(20)',
    oldprice: '3498',
    newprice: '2999',
    title: 'Lence Camera'
  },
  {
    id: 8,
    pic: Imagesdata("Ecom8"),
    pic2: Imagesdata("ecommerce82"),
    pic3: Imagesdata("ecommerce83"),
    rating: '(283)',
    oldprice: '2498',
    newprice: '1967',
    title: 'Mens Digital Watch'
  },
  {
    id: 9,
    pic: Imagesdata("Ecom7"),
    pic2: Imagesdata("ecommerce72"),
    pic3: Imagesdata("ecommerce73"),
    rating: '(14)',
    oldprice: '1499',
    newprice: '1299',
    title: 'lence Laptop'
  },
  {
    id: 10,
    pic: Imagesdata("Ecom11"),
    pic2: Imagesdata("ecommerce112"),
    pic3: Imagesdata("ecommerce113"),
    rating: '(143)',
    oldprice: '2998',
    newprice: '1998',
    title: 'womens Party Wear Hand Bag'
  },
  {
    id: 11,
    pic: Imagesdata("Ecom5"),
    pic2: Imagesdata("ecommerce52"),
    pic3: Imagesdata("ecommerce53"),
    rating: '(29)',
    oldprice: '2999',
    newprice: '2499',
    title: 'simple white Stool'
  },
  {
    id: 12,
    pic: Imagesdata("Ecom2"),
    pic2: Imagesdata("ecommerce22"),
    pic3: Imagesdata("ecommerce23"),
    rating: '(20)',
    oldprice: '3998',
    newprice: '2999',
    title: 'White Ear buds'
  }
]

export const PODUCTDATA = [
  {
    id: 1,
    preview: Imagesdata("Ecom1"),
    imges: [
      { "img": Imagesdata("Ecom01") },
      { "img": Imagesdata("Ecom02") },
      { "img": Imagesdata("Ecom03") },
    ],
    rating: '(23)',
    oldprice: '2498',
    newprice: '1967',
    title: 'Wodden Flower Vase'
  },
  {
    id: 2,
    preview: Imagesdata("Ecom2"),
    imges: [
      { "img": Imagesdata("Ecom2") },
      { "img": Imagesdata("Ecom021") },
      { "img": Imagesdata("Ecom022") },
    ],
    rating: '(64)',
    oldprice: '2999',
    newprice: '1999',
    title: 'Simple Black Chair'
  },
  {
    id: 3,
    preview: Imagesdata("Ecom3"),
    imges: [
      { "img": Imagesdata("Ecom3") },
      { "img": Imagesdata("Ecom031") },
      { "img": Imagesdata("Ecom032") },
    ],
    rating: '(41)',
    oldprice: '1499',
    newprice: '999',
    title: 'Mens Formal Red Shoes'
  },
  {
    id: 4,
    preview: Imagesdata("Ecom4"),
    imges: [
      { "img": Imagesdata("Ecom4") },
      { "img": Imagesdata("Ecom041") },
      { "img": Imagesdata("Ecom042") },
    ],
    rating: '(232)',
    oldprice: '4998',
    newprice: '2925',
    title: 'Black Classic Headphones'
  },
  {
    id: 5,
    preview: Imagesdata("Ecom5"),
    imges: [
      { "img": Imagesdata("Ecom5") },
      { "img": Imagesdata("Ecom051") },
      { "img": Imagesdata("Ecom052") },
    ],
    rating: '(143)',
    oldprice: '2998',
    newprice: '1998',
    title: 'Lence Camera Lens'
  },
  {
    id: 6,
    preview: Imagesdata("Ecom6"),
    imges: [
      { "img": Imagesdata("Ecom6") },
      { "img": Imagesdata("Ecom061") },
      { "img": Imagesdata("Ecom062") },
    ],
    rating: '(29)',
    oldprice: '2999',
    newprice: '2499',
    title: 'Energy School Bag'
  },
  {
    id: 7,
    preview: Imagesdata("Ecom9"),
    imges: [
      { "img": Imagesdata("Ecom9") },
      { "img": Imagesdata("Ecom091") },
      { "img": Imagesdata("Ecom092") },
    ],
    rating: '(20)',
    oldprice: '3498',
    newprice: '2999',
    title: 'Lence Camera'
  },
  {
    id: 8,
    preview: Imagesdata("Ecom8"),
    imges: [
      { "img": Imagesdata("Ecom8") },
      { "img": Imagesdata("Ecom081") },
      { "img": Imagesdata("Ecom082") },
    ],
    rating: '(283)',
    oldprice: '2498',
    newprice: '1967',
    title: 'Mens Digital Watch'
  },
  {
    id: 9,
    preview: Imagesdata("Ecom7"),
    imges: [
      { "img": Imagesdata("Ecom7") },
      { "img": Imagesdata("Ecom071") },
      { "img": Imagesdata("Ecom072") },
    ],
    rating: '(14)',
    oldprice: '1499',
    newprice: '1299',
    title: 'lence Laptop'
  },
  {
    id: 10,
    preview: Imagesdata("Ecom11"),
    imges: [
      { "img": Imagesdata("Ecom11") },
      { "img": Imagesdata("Ecom011") },
      { "img": Imagesdata("Ecom012") },
    ],
    rating: '(143)',
    oldprice: '2998',
    newprice: '1998',
    title: 'womens Party Wear Hand Bag'
  },
  {
    id: 11,
    preview: Imagesdata("Ecom5"),
    imges: [
      { "img": Imagesdata("Ecom5") },
      { "img": Imagesdata("Ecom051") },
      { "img": Imagesdata("Ecom052") },
    ],
    rating: '(29)',
    oldprice: '2999',
    newprice: '2499',
    title: 'simple white Stool'
  },
  {
    id: 12,
    preview: Imagesdata("Ecom2"),
    imges: [
      { "img": Imagesdata("Ecom2") },
      { "img": Imagesdata("Ecom021") },
      { "img": Imagesdata("Ecom022") },
    ],
    rating: '(20)',
    oldprice: '3998',
    newprice: '2999',
    title: 'White Ear buds'
  }
]

//*** CounterData ***//
export const counter = [
  { id: 1, icon: 'icon-people', class: 'Client', color: 'bg-primary-gradient', data: '2569' },
  { id: 2, icon: 'icon-rocket', class: 'Total Sales', color: 'bg-danger-gradient', data: '1765' },
  { id: 3, icon: 'icon-docs', class: 'Total Projects', color: 'bg-success-gradient', data: '846' },
  { id: 4, icon: 'icon-emotsmile', class: 'Happy Customers', color: 'bg-warning-gradient', data: '7253' },
]

//*** BlogData ***//
export const blog = [

  { id: 1, src: Imagesdata("photos26"), class: 'Health', data: 'Health care and fitness awareness', text: '22 hrs ago' },
  { id: 2, src: Imagesdata("photos22"), class: 'Beautician', data: 'Beautification courses are available.', text: '2 hrs ago' },
  { id: 3, src: Imagesdata("photos23"), class: 'Tourism', data: 'Explore tourism by visitinig places.', text: '2 day ago' },
  { id: 4, src: Imagesdata("photos24"), class: 'Literature', data: 'English and spanish classNamees in Your way', text: '1 week ago' },
  { id: 5, src: Imagesdata("photos25"), class: 'Music', data: 'Music in a peaceful way', text: '1 day ago' },

]
export const blogdata = [
  { id: 1, src: Imagesdata("photos2"), class: 'HOW TO BECOME BETTER WITH BUILDING IN 1 MONTH !', src1: Imagesdata("faces2"), name: 'Abigail John', date: 'Aug 24,2021' },
  { id: 2, src: Imagesdata("photos1"), class: '10 WAYS TO IMMEDIATELY START SELLING PRODUCTS !', src1: Imagesdata("faces9"), name: 'Jiggel mossin', date: 'Aug 01,2021' },
  { id: 3, src: Imagesdata("photos9"), class: '3 EASY WAYS TO MAKE YOUR MOBILE FASTER & EVEN !', src1: Imagesdata("faces7"), name: 'Raven Chanan', date: 'Aug 19,2021' },
]
export const blogauthor = [
  { id: 1, src: Imagesdata("faces3"), class: 'Samatha Melon', text: '8 hrs ago', color: 'success' },
  { id: 2, src: Imagesdata("faces11"), class: 'Alli Grater', text: '12 hrs ago', color: 'danger' },
  { id: 3, src: Imagesdata("faces17"), class: 'Gabe Lackmen', text: '1 hr ago', color: 'danger' },
  { id: 4, src: Imagesdata("faces15"), class: 'Manuel Labor', text: '3 days ago', color: 'success' },
  { id: 5, src: Imagesdata("faces13"), class: 'Manuel Labor', text: '22 hrs ago', color: 'danger' },
  { id: 6, src: Imagesdata("faces13"), class: 'Manuel Labor', text: '1 day ago', color: 'danger' },
]

//*** CardsData ***//
export const Carddata = [
  { id: 1, color: '' },
  { id: 2, color: 'primary' },
  { id: 3, color: 'secondary' },
  { id: 4, color: 'success' },
  { id: 5, color: 'warning' },
  { id: 6, color: 'info' },
  { id: 7, color: 'purple' },
  { id: 8, color: 'danger' },
]
export const Cardlink = [
  { id: 1, color: '', class: '' },
  { id: 2, color: '', class: '' },
  { id: 3, color: 'info', class: 'tx-white' },
]

export const Cradtitle = [
  { id: 1, color: 'bg-gray-200', class: '', color1: 'dark', data: '' },
  { id: 2, color: 'bg-secondary', class: 'mg-md-t-0', color1: 'white', data: 'tx-white' },
  { id: 3, color: 'bg-secondary', class: 'mg-md-t-0', color1: 'white', data: 'tx-white' },
]

export const img = [
  { id: 1, src1: Imagesdata("photos14") },
  { id: 2, src1: Imagesdata("photos12") },
  { id: 3, src1: Imagesdata("photos13") },
]
export const imgs = [
  { id: 1, src1: Imagesdata("photos1"), class: '' },
  { id: 2, src1: Imagesdata("photos2"), class: 'mg-md-t-0' },
  { id: 3, src1: Imagesdata("photos11"), class: 'mg-md-t-0' },
]
export const carddata = [
  { id: 1, src1: Imagesdata("photos3"), class: '' },
  { id: 2, src1: Imagesdata("photos5"), class: 'card-img' },
  { id: 3, src1: Imagesdata("photos6"), class: 'card-img' },
]
export const carddatas = [
  { id: 1, color: 'bg-secondary', class: '' },
  { id: 2, color: 'bg-primary', class: 'mg-md-t-' },
  { id: 3, color: 'bg-gray-800', class: 'mg-md-t-' },
]

//Contact Data

export const recentdata = [
  { id: 1, src1: Imagesdata("user5"), heading: 'Abigali kelly', text: 'Front end' },
  { id: 2, src1: Imagesdata("faces2"), heading: 'Brenda Crux', text: 'Angular' },
  { id: 3, src1: Imagesdata("faces8"), heading: 'Rach Michelle', text: 'Php' },
  { id: 4, src1: Imagesdata("faces9"), heading: 'Matt Harder', text: 'Codeignitor' },
  { id: 5, src1: Imagesdata("faces1"), heading: 'Micheal Phelps', text: 'Web Testing' },
  { id: 6, src1: Imagesdata("faces7"), heading: 'Azenda Hills', text: 'Django' },
]

//Widgets-notification

export const widgets = [
  { id: 1, heading: 'Items Not Found', src1: Imagesdata("nodata") },
  { id: 2, heading: 'Its Empty In Here', src1: Imagesdata("taking") },
  { id: 3, heading: 'No Site Selected', src1: Imagesdata("imac") },
]

//Widgets Data

export const sales = [
  { id: 1, icon: 'fe-users tx-40', color: 'bg-primary-gradient', heading: 'Members', data: '600' },
  { id: 2, icon: 'fe-shopping-cart tx-40', color: 'bg-danger-gradient', heading: 'Sales', data: '854' },
  { id: 3, icon: 'fe-bar-chart-2 tx-40', color: 'bg-success-gradient ', heading: 'Profits', data: '98K' },
  { id: 4, icon: 'fe-pie-chart tx-40', color: 'bg-warning-gradient', heading: 'Taxes', data: '876' },
]

export const services = [
  { id: 1, heading: 'Services', data: '$124', icon: 'si si-basket-loaded tx-30', icon1: 'si si-arrow-down-circle text-warning me-1-20  me-2', text: 'Daily Orders' },
  { id: 2, heading: 'Sources', data: '$124', icon: 'si si-credit-card tx-30', icon1: 'si si-arrow-up-circle text-success me-2', text: 'Less Sales' },
  { id: 3, heading: 'Income', data: '21%', icon: 'si si-chart tx-30', icon1: 'si si-exclamation text-info me-2', text: 'From Last Month' },
  { id: 4, heading: 'Followers', data: '24K', icon: 'si si-social-facebook tx-30', icon1: 'si si-check me-1 text-primary me-2', text: 'Recent History' },
]

export const alexa = [
  { id: 1, color: 'primary', src1: Imagesdata("faces17") },
  { id: 2, color: 'danger', src1: Imagesdata("faces12") },
  { id: 3, color: 'success', src1: Imagesdata("faces5") },
]

//Filemanager Data

export const folder = [
  { id: 1, icon: 'fe-image', data: 'Images', class: 'active' },
  { id: 2, icon: 'fe-music', data: 'Music', class: '' },
  { id: 3, icon: 'fe-video', data: 'Videos', class: '' },
  { id: 4, icon: 'fe-smartphone', data: 'APKS', class: '' },
  { id: 5, icon: 'fe-download', data: 'Dounloads', class: '' },
  { id: 6, icon: 'fe-heart', data: 'Favourites', class: '' },
  { id: 7, icon: 'fe-eye', data: 'Hidden files', class: '' },
  { id: 8, icon: 'fe-share', data: 'Transfer files', class: '' },
  { id: 9, icon: 'fe-database', data: 'Google drive', class: '' },
  { id: 10, icon: 'fe-airplay', data: 'FTP', class: '' },
  { id: 11, icon: 'fe-lock', data: 'Private files', class: '' },
  { id: 12, icon: 'fe-wind', data: 'Deep clean', class: '' },
  { id: 13, icon: 'fe-grid ', data: 'More', class: '' },
]
export const folderData = [
  { id: 1, image: Imagesdata("file4"), title: 'videos', space: '4.23gb' },
  { id: 2, image: Imagesdata("file4"), title: 'Images', space: '1.23gb' },
  { id: 3, image: Imagesdata("file5"), title: 'Sea', space: '8.97mb' },
  { id: 4, image: Imagesdata("file4"), title: 'Downloads', space: '453kb' },
  { id: 5, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 6, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 7, image: Imagesdata("file6"), title: 'Word document', space: '23kb' },
  { id: 8, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 9, image: Imagesdata("file5"), title: 'Outdoor Image', space: '23kb' },
  { id: 10, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 11, image: Imagesdata("file4"), title: 'Downloads', space: '453kb' },
  { id: 12, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
]

export const fileData = [
  { id: 1, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#fbb8c7" d="M18.12158,11.88672c-1.18039-1.14226-3.05327-1.14485-4.23681-0.00586l-1.58985,1.58008c-0.39155,0.38922-0.39343,1.02216-0.00421,1.41371c0.00043,0.00043,0.00085,0.00086,0.00128,0.00129l4.67481,4.68457L17.14148,20H19c1.65611-0.00181,2.99819-1.34389,3-3v-0.83008c-0.00009-0.26567-0.10585-0.52039-0.29395-0.708L18.12158,11.88672z" /><path fill="#f74f75" d="M5,20h14c0.355-0.00278,0.70662-0.06923,1.03815-0.19617l-9.91657-9.91711C8.94094,8.74376,7.06706,8.74161,5.88379,9.88184L2.294,13.46191c-0.18812,0.1876-0.2939,0.44232-0.294,0.708V17C2.00181,18.65611,3.34389,19.99819,5,20z" /><path fill="#fa95ac" d="M19,4H5C3.34387,4.00183,2.00183,5.34387,2,7v7.16992c0.00012-0.26569,0.1059-0.52039,0.29401-0.70801l3.58978-3.58008c1.18329-1.14026,3.05713-1.13806,4.23779,0.00488l2.87585,2.87604l0.88733-0.8819c1.18353-1.13898,3.05646-1.13641,4.23682,0.00586l3.58447,3.5752c0.18811,0.18762,0.29388,0.44232,0.29395,0.70801V7C21.99817,5.34387,20.65613,4.00183,19,4z" /></svg>, title: 'Images', space: '14.2 mb' },
  { id: 2, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#94daf6" d="M14,18H5c-1.65611-0.00181-2.99819-1.34389-3-3V9c0.00181-1.65611,1.34389-2.99819,3-3h9c1.65611,0.00181,2.99819,1.34389,3,3v6C16.99819,16.65611,15.65611,17.99819,14,18z" /><path fill="#4ec2f0" d="M21.89465,7.55359c-0.24683-0.49432-0.8476-0.69495-1.34192-0.44812l-3.56421,1.7821C16.98999,8.92572,16.99994,8.96149,17,9v6c-0.00006,0.03851-0.01001,0.07428-0.01147,0.11243l3.56421,1.7821C20.69165,16.96381,20.84479,16.99994,21,17c0.55212-0.00037,0.99969-0.44788,1-1V8C21.99994,7.84503,21.96387,7.6922,21.89465,7.55359z" /></svg>, title: 'Video', space: '212 mb' },
  { id: 3, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#ffd79c" d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z" /><path fill="#ffbd5a" d="M20 9H15a2 2 0 0 1-2-2V2zM12 18.00031a.99943.99943 0 0 1-1-1v-2a1 1 0 1 1 2 0v2A.99943.99943 0 0 1 12 18.00031zM12 13.00031a.8444.8444 0 0 1-.37988-.08008 1.02883 1.02883 0 0 1-.33008-.21.98946.98946 0 0 1-.29-.71 1.02776 1.02776 0 0 1 .29-.71 1.60941 1.60941 0 0 1 .14941-.12012.74157.74157 0 0 1 .18067-.08984.61981.61981 0 0 1 .17968-.06055.95515.95515 0 0 1 .58008.06055 1.16023 1.16023 0 0 1 .33008.21 1.0321 1.0321 0 0 1 .29.71.99349.99349 0 0 1-.29.71A1.01024 1.01024 0 0 1 12 13.00031z" /></svg>, title: 'Docs', space: '34 mb' },
  { id: 4, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#f34343" d="M21.65137,2.24121a1.00561,1.00561,0,0,0-.80323-.22949l-13,2A1.00054,1.00054,0,0,0,7,5V15.35107A3.45946,3.45946,0,0,0,5.5,15,3.5,3.5,0,1,0,9,18.5V10.85779L20,9.16553v4.18554A3.45946,3.45946,0,0,0,18.5,13,3.5,3.5,0,1,0,22,16.5V3A.99909.99909,0,0,0,21.65137,2.24121Z" /></svg>, title: 'Musics', space: '1.5 gb' },
  { id: 5, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" viewBox="0 0 24 24"><path fill="#aca7fb" d="M21.2,6.21l-7.58,7.58c-1.16755,1.17084-3.06319,1.17351-4.23404,0.00596C9.38397,13.79398,9.38198,13.79199,9.38,13.79L1.8,6.21C2.29464,5.16676,3.34544,4.50126,4.5,4.5h14C19.65456,4.50126,20.70536,5.16676,21.2,6.21z" /><path fill="#c8c4fc" d="M21.20001,6.21002L13.62,13.78998c-1.16754,1.17084-3.06317,1.17352-4.23401,0.00598C9.38397,13.79401,9.38196,13.79199,9.38,13.78998L1.79999,6.21002C1.60345,6.61169,1.50085,7.0528,1.5,7.5v10c0.00488,1.65485,1.34515,2.99512,3,3h14c1.65485-0.00488,2.99512-1.34515,3-3v-10C21.49915,7.0528,21.39655,6.61169,21.20001,6.21002z" /><path fill="#766df9" d="M17.5,9.5c-0.26527,0.0003-0.51971-0.10515-0.707-0.293l-2-2c-0.38694-0.39399-0.38123-1.02706,0.01276-1.414c0.38897-0.38202,1.01227-0.38202,1.40125,0L17.5,7.086l3.293-3.293c0.39399-0.38694,1.02706-0.38122,1.414,0.01277c0.38201,0.38897,0.38201,1.01226,0,1.40123l-4,4C18.01971,9.39485,17.76527,9.5003,17.5,9.5z" /></svg>, title: 'APK', space: '550 mb' },
  { id: 6, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#75c3b6" d="M20,9,13,2H7A3,3,0,0,0,4,5V19a3,3,0,0,0,3,3H17a3,3,0,0,0,3-3Z" /><path fill="#1a9c86" d="M20 9H15a2 2 0 0 1-2-2V2zM12 18.00031a.99943.99943 0 0 1-1-1v-5a1 1 0 1 1 2 0v5A.99943.99943 0 0 1 12 18.00031z" /><path fill="#1a9c86" d="M12,18.00031a.99676.99676,0,0,1-.707-.293l-2-2A.99989.99989,0,1,1,10.707,14.29328L12,15.58625l1.293-1.293A.99989.99989,0,1,1,14.707,15.70734l-2,2A.99676.99676,0,0,1,12,18.00031Z" /></svg>, title: 'Downloads', space: '10.8 mb' },
  { id: 7, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#fdb172" d="M12.00011,22h-9a.99991.99991,0,0,1-.707-1.707L4.257,18.3291A10.00061,10.00061,0,1,1,12.00011,22Z" /><path fill="#fd7e14" d="M12,16.24219a.99676.99676,0,0,1-.707-.293L8.46484,13.12109a3.00244,3.00244,0,0,1,0-4.24218A3.06772,3.06772,0,0,1,12,8.35254a3.0699,3.0699,0,0,1,3.53613.52637,3.00332,3.00332,0,0,1-.001,4.24218L12.707,15.94922A.99676.99676,0,0,1,12,16.24219Z" /></svg>, title: 'Chat', space: '1.5 gb' },
  { id: 8, svg: <svg className="file-manager-icon me-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><rect width="9" height="9" x="2" y="2" fill="#f74f75" rx="1" /><rect width="9" height="9" x="2" y="13" fill="#fa95ac" rx="1" /><rect width="9" height="9" x="13" y="2" fill="#fa95ac" rx="1" /><rect width="9" height="9" x="13" y="13" fill="#fa95ac" rx="1" /></svg>, title: 'More', space: '16 gb' }
]

//Filemanager List Data
export const FileList = [
  { id: 1, image: Imagesdata("file4"), title: 'videos', space: '4.23gb' },
  { id: 2, image: Imagesdata("file4"), title: 'Images', space: '1.23gb' },
  { id: 3, image: Imagesdata("file4"), title: 'Downloads', space: '453kb' },
  { id: 4, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 5, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 6, image: Imagesdata("file6"), title: 'Word document', space: '23kb' },
  { id: 7, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 8, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 9, image: Imagesdata("file4"), title: 'Downloads', space: '453kb' },
  { id: 10, image: Imagesdata("file2"), title: 'document.pdf', space: '23kb' },
  { id: 11, image: Imagesdata("file2"), title: 'document.pdf', space: '453kb' },
  { id: 12, image: Imagesdata("file4"), title: 'Downloads', space: '453kb' },
  { id: 13, image: Imagesdata("file1"), title: 'Document', space: '23kb' },
  { id: 14, image: Imagesdata("file5"), title: 'login image', space: '23kb' },
  { id: 15, image: Imagesdata("file5"), title: 'beach image', space: '4.23gb' },
  { id: 16, image: Imagesdata("file5"), title: 'sky image', space: '1.23gb' },
  { id: 17, image: Imagesdata("file5"), title: 'Sea', space: '897mb' },
  { id: 18, image: Imagesdata("file5"), title: 'Outdoor Image', space: '23kb' }
]


//FileAttachment Data 

export const filetags = [
  { id: 1, icon: 'mdi-file-image tx-24', data: 'Image01..._jpg ', color: 'primary' },
  { id: 2, icon: 'mdi-music tx-24', data: 'music-mp3 ', color: 'info' },
  { id: 3, icon: 'mdi-file-video tx-24', data: 'video0014...-mp4 ', color: 'danger' },
  { id: 4, icon: 'mdi-file-excel tx-24', data: ' Document.exl ', color: 'success' },
  { id: 5, icon: 'mdi-file-pdf tx-24', data: 'AMN0012.pdf ', color: 'danger' },
  { id: 6, icon: 'mdi-zip-box tx-24', data: ' design00123.zip ', color: 'primary' },
  { id: 7, icon: 'mdi-file-word tx-24', data: 'Document.doc ', color: 'info' },
  { id: 8, icon: 'mdi-file-powerpoint  tx-24', data: ' prsentation.ppt ', color: 'warning' },
  { id: 9, icon: 'mdi-volume-high tx-24', data: 'audio-mp4 ', color: 'pink' },
]
export const smallimage = [
  { id: 1, src1: Imagesdata("file5"), data: 'Image01.jpg' },
  { id: 2, src1: Imagesdata("file1"), data: 'Word.doc' },
  { id: 3, src1: Imagesdata("file3"), data: 'Excel.xls' },
  { id: 4, src1: Imagesdata("file2"), data: 'Document.pdf' },
  { id: 5, src1: Imagesdata("media11"), data: 'Image02.jpg' },
]

//Buttons Data

export const button = [
  { id: 1, color: 'primary', heading: 'Primary' },
  { id: 2, color: 'secondary', heading: 'Secondary' },
  { id: 3, color: 'success', heading: 'Success' },
  { id: 4, color: 'warning', heading: 'Warning' },
  { id: 5, color: 'danger', heading: 'Danger' },
  { id: 6, color: 'info', heading: 'Info' },
  { id: 7, color: 'light', heading: 'Light' },
  { id: 8, color: 'dark', heading: 'Dark' },
]

//Tags Data

export const colortag = [
  { id: 1, color: 'primary', data: 'primary tag' },
  { id: 2, color: 'secondary', data: 'secondary tag' },
  { id: 3, color: 'success', data: 'success tag' },
  { id: 4, color: 'warning', data: 'warning tag' },
  { id: 5, color: 'teal', data: 'teal tag' },
  { id: 6, color: 'danger', data: 'danger tag' },
]

export const tags = [
  { id: 1, color: "blue", data: "Blue tag" },
  { id: 2, color: "azure", data: "Azure tag" },
  { id: 3, color: "indigo", data: "Indigo tag" },
  { id: 4, color: "purple", data: "Purple tag" },
  { id: 5, color: "pink", data: "Pink tag" },
  { id: 6, color: "red", data: "Red tag" },
  { id: 7, color: "orange", data: "Orange tag" },
  { id: 8, color: "yellow", data: "Yellow tag" },
  { id: 9, color: "lime", data: "Lime tag" },
  { id: 1, color: "green", data: "Green tag" },
  { id: 10, color: "teal", data: "Teal tag" },
  { id: 11, color: "cyan", data: "Cyan tag" },
  { id: 12, color: "gray", data: "Gray tag" },
  { id: 13, color: "gray-dark", data: "Dark gray tag" },
]

//Mails Data
//chat
const i = <span>2</span>
const j = <span>1</span>

export const charts = [
  { id: 1, src1: Imagesdata("faces5"), heading: 'Socrates Itumay', class: '2 hours', data: i },
  { id: 2, src1: Imagesdata("faces6"), heading: 'Dexter dela Cruz', class: '3 hours', data: j },
  { id: 3, src1: Imagesdata("faces9"), heading: 'Reynante Labares', class: '10 hours', data: '' },
  { id: 4, src1: Imagesdata("faces11"), heading: 'Joyce Chua', class: '2 days', data: '' },
  { id: 5, src1: Imagesdata("faces4"), heading: 'Rolando Paloso', class: '2 days', data: '' },
  { id: 6, src1: Imagesdata("faces7"), heading: 'Ariana Monino', class: '3 days', data: j },
  { id: 7, src1: Imagesdata("faces8"), heading: 'Maricel Villalon', class: '4 days', data: '' },
  { id: 8, src1: Imagesdata("faces12"), heading: 'Maryjane Cruiser', class: '5 days', data: '' },
  { id: 9, src1: Imagesdata("faces15"), heading: 'Lovely Dela Cruz', class: '5 days', data: '' },
  { id: 10, src1: Imagesdata("faces10"), heading: 'Daniel Padilla', class: '5 days', data: '' },
  { id: 11, src1: Imagesdata("faces3"), heading: 'John Pratts', class: '6 days', data: '' },
  { id: 12, src1: Imagesdata("faces7"), heading: 'Raymart Santiago  ', class: '6 days', data: '' },
  { id: 13, src1: Imagesdata("faces6"), heading: 'Samuel Lerin', class: '7 days', data: '' },
  { id: 14, src1: Imagesdata("faces15"), heading: 'Lovely Dela Cruz', class: '5 days', data: '' },
  { id: 15, src1: Imagesdata("faces10"), heading: ' Daniel Padilla', class: '5 days', data: '' },
  { id: 16, src1: Imagesdata("faces3"), heading: 'John Pratts', class: '6 days', data: '' },
  { id: 17, src1: Imagesdata("faces7"), heading: 'Raymart Santiago', class: '6 days', data: '' },
  { id: 18, src1: Imagesdata("faces6"), heading: 'Samuel Lerin', class: '7 days', data: '' },
]

//Landing page
export const data1 = [
  { id: 1, heading: 'Home', url: '#home', class: 'active' },
  { id: 2, heading: 'Features', url: '#Features', class: '' },
  { id: 3, heading: 'About', url: '#About', class: '' },
  { id: 4, heading: 'Faqs', url: '#faqs-2', class: '' },
  { id: 5, heading: 'Blog', url: '#sectionfaq', class: '' },
  { id: 6, heading: 'Clients', url: '#Clients', class: '' },
  { id: 7, heading: 'Contact', url: '#Contact', class: '' },

]

export const contact = [
  { id: 1, color: 'primary', heading: 'Main Branch', data: 'San Francisco, CA', icon: 'fe-map-pin ' },
  { id: 2, color: 'danger', heading: 'Email', data: 'georgeme@abc.com', icon: 'fe-mail' },
  { id: 3, color: 'success', heading: 'Contact', data: '+125 254 3562', icon: 'fe-headphones ' },
  { id: 4, color: 'warning', heading: 'Working Hours', data: 'Mon - Fri: 9am - 6pm', icon: 'fe-airplay' },
]

//Rightside bar

export const chat = [
  { id: 1, heading: 'New Websites is Created', data: 'CH', color: 'primary', text: '30 min ago' },
  { id: 2, heading: 'Prepare For the Next Project', data: 'N', color: 'danger', text: '2 hours ago' },
  { id: 3, heading: 'Decide the live Discussion', data: 'S', color: 'info', text: '3 hours ago' },
  { id: 4, heading: 'Meeting at 3:00 pm', data: 'K', color: 'warning', text: '4 hours ago' },
  { id: 5, heading: 'Prepare for Presentation', data: 'R', color: 'success', text: '1 day ago' },
  { id: 6, heading: 'Prepare for Presentation', data: 'MS', color: 'pink', text: '1 day ago' },
  { id: 7, heading: 'Prepare for Presentation', data: 'L', color: 'purple', text: '45 min ago' },
  { id: 8, heading: 'Prepare for Presentation', data: 'U', color: 'blue', text: '2 days ago' },
]
const k = <span className="avatar-status bg-success notify-status"></span>
export const notification = [
  { id: 1, src1: Imagesdata("faces12"), heading: 'Madeleine ', data: 'Hey! there I am available....', text: '3 hours ago', class: k },
  { id: 2, src1: Imagesdata("faces1"), heading: 'Anthony', data: 'New product Launching..', text: '5 hours ago', class: '' },
  { id: 3, src1: Imagesdata("faces2"), heading: 'Olivia', data: 'New Schedule Realease....', text: '45 minutes ago', class: k },
  { id: 4, src1: Imagesdata("faces8"), heading: 'Madeleine', data: 'Hey! there I am available....', text: '3 hours ago', class: k },
  { id: 5, src1: Imagesdata("faces11"), heading: 'Anthony ', data: 'New product Launching...', text: '5 hours ago', class: '' },
  { id: 6, src1: Imagesdata("faces6"), heading: 'Olivia ', data: 'New Schedule Realease......', text: '45 minutes ago', class: k },
  { id: 7, src1: Imagesdata("faces9"), heading: 'Olivia ', data: 'Hey! there I am available....', text: '12 minutes ago', class: k },
]

const r = <span className="avatar-status bg-success Friend-status"></span>

export const friends = [
  { id: 1, src1: Imagesdata("faces9"), heading: 'Mozelle Belt', class: r },
  { id: 2, src1: Imagesdata("faces11"), heading: 'Florinda Carasco', class: '' },
  { id: 3, src1: Imagesdata("faces10"), heading: 'Alina Bernier', class: r },
  { id: 4, src1: Imagesdata("faces2"), heading: 'Zula Mclaughin', class: r },
  { id: 5, src1: Imagesdata("faces13"), heading: 'Isidro Heide', class: '' },
  { id: 6, src1: Imagesdata("faces12"), heading: 'Mozelle Belt', class: r },
  { id: 7, src1: Imagesdata("faces4"), heading: 'Florinda Carasco', class: '' },
  { id: 8, src1: Imagesdata("faces7"), heading: 'Alina Bernier', class: '' },
  { id: 9, src1: Imagesdata("faces2"), heading: 'Zula Mclaughin', class: '' },
  { id: 10, src1: Imagesdata("faces14"), heading: 'Isidro Heide', class: r },
  { id: 11, src1: Imagesdata("faces11"), heading: 'Florinda Carasco', class: '' },
  { id: 12, src1: Imagesdata("faces9"), heading: 'Alina Bernier', class: '' },
  { id: 13, src1: Imagesdata("faces15"), heading: 'Zula Mclaughin', class: r },
  { id: 14, src1: Imagesdata("faces4"), heading: 'Isidro Heide', class: '' },
]
//Basic tables
export const table = [
  { id: 1, name: 'Tiger Nixon', position: '	System Architect', salary: '	$320,800' },
  { id: 2, name: 'Garrett Winters', position: '	Accountant', salary: '	$170,750' },
  { id: 3, name: '	Ashton Cox', position: '	Junior Technical Author', salary: '$86,000' },
  { id: 4, name: 'Cedric Kelly', position: '	Senior Javascript Developer', salary: '$433,060' },
  { id: 5, name: '	Airi Satou', position: 'Accountant', salary: '$162,700' },
]
//Avatar data
export const avatar = [
  { id: 1, src1: Imagesdata("faces2"), class: 'avatar-xs' },
  { id: 2, src1: Imagesdata("faces3"), class: 'avatar-sm' },
  { id: 3, src1: Imagesdata("faces4"), class: '' },
  { id: 4, src1: Imagesdata("faces5"), class: 'avatar-md' },
  { id: 5, src1: Imagesdata("faces6"), class: 'avatar-lg' },
  { id: 6, src1: Imagesdata("faces7"), class: 'avatar-xl d-none d-sm-block' },
  { id: 7, src1: Imagesdata("faces8"), class: 'avatar-xxl d-none d-sm-block' },
]

export const initial = [
  { id: 1, class: 'A', color: 'primary', class1: 'avatar-xs' },
  { id: 2, class: 'U', color: 'secondary', class1: 'avatar-sm' },
  { id: 3, class: 'C', color: 'info' },
  { id: 4, class: 'X', color: 'success', class1: 'avatar-md' },
  { id: 5, class: 'E', color: 'warning', class1: 'avatar-lg' },
  { id: 6, class: 'M', color: 'danger', class1: 'avatar-xl d-none d-sm-flex ' },
  { id: 7, class: 'NB', color: 'pink', class1: 'avatar-xxl d-none d-sm-flex ' },
]
export const rounded = [
  { id: 1, src1: Imagesdata("faces2") },
  { id: 2, src1: Imagesdata("faces6") },
  { id: 3, src1: Imagesdata("faces8") },
  { id: 4, src1: Imagesdata("faces10") },
  { id: 5, src1: Imagesdata("faces12") },
]

//Badges Data
export const badge = [
  { id: 1, data: '2', color: 'primary' },
  { id: 2, data: '1', color: 'secondary' },
  { id: 3, data: '5', color: 'success' },
  { id: 4, data: '3', color: 'info' },
  { id: 5, data: '6', color: 'warning' },
  { id: 6, data: '4', color: 'danger' },
]
export const badge1 = [
  { id: 1, data: '2', color: 'primary' },
  { id: 2, data: '65', color: 'success' },
  { id: 3, data: '1', color: 'secondary' },
  { id: 4, data: '5333', color: 'info' },
]
export const badge2 = [
  { id: 1, data: '3', color: 'info' },
  { id: 2, data: '22', color: 'primary' },
  { id: 3, data: '145', color: 'secondary' },
  { id: 4, data: '3225', color: 'success' },
]
export const linkbadge = [
  { id: 1, color: 'primary', color1: 'info', data: '8' },
  { id: 2, color: 'success', color1: 'secondary', data: '82' },
  { id: 3, color: 'danger', color1: 'success', data: '539' },
  { id: 4, color: 'teal', color1: 'warning', data: '9+' },
  { id: 5, color: 'info', color1: 'danger', data: '99+' },
  { id: 6, color: 'warning', color1: 'primary', data: '999+' },
]
export const colorbadge = [
  { id: 1, color: 'primary', class: 'Primary' },
  { id: 2, color: 'secondary', class: 'Secondary' },
  { id: 3, color: 'success', class: 'Success' },
  { id: 4, color: 'danger', class: 'Danger' },
  { id: 5, color: 'warning', class: 'Warning' },
  { id: 6, color: 'info', class: 'Info' },
  { id: 7, color: 'light', class: 'Light' },
  { id: 8, color: 'dark', class: 'Dark' },
]
//Blogedit
//Type of mode
export const Checkbox = [
  { Type: 'radio', label: 'online' },
  { Type: 'radio', label: 'offline' }
]
//Course Type	
export const Radiobox = [
  { Types: 'radio', labels: 'Free' },
  { Types: 'radio', labels: 'Paid' }
]

//Course Post packages	
export const PostRadio = [
  { Types: 'radio', labels: '30 Days Free', class: 'mb-0 me-5' },
  { Types: 'radio', labels: '60 days / $20', class: 'mb-0 me-4' },
  { Types: 'radio', labels: '6months /$50', class: 'mb-0 me-4' },
  { Types: 'radio', labels: '1 year / $80', class: 'mb-0' }
]

//checkout
export const option = [
  { value: "choose", label: "choose" },
  { value: "united state", label: "united state" },
];
export const option1 = [
  { value: "choose", label: "choose" },
  { value: "california", label: "california" },
];