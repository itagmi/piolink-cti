// 시스템 정보 - CPU
Highcharts.chart("container", {
  chart: {
    type: "area",
    events: {
      load: function() {
        // set up the updating of the chart each second
        var DetBPS = this.series[0];
        // setInterval(function () {
        // 	var x = (new Date()).getTime();
        // 	DetBPS.addPoint([x, cCPU], true, true);
        // }, 1000);
      },
    },
  },
  accessibility: {
    description: "",
  },
  title: {
    text: '',
    // style: {
    //   fontSize: "15px",
    //   fontFamily: "Poppins,serif",
    //   fontWeight: "500",
    // },
  },
  // subtitle: {
  // 		text: 'aa'
  // },
  xAxis: {
    visible: false,
    type: "datetime",
    tickPixelInterval: 120,
  },
  yAxis: {
    title: {
      text: "",
    },
    minTickInterval: 0,
    min: 0,
    max: 100,
    labels: {
      style: {
        color: "#c3cbe4",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  tooltip: {
    pointFormat: "ㅁㅁ",
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    area: {
      /*        pointStart: 1932, */
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "CPU",
      data: (function() {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -30; i <= 0; i++) {
          data.push({ x: time + i * 1000, y: 0 });
        }
        return data;
      })(),
    },
  ],
});

// 시스템 정보 - RAM
Highcharts.chart("container2", {
  chart: {
    type: "area",
    events: {
      load: function() {
        // set up the updating of the chart each second
        var DetBPS = this.series[0];
        // setInterval(function () {
        // 	var x = (new Date()).getTime();
        // 	DetBPS.addPoint([x, cCPU], true, true);
        // }, 1000);
      },
    },
  },
  accessibility: {
    description: "",
  },
  title: {
    text: '',
    // style: {
    //   fontSize: "15px",
    //   fontFamily: "Poppins,serif",
    //   fontWeight: "500",
    // },
  },
  // subtitle: {
  // 		text: 'aa'
  // },
  xAxis: {
    visible: false,
    type: "datetime",
    tickPixelInterval: 120,
  },
  yAxis: {
    title: {
      text: "",
    },
    minTickInterval: 0,
    min: 0,
    max: 100,
    labels: {
      style: {
        color: "#c3cbe4",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  tooltip: {
    pointFormat: "ㅁㅁ",
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    area: {
      /*        pointStart: 1932, */
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "RAM",
      data: (function() {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -30; i <= 0; i++) {
          data.push({ x: time + i * 1000, y: 0 });
        }
        return data;
      })(),
    },
  ],
});

// 시스템 정보 - Network Traffic
Highcharts.chart("container3", {
  chart: {
    type: "area",
    events: {
      load: function() {
        // set up the updating of the chart each second
        var DetBPS = this.series[0];
        // setInterval(function () {
        // 	var x = (new Date()).getTime();
        // 	DetBPS.addPoint([x, cCPU], true, true);
        // }, 1000);
      },
    },
  },
  accessibility: {
    description: "",
  },
  title: {
    text: '',
    // style: {
    //   fontSize: "15px",
    //   fontFamily: "Poppins,serif",
    //   fontWeight: "500",
    // },
  },
  // subtitle: {
  // 		text: 'aa'
  // },
  xAxis: {
    visible: false,
    type: "datetime",
    tickPixelInterval: 120,
  },
  yAxis: {
    title: {
      text: "",
    },
    minTickInterval: 0,
    min: 0,
    max: 100,
    labels: {
      style: {
        color: "#c3cbe4",
      },
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: "#808080",
      },
    ],
  },
  tooltip: {
    pointFormat: "ㅁㅁ",
  },
  exporting: {
    enabled: false,
  },
  plotOptions: {
    area: {
      /*        pointStart: 1932, */
      marker: {
        enabled: false,
        symbol: "circle",
        radius: 2,
        states: {
          hover: {
            enabled: true,
          },
        },
      },
    },
  },
  legend: {
    enabled: false,
  },
  series: [
    {
      name: "RAM",
      data: (function() {
        // generate an array of random data
        var data = [],
          time = new Date().getTime(),
          i;

        for (i = -30; i <= 0; i++) {
          data.push({ x: time + i * 1000, y: 0 });
        }
        return data;
      })(),
    },
  ],
});

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
    height: 200,
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

// datepicker
$("#datepicker").datepicker({
  autoclose: true,
  format: 'yyyy/mm/dd'
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
