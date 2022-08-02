// 시스템 정보 - CPU
Highcharts.chart("container", {
  chart: {
    type: "area",
    events: {
      load: function () {
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
    text: '<span class="custom-fill-dark">CPU</span>',
    style: {
      fontSize: "15px",
      fontFamily: "Poppins,serif",
      fontWeight: "500",
    },
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
      data: (function () {
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
      load: function () {
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
    text: '<span class="custom-fill-dark">RAM</span>',
    style: {
      fontSize: "15px",
      fontFamily: "Poppins,serif",
      fontWeight: "500",
      color: "#495057",
    },
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
      data: (function () {
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

// Highcharts - 시간대별 분석 파일수
var gaugeOptions = {
  chart: {
    type: "solidgauge",
  },

  title: null,

  pane: {
    center: ["50%", "65%"],
    size: "90%%",
    startAngle: -90,
    endAngle: 90,
    background: {
      backgroundColor:
        Highcharts.defaultOptions.legend.backgroundColor ||
        "rgba(255, 255, 255, 0.75)",
      innerRadius: "60%",
      outerRadius: "100%",
      shape: "arc",
      borderColor: "transparent",
    },
  },

  exporting: {
    enabled: false,
  },

  tooltip: {
    enabled: false,
  },

  // the value axis
  yAxis: {
    stops: [
      [0.1, "rgba(60, 210, 165, 0.85)"], // green
      [0.5, "rgba(60, 210, 165, 0.85)"], // yellow
      [0.9, "rgba(60, 210, 165, 0.85)"], // red
    ],
    lineWidth: 0,
    tickWidth: 0,
    minorTickInterval: null,
    tickAmount: 2,
    title: {
      y: -40,
    },
    labels: {
      y: 16,
    },
  },

  plotOptions: {
    solidgauge: {
      dataLabels: {
        y: 5,
        borderWidth: 0,
        useHTML: true,
      },
    },
  },
};

// The speed gauge - EDR - 에이전트 현황
var chartSpeed = Highcharts.chart(
  "container-speed",
  Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 200,
      className: "custom-sub-text-color",
      title: {
        text: '<span class="custom-fill-dark">사용자</span>',
      },
    },

    credits: {
      enabled: false,
    },

    series: [
      {
        name: "Speed",
        data: [80],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span class="text-dark" style="font-size:18px">{y}</span><br/>' +
            // '<span style="font-size:12px;opacity:0.4">km/h</span>' +
            "</div>",
        },

        tooltip: {
          valueSuffix: " km/h",
        },
      },
    ],
  })
);

// The RPM gauge
var chartRpm = Highcharts.chart(
  "container-rpm",
  Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 5,
      className: "custom-sub-text-color",
      title: {
        text: '<span class="custom-fill-dark">온라인</span>',
      },
    },

    series: [
      {
        name: "RPM",
        data: [1],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span class="text-dark" style="font-size:18px">{y:.1f}</span><br/>' +
            // '<span style="font-size:12px;opacity:0.4">' +
            // '* 1000 / min' +
            // '</span>' +
            "</div>",
        },
        tooltip: {
          valueSuffix: " revolutions/min",
        },
      },
    ],
  })
);

// 3
var chartRpm = Highcharts.chart(
  "container-speed2",
  Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 5,
      className: "custom-sub-text-color",
      title: {
        text: '<span class="custom-fill-dark">최신정책</span>',
      },
    },

    series: [
      {
        name: "RPM",
        data: [1],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span class="text-dark" style="font-size:18px">{y:.1f}</span><br/>' +
            // '<span style="font-size:12px;opacity:0.4">' +
            // '* 1000 / min' +
            // '</span>' +
            "</div>",
        },
        tooltip: {
          valueSuffix: " revolutions/min",
        },
      },
    ],
  })
);

// 4
var chartRpm = Highcharts.chart(
  "container-rpm2",
  Highcharts.merge(gaugeOptions, {
    yAxis: {
      min: 0,
      max: 5,
      className: "custom-sub-text-color",
      title: {
        text: '<span class="custom-fill-dark">최신 에이전트</span>',
      },
    },

    series: [
      {
        name: "RPM",
        data: [1],
        dataLabels: {
          format:
            '<div style="text-align:center">' +
            '<span class="text-dark" style="font-size:18px">{y:.1f}</span><br/>' +
            // '<span style="font-size:12px;opacity:0.4">' +
            // '* 1000 / min' +
            // '</span>' +
            "</div>",
        },
        tooltip: {
          valueSuffix: " revolutions/min",
        },
      },
    ],
  })
);
