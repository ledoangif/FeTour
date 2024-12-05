import { ref, mergeProps, useSSRContext } from "vue";
import "hookable";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderStyle, ssrInterpolate } from "vue/server-renderer";
import { useToast } from "vue-toast-notification";
import "./axiousInstance-DrjyNm3h.js";
import { _ as _export_sfc } from "../server.mjs";
import "axios";
import "#internal/nitro";
import "ofetch";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "klona";
import "ufo";
import "devalue";
import "destr";
import "lodash-es";
import "vue-draggable-next";
import "@vue/devtools-api";
const _imports_0 = "" + __buildAssetsURL("logo4.B5lkzTZQ.png");
const _sfc_main = {
  __name: "Login",
  __ssrInlineRender: true,
  setup(__props) {
    useToast();
    const User = ref({
      email: "",
      password: ""
    });
    const errorMessage = ref("");
    const emailError = ref(null);
    const passwordError = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "login min-vh-100 min-vw-100" }, _attrs))} data-v-fde57966><div class="main pt-5" data-v-fde57966><div class="text-center p-5" data-v-fde57966><img${ssrRenderAttr("src", _imports_0)} style="${ssrRenderStyle({ "width": "15%", "border-radius": "5%" })}" alt="logo" data-v-fde57966></div><div class="bg-light p-4 rounded shadow mx-auto" style="${ssrRenderStyle({ "width": "25%" })}" data-v-fde57966><div class="fs-3 text-center mb-4 text-dark" data-v-fde57966>ĐĂNG NHẬP TÀI KHOẢN</div><form data-v-fde57966><div class="mt-10" data-v-fde57966><div class="col-lg-12 mx-auto" data-v-fde57966><div class="mb-4" data-v-fde57966><input type="text" class="form-control"${ssrRenderAttr("value", User.value.email)} name="email" placeholder="Email" data-v-fde57966>`);
      if (emailError.value) {
        _push(`<div class="text-danger" data-v-fde57966>${ssrInterpolate(emailError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div><div class="mb-4" data-v-fde57966><input type="password" class="form-control" placeholder="Mật khẩu"${ssrRenderAttr("value", User.value.password)} data-v-fde57966>`);
      if (passwordError.value) {
        _push(`<div class="text-danger" data-v-fde57966>${ssrInterpolate(passwordError.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div><div class="text-center m-4" data-v-fde57966><button type="submit" class="btn btn-primary" data-v-fde57966>Đăng Nhập</button></div></form>`);
      if (errorMessage.value) {
        _push(`<div class="text-danger text-center" data-v-fde57966>${ssrInterpolate(errorMessage.value)}</div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/Login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Login = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-fde57966"]]);
export {
  Login as default
};
//# sourceMappingURL=Login-BUuWrkFi.js.map