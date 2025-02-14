import xpageLogo from "./assets/image/xpage-logo.png";
import userAvatar from "./assets/image/user-avatar.png";
import bgSwiperFirst from "./assets/image/swiper-1.webp";
import bgSwiperSecond from "./assets/image/swiper-2.webp";
import bgSwiperThird from "./assets/image/swiper-3.webp";
import bgSwiperFirstMob from "./assets/image/swiper-1-mobile.webp";
import bgSwiperSecondMob from "./assets/image/swiper-2-mobile.webp";
import bgSwiperThirdMob from "./assets/image/swiper-3-mobile.webp";
import imgPlayCardFirst from "./assets/image/play-1.png";
import imgPlayCardSecond from "./assets/image/play-2.png";
import imgPlayCardThird from "./assets/image/play-3.png";
import imgPlayCardFirstMob from "./assets/image/play-1-mobile.png";
import imgPlayCardSecondMob from "./assets/image/play-2-mobile.png";
import imgPlayCardThirdMob from "./assets/image/play-3-mobile.png";
import imgLearnFirst from "./assets/image/learn-1.png";
import imgLearnFirstMob from "./assets/image/learn-1-mobile.png";
import imgLearnSecond from "./assets/image/learn-2.png";
import footerBg from "./assets/image/footer-bg.png";
import footerBgMob from "./assets/image/footer-bg-mobile.png";
import footerQR from "./assets/image/footer-qr.png";

import burger from "./js/burger";

import Swiper from "swiper/bundle";
import "swiper/css/bundle";

import "./assets/fonts/fonts.scss";
import "./scss/main.scss"

const swiperText = ["играй", "учись", "смотри"];
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<div class="' + className + '">' + swiperText[index] + "</div>";
    },
  },
});

document.querySelectorAll(".swiper-pagination-bullet").forEach((el) =>
  el.addEventListener("mouseover", (event) => {
    el.click();
  })
);
