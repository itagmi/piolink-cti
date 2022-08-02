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

//상세보기 modal 창 안에 분석요청 버튼 클릭 시 나오는 ui
$(function() {
  let element = `<h5 class="d-flex">
				<span class="badge bg-primary"> file : </span>
				<span class="badge bg-secondary"> 3c3e0fee8971de2d4d596afb63517663 </span> 
			</h5>
			<table class="table table-dark mb-0 table-bordered">
				<tbody id="divVtResult">
					<tr>
						<th>안티 바이러스</th>
						<th>결과</th>
						<th>설명</th>
					</tr>
					<tr>
						<td class="text-center" colspan="3">
							VirusTotal Server에 해당 분석결과가 없습니다.
						</td>
					</tr>
				</tbody>
			</table>`;

  $('[data-toggle="popover"]').popover({
    placement: "top",
    html: true,
    title: "바이러스 토탈 분석 결과",
    content: element,
    trigger: "click",
    sanitize: false,
  });
});
