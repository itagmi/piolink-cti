// 공통으로 사용되는 스크립트

//header - titmer count down
function startTimer(duration, display) {
  let timer = duration,
    minutes,
    seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}

window.onload = function() {
  let eightMinutes = 60 * 8,
    display = document.querySelector("#time");
  startTimer(eightMinutes, display);
};

//up to 1903px resolution, folding nav - to do - 1903 아래 일 때 에는 무조건 호버 메뉴만 활성화 (클릭 토글 메뉴 X)
let target = document.getElementById("app");

if (window.innerWidth < 1903) {
  target.classList.add("app-sidebar-collapsed");
} else {
  target.classList.remove("app-sidebar-collapsed");
}

window.addEventListener(
  "resize",
  function(event) {
    if (window.innerWidth < 1903) {
      target.classList.add("app-sidebar-collapsed");
    } else {
      target.classList.remove("app-sidebar-collapsed");
    }
  },
  true
);

// 토글 메뉴 호버 했을 때 보여지는 메뉴
let appId = document.getElementById("app");
let menuToggler = document.getElementById("def");
let sidebar = document.getElementById("sidebar");

let sidebarState = getCookie("sidebar");

// 주어진 이름의 쿠키를 반환하는데,
// 조건에 맞는 쿠키가 없다면 undefined를 반환합니다.
function getCookie(name) {
  let matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" +
        name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, "\\$1") +
        "=([^;]*)"
    )
  );
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

//쿠키 설정 함수
function setCookie(name, value, options = {}) {
  options = {
    path: "/",
    // 필요한 경우, 옵션 기본값을 설정할 수도 있습니다.
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  for (let optionKey in options) {
    updatedCookie += "; " + optionKey;
    let optionValue = options[optionKey];
    if (optionValue !== true) {
      updatedCookie += "=" + optionValue;
    }
  }

  document.cookie = updatedCookie;
}

function checkToggle() {
  //sidebar 가 접혔을 때
  if (appId.className == "app app-sidebar-collapsed") {
    menuToggler.addEventListener("mouseenter", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    sidebar.addEventListener("mouseenter", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    menuToggler.addEventListener("mouseleave", (e) => {
      sidebar.style.setProperty("display", "none", "important");
    });

    sidebar.addEventListener("mouseleave", (e) => {
      sidebar.style.setProperty("display", "none", "important");
    });

    setCookie("sidebar", "fold");
  } else {
    //sidebar 가 펼쳐있을 때
    menuToggler.addEventListener("mouseenter", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    sidebar.addEventListener("mouseenter", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    menuToggler.addEventListener("mouseleave", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    sidebar.addEventListener("mouseleave", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    setCookie("sidebar", "open");
  }
}

//사용자가 메뉴를 접으며 or 피며 사용 하냐에 따른 메뉴 접힘 펼침
if (sidebarState == "fold") {
  //sidebar 가 접혔을 때
  target.classList.add("app-sidebar-collapsed");
} else {
  //sidebar 가 펼쳐있을 때
  target.classList.remove("app-sidebar-collapsed");
}

if (sidebarState == "null") {
}

$(document).ready(function() {
  //hover 시 side 메뉴 보여지고 숨기기
  if (appId.className == "app app-sidebar-collapsed") {
    menuToggler.addEventListener("mouseenter", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    sidebar.addEventListener("mouseenter", (e) => {
      sidebar.style.setProperty("display", "block", "important");
    });

    menuToggler.addEventListener("mouseleave", (e) => {
      sidebar.style.setProperty("display", "none", "important");
    });

    sidebar.addEventListener("mouseleave", (e) => {
      sidebar.style.setProperty("display", "none", "important");
    });
  }

  //햄버거 버튼 눌렀을 때 checkToggle 함수 작동
  $("#def").on("click", function() {
    checkToggle();
  });
});
