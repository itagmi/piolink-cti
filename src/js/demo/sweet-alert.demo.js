// sweet alert

/* 
	<사용법 버튼에 해당 class를 추가 한다.>
	
	1. 적용 alert - message-success
  2. 수정 - message-modify
	2. 삭제 alert - message-delete  
  3. 예외 처리 - message-exception
  4. 화이트 리스트로 변경 - message-change-whitelist 

*/

$(document).ready(function() {
  // 적용 ui
  $(document).on("click", ".message-success", function(e) {
    // e.preventDefault(); //submit 버튼 클릭 시 이벤트 중단
    //적용 전에 form에서 체크
    $(this)
      .closest("form")
      .parsley()
      .on("form:submit", function() {
        //sweet alert
        Swal.fire({
          title: "변경 사항을 적용 하시겠습니까?",
          showDenyButton: true,
          showCancelButton: false,
          confirmButtonText: "적용",
          denyButtonText: `미적용`,
        }).then((result) => {
          /* Read more about isConfirmed, isDenied below */
          if (result.isConfirmed) {
            Swal.fire("저장!", "", "success");
            $(".modal").modal("hide");
            // form.submit();
          } else if (result.isDenied) {
            Swal.fire("변경사항이 저장 되지 않았습니다.", "", "info");
          } else {
            $(".modal").modal("hide");
          }
        });
        return false; // Don't submit form for this demo
      });
  });

  // 수정 ui
  $(document).on("click", ".message-modify", function(e) {
    // e.preventDefault(); //submit 버튼 클릭 시 이벤트 중단
    $(this)
      .closest("form")
      .parsley()
      .on("form:submit", function() {
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
      });
  });

  //삭제 ui
  $(document).on("click", ".message-delete", function(e) {
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
  });

  //예외 처리
  $(document).on("click", ".message-exception", function(e) {
    Swal.fire({
      title: "예외처리 하시겠습니까?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3741",
      confirmButtonClass: "danger-btn-focus",
      // cancelButtonColor: "#f46a6a",
      confirmButtonText: "네, 예외처리 하겠습니다.",
    }).then(function(result) {
      if (result.value) {
        Swal.fire("성공", "예외처리 되었습니다", "success");
      }
    });
  });

  //화이트 리스트로 변경
  $(document).on("click", ".message-change-whitelist", function(e) {
    Swal.fire({
      title: "화이트 리스트로 변경 하시겠습니까?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "적용",
      denyButtonText: `미적용`,
    }).then(function(result) {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("저장!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("변경사항이 저장 되지 않았습니다.", "", "info");
      }
    });
  });

  //전송
  $(document).on("click", ".message-sending", function(e) {
    Swal.fire({
      title: "전송 하시겠습니까?",
      showDenyButton: true,
      showCancelButton: false,
      confirmButtonText: "네",
      denyButtonText: `아니요`,
    }).then(function(result) {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("전송!", "", "success");
        $(".modal").modal("hide");
      } else if (result.isDenied) {
        Swal.fire("전송 취소 되었습니다.", "", "info");
      }
    });
  });

  //초기화
  $(document).on("click", ".message-init", function(e) {
    Swal.fire({
      title: "정말로 초기화 하시겠습니까?",
      type: "warning",
      showCancelButton: true,
      confirmButtonColor: "#dc3741",
      confirmButtonClass: "danger-btn-focus",
      // cancelButtonColor: "#f46a6a",
      confirmButtonText: "네, 초기화 하겠습니다.",
    }).then(function(result) {
      if (result.value) {
        Swal.fire("초기화", "초기화 되었습니다", "success");
      }
    });
  });
});
