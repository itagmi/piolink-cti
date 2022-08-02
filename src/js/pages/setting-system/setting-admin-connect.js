"use strict";

$(document).ready(function() {
  $("#fillterBtn").click(function() {
    $(".app-theme-panel").toggleClass("active");
  });

  $(".input-mask").inputmask();

  $("body").tooltip({ selector: '[data-bs-toggle="tooltip"]' });

  $(".float-left.pagination-detail").addClass("a");

  $(".hdieTableEntry")
    .parent()
    .parent()
    .parent()
    .find(".fixed-table-pagination .pagination-info")
    .css("display", "none");
});

//모두 차단 하고 해당 IP만 허용 일때 테이블에 데이터 없으면 1개 이상의 데이터를 추가하라는 스크립트
const settingAcesses = document.querySelectorAll('input[name="settigAcesses"]'); //radio group
const allPermitExcludeIp = document.getElementById("allPermitExcludeIp"); //모두 허가 하고 해당 IP만 차단
const allBlockIncludeIp = document.getElementById("allBlockIncludeIp"); //모두 차단 하고 해당 IP만 허용

const addingIpBtn = document.querySelector(".addingIpBtn");

// addingIpBtn.addEventListener("click", (e) => {
//   let target = e.target;
//   $(target)
//     .parent()
//     .parent()
//     .find(".addingAccessBlock")
//     .toggleClass("hide--elemt");
// });

//접속허가 관리 - +추가 버튼 시 나오는 ui
function showElemt(elm) {
  $(elm)
    .parent()
    .parent()
    .find(".addingAccessBlock")
    .toggleClass("hide--elemt");
}

//접속허가 관리 - 취소 버튼
function cancleElemt(elm) {
  $(elm)
    .parent()
    .parent()
    .addClass("hide--elemt");
}

function inputActive(elm) {
  if (elm.previousElementSibling.disabled == true) {
    // elm.previousElementSibling.disabled = false;
    $(elm)
      .siblings()
      .attr("disabled", false);
    elm.innerHTML = "확인";
    elm.className = "btn btn-sm btn-success ms-2 flex-shrink-0 align-self-end";
  } else {
    // elm.previousElementSibling.disabled = true;
    $(elm)
      .siblings()
      .attr("disabled", true);
    elm.innerHTML = "수정";
    elm.className = "btn btn-sm btn-warning ms-2 flex-shrink-0 align-self-end";
  }
}
