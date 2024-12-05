import { _ as __nuxt_component_0, a as __nuxt_component_2 } from './Footer-ByW4O3lP.mjs';
import { ref, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';
import { ssrRenderComponent, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
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
    const orderType = ref("payment");
    const bookingId = ref("");
    const amount = ref(1e5);
    const description = ref("");
    useRoute();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderHome = __nuxt_component_0;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderHome, null, null, _parent));
      _push(`<section class="banner_inner" id="home" data-v-c17d5a10><div class="banner_inner_overlay" data-v-c17d5a10></div></section><div class="fs-5 border-bottom py-4" data-v-c17d5a10><div class="container d-flex flex-row" data-v-c17d5a10><div style="${ssrRenderStyle({ "color": "#377df4" })}" class="me-2" data-v-c17d5a10>1.Nh\u1EADp th\xF4ng tin &gt;</div><div style="${ssrRenderStyle({ "color": "#377df4" })}" class="me-2" data-v-c17d5a10>2.\u0110\u1EB7t c\u1ECDc</div></div></div><br data-v-c17d5a10><section class="packages" data-v-c17d5a10><div class="payment-form" data-v-c17d5a10><form data-v-c17d5a10><div class="form-group" data-v-c17d5a10><label for="orderType" data-v-c17d5a10>Lo\u1EA1i thanh to\xE1n</label><select id="orderType" class="form-control" disabled data-v-c17d5a10><option value="payment" data-v-c17d5a10${ssrIncludeBooleanAttr(Array.isArray(orderType.value) ? ssrLooseContain(orderType.value, "payment") : ssrLooseEqual(orderType.value, "payment")) ? " selected" : ""}>\u0110\u1EB7t c\u1ECDc</option><option value="other" data-v-c17d5a10${ssrIncludeBooleanAttr(Array.isArray(orderType.value) ? ssrLooseContain(orderType.value, "other") : ssrLooseEqual(orderType.value, "other")) ? " selected" : ""}>Kh\xE1c</option></select></div><div class="form-group" data-v-c17d5a10><label for="bookingId" data-v-c17d5a10>M\xE3 booking</label><input${ssrRenderAttr("value", bookingId.value)} id="bookingId" class="form-control" type="text" readonly data-v-c17d5a10></div><div class="form-group" data-v-c17d5a10><label for="description" data-v-c17d5a10>N\u1ED9i dung thanh to\xE1n</label><textarea id="description" class="form-control" readonly data-v-c17d5a10>${ssrInterpolate(description.value)}</textarea></div><div class="form-group" data-v-c17d5a10><label for="amount" data-v-c17d5a10>S\u1ED1 ti\u1EC1n</label><input${ssrRenderAttr("value", amount.value)} id="amount" class="form-control" type="number" readonly data-v-c17d5a10><p style="${ssrRenderStyle({ "color": "#dc3545", "font-weight": "normal" })}" data-v-c17d5a10>S\u1ED1 ti\u1EC1n \u0111\u1EB7t c\u1ECDc m\u1EB7c \u0111\u1ECBnh l\xE0 100,000 VND. </p><p style="${ssrRenderStyle({ "color": "#dc3545", "font-weight": "normal" })}" data-v-c17d5a10>L\u01B0u \xFD : Kh\xF4ng ho\xE0n l\u1EA1i ti\u1EC1n \u0111\u1EB7t c\u1ECDc</p></div><button type="submit" class="btn btn-primary" data-v-c17d5a10>Thanh to\xE1n</button></form><br data-v-c17d5a10></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/payment/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-c17d5a10"]]);

export { index as default };
//# sourceMappingURL=index-Bm4oHk51.mjs.map
