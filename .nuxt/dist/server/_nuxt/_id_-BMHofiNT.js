import { _ as __nuxt_component_0 } from "./nuxt-link-BBsyahRc.js";
import { _ as __nuxt_component_1 } from "./ChangePasswordModal-CqXTYlrv.js";
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from "vue";
import { A as Api } from "./api-B8259KqO.js";
import { useToast } from "vue-toast-notification";
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from "vue/server-renderer";
import { _ as _export_sfc } from "../server.mjs";
import "ufo";
import "./CVModal-MQE190QY.js";
import "./axiousInstance-DrjyNm3h.js";
import "axios";
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
import "@vue/devtools-api";
const toast = useToast();
const api = new Api();
const _sfc_main = {
  name: "[id]",
  data() {
    return {
      accountId: "",
      roles: [],
      account: {
        id: "",
        email: "",
        password: "",
        fullName: "",
        phone: "",
        roleId: 2
      }
    };
  },
  mounted() {
    this.accountId = this.$route.params.id;
    this.getAccount(this.accountId);
    this.getRoles();
  },
  methods: {
    getAccount(id) {
      api.get(`/Account/findbyid/${id}`, null).then((res) => {
        this.account = { ...res.data.responseData };
      });
    },
    updateProfile(id, account) {
      api.putAPI(`/Account/${id}`, account).then((response) => {
        if (response.status === 200) {
          toast.success("Cập nhật thành công");
          this.getAccount(id);
        }
      }).catch((err) => {
        console.log(err);
      });
    },
    getRoles() {
      api.get(`/Role`, null).then((res) => {
        this.roles = res.data.responseData;
      }).catch((err) => console.log(err));
    }
  }
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0;
  const _component_ChangePasswordModal = __nuxt_component_1;
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "card my-5" }, _attrs))}><article class="card-header"><h5>User Profile</h5></article><article class="card-body"><form><div class="row mb-3 form-group required"><label for="email" class="col-sm-2 col-form-label control-label text-end">Email</label><div class="col-sm-9"><input type="email"${ssrRenderAttr("value", $data.account.email)} class="form-control" required></div></div><div class="row mb-3 form-group required"><label for="fullName" class="col-sm-2 col-form-label control-label text-end"> Họ tên </label><div class="col-sm-9"><input type="text"${ssrRenderAttr("value", $data.account.fullName)} class="form-control"></div></div><div class="row mb-3 form-group required"><label for="phone" class="col-sm-2 col-form-label control-label text-end">Điện thoại</label><div class="col-sm-9"><input type="text"${ssrRenderAttr("value", $data.account.phone)} class="form-control"></div></div><div class="row mb-3 form-group"><label for="authority" class="col-sm-2 col-form-label control-label text-end">Quyền</label><div class="col-sm-9"><select class="form-select" disabled aria-label="Default select example"><!--[-->`);
  ssrRenderList($data.roles, (role) => {
    _push(`<option${ssrRenderAttr("value", role.id)}>${ssrInterpolate(role.roleName)}</option>`);
  });
  _push(`<!--]--></select></div></div><div class="align-items-center justify-content-center text-center mt-5"><button type="submit" class="btn btn-primary mx-2"><i class="fa-solid fa-floppy-disk me-1"></i> Cập nhật </button>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-decoration-none",
    "data-bs-toggle": "modal",
    "data-bs-target": "#changePasswordModal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button type="button" class="btn btn-outline-primary me-2"${_scopeId}><i class="fa-solid fa-retweet"${_scopeId}></i> Đổi mật khẩu </button>`);
      } else {
        return [
          createVNode("button", {
            type: "button",
            class: "btn btn-outline-primary me-2"
          }, [
            createVNode("i", { class: "fa-solid fa-retweet" }),
            createTextVNode(" Đổi mật khẩu ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/booking",
    class: "text-decoration-none"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button type="button" class="btn btn-outline-secondary me-2"${_scopeId}><i class="fa-solid fa-left-long mx-1"${_scopeId}></i> Quay lại </button>`);
      } else {
        return [
          createVNode("button", {
            type: "button",
            class: "btn btn-outline-secondary me-2"
          }, [
            createVNode("i", { class: "fa-solid fa-left-long mx-1" }),
            createTextVNode(" Quay lại ")
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></form></article>`);
  _push(ssrRenderComponent(_component_ChangePasswordModal, { accountId: $data.accountId }, null, _parent));
  _push(`</section>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/profile/[id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  _id_ as default
};
//# sourceMappingURL=_id_-BMHofiNT.js.map
