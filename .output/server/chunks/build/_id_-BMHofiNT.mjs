import { _ as __nuxt_component_0 } from './nuxt-link-BBsyahRc.mjs';
import { _ as __nuxt_component_1 } from './ChangePasswordModal-CqXTYlrv.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { A as Api } from './api-B8259KqO.mjs';
import { d as distExports, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderList, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'fs';
import 'path';
import 'node:fs';
import 'node:url';
import 'ipx';
import './CVModal-MQE190QY.mjs';
import 'axios';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'lodash-es';
import 'vue-draggable-next';

const toast = distExports.useToast();
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
          toast.success("C\u1EADp nh\u1EADt th\xE0nh c\xF4ng");
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
  _push(`<section${ssrRenderAttrs(mergeProps({ class: "card my-5" }, _attrs))}><article class="card-header"><h5>User Profile</h5></article><article class="card-body"><form><div class="row mb-3 form-group required"><label for="email" class="col-sm-2 col-form-label control-label text-end">Email</label><div class="col-sm-9"><input type="email"${ssrRenderAttr("value", $data.account.email)} class="form-control" required></div></div><div class="row mb-3 form-group required"><label for="fullName" class="col-sm-2 col-form-label control-label text-end"> H\u1ECD t\xEAn </label><div class="col-sm-9"><input type="text"${ssrRenderAttr("value", $data.account.fullName)} class="form-control"></div></div><div class="row mb-3 form-group required"><label for="phone" class="col-sm-2 col-form-label control-label text-end">\u0110i\u1EC7n tho\u1EA1i</label><div class="col-sm-9"><input type="text"${ssrRenderAttr("value", $data.account.phone)} class="form-control"></div></div><div class="row mb-3 form-group"><label for="authority" class="col-sm-2 col-form-label control-label text-end">Quy\u1EC1n</label><div class="col-sm-9"><select class="form-select" disabled aria-label="Default select example"><!--[-->`);
  ssrRenderList($data.roles, (role) => {
    _push(`<option${ssrRenderAttr("value", role.id)}>${ssrInterpolate(role.roleName)}</option>`);
  });
  _push(`<!--]--></select></div></div><div class="align-items-center justify-content-center text-center mt-5"><button type="submit" class="btn btn-primary mx-2"><i class="fa-solid fa-floppy-disk me-1"></i> C\u1EADp nh\u1EADt </button>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: "text-decoration-none",
    "data-bs-toggle": "modal",
    "data-bs-target": "#changePasswordModal"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<button type="button" class="btn btn-outline-primary me-2"${_scopeId}><i class="fa-solid fa-retweet"${_scopeId}></i> \u0110\u1ED5i m\u1EADt kh\u1EA9u </button>`);
      } else {
        return [
          createVNode("button", {
            type: "button",
            class: "btn btn-outline-primary me-2"
          }, [
            createVNode("i", { class: "fa-solid fa-retweet" }),
            createTextVNode(" \u0110\u1ED5i m\u1EADt kh\u1EA9u ")
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
        _push2(`<button type="button" class="btn btn-outline-secondary me-2"${_scopeId}><i class="fa-solid fa-left-long mx-1"${_scopeId}></i> Quay l\u1EA1i </button>`);
      } else {
        return [
          createVNode("button", {
            type: "button",
            class: "btn btn-outline-secondary me-2"
          }, [
            createVNode("i", { class: "fa-solid fa-left-long mx-1" }),
            createTextVNode(" Quay l\u1EA1i ")
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

export { _id_ as default };
//# sourceMappingURL=_id_-BMHofiNT.mjs.map
