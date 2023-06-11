console.clear();

/*팝업 닫기 버튼*/
$(".popup-txt").click(function () {
  $(".popup-wrap").addClass("noshow");
});

/*메뉴 버튼 활성화*/
if ($(".top-menu-white").hasClass("false")) {
  $(".header" + " .more-menu-box >" + " button").click(function () {
    $(".top-menu-white").removeClass("false");
  });
}
/*메뉴 버튼 비활성화*/
$(".white-close-btn").click(function () {
  $(".top-menu-white").addClass("false");
});

/*반응형 메뉴버튼 클릭시*/
$(".ws-button").click(function () {
  $(".ws-menu").addClass("active");
  $("html").addClass("active");
});

$(".ws-menu > ul > li").click(function () {
  if ($(this).children().hasClass("on")) {
    $(this).children().removeClass("on");
    $(this).children().removeClass("change");
  } else {
    $(this).children().addClass("on");
    $(this).siblings().children().removeClass("on");
    $(this).children().addClass("change");
    $(this).siblings().children().removeClass("change");
  }

  $(".sub-menu").click(function () {
    return false;
  });
});

$(".r-btn").click(function () {
  $(".ws-menu").removeClass("active");
  $("html").removeClass("active");
  $(".ws-menu > ul > li > .sub-menu").removeClass("on");
  $(".ws-menu > ul > li > .m-btn").removeClass("change");
});

//메뉴 마우스오버 코드
$(".header" + " .menu-box > ul > li").hover(
  function () {
    $(".top-down-menu").removeClass("false");

    $(".menu-1").hover(function () {
      $(".company").addClass("show");
      $(".company").siblings().removeClass("show");
    });

    $(".menu-2").hover(function () {
      $(".business").addClass("show");
      $(".business").siblings().removeClass("show");
    });

    $(".menu-3").hover(function () {
      $(".media").addClass("show");
      $(".media").siblings().removeClass("show");
    });

    $(".menu-4").hover(function () {
      $(".lounge").addClass("show");
      $(".lounge").siblings().removeClass("show");
    });

    $(".menu-5").hover(function () {
      $(".recruit").addClass("show");
      $(".recruit").siblings().removeClass("show");
    });
  },
  function () {
    $(".bg-box").mouseleave(function () {
      $(".top-down-menu").addClass("false");
    });
  }
);

/*스크롤 움직임에 따라 바 배경 생성 코드*/
window.addEventListener("scroll", function () {
  let scrollValue = window.scrollY;

  if (scrollValue > 0) {
    $(".section").addClass("active");
    $(".header-visible").css("background-color", "#000");
    $(".header-visible" + " .more-menu-box >" + " button").removeClass(
      "menu-btn"
    );
    $(".header-visible" + " .more-menu-box >" + " button").addClass(
      "change-btn"
    );
  } else {
    $(".section").removeClass("active");
    $(".header-visible").css("background", "none");
    $(".header-visible" + " .more-menu-box >" + " button").removeClass(
      "change-btn"
    );
    $(".header-visible" + " .more-menu-box >" + " button").addClass("menu-btn");
  }
});
