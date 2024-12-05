import { _ as __nuxt_component_0, a as __nuxt_component_2 } from "./Footer-ByW4O3lP.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BBsyahRc.js";
import { ref, withCtx, createTextVNode, unref, createVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderAttr, ssrInterpolate, ssrRenderStyle, ssrRenderList } from "vue/server-renderer";
import "./axiousInstance-DrjyNm3h.js";
import { a as formatDate, f as formatCurrency } from "./validate-DZZjg1ZS.js";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "axios";
import "date-fns";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
import "lodash-es";
import "vue-draggable-next";
import "vue-toast-notification";
import "@vue/devtools-api";
const _imports_0 = "" + __buildAssetsURL("about.4e1uFyOd.jpg");
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const totalCustomer = ref(0);
    const totalTour = ref(0);
    const totalCountry = ref(0);
    const top4Country = ref([]);
    const top6Tour = ref([]);
    ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderHome = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderHome, null, null, _parent));
      _push(`<section class="banner_w3lspvt" id="home" data-v-e384bca5><div class="csslider infinity" id="slider1" data-v-e384bca5><input type="radio" name="slides" checked="checked" id="slides_1" data-v-e384bca5><input type="radio" name="slides" id="slides_2" data-v-e384bca5><input type="radio" name="slides" id="slides_3" data-v-e384bca5><input type="radio" name="slides" id="slides_4" data-v-e384bca5><ul data-v-e384bca5><li data-v-e384bca5><div class="banner-top" data-v-e384bca5><div class="overlay" data-v-e384bca5><div class="container" data-v-e384bca5><div class="w3layouts-banner-info" data-v-e384bca5><h3 class="text-wh" data-v-e384bca5> Đừng bao giờ để những kỷ niệm của bạn lớn hơn những giấc mơ của bạn. </h3><h4 class="text-wh" data-v-e384bca5>Vui vẻ hơn mỗi ngày!</h4>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tourcustomer",
        class: "btn mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Đặt tour`);
          } else {
            return [
              createTextVNode("Đặt tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></li><li data-v-e384bca5><div class="banner-top1" data-v-e384bca5><div class="overlay" data-v-e384bca5><div class="container" data-v-e384bca5><div class="w3layouts-banner-info" data-v-e384bca5><h3 class="text-wh" data-v-e384bca5> Hãy để chúng tôi giúp bạn lưu giữ những kỉ niệm! </h3><h4 class="text-wh" data-v-e384bca5>Còn chần chừ gì nữa!!</h4><div class="buttons mt-4" data-v-e384bca5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Về chúng tôi`);
          } else {
            return [
              createTextVNode("Về chúng tôi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tourcustomer",
        class: "btn mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Đặt tour`);
          } else {
            return [
              createTextVNode("Đặt tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></li><li data-v-e384bca5><div class="banner-top2" data-v-e384bca5><div class="overlay" data-v-e384bca5><div class="container" data-v-e384bca5><div class="w3layouts-banner-info" data-v-e384bca5><h3 class="text-wh" data-v-e384bca5> Đừng bao giờ để những kỷ niệm của bạn lớn hơn những giấc mơ của bạn. </h3><h4 class="text-wh" data-v-e384bca5>Vui vẻ hơn mỗi ngày!</h4><div class="buttons mt-4" data-v-e384bca5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Về chúng tôi`);
          } else {
            return [
              createTextVNode("Về chúng tôi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tourcustomer",
        class: "btn mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Đặt tour`);
          } else {
            return [
              createTextVNode("Đặt tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></li><li data-v-e384bca5><div class="banner-top3" data-v-e384bca5><div class="overlay1" data-v-e384bca5><div class="container" data-v-e384bca5><div class="w3layouts-banner-info" data-v-e384bca5><h3 class="text-wh" data-v-e384bca5>Kỉ niệm qua mỗi chuyến đi!</h3><h4 class="text-wh" data-v-e384bca5>Vui vẻ !!!!</h4><div class="buttons mt-4" data-v-e384bca5>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "btn mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Về chúng tôi`);
          } else {
            return [
              createTextVNode("Về chúng tôi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/tourcustomer",
        class: "btn mr-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Đặt tour`);
          } else {
            return [
              createTextVNode("Đặt tour")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></div></li></ul><div class="arrows" data-v-e384bca5><label for="slides_1" data-v-e384bca5></label><label for="slides_2" data-v-e384bca5></label><label for="slides_3" data-v-e384bca5></label><label for="slides_4" data-v-e384bca5></label></div></div></section><section class="about py-5" data-v-e384bca5><div class="container py-lg-5 py-sm-4" data-v-e384bca5><div class="row" data-v-e384bca5><div class="col-lg-6 about-left" data-v-e384bca5><h3 class="mt-lg-3" data-v-e384bca5> Chúng tôi sẽ đưa bạn đến những điểm đến hàng đầu thế giới, <strong data-v-e384bca5>Hãy cùng chúng tôi khám phá!</strong></h3><p class="mt-4" data-v-e384bca5> Công ty du lịch cung cấp các dịch vụ và trải nghiệm du lịch cho khách hàng, từ việc tổ chức tour đến đặt phòng khách sạn và vé máy bay. Đội ngũ nhân viên giàu kinh nghiệm giúp khách hàng chọn lựa gói tour phù hợp và tạo ra những trải nghiệm độc đáo. Mục tiêu của họ là làm cho việc du lịch trở nên dễ dàng, thú vị và bảo vệ môi trường và văn hóa địa phương. </p><p class="mt-3" data-v-e384bca5> Khi đến với chúng tôi, bạn sẽ nhận được trải nghiệm du lịch độc đáo và dịch vụ chuyên nghiệp, đảm bảo mỗi chuyến đi của bạn là một kỷ niệm đáng nhớ. </p></div><div class="col-lg-6 about-right text-lg-right mt-lg-0 mt-5" data-v-e384bca5><img${ssrRenderAttr("src", _imports_0)} alt="" class="img-fluid abt-image" data-v-e384bca5></div></div><div class="row mt-5 text-center" data-v-e384bca5><div class="col-lg-3 col-6" data-v-e384bca5><div class="counter" data-v-e384bca5><span class="fa fa-smile-o" data-v-e384bca5></span><div class="timer count-title count-number" data-v-e384bca5>${ssrInterpolate(totalCustomer.value)}+ </div><p class="count-text text-uppercase" data-v-e384bca5>Khách hàng tiềm năng</p></div></div><div class="col-lg-3 col-6" data-v-e384bca5><div class="counter" data-v-e384bca5><span class="fa fa-ship" data-v-e384bca5></span><div class="timer count-title count-number" data-v-e384bca5>${ssrInterpolate(totalTour.value)}</div><p class="count-text text-uppercase" data-v-e384bca5>Tour du lịch</p></div></div><div class="col-lg-3 col-6 mt-lg-0 mt-5" data-v-e384bca5><div class="counter" data-v-e384bca5><span class="fa fa-users" data-v-e384bca5></span><div class="timer count-title count-number" data-v-e384bca5>${ssrInterpolate(totalCountry.value)}</div><p class="count-text text-uppercase" data-v-e384bca5>Quốc gia</p></div></div><div class="col-lg-3 col-6 mt-lg-0 mt-5" data-v-e384bca5><div class="counter" data-v-e384bca5><span class="fa fa-gift" data-v-e384bca5></span><div class="timer count-title count-number" data-v-e384bca5> 20+<span data-v-e384bca5>years</span></div><p class="count-text text-uppercase" data-v-e384bca5>Kinh nghiệm</p></div></div></div></div></section><div class="row" style="${ssrRenderStyle({ "padding-left": "10%" })}" data-v-e384bca5><p style="${ssrRenderStyle({ "font-size": "30px" })}" data-v-e384bca5>Vì sao chọn Hachu Travel</p><div class="row text-center" data-v-e384bca5><div class="col-4" data-v-e384bca5><div class="row" data-v-e384bca5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="3em" height="3em" fill="#377DF4" class="mt-3" data-v-e384bca5><path d="M357.7 8.5c-12.3-11.3-31.2-11.3-43.4 0l-208 192c-9.4 8.6-12.7 22-8.5 34c87.1 25.3 155.6 94.2 180.3 181.6H464c26.5 0 48-21.5 48-48V256h32c13.2 0 25-8.1 29.8-20.3s1.6-26.2-8.1-35.2l-208-192zM288 208c0-8.8 7.2-16 16-16h64c8.8 0 16 7.2 16 16v64c0 8.8-7.2 16-16 16H304c-8.8 0-16-7.2-16-16V208zM24 256c-13.3 0-24 10.7-24 24s10.7 24 24 24c101.6 0 184 82.4 184 184c0 13.3 10.7 24 24 24s24-10.7 24-24c0-128.1-103.9-232-232-232zm8 256a32 32 0 1 0 0-64 32 32 0 1 0 0 64zM0 376c0 13.3 10.7 24 24 24c48.6 0 88 39.4 88 88c0 13.3 10.7 24 24 24s24-10.7 24-24c0-75.1-60.9-136-136-136c-13.3 0-24 10.7-24 24z" data-v-e384bca5></path></svg></div><div class="mt-4 fw-bold" data-v-e384bca5>Mạng bán tour</div><div class="mt-4 text-muted" data-v-e384bca5>Ứng dụng công nghệ mới nhất</div></div><div class="col-4" data-v-e384bca5><div class="row" data-v-e384bca5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="3em" height="3em" fill="#377DF4" class="mt-3" data-v-e384bca5><path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" data-v-e384bca5></path></svg></div><div class="mt-4 fw-bold" data-v-e384bca5>Thanh toán</div><div class="mt-4 text-muted" data-v-e384bca5>An toàn và linh hoạt</div></div><div class="col-4" data-v-e384bca5><div class="row" data-v-e384bca5><svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" fill="#377DF4" class="bi bi-airplane-engines mt-3" viewBox="0 0 16 16" data-v-e384bca5><path d="M8 0c-.787 0-1.292.592-1.572 1.151A4.35 4.35 0 0 0 6 3v3.691l-2 1V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.191l-1.17.585A1.5 1.5 0 0 0 0 10.618V12a.5.5 0 0 0 .582.493l1.631-.272.313.937a.5.5 0 0 0 .948 0l.405-1.214 2.21-.369.375 2.253-1.318 1.318A.5.5 0 0 0 5.5 16h5a.5.5 0 0 0 .354-.854l-1.318-1.318.375-2.253 2.21.369.405 1.214a.5.5 0 0 0 .948 0l.313-.937 1.63.272A.5.5 0 0 0 16 12v-1.382a1.5 1.5 0 0 0-.83-1.342L14 8.691V7.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v.191l-2-1V3c0-.568-.14-1.271-.428-1.849C9.292.591 8.787 0 8 0M7 3c0-.432.11-.979.322-1.401C7.542 1.159 7.787 1 8 1s.458.158.678.599C8.889 2.02 9 2.569 9 3v4a.5.5 0 0 0 .276.447l5.448 2.724a.5.5 0 0 1 .276.447v.792l-5.418-.903a.5.5 0 0 0-.575.41l-.5 3a.5.5 0 0 0 .14.437l.646.646H6.707l.647-.646a.5.5 0 0 0 .14-.436l-.5-3a.5.5 0 0 0-.576-.411L1 11.41v-.792a.5.5 0 0 1 .276-.447l5.448-2.724A.5.5 0 0 0 7 7z" data-v-e384bca5></path></svg></div><div class="mt-4 fw-bold" data-v-e384bca5>Đặt tour</div><div class="mt-4 text-muted" data-v-e384bca5>Dễ dàng nhanh chóng</div></div></div><div class="row text-center mt-5" data-v-e384bca5><div class="col-4" data-v-e384bca5><div class="row" data-v-e384bca5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="3em" height="3em" fill="#377DF4" data-v-e384bca5><path d="M512 80c8.8 0 16 7.2 16 16v32H48V96c0-8.8 7.2-16 16-16H512zm16 144V416c0 8.8-7.2 16-16 16H64c-8.8 0-16-7.2-16-16V224H528zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm56 304c-13.3 0-24 10.7-24 24s10.7 24 24 24h48c13.3 0 24-10.7 24-24s-10.7-24-24-24H120zm128 0c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H248z" data-v-e384bca5></path></svg></div><div class="mt-4 fw-bold" data-v-e384bca5>Giá cả</div><div class="mt-4 text-muted" data-v-e384bca5>Mức giá ưu đãi</div></div><div class="col-4" data-v-e384bca5><div class="row" data-v-e384bca5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="3em" height="3em" fill="#377DF4" data-v-e384bca5><path d="M323.8 34.8c-38.2-10.9-78.1 11.2-89 49.4l-5.7 20c-3.7 13-10.4 25-19.5 35l-51.3 56.4c-8.9 9.8-8.2 25 1.6 33.9s25 8.2 33.9-1.6l51.3-56.4c14.1-15.5 24.4-34 30.1-54.1l5.7-20c3.6-12.7 16.9-20.1 29.7-16.5s20.1 16.9 16.5 29.7l-5.7 20c-5.7 19.9-14.7 38.7-26.6 55.5c-5.2 7.3-5.8 16.9-1.7 24.9s12.3 13 21.3 13L448 224c8.8 0 16 7.2 16 16c0 6.8-4.3 12.7-10.4 15c-7.4 2.8-13 9-14.9 16.7s.1 15.8 5.3 21.7c2.5 2.8 4 6.5 4 10.6c0 7.8-5.6 14.3-13 15.7c-8.2 1.6-15.1 7.3-18 15.2s-1.6 16.7 3.6 23.3c2.1 2.7 3.4 6.1 3.4 9.9c0 6.7-4.2 12.6-10.2 14.9c-11.5 4.5-17.7 16.9-14.4 28.8c.4 1.3 .6 2.8 .6 4.3c0 8.8-7.2 16-16 16H286.5c-12.6 0-25-3.7-35.5-10.7l-61.7-41.1c-11-7.4-25.9-4.4-33.3 6.7s-4.4 25.9 6.7 33.3l61.7 41.1c18.4 12.3 40 18.8 62.1 18.8H384c34.7 0 62.9-27.6 64-62c14.6-11.7 24-29.7 24-50c0-4.5-.5-8.8-1.3-13c15.4-11.7 25.3-30.2 25.3-51c0-6.5-1-12.8-2.8-18.7C504.8 273.7 512 257.7 512 240c0-35.3-28.6-64-64-64l-92.3 0c4.7-10.4 8.7-21.2 11.8-32.2l5.7-20c10.9-38.2-11.2-78.1-49.4-89zM32 192c-17.7 0-32 14.3-32 32V448c0 17.7 14.3 32 32 32H96c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32H32z" data-v-e384bca5></path></svg></div><div class="mt-4 fw-bold" data-v-e384bca5>Sản phẩm và dịch vụ</div><div class="mt-4 text-muted" data-v-e384bca5>Đa dạng - Chất lượng - An toàn</div></div><div class="col-4" data-v-e384bca5><div class="row" data-v-e384bca5><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="3em" height="3em" fill="#377DF4" data-v-e384bca5><path d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" data-v-e384bca5></path></svg></div><div class="mt-4 fw-bold" data-v-e384bca5>Thanh toán</div><div class="mt-4 text-muted" data-v-e384bca5>An toàn và linh hoạt</div></div></div></div><section class="packages py-5" id="tourByCountry" data-v-e384bca5><div class="container py-lg-4 py-sm-3" data-v-e384bca5><h3 class="heading text-capitalize text-center" data-v-e384bca5> Tour hot <i class="fa-solid fa-fire text-danger" style="${ssrRenderStyle({ "font-size": "1em" })}" data-v-e384bca5></i></h3><p class="text mt-2 mb-5 text-center" data-v-e384bca5> Những trải nghiệm tuyệt vời trong tour sẽ không làm bạn thất vọng </p><div class="row" id="displayTours" data-v-e384bca5><!--[-->`);
      ssrRenderList(top6Tour.value, (item) => {
        _push(`<div class="col-lg-4 col-sm-6 mb-5" data-v-e384bca5><div class="image-tour position-relative" data-v-e384bca5><img${ssrRenderAttr("src", item.image)} class="img-fluid" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-e384bca5></div><div class="package-info" style="${ssrRenderStyle({ "height": "350px" })}" data-v-e384bca5><span data-v-e384bca5>${ssrInterpolate(unref(formatDate)(item.dateStart))} -&gt; ${ssrInterpolate(unref(formatDate)(item.dateEnd))} - ${ssrInterpolate(item.numOfDay)} ngày </span><h5 class="mt-2" data-v-e384bca5><a data-v-e384bca5>${ssrInterpolate(item.nameTour)}</a></h5><ul class="listing mt-3" data-v-e384bca5>`);
        if (item.discount > 0) {
          _push(`<li data-v-e384bca5> Giá :<span class="text-decoration-line-through ms-2" data-v-e384bca5>${ssrInterpolate(unref(formatCurrency)(item.cost))}</span></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li class="d-flex justify-content-between" data-v-e384bca5><span class="text-danger" data-v-e384bca5>${ssrInterpolate(unref(formatCurrency)(item.priceSale))}</span>`);
        if (item.discount > 0) {
          _push(`<button type="button" class="btn btn-danger" data-v-e384bca5>${ssrInterpolate(item.discount)} % Giảm </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li><div class="d-flex justify-content-between mt-2" data-v-e384bca5>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: "/customerbooking",
            query: { id: item.id }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="btn btn-danger btn-small" data-v-e384bca5${_scopeId}><i class="fa-solid fa-cart-shopping text-white" data-v-e384bca5${_scopeId}></i> Đặt ngay </button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-danger btn-small"
                }, [
                  createVNode("i", { class: "fa-solid fa-cart-shopping text-white" }),
                  createTextVNode(" Đặt ngay ")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link link-danger text-decoration-none mx-1",
          style: { "cursor": "pointer" },
          to: {
            path: "/tourcustomer"
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="btn btn-outline-success" data-v-e384bca5${_scopeId}> Tìm tour </button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-outline-success"
                }, " Tìm tour ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="d-flex mt-2 justify-content-end mt-2" data-v-e384bca5><span class="text-decoration-underline me-2" data-v-e384bca5> Số chỗ còn nhận: </span> ${ssrInterpolate(item.slot)}</div></ul></div></div>`);
      });
      _push(`<!--]--></div></div></section><section class="destinations py-5" id="destinations" data-v-e384bca5><div class="container py-xl-5 py-lg-3" data-v-e384bca5><h3 class="heading text-capitalize text-center" data-v-e384bca5>Điểm đến phổ biến</h3><p class="text mt-2 mb-5 text-center" data-v-e384bca5> Là một trong những địa điểm hot nhất hiện nay. Nơi đặt chân hàng đầu của hàng ngàn du khách. </p><div class="row" data-v-e384bca5><!--[-->`);
      ssrRenderList(top4Country.value, (item) => {
        _push(`<div class="col-md-3 col-sm-6 col-6 destinations-grids text-center mt-md-0" data-v-e384bca5><h4 class="destination mb-3" data-v-e384bca5>${ssrInterpolate(item.countryName)}</h4><div class="image-position position-relative" data-v-e384bca5><div class="img-tourIndex" data-v-e384bca5><img${ssrRenderAttr("src", item.countryImage)} class="img-fluid" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-e384bca5></div></div><div class="destinations-info" data-v-e384bca5><div class="caption mb-lg-3" data-v-e384bca5><a href="#tourByCountry" data-v-e384bca5>Book Now</a></div></div></div>`);
      });
      _push(`<!--]--></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e384bca5"]]);
export {
  index as default
};
//# sourceMappingURL=index-LiBDAbnD.js.map
