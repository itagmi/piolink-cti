// datetime picker 필터 - 등록일
$("#datepicker").datepicker({
  autoclose: true,
});

// datetime picker 필터 - 최신접속일
$("#datepicker2").datepicker({
  autoclose: true,
});

//fiiler 버튼 클릭 시 fillter panel 활성화
$("#fillterBtn").click(function() {
  $(".app-theme-panel").toggleClass("active");
});

// input mirroring
$("#searchVal").bind("keypress keyup blur", function() {
  $("#fillterVal").val($(this).val());
});

$("#fillterVal").bind("keypress keyup blur", function() {
  $("#searchVal").val($(this).val());
});

// custom maxlenght
$("input.ui-maxlenght")
  .data("name", "ui-maxlenght")
  .maxlength({
    warningClass: "badge bg-info",
    limitReachedClass: "badge bg-warning",
  });

$("textarea").maxlength({
  alwaysShow: true,
  warningClass: "badge bg-info",
  limitReachedClass: "badge bg-warning",
});

//전체선택 input select 시 전체 선택 및 해지
function selectAll(selectAll) {
  const checkboxes = document.getElementsByName("edrList");

  checkboxes.forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
}

//인풋에 검색어 엔터 시 tag ui 출력
let searchTags = [];

function search(ele) {
  if (event.key === "Enter" || event.type === "click") {
    //inut value
    let txtval = document.querySelector('input[name="searchTag"]').value;

    if (searchTags.includes(txtval) || searchTags.length > 16) {
      console.log("포함");
    } else if (txtval == "") {
      //do nothing
    } else {
      console.log("불포함");

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
