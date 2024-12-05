import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-ByW4O3lP.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BBsyahRc.mjs';
import { computed, ref, unref, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from 'vue/server-renderer';
import { _ as _export_sfc, u as useRoute } from './server.mjs';
import { f as formatCurrency, a as formatDate } from './validate-DZZjg1ZS.mjs';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';
import 'vue-draggable-next';
import 'date-fns';

const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    computed(() => route.query.id);
    const Tour = ref({});
    const showHotline = ref(false);
    const showInclude = ref(false);
    const showNotInclude = ref(false);
    const showChildTicket = ref(false);
    const showPayment = ref(false);
    const cancel = ref(false);
    const Call = ref(false);
    const reducedNumOfDay = computed(() => {
      return Tour.value.numOfDay - 1;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderHome = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderHome, null, null, _parent));
      _push(`<section class="banner_inner" id="home" data-v-93ad5a8b><div class="banner_inner_overlay" data-v-93ad5a8b></div></section><section class="packages" data-v-93ad5a8b><div class="container py-lg-4" data-v-93ad5a8b><div class="row" id="displayTours" data-v-93ad5a8b><h4 class="heading text-capitalize col-7" data-v-93ad5a8b>${ssrInterpolate(Tour.value.nameTour)}</h4><div class="col-5 row m-0" data-v-93ad5a8b><div class="col-7" data-v-93ad5a8b>`);
      if (Tour.value.discount > 0) {
        _push(`<span class="text-decoration-line-through d-flex justify-content-end w-100" data-v-93ad5a8b> Gi\xE1 : ${ssrInterpolate(unref(formatCurrency)(Tour.value.cost))}/kh\xE1ch</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex flex-row fs-5" data-v-93ad5a8b>`);
      if (Tour.value.discount > 0) {
        _push(`<button type="button" class="btn btn-danger btn-sm mb-3" data-v-93ad5a8b> Gi\u1EA3m ${ssrInterpolate(Tour.value.discount)}% </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="text-danger fw-bold fs-5" data-v-93ad5a8b>${ssrInterpolate(unref(formatCurrency)(Tour.value.priceSale))}</span>/kh\xE1ch </div></div><div class="col-5 p-0 text-end" data-v-93ad5a8b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: {
          path: "/customerbooking",
          query: { id: Tour.value.id }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="btn btn-danger btn-small mb-3 w-100 p-3" data-v-93ad5a8b${_scopeId}><i class="fa-solid fa-cart-shopping text-white" data-v-93ad5a8b${_scopeId}></i> \u0110\u1EB7t ngay </button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "btn btn-danger btn-small mb-3 w-100 p-3"
              }, [
                createVNode("i", { class: "fa-solid fa-cart-shopping text-white" }),
                createTextVNode(" \u0110\u1EB7t ngay ")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, { to: {
        path: "/contact"
      } }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="btn btn-outline-secondary btn-small w-100 p-3" data-v-93ad5a8b${_scopeId}> Li\xEAn h\u1EC7 t\u01B0 v\u1EA5n </button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "btn btn-outline-secondary btn-small w-100 p-3"
              }, " Li\xEAn h\u1EC7 t\u01B0 v\u1EA5n ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="row mt-5" id="displayTours" data-v-93ad5a8b><div class="col-7" data-v-93ad5a8b><div class="image-tourdetail position-relative" data-v-93ad5a8b><img${ssrRenderAttr("src", Tour.value.image)} class="img-fluid" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-93ad5a8b></div></div><div class="col-5" data-v-93ad5a8b><div class="bg-light rounded ps-3 pt-3" style="${ssrRenderStyle({ "height": "150px" })}" data-v-93ad5a8b>${ssrInterpolate(Tour.value.descripttion)}</div><div class="mt-3 bg-light rounded ps-3 pt-3" style="${ssrRenderStyle({ "height": "230px" })}" data-v-93ad5a8b><span class="mt-2" data-v-93ad5a8b> Kh\u1EDFi h\xE0nh : <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(unref(formatDate)(Tour.value.dateStart))}</span> - Gi\u1EDD \u0111i : ${ssrInterpolate(Tour.value.timeStart)}</span><div class="mt-2" data-v-93ad5a8b> T\u1EADp trung : ${ssrInterpolate(Tour.value.meetingPoint)} ng\xE0y <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(unref(formatDate)(Tour.value.dateStart))}</span></div><div class="mt-2" data-v-93ad5a8b> Th\u1EDDi gian : <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(Tour.value.numOfDay)} ng\xE0y</span></div><div class="mt-2" data-v-93ad5a8b> N\u01A1i kh\u1EDFi h\xE0nh : <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(Tour.value.placeStart)}</span></div><div class="mt-2" data-v-93ad5a8b> S\u1ED1 ch\u1ED7 c\xF2n nh\u1EADn: <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(Tour.value.slot)}</span></div></div></div></div><div class="row mt-5 bg-light rounded" data-v-93ad5a8b><div class="col-10" data-v-93ad5a8b><div class="row mt-4" data-v-93ad5a8b><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-regular fa-flag" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="fw-bold ms-2" data-v-93ad5a8b> Th\u1EDDi gian </span> <br data-v-93ad5a8b> ${ssrInterpolate(Tour.value.numOfDay)} ng\xE0y ${ssrInterpolate(unref(reducedNumOfDay))} \u0111\xEAm </div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-regular fa-map" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>\u0110i\u1EC3m tham quan</span> <br data-v-93ad5a8b><span data-v-93ad5a8b>${ssrInterpolate(Tour.value.place)}<br data-v-93ad5a8b></span></span><br data-v-93ad5a8b></div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-utensils" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>\u1EA8m th\u1EF1c</span> <br data-v-93ad5a8b> Theo th\u1EF1c \u0111\u01A1n </span><br data-v-93ad5a8b></div></div><div class="row mt-5" data-v-93ad5a8b><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-hotel" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="fw-bold ms-2" data-v-93ad5a8b> Kh\xE1ch s\u1EA1n </span> <br data-v-93ad5a8b> D\u1ECBch v\u1EE5 ti\u1EC7n \xEDch </div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-regular fa-clock" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>Th\u1EDDi gian l\xFD t\u01B0\u1EDFng</span> <br data-v-93ad5a8b> B\u1ED1n m\xF9a quanh n\u0103m </span><br data-v-93ad5a8b></div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-users" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>\u0110\u1ED1i t\u01B0\u1EE3ng th\xEDch h\u1EE3p</span> <br data-v-93ad5a8b> Ph\xF9 h\u1EE3p v\u1EDBi h\xE0nh kh\xE1ch tr\xEAn 12tu\u1ED5i </span><br data-v-93ad5a8b></div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-tag" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>\u01AFu \u0111\xE3i</span> <br data-v-93ad5a8b> \u01AFu \u0111\xE3i \u0111\xE3 b\u1EA3o g\u1ED3m gi\xE1 tour </span><br data-v-93ad5a8b></div></div></div><div class="col-2 py-5" data-v-93ad5a8b><div class="row ps-3 fw-bold" data-v-93ad5a8b>Qu\xFD kh\xE1ch c\u1EA7n h\u1ED7 tr\u1EE3?</div><div class="d-flex flex-row rounded-4 pt-2 ps-2 mt-3" style="${ssrRenderStyle({ "color": "#377df4", "height": "3em", "border": "2px solid #377df4" })}" data-v-93ad5a8b><i class="fa-solid fa-phone mt-1 me-2" data-v-93ad5a8b></i><span data-v-93ad5a8b>G\u1ECDi \u0111i\u1EC7n tho\u1EA1i? </span></div>`);
      if (showHotline.value) {
        _push(`<span class="text-danger ps-4" data-v-93ad5a8b> B\u1EA1n li\xEAn h\u1EC7 hoteline <span class="px-4" data-v-93ad5a8b> +84962383838</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-93ad5a8b><button class="rounded-4 d-flex flex-row pt-2 ps-2 mt-3" style="${ssrRenderStyle({ "color": "#377df4", "height": "3em", "border": "2px solid #377df4" })}" data-v-93ad5a8b><i class="fa-regular fa-envelope mt-1 me-1" data-v-93ad5a8b></i><span data-v-93ad5a8b>G\u1EEDi y\xEAu c\u1EA7u h\u1ED7 tr\u1EE3</span></button></form></div></div><div class="row mt-5" data-v-93ad5a8b><h4 class="heading text-capitalize text-center mt-2" data-v-93ad5a8b>L\u1ECBch tr\xECnh</h4><div class="bg-light rounded mt-5 ps-4 py-4" style="${ssrRenderStyle({ "border": "2px solid rgba(211, 211, 211, 0.5)" })}" data-v-93ad5a8b>${Tour.value.plan}</div></div><div class="row mt-5" data-v-93ad5a8b><h4 class="heading text-capitalize text-center mt-2" data-v-93ad5a8b> Nh\u1EEFng th\xF4ng tin c\u1EA7n l\u01B0u \xFD </h4><div class="row" data-v-93ad5a8b><div class="col-6" data-v-93ad5a8b><div class="bg-light rounded mt-5" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Gi\xE1 Tour bao g\u1ED3m</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showInclude.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b>${Tour.value.serviceInclude}</span><br data-v-93ad5a8b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Gi\xE1 Tour kh\xF4ng bao g\u1ED3m</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showNotInclude.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b><span data-v-93ad5a8b>${Tour.value.serviceNotInclude}</span><br data-v-93ad5a8b></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Gi\xE1 v\xE9 tr\u1EBB em</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showChildTicket.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b> Tr\u1EBB em d\u01B0\u1EDBi 2 tu\u1ED5i: 30% gi\xE1 tour ng\u01B0\u1EDDi l\u1EDBn </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-6" data-v-93ad5a8b><div class="bg-light rounded mt-5" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>L\u01B0u \xFD khi h\u1EE7y chuy\u1EBFn</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (cancel.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b> Sau khi ho\xE0n t\u1EA5t thanh to\xE1n, n\u1EBFu Qu\xFD kh\xE1ch mu\u1ED1n h\u1EE7y ho\u1EB7c chuy\u1EC3n tour, vui l\xF2ng li\xEAn h\u1EC7 tr\u1EF1c ti\u1EBFp qua \u0111i\u1EC7n tho\u1EA1i ho\u1EB7c email \u0111\u1EC3 y\xEAu c\u1EA7u h\u1EE7y tour. Hachutravel s\u1EBD h\u1ED7 tr\u1EE3 Qu\xFD kh\xE1ch x\u1EED l\xFD th\u1EE7 t\u1EE5c h\u1EE7y tour v\xE0 \xE1p d\u1EE5ng ph\xED h\u1EE7y theo quy \u0111\u1ECBnh. <ul data-v-93ad5a8b><li data-v-93ad5a8b>- H\u1EE7y tour sau khi \u0111\u1EB7t c\u1ECDc: m\u1EA5t 100% ti\u1EC1n c\u1ECDc</li><li data-v-93ad5a8b>- H\u1EE7y tour khi \u0111\xE3 thanh to\xE1n 100% t\u1ED5ng gi\xE1 tr\u1ECB tour s\u1EBD t\xEDnh ph\xED theo th\u1EDDi \u0111i\u1EC3m th\xF4ng b\xE1o h\u1EE7y (Kh\xF4ng t\xEDnh ng\xE0y l\u1EC5 v\xE0 ch\u1EE7 nh\u1EADt) nh\u01B0 sau: <ul data-v-93ad5a8b><li data-v-93ad5a8b>+ Sau khi \u0111\u1EB7t tour, h\u1EE7y tour m\u1EA5t 10% t\u1ED5ng gi\xE1 tr\u1ECB tour</li><li data-v-93ad5a8b>+ T\u1EEB 11 \u0111\u1EBFn 15 ng\xE0y tr\u01B0\u1EDBc ng\xE0y kh\u1EDFi h\xE0nh: ch\u1ECBu ph\xED 30% t\u1ED5ng gi\xE1 tr\u1ECB tour</li><li data-v-93ad5a8b>+ T\u1EEB 6 \u0111\u1EBFn 10 ng\xE0y tr\u01B0\u1EDBc ng\xE0y kh\u1EDFi h\xE0nh: ch\u1ECBu ph\xED 50% t\u1ED5ng gi\xE1 tr\u1ECB tour</li><li data-v-93ad5a8b>+ T\u1EEB 2 \u0111\u1EBFn 5 ng\xE0y tr\u01B0\u1EDBc ng\xE0y kh\u1EDFi h\xE0nh: ch\u1ECBu ph\xED 70% t\u1ED5ng gi\xE1 tr\u1ECB tour</li><li data-v-93ad5a8b>+ T\u1EEB 1 ng\xE0y tr\u01B0\u1EDBc ng\xE0y kh\u1EDFi h\xE0nh: ch\u1ECBu ph\xED 100% t\u1ED5ng gi\xE1 tr\u1ECB tour</li></ul></li></ul><br data-v-93ad5a8b> Tr\u01B0\u1EDDng h\u1EE3p h\u1EE7y tour do s\u1EF1 c\u1ED1 kh\xE1ch quan nh\u01B0 : thi\xEAn tai, d\u1ECBch b\u1EC7nh ho\u1EB7c do ph\u01B0\u01A1ng ti\u1EC7n ho\xE3n/h\u1EE7y chuy\u1EBFn , c\xF4ng ty s\u1EBD h\u1ED7 tr\u1EE3 b\u1EA3o l\u01B0u s\u1ED1 ti\u1EC1n qu\xFD kh\xE1ch \u0111\xE3 thanh to\xE1n v\xE0 d\u1EDDi sang ng\xE0y kh\u1EDFi h\xE0nh ph\xF9 h\u1EE3p ti\u1EBFp theo , ho\u1EB7c Qu\xFD kh\xE1ch c\xF3 th\u1EC3 \u0111\u1ED5i sang tour kh\xE1c c\xF3 gi\xE1 tr\u1ECB tour b\u1EB1ng ho\u1EB7c cao h\u01A1n tour c\u0169. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>\u0110i\u1EC1u ki\u1EC7n thanh to\xE1n</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showPayment.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b> Qu\xFD kh\xE1ch vui l\xF2ng thanh to\xE1n \u0111\u1EA7y \u0111\u1EE7 trong 24 gi\u1EDD \u0111\u1EC3 \u0111\u1EB7t tour th\xE0nh c\xF4ng.</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Li\xEAn h\u1EC7</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (Call.value) {
        _push(`<div class="ms-4 pb-3 text-center fw-bold" data-v-93ad5a8b><span class="text-danger" data-v-93ad5a8b>Ch\u01B0\u01A1ng tr\xECnh c\xF3 th\u1EC3 thay \u0111\u1ED5i t\xF9y v\xE0o t\xECnh h\xECnh th\u1EF1c t\u1EBF</span><br data-v-93ad5a8b> M\u1ECDi chi ti\u1EBFt xin li\xEAn h\u1EC7 : +84962383838 <br data-v-93ad5a8b> 66 ng\xE1ch 6/46 Mi\xEAu Nha, T\xE2y M\u1ED7, Nam T\u1EEB Li\xEAm, H\xE0 N\u1ED9i<br data-v-93ad5a8b> K\xCDNH CH\xDAC QU\xDD KH\xC1CH M\u1ED8T CHUY\u1EBEN DU L\u1ECACH VUI V\u1EBA &amp; TH\xDA V\u1ECA!<br data-v-93ad5a8b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tourdetail/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-93ad5a8b"]]);

export { index as default };
//# sourceMappingURL=index-Cmm02sOK.mjs.map
