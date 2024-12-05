import { _ as __nuxt_component_0$1 } from "./nuxt-link-BBsyahRc.js";
import { withCtx, createTextVNode, useSSRContext, ref } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "./axiousInstance-DrjyNm3h.js";
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<header${ssrRenderAttrs(_attrs)} data-v-0589856e><div class="container" data-v-0589856e><nav class="py-md-4 py-3 d-lg-flex" data-v-0589856e><div id="logo" data-v-0589856e><h1 class="mt-md-0 mt-2" data-v-0589856e><a asp-controller="Home" asp-action="Index" data-v-0589856e><span class="fa fa-map-signs" data-v-0589856e></span>Hachu Travel </a></h1></div><label for="drop" class="toggle" data-v-0589856e><span class="fa fa-bars" data-v-0589856e></span></label><input type="checkbox" id="drop" data-v-0589856e><ul class="menu ml-auto mt-1 fs-5 text-white" data-v-0589856e><li class="" data-v-0589856e>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Trang chủ `);
      } else {
        return [
          createTextVNode("Trang chủ ")
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
        _push2(`Liên hệ`);
      } else {
        return [
          createTextVNode("Liên hệ")
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
      _push(`<footer${ssrRenderAttrs(_attrs)} data-v-22667e59><section class="footer footer_w3layouts_section_1its bg-dark" data-v-22667e59><div class="container py-lg-4 py-3" data-v-22667e59><div class="row footer-top" data-v-22667e59><div class="col-lg-3 col-sm-6 footer-grid_section_1its_w3" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>Địa chỉ</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59>Địa điểm : 66 ngách 6/46 Miêu Nha, Tây Mỗ, Nam Từ Liêm, Hà Nội</p><p data-v-22667e59>Phone : +84962383838</p><p data-v-22667e59> Email :<a href="mailto:hachutraveltour@gmail.com" data-v-22667e59>hachutravel@gmail.com</a></p><p data-v-22667e59>Fax : +84962383838</p></div></div><div class="col-lg-3 col-sm-6 footer-grid_section mt-sm-0 mt-4" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>Về chúng tôi</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59> Chúng tôi là đối tác cho những ai muốn khám phá thế giới với các trải nghiệm du lịch độc đáo và dịch vụ chuyên nghiệp. </p></div><ul class="social_section_1info" data-v-22667e59><li class="mb-2 facebook" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-facebook" data-v-22667e59></span></a></li><li class="mb-2 twitter" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-twitter" data-v-22667e59></span></a></li><li class="google" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-google-plus" data-v-22667e59></span></a></li><li class="linkedin" data-v-22667e59><a href="#" data-v-22667e59><span class="fa fa-linkedin" data-v-22667e59></span></a></li></ul></div><div class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>Địa điểm du lịch</h3></div><div class="row" data-v-22667e59><!--[-->`);
      ssrRenderList(Top4Country.value, (item) => {
        _push(`<ul class="col-6 links" data-v-22667e59><li data-v-22667e59><a href="#choose" class="scroll" data-v-22667e59>${ssrInterpolate(item.countryName)}</a></li></ul>`);
      });
      _push(`<!--]--><!--[-->`);
      ssrRenderList(Top6Country.value, (item) => {
        _push(`<ul class="col-6 links" data-v-22667e59><li data-v-22667e59><a href="#" data-v-22667e59>${ssrInterpolate(item.countryName)}</a></li></ul>`);
      });
      _push(`<!--]--></div></div><div class="col-lg-3 col-sm-6 mt-lg-0 mt-4 footer-grid_section_1its_w3" data-v-22667e59><div class="footer-title" data-v-22667e59><h3 data-v-22667e59>Ý kiến của bạn</h3></div><div class="footer-text" data-v-22667e59><p data-v-22667e59> Hãy chia sẻ ý kiến của bạn với chúng tôi để chúng ta có thể mang lại trải nghiệm tốt nhất cho mọi người. Xin cảm ơn! </p><form data-v-22667e59><div class="d-flex flex-row justify-content-between" data-v-22667e59><div class="text-white opacity-25 pt-2 ps-4" data-v-22667e59> Gửi mail tại đây !! </div><button class="btn1" data-v-22667e59><i class="fa fa-paper-plane" aria-hidden="true" data-v-22667e59></i></button></div></form></div></div></div></div></section><div class="copyright py-3 text-center" data-v-22667e59><p data-v-22667e59> © 2024 Hachu Travel. All Rights Reserved | Design by <a href="http://w3layouts.com/" target="=_blank" data-v-22667e59> Doan </a></p></div><div class="move-top text-right" data-v-22667e59><a href="#home" class="move-top" data-v-22667e59><span class="fa fa-angle-up mb-3" aria-hidden="true" data-v-22667e59></span></a></div></footer>`);
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
export {
  __nuxt_component_0 as _,
  __nuxt_component_2 as a
};
//# sourceMappingURL=Footer-ByW4O3lP.js.map
