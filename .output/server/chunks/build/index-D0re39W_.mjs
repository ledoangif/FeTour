import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-ByW4O3lP.mjs';
import { ref, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './nuxt-link-BBsyahRc.mjs';
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
import 'lodash-es';
import 'vue-draggable-next';

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
      _push(`<section class="banner_inner" id="home" data-v-dfd4de16><div class="banner_inner_overlay" data-v-dfd4de16></div></section><div class="fs-5 border-bottom py-4" data-v-dfd4de16><div class="container d-flex flex-row" data-v-dfd4de16><div class="me-2 text-primary" data-v-dfd4de16>1. Nh\u1EADp th\xF4ng tin &gt;</div><div class="me-2 text-primary" data-v-dfd4de16>2. \u0110\u1EB7t c\u1ECDc &gt;</div><div class="text-primary" data-v-dfd4de16>3. K\u1EBFt qu\u1EA3</div></div></div><div class="container payment-response mt-4" data-v-dfd4de16><h1 class="text-center" data-v-dfd4de16>K\u1EBFt qu\u1EA3 \u0111\u1EB7t tour</h1>`);
      if (isSuccess.value) {
        _push(`<div data-v-dfd4de16><h2 class="text-success text-center" data-v-dfd4de16>\u0110\u1EB7t tour th\xE0nh c\xF4ng!</h2><table class="table table-bordered mt-3" data-v-dfd4de16><thead class="table-light" data-v-dfd4de16><tr data-v-dfd4de16><th data-v-dfd4de16>Th\xF4ng tin</th><th data-v-dfd4de16>Gi\xE1 tr\u1ECB</th></tr></thead><tbody data-v-dfd4de16><tr data-v-dfd4de16><td data-v-dfd4de16>M\xE3 \u0111\u1EB7t tour</td><td data-v-dfd4de16>${ssrInterpolate(orderDescription.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>M\xE3 giao d\u1ECBch</td><td data-v-dfd4de16>${ssrInterpolate(transactionId.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>ID \u0111\u01A1n h\xE0ng</td><td data-v-dfd4de16>${ssrInterpolate(orderId.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>S\u1ED1 ti\u1EC1n \u0111\u1EB7t c\u1ECDc</td><td data-v-dfd4de16>100.000 vnd</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>ID thanh to\xE1n</td><td data-v-dfd4de16>${ssrInterpolate(paymentId.value)}</td></tr><tr data-v-dfd4de16><td data-v-dfd4de16>Tr\u1EA1ng th\xE1i thanh to\xE1n</td><td data-v-dfd4de16>Th\xE0nh c\xF4ng</td></tr></tbody></table><h6 data-v-dfd4de16>Th\xF4ng tin \u0111\u1EB7t tour c\u1EE7a b\u1EA1n s\u1EBD \u0111\u01B0\u1EE3c g\u1EEDi qua email b\u1EA1n \u0111\xE3 cung c\u1EA5p .</h6></div>`);
      } else {
        _push(`<div data-v-dfd4de16><h2 class="text-center text-danger" data-v-dfd4de16>\u0110\u1EB7t tour th\u1EA5t b\u1EA1i!</h2><p class="text-center" data-v-dfd4de16>Vui l\xF2ng ki\u1EC3m tra l\u1EA1i th\xF4ng tin v\xE0 th\u1EED l\u1EA1i.</p></div>`);
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

export { index as default };
//# sourceMappingURL=index-D0re39W_.mjs.map
