//AI 분석 예측 결과 - 유사도, 스코어 - chart.js
const ctx2 = document.getElementById('doughnutChart2');

const ctx = document.getElementById('doughnutChart');
// chart1 and chart2 use "plugin"
const chart1 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    // labels: ['Total Visitor'],
    datasets: [{
      data: [900,100],
      backgroundColor: [app.color.theme, app.color.white, app.color.gray900],
      hoverBackgroundColor: [app.color.theme, app.color.white, app.color.gray900],
      borderWidth: 0,
    }]
  },
  options: {
    responsive:true,
    cutout: 25,
    tooltips: {
         enabled: false
    },
    animation: {
        duration: 2000
    }
  }
});

const chart2 = new Chart(ctx2, {
  type: 'doughnut',
  data: {
    // labels: ['Total Visitor'],
    datasets: [{
      data: [90,100],
      backgroundColor: [app.color.theme, app.color.white, app.color.gray900],
      hoverBackgroundColor: [app.color.theme, app.color.white, app.color.gray900],
      borderWidth: 0,
    }]
  },
  options: {
    responsive:true,
    cutout: 25,
    tooltips: {
         enabled: false
    },
    animation: {
        duration: 2000
    }
  }
});

//사고분석 chart
var options = {
  series: [{
    name: 'Website Blog',
    type: 'column',
    data: [440, 505, 414, 671, 227, 413, 201, 352, 552, 320, 257, 160],
    color: 'rgb(7, 181, 205)'
  }, {
    name: 'Social Media',
    type: 'line',
    data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16],
    color: 'rgb(60, 210, 165)'
  }],
    chart: {
    height: 260,
    type: 'line',
  },
  stroke: {
    width: [0, 4]
  },
  // title: {
  //   text: 'Traffic Sources'
  // },
  dataLabels: {
    enabled: true,
    enabledOnSeries: [1]
  },
  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
  xaxis: {
    type: 'datetime',
    labels: {
      style: {
          colors: 'rgba(255, 255, 255, 0.75)',
      },
    }
  },
  yaxis: [{
    labels: {
      style: {
          colors: 'rgba(255, 255, 255, 0.75)',
      },
    }
  }, {
    show: false,
    opposite: true,
    title: {
      text: 'Social Media',
      style: {
        color: 'rgba(255, 255, 255, 0.75)'
      }
    }
  }]
};

var chart = new ApexCharts(document.querySelector("#apexMultiChart"), options);
chart.render();

//daterpicker
$("#datepicker").datepicker({
  autoclose: true,
});

/* Controller
------------------------------------------------ */
$(document).ready(function() {
  document.addEventListener("theme-reload", function() {
    $(
      '[data-render="apexchart"], #apexMultiChart, #datepicker'
    ).empty();
    handleRenderChart();
    handleRenderMap();
  });
});
