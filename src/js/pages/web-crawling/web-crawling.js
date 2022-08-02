//인풋에 검색어 엔터 시 tag ui 출력
let searchTags = [];

function search(ele) {
  if (event.key === "Enter" || event.type === "click") {
    //inut value
    let txtval = document.querySelector('input[name="searchTag"]').value;

    if (searchTags.includes(txtval) || searchTags.length > 16) {
      // console.log("포함");
    } else if (txtval == "") {
      //do nothing
    } else {
      // console.log("불포함");

      searchTags.push(txtval);

      const lastValue = searchTags[searchTags.length - 1];

      let html = `<div id="seachTagBtn" class="ui-searching-tag alert alert-primary alert-dismissible fade show me-2 mb-2" role="alert">
				${lastValue}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
				</button>
			</div>`;

      $("#searching_tag").append(html);
    }
  }
}

//인풋에 추가 검색어 엔터 시 tag ui 출력
let addSearchTags = [];

function addSearch(ele) {
  if (event.key === "Enter" || event.type === "click") {
    //inut value
    let txtval = document.querySelector('input[name="addSearchTag"]').value;
    let conjunction = document.getElementById("conjunction").value;
    let sortTest = document.getElementById("sortTest").value;

    if (searchTags.includes(txtval) || searchTags.length > 16) {
      // console.log("포함");
    } else if (txtval == "") {
      //do nothing
    } else {
      // console.log("불포함");

      searchTags.push(txtval);

      const lastValue = searchTags[searchTags.length - 1];

      let html = `<div id="seachTagBtn" class="ui-searching-tag alert alert-primary alert-dismissible fade show me-2 mb-2" role="alert">
        <span class="badge bg-secondary">${conjunction}</span>
        <span class="badge bg-secondary">${sortTest}</span>
				${lastValue}
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
				</button>
			</div>`;

      $("#searching_tag").append(html);
    }
  }
}

// input mirroring
$("#searchVal").bind("keypress keyup blur", function() {
  $("#fillterVal").val($(this).val());
});

$("#fillterVal").bind("keypress keyup blur", function() {
  $("#searchVal").val($(this).val());
});

// rating star
$(".kv-ltr-theme-fas-star").rating({
  displayOnly: true,
  hoverOnClear: false,
  theme: "krajee-fas",
  defaultCaption: "{rating}",
  starCaptions: function(rating) {
    // return rating == 1 ? 'One heart' : rating + ' hearts';
  },
  filledStar: '<i class="fas fa-circle"></i>',
  emptyStar: '<i class="far fa-circle"></i>',
});

// datetime picker
jQuery.datetimepicker.setLocale("kr");

jQuery(function() {
  jQuery("#date_timepicker_start").datetimepicker({
    i18n: {
      de: {
        months: [
          "1월",
          "2월",
          "3월",
          "4월",
          "5월",
          "6월",
          "7월",
          "8월",
          "9월",
          "10월",
          "11월",
          "12월",
        ],
        dayOfWeek: ["일", "월", "화", "수", "목", "금", "토"],
      },
    },
    format: "Y/m/d H:i",
    onShow: function(ct) {
      this.setOptions({
        maxDate: jQuery("#date_timepicker_end").val()
          ? jQuery("#date_timepicker_end").val()
          : false,
      });
    },
  });
  jQuery("#date_timepicker_end").datetimepicker({
    format: "Y/m/d H:i",
    onShow: function(ct) {
      this.setOptions({
        minDate: jQuery("#date_timepicker_start").val()
          ? jQuery("#date_timepicker_start").val()
          : false,
      });
    },
  });
});

//fiiler 버튼 클릭 시 fillter panel 활성화
$("#fillterBtn").click(function() {
  $(".app-theme-panel").toggleClass("active");
});

//자세히 버튼 클릭 시 화살표 아이콘 toggle
$(".btn-more").click(function() {
  if ($(this).attr("aria-expanded") == "true") {
    $(this)
      .find("i")
      .removeClass("bi-chevron-down");
    $(this)
      .find("i")
      .addClass(" bi-chevron-up");
  } else {
    $(this)
      .find("i")
      .removeClass("bi-chevron-up");
    $(this)
      .find("i")
      .addClass("bi-chevron-down");
  }
});



$('#modalFile').on('shown.bs.modal', function (e) {
  // ai 분석결과
  chart_analisys_result = {
    chart: {
      // width: 200,
      height: 260,
      type: "pie",
    },
    // series: type_chart_series,
    // labels: type_chart_labels,
    series: [23, 37],
    labels: ["Malware", "Normal"],
    colors: ["#ed495c", "#3cd2a5"],
    legend: {
      show: !0,
      position: "bottom",
      horizontalAlign: "center",
      verticalAlign: "middle",
      floating: !1,
      fontSize: "14px",
      offsetX: 0,
      offsetY: 10,
    },
  };
  
  (chart = new ApexCharts(
    document.querySelector("#chartAnalisysResult"),
    chart_analisys_result
  )).render();

  // 유형 유사도
  var options = {
      series: [{
      name: 'Ransomware',
      data: [80, 50, 30, 40, 100, 20],
    }],
      chart: {
        width: '100%',
        height: 268,
        type: 'radar',
        offsetY: -20,
        dropShadow: {
          enabled: true,
          blur: 1,
          left: 1,
          top: 1
        },
        toolbar : {
          show: false,
        },
    },
    stroke: {
      width: 2
    },
    fill: {
      opacity: 0.1
    },
    markers: {
      size: 0
    },
    
    yaxis: {
      // categories: ['April', 'May', 'June', 'July', 'August', 'September'],
      labels: {
        show: true,
        style: {
          colors: "rgba(255,255,255,.75)"
        }
      }
    },
    xaxis: {
      categories: ['Ransomware', 'Backdoor', 'Worm', 'Trojan', 'Bootkit', 'DDoS', ],
      labels: {
       style: {
         colors: ['rgb(255,96,96)','#30beff', '#3cd2a5', '#ff9f0c', '#bba4ff', '#f9e80d']
       } 
      }
    }
  };
  
  var chart = new ApexCharts(document.querySelector("#chartSimilarity"), options);
  chart.render();
});

// 분석 통계 차트
type_chart2 = {
  chart: {
    width: 200,
    height: 280,
    type: "donut",
  },
  // series: type_chart_series,
  // labels: type_chart_labels,
  series: [23, 37],
  labels: ["ETC", "Network"],
  colors: ["#ed495c", "#f79246", "#febb2a", "#81c784", "#35b1e3"],
  legend: {
    show: !0,
    position: "bottom",
    horizontalAlign: "center",
    verticalAlign: "middle",
    floating: !1,
    fontSize: "14px",
    offsetX: 0,
    offsetY: 0,
  },
};

(chart = new ApexCharts(
  document.querySelector("#type_chart"),
  type_chart2
)).render();
