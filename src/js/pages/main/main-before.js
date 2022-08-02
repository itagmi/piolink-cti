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
const ctx = document.getElementById('doughnutChart');
const ctx2 = document.getElementById('doughnutChart2');

// chart1 and chart2 use "plugin"
const chart1 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    // labels: ['Total Visitor'],
    datasets: [{
      data: [90,100],
      backgroundColor: [app.color.theme, app.color.white, app.color.gray900],
      hoverBackgroundColor: [app.color.theme, app.color.white, app.color.gray900],
      borderWidth: 0,
    }]
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
  }
});

// 사고 분석 - apexPieChart
var apexPieChartOptions = {
  chart: {
    height: 120,
    type: "pie",
  },
  dataLabels: {
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 1,
    },
  },
  stroke: {
    show: false,
  },
  colors: [
    "rgba(" + app.color.themeRgb + ", .15)",
    "rgba(" + app.color.themeRgb + ", .35)",
    "rgba(" + app.color.themeRgb + ", .55)",
    "rgba(" + app.color.themeRgb + ", .75)",
  ],
  labels: ["AntiVirus", "정적 분석", "동적 분석", "AI 분석예측"],
  series: [44, 55, 13, 43],
  // title: {
  //   text: "HeatMap Chart (Single color)",
  // },
};

var apexPieChart = new ApexCharts(
  document.querySelector("#apexPieChart"),
  apexPieChartOptions
);

apexPieChart.render();

// 수동 파일 분석 - apexPieChart
var apexPieChartOptions2 = {
  chart: {
    height: 120,
    type: "pie",
  },
  dataLabels: {
    dropShadow: {
      enabled: false,
      top: 1,
      left: 1,
      blur: 1,
      opacity: 1,
    },
  },
  stroke: {
    show: false,
  },
  colors: [
    "rgba(" + app.color.themeRgb + ", .15)",
    "rgba(" + app.color.themeRgb + ", .35)",
    "rgba(" + app.color.themeRgb + ", .55)",
    "rgba(" + app.color.themeRgb + ", .75)",
  ],
  labels: ["AntiVirus", "정적 분석", "동적 분석", "AI 분석예측"],
  series: [44, 55, 13, 43],
  // title: {
  //   text: "HeatMap Chart (Single color)",
  // },
};

var apexPieChart2 = new ApexCharts(
  document.querySelector("#apexPieChart2"),
  apexPieChartOptions2
);

apexPieChart2.render();

// datepicker
$("#datepicker").datepicker({
  autoclose: true,
});

/* Controller
------------------------------------------------ */
$(document).ready(function() {
  document.addEventListener("theme-reload", function() {
    $(
      '[data-render="apexchart"], #apexPieChart, #datepicker'
    ).empty();
    handleRenderChart();
    handleRenderMap();
  });
});
