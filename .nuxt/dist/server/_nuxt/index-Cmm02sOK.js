import { _ as __nuxt_component_0, a as __nuxt_component_2 } from "./Footer-ByW4O3lP.js";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BBsyahRc.js";
import { computed, ref, unref, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrInterpolate, ssrRenderAttr, ssrRenderStyle } from "vue/server-renderer";
import "./axiousInstance-DrjyNm3h.js";
import "hookable";
import { _ as _export_sfc, b as useRoute } from "../server.mjs";
import "destr";
import "klona";
import "devalue";
import "defu";
import { f as formatCurrency, a as formatDate } from "./validate-DZZjg1ZS.js";
import "ufo";
import "axios";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "lodash-es";
import "vue-draggable-next";
import "vue-toast-notification";
import "@vue/devtools-api";
import "date-fns";
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
        _push(`<span class="text-decoration-line-through d-flex justify-content-end w-100" data-v-93ad5a8b> Giá : ${ssrInterpolate(unref(formatCurrency)(Tour.value.cost))}/khách</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex flex-row fs-5" data-v-93ad5a8b>`);
      if (Tour.value.discount > 0) {
        _push(`<button type="button" class="btn btn-danger btn-sm mb-3" data-v-93ad5a8b> Giảm ${ssrInterpolate(Tour.value.discount)}% </button>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<span class="text-danger fw-bold fs-5" data-v-93ad5a8b>${ssrInterpolate(unref(formatCurrency)(Tour.value.priceSale))}</span>/khách </div></div><div class="col-5 p-0 text-end" data-v-93ad5a8b>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: {
          path: "/customerbooking",
          query: { id: Tour.value.id }
        }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<button type="button" class="btn btn-danger btn-small mb-3 w-100 p-3" data-v-93ad5a8b${_scopeId}><i class="fa-solid fa-cart-shopping text-white" data-v-93ad5a8b${_scopeId}></i> Đặt ngay </button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "btn btn-danger btn-small mb-3 w-100 p-3"
              }, [
                createVNode("i", { class: "fa-solid fa-cart-shopping text-white" }),
                createTextVNode(" Đặt ngay ")
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
            _push2(`<button type="button" class="btn btn-outline-secondary btn-small w-100 p-3" data-v-93ad5a8b${_scopeId}> Liên hệ tư vấn </button>`);
          } else {
            return [
              createVNode("button", {
                type: "button",
                class: "btn btn-outline-secondary btn-small w-100 p-3"
              }, " Liên hệ tư vấn ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div><div class="row mt-5" id="displayTours" data-v-93ad5a8b><div class="col-7" data-v-93ad5a8b><div class="image-tourdetail position-relative" data-v-93ad5a8b><img${ssrRenderAttr("src", Tour.value.image)} class="img-fluid" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-93ad5a8b></div></div><div class="col-5" data-v-93ad5a8b><div class="bg-light rounded ps-3 pt-3" style="${ssrRenderStyle({ "height": "150px" })}" data-v-93ad5a8b>${ssrInterpolate(Tour.value.descripttion)}</div><div class="mt-3 bg-light rounded ps-3 pt-3" style="${ssrRenderStyle({ "height": "230px" })}" data-v-93ad5a8b><span class="mt-2" data-v-93ad5a8b> Khởi hành : <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(unref(formatDate)(Tour.value.dateStart))}</span> - Giờ đi : ${ssrInterpolate(Tour.value.timeStart)}</span><div class="mt-2" data-v-93ad5a8b> Tập trung : ${ssrInterpolate(Tour.value.meetingPoint)} ngày <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(unref(formatDate)(Tour.value.dateStart))}</span></div><div class="mt-2" data-v-93ad5a8b> Thời gian : <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(Tour.value.numOfDay)} ngày</span></div><div class="mt-2" data-v-93ad5a8b> Nơi khởi hành : <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(Tour.value.placeStart)}</span></div><div class="mt-2" data-v-93ad5a8b> Số chỗ còn nhận: <span class="fw-bold" data-v-93ad5a8b>${ssrInterpolate(Tour.value.slot)}</span></div></div></div></div><div class="row mt-5 bg-light rounded" data-v-93ad5a8b><div class="col-10" data-v-93ad5a8b><div class="row mt-4" data-v-93ad5a8b><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-regular fa-flag" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="fw-bold ms-2" data-v-93ad5a8b> Thời gian </span> <br data-v-93ad5a8b> ${ssrInterpolate(Tour.value.numOfDay)} ngày ${ssrInterpolate(unref(reducedNumOfDay))} đêm </div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-regular fa-map" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>Điểm tham quan</span> <br data-v-93ad5a8b><span data-v-93ad5a8b>${ssrInterpolate(Tour.value.place)}<br data-v-93ad5a8b></span></span><br data-v-93ad5a8b></div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-utensils" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>Ẩm thực</span> <br data-v-93ad5a8b> Theo thực đơn </span><br data-v-93ad5a8b></div></div><div class="row mt-5" data-v-93ad5a8b><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-hotel" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="fw-bold ms-2" data-v-93ad5a8b> Khách sạn </span> <br data-v-93ad5a8b> Dịch vụ tiện ích </div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-regular fa-clock" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>Thời gian lý tưởng</span> <br data-v-93ad5a8b> Bốn mùa quanh năm </span><br data-v-93ad5a8b></div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-users" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>Đối tượng thích hợp</span> <br data-v-93ad5a8b> Phù hợp với hành khách trên 12tuổi </span><br data-v-93ad5a8b></div><div class="col-3 text-center" data-v-93ad5a8b><i class="fa-solid fa-tag" style="${ssrRenderStyle({ "color": "#377df4", "font-size": "1.5em" })}" data-v-93ad5a8b></i><br data-v-93ad5a8b><span class="ms-2" data-v-93ad5a8b><span class="fw-bold" data-v-93ad5a8b>Ưu đãi</span> <br data-v-93ad5a8b> Ưu đãi đã bảo gồm giá tour </span><br data-v-93ad5a8b></div></div></div><div class="col-2 py-5" data-v-93ad5a8b><div class="row ps-3 fw-bold" data-v-93ad5a8b>Quý khách cần hỗ trợ?</div><div class="d-flex flex-row rounded-4 pt-2 ps-2 mt-3" style="${ssrRenderStyle({ "color": "#377df4", "height": "3em", "border": "2px solid #377df4" })}" data-v-93ad5a8b><i class="fa-solid fa-phone mt-1 me-2" data-v-93ad5a8b></i><span data-v-93ad5a8b>Gọi điện thoại? </span></div>`);
      if (showHotline.value) {
        _push(`<span class="text-danger ps-4" data-v-93ad5a8b> Bạn liên hệ hoteline <span class="px-4" data-v-93ad5a8b> +84962383838</span></span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<form data-v-93ad5a8b><button class="rounded-4 d-flex flex-row pt-2 ps-2 mt-3" style="${ssrRenderStyle({ "color": "#377df4", "height": "3em", "border": "2px solid #377df4" })}" data-v-93ad5a8b><i class="fa-regular fa-envelope mt-1 me-1" data-v-93ad5a8b></i><span data-v-93ad5a8b>Gửi yêu cầu hỗ trợ</span></button></form></div></div><div class="row mt-5" data-v-93ad5a8b><h4 class="heading text-capitalize text-center mt-2" data-v-93ad5a8b>Lịch trình</h4><div class="bg-light rounded mt-5 ps-4 py-4" style="${ssrRenderStyle({ "border": "2px solid rgba(211, 211, 211, 0.5)" })}" data-v-93ad5a8b>${Tour.value.plan}</div></div><div class="row mt-5" data-v-93ad5a8b><h4 class="heading text-capitalize text-center mt-2" data-v-93ad5a8b> Những thông tin cần lưu ý </h4><div class="row" data-v-93ad5a8b><div class="col-6" data-v-93ad5a8b><div class="bg-light rounded mt-5" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Giá Tour bao gồm</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showInclude.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b>${Tour.value.serviceInclude}</span><br data-v-93ad5a8b></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Giá Tour không bao gồm</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showNotInclude.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b><span data-v-93ad5a8b>${Tour.value.serviceNotInclude}</span><br data-v-93ad5a8b></span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Giá vé trẻ em</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showChildTicket.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b> Trẻ em dưới 2 tuổi: 30% giá tour người lớn </span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div><div class="col-6" data-v-93ad5a8b><div class="bg-light rounded mt-5" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Lưu ý khi hủy chuyến</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (cancel.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b> Sau khi hoàn tất thanh toán, nếu Quý khách muốn hủy hoặc chuyển tour, vui lòng liên hệ trực tiếp qua điện thoại hoặc email để yêu cầu hủy tour. Hachutravel sẽ hỗ trợ Quý khách xử lý thủ tục hủy tour và áp dụng phí hủy theo quy định. <ul data-v-93ad5a8b><li data-v-93ad5a8b>- Hủy tour sau khi đặt cọc: mất 100% tiền cọc</li><li data-v-93ad5a8b>- Hủy tour khi đã thanh toán 100% tổng giá trị tour sẽ tính phí theo thời điểm thông báo hủy (Không tính ngày lễ và chủ nhật) như sau: <ul data-v-93ad5a8b><li data-v-93ad5a8b>+ Sau khi đặt tour, hủy tour mất 10% tổng giá trị tour</li><li data-v-93ad5a8b>+ Từ 11 đến 15 ngày trước ngày khởi hành: chịu phí 30% tổng giá trị tour</li><li data-v-93ad5a8b>+ Từ 6 đến 10 ngày trước ngày khởi hành: chịu phí 50% tổng giá trị tour</li><li data-v-93ad5a8b>+ Từ 2 đến 5 ngày trước ngày khởi hành: chịu phí 70% tổng giá trị tour</li><li data-v-93ad5a8b>+ Từ 1 ngày trước ngày khởi hành: chịu phí 100% tổng giá trị tour</li></ul></li></ul><br data-v-93ad5a8b> Trường hợp hủy tour do sự cố khách quan như : thiên tai, dịch bệnh hoặc do phương tiện hoãn/hủy chuyến , công ty sẽ hỗ trợ bảo lưu số tiền quý khách đã thanh toán và dời sang ngày khởi hành phù hợp tiếp theo , hoặc Quý khách có thể đổi sang tour khác có giá trị tour bằng hoặc cao hơn tour cũ. </div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Điều kiện thanh toán</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (showPayment.value) {
        _push(`<div class="ms-4 pb-3" data-v-93ad5a8b><span data-v-93ad5a8b> Quý khách vui lòng thanh toán đầy đủ trong 24 giờ để đặt tour thành công.</span></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="bg-light rounded mt-2" data-v-93ad5a8b><span class="ps-4 py-3 d-flex flex-row justify-content-between" data-v-93ad5a8b><h5 data-v-93ad5a8b>Liên hệ</h5><i class="fa-solid fa-chevron-down mt-1 me-3" data-v-93ad5a8b></i></span>`);
      if (Call.value) {
        _push(`<div class="ms-4 pb-3 text-center fw-bold" data-v-93ad5a8b><span class="text-danger" data-v-93ad5a8b>Chương trình có thể thay đổi tùy vào tình hình thực tế</span><br data-v-93ad5a8b> Mọi chi tiết xin liên hệ : +84962383838 <br data-v-93ad5a8b> 66 ngách 6/46 Miêu Nha, Tây Mỗ, Nam Từ Liêm, Hà Nội<br data-v-93ad5a8b> KÍNH CHÚC QUÝ KHÁCH MỘT CHUYẾN DU LỊCH VUI VẺ &amp; THÚ VỊ!<br data-v-93ad5a8b></div>`);
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
export {
  index as default
};
//# sourceMappingURL=index-Cmm02sOK.js.map
