/*
Template Name: HUD - Responsive Bootstrap 5 Admin Template
Version: 1.4.0
Author: Sean Ngu
Website: http://www.seantheme.com/hud/
*/

var randomNo = function() {
  return Math.floor(Math.random() * 60) + 30;
};

var handleRenderChart = function() {
  // global apexchart settings
  Apex = {
    title: {
      style: {
        fontSize: "14px",
        fontWeight: "bold",
        fontFamily: app.font.family,
        color: app.color.white,
      },
    },
    legend: {
      fontFamily: app.font.family,
      labels: {
        colors: "#fff",
      },
    },
    tooltip: {
      style: {
        fontSize: "12px",
        fontFamily: app.font.family,
      },
    },
    grid: {
      borderColor: "rgba(" + app.color.whiteRgb + ", .25)",
    },
    dataLabels: {
      style: {
        fontSize: "12px",
        fontFamily: app.font.family,
        fontWeight: "bold",
        colors: undefined,
      },
    },
    xaxis: {
      axisBorder: {
        show: true,
        color: "rgba(" + app.color.whiteRgb + ", .25)",
        height: 1,
        width: "100%",
        offsetX: 0,
        offsetY: -1,
      },
      axisTicks: {
        show: true,
        borderType: "solid",
        color: "rgba(" + app.color.whiteRgb + ", .25)",
        height: 6,
        offsetX: 0,
        offsetY: 0,
      },
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: app.font.family,
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#fff",
          fontSize: "12px",
          fontFamily: app.font.family,
          fontWeight: 400,
          cssClass: "apexcharts-xaxis-label",
        },
      },
    },
  };

  // small stat chart
  var x = 0;
  var chart = [];

  var elmList = [].slice.call(
    document.querySelectorAll('[data-render="apexchart"]')
  );
  elmList.map(function(elm) {
    var chartType = elm.getAttribute("data-type");
    var chartHeight = elm.getAttribute("data-height");
    var chartTitle = elm.getAttribute("data-title");
    var chartColors = [];
    var chartPlotOptions = {};
    var chartData = [];
    var chartStroke = {
      show: false,
    };
    if (chartType == "bar") {
      chartColors = [app.color.theme];
      chartPlotOptions = {
        bar: {
          horizontal: false,
          columnWidth: "65%",
          endingShape: "rounded",
        },
      };
      chartData = [
        {
          name: chartTitle,
          data: [
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
          ],
        },
      ];
    } else if (chartType == "pie") {
      chartColors = [
        "rgba(" + app.color.themeRgb + ", 1)",
        "rgba(" + app.color.themeRgb + ", .75)",
        "rgba(" + app.color.themeRgb + ", .5)",
      ];
      chartData = [randomNo(), randomNo(), randomNo()];
    } else if (chartType == "donut") {
      chartColors = [
        "rgba(" + app.color.themeRgb + ", .15)",
        "rgba(" + app.color.themeRgb + ", .35)",
        "rgba(" + app.color.themeRgb + ", .55)",
        "rgba(" + app.color.themeRgb + ", .75)",
        "rgba(" + app.color.themeRgb + ", .95)",
      ];
      chartData = [randomNo(), randomNo(), randomNo(), randomNo(), randomNo()];
      chartStroke = {
        show: false,
        curve: "smooth",
        lineCap: "butt",
        colors: "rgba(" + app.color.blackRgb + ", .25)",
        width: 2,
        dashArray: 0,
      };
      chartPlotOptions = {
        pie: {
          donut: {
            background: "transparent",
          },
        },
      };
    } else if (chartType == "line") {
      chartColors = [app.color.theme];
      chartData = [
        {
          name: chartTitle,
          data: [
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
            randomNo(),
          ],
        },
      ];
      chartStroke = {
        curve: "straight",
        width: 2,
      };
    }

    var chartOptions = {
      chart: {
        height: chartHeight,
        type: chartType,
        toolbar: {
          show: false,
        },
        sparkline: {
          enabled: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: chartColors,
      stroke: chartStroke,
      plotOptions: chartPlotOptions,
      series: chartData,
      grid: {
        show: false,
      },
      tooltip: {
        theme: "dark",
        x: {
          show: false,
        },
        y: {
          title: {
            formatter: function(seriesName) {
              return "";
            },
          },
          formatter: (value) => {
            return "" + value;
          },
        },
      },
      xaxis: {
        labels: {
          show: false,
        },
      },
      yaxis: {
        labels: {
          show: false,
        },
      },
    };
    chart[x] = new ApexCharts(elm, chartOptions);
    chart[x].render();
    x++;
  });

  var serverChartOptions = {
    chart: {
      height: "100%",
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        endingShape: "rounded",
      },
    },
    dataLabels: {
      enabled: false,
    },
    grid: {
      show: true,
      borderColor: hexToRgba(app.color.white, 0.15),
    },
    stroke: {
      show: false,
    },
    colors: [
      app.color.theme,
      "rgba(237, 73, 46, .7)",
      // "rgba(" + app.color.whiteRgb + ", .25)",
      "rgba(235, 175, 69, .7)",
    ],
    series: [
      {
        name: "정상",
        data: [
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
        ],
      },
      {
        name: "악성",
        data: [
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
        ],
      },
      {
        name: "Unknown",
        data: [
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
          randomNo(),
        ],
      },
    ],
    xaxis: {
      categories: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      labels: {
        show: false,
      },
    },
    fill: {
      opacity: 0.65,
    },
    tooltip: {
      y: {
        formatter: function(val) {
          return "$ " + val + " thousands";
        },
      },
    },
  };
  var apexServerChart = new ApexCharts(
    document.querySelector("#chart-server"),
    serverChartOptions
  );
  apexServerChart.render();
};

// apexPieChart
var apexPieChartOptions = {
  chart: {
    height: 365,
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
    "rgba(" + app.color.themeRgb + ", .95)",
  ],
  labels: ["사전탐지", "안티바이러스", "정적 YARA", "동적 행위", "평판 분석"],
  series: [44, 55, 13, 43, 22],
  // title: {
  //   text: "HeatMap Chart (Single color)",
  // },
};
var apexPieChart = new ApexCharts(
  document.querySelector("#apexPieChart"),
  apexPieChartOptions
);
apexPieChart.render();

$("#datepicker").datepicker({
  autoclose: true,
});

/* Controller
------------------------------------------------ */
$(document).ready(function() {
  handleRenderChart();
  // handleRenderMap();

  document.addEventListener("theme-reload", function() {
    $(
      '[data-render="apexchart"], #chart-server, #apexPieChart, #datepicker'
    ).empty();
    handleRenderChart();
    handleRenderMap();
  });
});
