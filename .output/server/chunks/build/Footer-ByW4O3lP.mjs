import { _ as __nuxt_component_0$1 } from './nuxt-link-BBsyahRc.mjs';
import { withCtx, createTextVNode, useSSRContext, ref } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';

const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-0589856e><div class="container" data-v-0589856e><nav class="py-md-4 py-3 d-lg-flex" data-v-0589856e><div id="logo" data-v-0589856e><h1 class="mt-md-0 mt-2" data-v-0589856e><a asp-controller="Home" asp-action="Index" data-v-0589856e><span class="fa fa-map-signs" data-v-0589856e></span>Hachu Travel </a></h1></div><label for="drop" class="toggle" data-v-0589856e><span class="fa fa-bars" data-v-0589856e></span></label><input type="checkbox" id="drop" data-v-0589856e><ul class="menu ml-auto mt-1 fs-5 text-white" data-v-0589856e><li class="" data-v-0589856e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Trang ch\u1EE7 `);
      } else {
        return [
          createTextVNode("Trang ch\u1EE7 ")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="" data-v-0589856e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/tourcustomer" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Tour`);
      } else {
        return [
          createTextVNode("Tour")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li class="" data-v-0589856e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/contact" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Li\xEAn h\u1EC7`);
      } else {
        return [
          createTextVNode("Li\xEAn h\u1EC7")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></nav></div></header>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Client/HeaderHome.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-0589856e"]]);
const _sfc_main = {
  __name: "Footer",
  __ssrInlineRender: true,
  emits: ["select-country"],
  setup(__props, { emit: __emit }) {
    const Top6Country = ref([]);
    const Top4Country = ref([]);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-22667e59><section class="footer footer_w3layouts_section_1its bg-dark" data-v-22667e59><div class="container py-lg-4 py-3" data-v-22667e59><div class="row footer-top" data-v-22667e59><div class="col-lg-3 col-sm-6 footer-grid_section_1its_w3" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>\u0110\u1ECBa ch\u1EC9</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59>\u0110\u1ECBa \u0111i\u1EC3m : 66 ng\xE1ch 6/46 Mi\xEAu Nha, T\xE2y M\u1ED7, Nam T\u1EEB Li\xEAm, H\xE0 N\u1ED9i</p><p data-v-22667e59>Phone : +84962383838</p><p data-v-22667e59> Email :<a href="mailto:hachutraveltour@gmail.com" data-v-22667e59>hachutravel@gmail.com</a></p><p data-v-22667e59>Fax : +84962383838</p></div></div><div class="col-lg-3 col-sm-6 footer-grid_section mt-sm-0 mt-4" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>V\u1EC1 ch\xFAng t\xF4i</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59> Ch\xFAng t\xF4i l\xE0 \u0111\u1ED1i t\xE1c cho nh\u1EEFng ai mu\u1ED1n kh\xE1m ph\xE1 th\u1EBF gi\u1EDBi v\u1EDBi c\xE1c tr\u1EA3i nghi\u1EC7m du l\u1ECBch \u0111\u1ED9c \u0111\xE1o v\xE0 d\u1ECBch v\u1EE5 chuy\xEAn nghi\u1EC7p. </p></div><ul class="social_section_1info" data-v-22667e59><li class="mb-2 facebook" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-facebook" data-v-22667e59></span></a></li><li class="mb-2 twitter" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-twitter" data-v-22667e59></span></a></li><li class="google" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-google-plus" data-v-22667e59></span></a></li><li class="linkedin" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-linkedin" data-v-22667e59></span></a></li></ul></div><div class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>\u0110\u1ECBa \u0111i\u1EC3m du l\u1ECBch</h3></div><div class="row" data-v-22667e59><!--[-->`);
      ssrRenderList(Top4Country.value, (item) => {
        _push(`<ul class="col-6 links" data-v-22667e59><li data-v-22667e59><a href="#choose" class="scroll" data-v-22667e59>${ssrInterpolate(item.countryName)}</a></li></ul>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(Top6Country.value, (item) => {
        _push(`<ul class="col-6 links" data-v-22667e59><li data-v-22667e59><a href="#" data-v-22667e59>${ssrInterpolate(item.countryName)}</a></li></ul>`);
      });
      _push(`<!--]--></div></div><div class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>\xDD ki\u1EBFn c\u1EE7a b\u1EA1n</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59> H\xE3y chia s\u1EBB \xFD ki\u1EBFn c\u1EE7a b\u1EA1n v\u1EDBi ch\xFAng t\xF4i \u0111\u1EC3 ch\xFAng ta c\xF3 th\u1EC3 mang l\u1EA1i tr\u1EA3i nghi\u1EC7m t\u1ED1t nh\u1EA5t cho m\u1ECDi ng\u01B0\u1EDDi. Xin c\u1EA3m \u01A1n! </p><form data-v-22667e59><div class="d-flex flex-row justify-content-between" data-v-22667e59><div class="text-white opacity-25 pt-2 ps-4" data-v-22667e59> G\u1EEDi mail t\u1EA1i \u0111\xE2y !! </div><button class="btn1" data-v-22667e59><i class="fa fa-paper-plane" aria-hidden="true" data-v-22667e59></i></button></div></form></div></div></div></div></section><div class="copyright py-3 text-center" data-v-22667e59><p data-v-22667e59> \xA9 2024 Hachu Travel. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="=_blank" data-v-22667e59> Doan </a></p></div><div class="move-top text-right" data-v-22667e59><a href="#home" class="move-top" data-v-22667e59><span class="fa fa-angle-up mb-3" aria-hidden="true" data-v-22667e59></span></a></div></footer>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Client/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-22667e59"]]);

export { __nuxt_component_0 as _, __nuxt_component_2 as a };
//# sourceMappingURL=Footer-ByW4O3lP.mjs.map
