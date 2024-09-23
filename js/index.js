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
    smSum--;
  }
}

// 서브 메뉴 : 뎁스

const depth1Text = document.querySelectorAll(".sub_menu .depth.first li");
const depth2 = document.querySelectorAll(".sub_menu .depth.second");
const depth2Text = document.querySelectorAll(".sub_menu .depth.second li");
const depth3 = document.querySelectorAll(".sub_menu .depth.third");

for (var i = 0; i < depth1Text.length; i++) {
  depth1Text[i].addEventListener("click", function () {
    for (var i = 0; i < depth1Text.length; i++) {
      depth1Text[i].classList.remove("on");
    }
    this.classList.add("on");
  });
}

depth1Text[0].addEventListener("click", function () {
  for (var i = 0; i < depth2.length; i++) {
    depth2[i].classList.remove("on");
  }
  depth2[0].classList.add("on");
});

depth1Text[1].addEventListener("click", function () {
  for (var i = 0; i < depth2.length; i++) {
    depth2[i].classList.remove("on");
  }
  depth2[1].classList.add("on");
});

for (var i = 0; i < depth2Text.length; i++) {
  depth2Text[i].addEventListener("click", function () {
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
