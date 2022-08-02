//form mask
$(".input-mask").inputmask();

// custom maxlenght
$("input.ui-maxlenght")
  .data("name", "ui-maxlenght")
  .maxlength({
    warningClass: "badge badge-info",
    limitReachedClass: "badge badge-warning",
  });

//email 유효성 검사
$(".emailVaridation").on("beforeItemAdd", function(event) {
  //tags input validation email
  const email = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; // Email address

  $(".tagsinput-warn-message").hide();

  // check item contents
  if (!email.test(event.item)) {
    // set to true to prevent the item getting added
    event.cancel = true;
    $(this).after(
      '<div class="tagsinput-warn-message">알맞은 email 형식으로 입력 해 주세요.</div>'
    );
  }
});

//도메인 유효성 검사
$(".domainVaildation").on("beforeItemAdd", function(event) {
  //tags input validation domain
  const domain = /^(file|gopher|news|nntp|telnet|https?|ftps?|sftp):\/\/([a-z0-9-]+\.)+[a-z0-9]{2,4}.*$/;

  $(".tagsinput-warn-message").hide();

  if (!domain.test(event.item)) {
    event.cancel = true;
    $(this).after(
      '<div class="tagsinput-warn-message">알맞은 domain 형식으로 입력 해 주세요.</div>'
    );
  }
});
