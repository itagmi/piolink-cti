$(document).ready(function() {
  $("#fillterBtn").click(function() {
    $(".app-theme-panel").toggleClass("active");
  });

  $(".input-mask").inputmask();

  // 체크박스 세개중 한개만 yes 하는 ui
  $(".chb").change(function() {
    $(".chb").prop("checked", false);
    $(this).prop("checked", true);
  });

  $(".chb2").change(function() {
    $(".chb2").prop("checked", false);
    $(this).prop("checked", true);
  });

  $(".chb3").change(function() {
    $(".chb3").prop("checked", false);
    $(this).prop("checked", true);
  });

  $(".chb4").change(function() {
    $(".chb4").prop("checked", false);
    $(this).prop("checked", true);
  });

  // 모든 그룹 관리에 checked 됫을때 select disable 하고 background 색 추가 기능
  if ($("input[name=customRadio]:checked").val() == "0") {
    $(".select-admin-group").prop("disabled", true);
  }

  $("input:radio[name=customRadio]").click(function() {
    if ($(this).val() == "1") {
      // radio 버튼의 value 값이 1이라면 활성화
      $(".select-admin-group").prop("disabled", false);
    } else if ($(this).val() == "0") {
      // radio 버튼의 value 값이 0이라면 비활성화
      $(".select-admin-group").prop("disabled", true);
    }
  });
});
