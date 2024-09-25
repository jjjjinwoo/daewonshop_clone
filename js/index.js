"use strict";

// 헤더 : 스크롤 시 작아지는 이벤트

const headerDown = document.querySelector("header .header_down");
const sideMenu = document.querySelector(".side_menu");

window.addEventListener("scroll", function () {
  if (this.scrollY > 268) {
    headerDown.classList.add("scroll");
    sideMenu.style.top = "0px";
  } else if (this.scrollY <= 268) {
    headerDown.classList.remove("scroll");
    sideMenu.style.top = "48px";
  }
});

// 서브 메뉴 : 메뉴버튼 클릭하면

const subMenu = document.querySelector(".sub_menu");
const menuBtn = document.querySelectorAll(".menu");

let smSum = 0;

function subMenuOn(e) {
  event.preventDefault();
  if (smSum == 0) {
    subMenu.classList.add("on");
    for (var i = 0; i < menuBtn.length; i++) {
      menuBtn[i].classList.add("on");
    }
    smSum++;
  } else {
    subMenu.classList.remove("on");
    for (var i = 0; i < menuBtn.length; i++) {
      menuBtn[i].classList.remove("on");
    }
    depth2[0].classList.remove("on");
    depth3[0].classList.remove("on");
    for (var i = 0; i < depth1Text.length; i++) {
      depth1Text[i].classList.remove("on");
    }
    for (var i = 0; i < depth2Text.length; i++) {
      depth2Text[i].classList.remove("on");
    }
    smSum--;
  }
}

// 서브 메뉴 : 뎁스

const depth1Text = document.querySelectorAll(".sub_menu .depth.first li");
const depth2 = document.querySelectorAll(".sub_menu .depth.second");
const depth2Text = document.querySelectorAll(".sub_menu .depth.second li");
const depth3 = document.querySelectorAll(".sub_menu .depth.third");

for (var i = 0; i < depth1Text.length; i++) {
  depth1Text[i].addEventListener("click", function (e) {
    event.preventDefault();
    for (var i = 0; i < depth1Text.length; i++) {
      depth1Text[i].classList.remove("on");
    }
    this.classList.add("on");
  });
}

for (var i = 0; i < depth1Text.length; i++) {
  depth1Text[i].addEventListener("click", function () {
    event.preventDefault();
    for (var i = 0; i < depth1Text.length; i++) {
      depth1Text[i].classList.remove("on");
      depth3[0].classList.remove("on");
    }
    this.classList.add("on");

    depth2[0].classList.add("on");
  });
}

for (var i = 0; i < depth2Text.length; i++) {
  depth2Text[i].addEventListener("click", function () {
    event.preventDefault();
    for (var i = 0; i < depth2Text.length; i++) {
      depth2Text[i].classList.remove("on");
    }
    this.classList.add("on");

    depth3[0].classList.add("on");
  });
}

// 섹션1 : 슬라이드

$(document).ready(function () {
  $(".sec1 .slider").slick({
    draggable: false,
    arrows: false,
    speed: 700,
    asNavFor: ".sec1 .slide_page .now",
  });
  //슬라이더 버튼
  $(".sec1 .arrow_box .left").click(function () {
    $(".sec1 .slider").slick("slickPrev");
  });
  $(".sec1 .arrow_box .right").click(function () {
    $(".sec1 .slider").slick("slickNext");
  });

  //슬라이더 페이지
  $(".sec1 .slide_page .now").slick({
    arrows: false,
    fade: true,
    asNavFor: ".sec1 .slider",
  });

  const sec1TextBox = document.querySelectorAll(".sec1 .slider .text_box");

  //슬라이더 콜백을 이용한 텍스트 애니메이션
  $(".sec1 .slider").on("beforeChange", function () {
    for (var i = 0; i < sec1TextBox.length; i++) {
      sec1TextBox[i].style.display = "none";
    }
  });
  $(".sec1 .slider").on("afterChange", function () {
    for (var i = 0; i < sec1TextBox.length; i++) {
      sec1TextBox[i].style.display = "block";
    }
  });
});

// 섹션2 : 슬라이드

$(document).ready(function () {
  $(".sec2 .ad_box .img_box").slick({
    speed: 1500,
    arrows: false,
    draggable: false,
    autoplay: true,
    pauseOnHover: false,
  });

  $(".sec2 .arrow_box .left").click(function () {
    $(".sec2 .ad_box .img_box").slick("slickPrev");
  });
  $(".sec2 .arrow_box .right").click(function () {
    $(".sec2 .ad_box .img_box").slick("slickNext");
  });
});

// 섹션3 : 슬라이드

$(document).ready(function () {
  $(".sec3 .slider").slick({
    slidesToShow: 4,
    speed: 1000,
    draggable: false,
    arrows: false,
  });

  $(".sec3 .arrow_box .left").click(function () {
    $(".sec3 .slider").slick("slickPrev");
  });
  $(".sec3 .arrow_box .right").click(function () {
    $(".sec3 .slider").slick("slickNext");
  });
});

// 섹션4 : 슬라이드

$(document).ready(function () {
  var $slider = $(".sec4 .slider");
  var $progressBar = $(".sec4 .progress");
  var $progressBarLabel = $(".sec4 .slider__label");

  $slider.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / slick.slideCount) * 200;

    $progressBar
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel.text(calc + "% completed");
  });

  $slider.on("afterChange", function (event, slick, currentSlide, nextSlide) {
    if (currentSlide == 3) {
      $slider.slick("slickGoTo", 1);
    }
  });

  $(".sec4 .slider").slick({
    slidesToShow: 3,
    infinite: false,
    draggable: false,
    arrows: false,
    waitForAnimate: true,
    autoplay: true,
  });

  $(".sec4 .arrow_box .left").click(function () {
    $(".sec4 .slider").slick("slickPrev");
  });
  $(".sec4 .arrow_box .right").click(function () {
    $(".sec4 .slider").slick("slickNext");
  });
});
