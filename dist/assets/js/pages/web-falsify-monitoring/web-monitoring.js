
//table tr을 클릭 하면 모달창 show
$('.pos-content-container').on('click', '.card', function (e) {
	$('#modalUri').modal('show');
})

//button modal event 흐름 막는 스크립트
$('.pos-content-container').on('click', 'button', function (e) {
	e.stopPropagation();
})

//수정하기 버튼 toggle 
$('.webMonitoringModify').on('click', function() {
	const $this = $(this);

	$this.toggleClass('def');

	if($this.hasClass('def')) {
		$this.text('수정하기').addClass('btn-warning').removeClass('btn-success');
		$('.modify-web-monitoring input').attr('readonly', true);
		$('.modify-web-monitoring select').attr('disabled', true);
		// $this.attr('type', 'submit'); //이벤트 동시 발생하면서.. 순서대로 일어나야 할거같은..?
		console.log('수정하기');
		// $this.attr('type', 'submit');
		Swal.fire({
			title: "수정 사항을 적용 하시겠습니까?",
			showDenyButton: true,
			showCancelButton: false,
			confirmButtonText: "적용",
			denyButtonText: `미적용`,
		}).then((result) => {
			/* Read more about isConfirmed, isDenied below */
			if (result.isConfirmed) {
				Swal.fire("수정 성공!", "", "success");
				$(".modal").modal("hide");
			} else if (result.isDenied) {
				Swal.fire("수정사항이 저장 되지 않았습니다.", "", "info");
			} else {
				$(".modal").modal("hide");
			}
		});
	
	} else {
		$this.text('적용하기').addClass('btn-success').removeClass('btn-warning');
		$('.modify-web-monitoring input').attr('readonly', false);
		$('.modify-web-monitoring select').attr('disabled', false);
		console.log('적용하기');
	}
	
	if(!$this.hasClass('def')) {
		console.log('def 없음');
	}

	// $this.attr('type', 'submit');
	// $(this)
	// .closest("form")
	// .parsley()
	// .on("form:submit", function() {
	// 	Swal.fire({
	// 		title: "수정 사항을 적용 하시겠습니까?",
	// 		showDenyButton: true,
	// 		showCancelButton: false,
	// 		confirmButtonText: "적용",
	// 		denyButtonText: `미적용`,
	// 	}).then((result) => {
	// 		/* Read more about isConfirmed, isDenied below */
	// 		if (result.isConfirmed) {
	// 			Swal.fire("수정 성공!", "", "success");
	// 			$(".modal").modal("hide");
	// 		} else if (result.isDenied) {
	// 			Swal.fire("수정사항이 저장 되지 않았습니다.", "", "info");
	// 		} else {
	// 			$(".modal").modal("hide");
	// 		}
	// 	});
	// });
	
})

//삭제 알림창 ui
$('.message-delete').click(function(){
	Swal.fire({
		title: "정말로 삭제 하시겠습니까?",
		type: "warning",
		showCancelButton: true,
		confirmButtonColor: "#dc3741",
		confirmButtonClass: "danger-btn-focus",
		// cancelButtonColor: "#f46a6a",
		confirmButtonText: "네, 지우겠습니다.",
	}).then(function(result) {
		if (result.value) {
			Swal.fire("삭제", "삭제 되었습니다", "success");
		}
	});
})
		
//AI 분석 예측 결과 - 유사도, 스코어 - chart.js
const ctx = document.getElementById('doughnutChart');
const ctx2 = document.getElementById('doughnutChart2');

// chart1 and chart2 use "plugin"
let chart1 = new Chart(ctx, {
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
		cutout: 30,
		tooltips: {
				enabled: false
		}
	}
});

let chart2 = new Chart(ctx2, {
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
		cutout: 30,
		tooltips: {
				enabled: false
		}
	}
});
				
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