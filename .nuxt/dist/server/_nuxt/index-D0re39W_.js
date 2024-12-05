import { _ as __nuxt_component_0, a as __nuxt_component_2 } from "./Footer-ByW4O3lP.js";
import { ref, useSSRContext } from "vue";
import { useRoute } from "vue-router";
import { ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import "./axiousInstance-DrjyNm3h.js";
import { _ as _export_sfc } from "../server.mjs";
import "./nuxt-link-BBsyahRc.js";
import "ufo";
import "axios";
import "#internal/nitro";
import "ofetch";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "radix3";
import "defu";
import "klona";
import "devalue";
import "destr";
import "lodash-es";
import "vue-draggable-next";
import "vue-toast-notification";
import "@vue/devtools-api";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const isSuccess = ref(false);
    const orderDescription = ref("");
    const transactionId = ref("");
    const orderId = ref("");
    ref("");
    const paymentId = ref("");
    ref("");
    ref("");
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderHome = __nuxt_component_0;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderHome, null, null, _parent));
      _push(`<section class="banner_inner" id="home" data-v-dfd4de16><div class="banner_inner_overlay" data-v-dfd4de16></div></section><div class="fs-5 border-bottom py-4" data-v-dfd4de16><div class="container d-flex flex-row" data-v-dfd4de16><div class="me-2 text-primary" data-v-dfd4de16>1. Nhập thông tin &gt;</div><div class="me-2 text-primary" data-v-dfd4de16>2. Đặt cọc &gt;</div><div class="text-primary" data-v-dfd4de16>3. Kết quả</div></div></div><div class="container payment-response mt-4" data-v-dfd4de16><h1 class="text-center" data-v-dfd4de16>Kết quả đặt tour</h1>`);
      if (isSuccess.value) {
        _push(`<div data-v-dfd4de16><h2 class="text-success text-center" data-v-dfd4de16>Đặt tour thành công!</h2><table class="table table-bordered mt-3" data-v-dfd4de16><thead class="table-light" data-v-dfd4de16><tr data-v-dfd4de16><th data-v-dfd4de16>Thông tin</th><th data-v-dfd4de16>Giá trị</th></tr></thead><tbody data-v-dfd4de16><tr data-v-dfd4de16><td data-v-dfd4de16>Mã đặt tour</td><td data-v-dfd4de16>${ssrInterpolate(orderDescription.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>Mã giao dịch</td><td data-v-dfd4de16>${ssrInterpolate(transactionId.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>ID đơn hàng</td><td data-v-dfd4de16>${ssrInterpolate(orderId.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>Số tiền đặt cọc</td><td data-v-dfd4de16>100.000 vnd</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>ID thanh toán</td><td data-v-dfd4de16>${ssrInterpolate(paymentId.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>Trạng thái thanh toán</td><td data-v-dfd4de16>Thành công</td></tr></tbody></table><h6 data-v-dfd4de16>Thông tin đặt tour của bạn sẽ được gửi qua email bạn đã cung cấp .</h6></div>`);
      } else {
        _push(`<div data-v-dfd4de16><h2 class="text-center text-danger" data-v-dfd4de16>Đặt tour thất bại!</h2><p class="text-center" data-v-dfd4de16>Vui lòng kiểm tra lại thông tin và thử lại.</p></div>`);
      }
      _push(`</div><br data-v-dfd4de16>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/paymentResponse/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-dfd4de16"]]);
export {
  index as default
};
//# sourceMappingURL=index-D0re39W_.js.map
