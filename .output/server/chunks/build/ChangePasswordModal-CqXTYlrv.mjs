import { _ as __nuxt_component_0 } from './CVModal-MQE190QY.mjs';
import { d as distExports, n as navigateTo } from './server.mjs';
import { useSSRContext, ref, mergeProps, withCtx, renderSlot, createTextVNode, createVNode, withModifiers, openBlock, createBlock, withDirectives, vModelText, toDisplayString, createCommentVNode } from 'vue';
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { A as Api } from './api-B8259KqO.mjs';

const _sfc_main = {
  __name: "ChangePasswordModal",
  __ssrInlineRender: true,
  props: {
    accountId: {
      type: String,
      required: true
    },
    isAdminChangeMode: {
      type: Boolean,
      default: false
    }
  },
  setup(__props) {
    const toast = distExports.useToast();
    const api = new Api();
    const props = __props;
    const currentPassword = ref("");
    const newPassword = ref("");
    const confirmPassword = ref("");
    const errors = ref({
      currentPassword: "",
      newPassword: "",
      confirmPassword: ""
    });
    const validateOldPassword = () => {
      if (!props.isAdminChangeMode && currentPassword.value.trim().length === 0) {
        errors.value.currentPassword = "M\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.";
      } else {
        errors.value.currentPassword = "";
      }
    };
    const validatePassword = () => {
      if (newPassword.value.trim().length === 0) {
        errors.value.newPassword = "M\u1EADt kh\u1EA9u m\u1EDBi kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.";
        return false;
      }
      if (newPassword.value === currentPassword.value) {
        errors.value.newPassword = "M\u1EADt kh\u1EA9u m\u1EDBi kh\xF4ng \u0111\u01B0\u1EE3c tr\xF9ng v\u1EDBi m\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i.";
        return false;
      } else if (newPassword.value.length < 5) {
        errors.value.newPassword = "M\u1EADt kh\u1EA9u m\u1EDBi ph\u1EA3i ch\u1EE9a \xEDt nh\u1EA5t 5 k\xFD t\u1EF1.";
        return false;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
      if (!passwordRegex.test(newPassword.value)) {
        errors.value.newPassword = "M\u1EADt kh\u1EA9u ph\u1EA3i c\xF3 \xEDt nh\u1EA5t 5 k\xFD t\u1EF1 g\u1ED3m ch\u1EEF hoa, ch\u1EEF th\u01B0\u1EDDng v\xE0 s\u1ED1";
        return false;
      }
      errors.value.newPassword = "";
      return true;
    };
    const validateConfirmPassword = () => {
      if (confirmPassword.value.trim().length === 0) {
        errors.value.confirmPassword = "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng.";
        return false;
      }
      if (newPassword.value !== confirmPassword.value) {
        errors.value.confirmPassword = "X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u kh\xF4ng kh\u1EDBp v\u1EDBi m\u1EADt kh\u1EA9u m\u1EDBi.";
        return false;
      }
      errors.value.confirmPassword = "";
      return true;
    };
    const validateInputs = () => {
      validateOldPassword();
      validatePassword();
      validateConfirmPassword();
      return !errors.value.currentPassword && !errors.value.newPassword && !errors.value.confirmPassword;
    };
    const handleSubmit = () => {
      if (validateInputs()) {
        if (!props.isAdminChangeMode) {
          const data = {
            accountId: props.accountId,
            oldPassword: currentPassword.value,
            newPassword: newPassword.value
          };
          api.putAPI("/Account/changePassword", data).then((response) => {
            if (response.status === 200) {
              toast.success("\u0110\u1ED5i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng");
              localStorage.removeItem("token");
              navigateTo("/Login");
              $("#changePasswordModal").modal("hide");
              $(".btn-close").click();
              resetForm();
            } else {
              errors.value.currentPassword = response.data.Message || "M\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i kh\xF4ng ch\xEDnh x\xE1c.";
            }
          });
        } else {
          const editPasswordData = {
            Id: props.accountId,
            // Thêm accountId từ props
            Password: newPassword.value
            // Mật khẩu mới
          };
          api.putAPI("/Account/editPassword", editPasswordData).then((response) => {
            if (response.status === 200) {
              toast.success("\u0110\u1ED5i m\u1EADt kh\u1EA9u th\xE0nh c\xF4ng");
              $("#changePasswordModal").modal("hide");
              $(".btn-close").click();
            }
          }).catch((err) => {
            console.log(err);
          });
          resetForm();
        }
      }
    };
    const resetForm = () => {
      currentPassword.value = "";
      newPassword.value = "";
      confirmPassword.value = "";
      errors.value.currentPassword = "";
      errors.value.newPassword = "";
      errors.value.confirmPassword = "";
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({
        id_model: "changePasswordModal",
        onCloseModal: resetForm
      }, _attrs), {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "icon")
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
              _push2(`\u0110\u1ED5i m\u1EADt kh\u1EA9u`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode("\u0110\u1ED5i m\u1EADt kh\u1EA9u")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            if (!__props.isAdminChangeMode) {
              _push2(`<div class="row mb-3 form-group required"${_scopeId}><label for="old-pass" class="col-sm-3 col-form-label control-label text-end"${_scopeId}> M\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i </label><div class="col-sm-9"${_scopeId}><input type="password"${ssrRenderAttr("value", currentPassword.value)} class="form-control"${_scopeId}>`);
              if (errors.value.currentPassword) {
                _push2(`<span class="error-message text-danger"${_scopeId}>${ssrInterpolate(errors.value.currentPassword)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="row mb-3 form-group required"${_scopeId}><label for="new-pass" class="col-sm-3 col-form-label control-label text-end"${_scopeId}>M\u1EADt kh\u1EA9u m\u1EDBi</label><div class="col-sm-9"${_scopeId}><input type="password"${ssrRenderAttr("value", newPassword.value)} class="form-control"${_scopeId}>`);
            if (errors.value.newPassword) {
              _push2(`<span class="error-message text-danger"${_scopeId}>${ssrInterpolate(errors.value.newPassword)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3 form-group required"${_scopeId}><label for="cf-pass" class="col-sm-3 col-form-label control-label text-end"${_scopeId}> X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u </label><div class="col-sm-9"${_scopeId}><input type="password"${ssrRenderAttr("value", confirmPassword.value)} class="form-control"${_scopeId}>`);
            if (errors.value.confirmPassword) {
              _push2(`<span class="error-message text-danger"${_scopeId}>${ssrInterpolate(errors.value.confirmPassword)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="modal-footer d-flex justify-content-center"${_scopeId}><button type="submit" class="btn btn-warning d-flex align-items-center"${_scopeId}> L\u01B0u </button></div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(handleSubmit, ["prevent"])
              }, [
                !__props.isAdminChangeMode ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "row mb-3 form-group required"
                }, [
                  createVNode("label", {
                    for: "old-pass",
                    class: "col-sm-3 col-form-label control-label text-end"
                  }, " M\u1EADt kh\u1EA9u hi\u1EC7n t\u1EA1i "),
                  createVNode("div", { class: "col-sm-9" }, [
                    withDirectives(createVNode("input", {
                      type: "password",
                      "onUpdate:modelValue": ($event) => currentPassword.value = $event,
                      onBlur: validateOldPassword,
                      class: "form-control"
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, currentPassword.value]
                    ]),
                    errors.value.currentPassword ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error-message text-danger"
                    }, toDisplayString(errors.value.currentPassword), 1)) : createCommentVNode("", true)
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "row mb-3 form-group required" }, [
                  createVNode("label", {
                    for: "new-pass",
                    class: "col-sm-3 col-form-label control-label text-end"
                  }, "M\u1EADt kh\u1EA9u m\u1EDBi"),
                  createVNode("div", { class: "col-sm-9" }, [
                    withDirectives(createVNode("input", {
                      type: "password",
                      "onUpdate:modelValue": ($event) => newPassword.value = $event,
                      onBlur: validatePassword,
                      onInput: validatePassword,
                      class: "form-control"
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, newPassword.value]
                    ]),
                    errors.value.newPassword ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error-message text-danger"
                    }, toDisplayString(errors.value.newPassword), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "row mb-3 form-group required" }, [
                  createVNode("label", {
                    for: "cf-pass",
                    class: "col-sm-3 col-form-label control-label text-end"
                  }, " X\xE1c nh\u1EADn m\u1EADt kh\u1EA9u "),
                  createVNode("div", { class: "col-sm-9" }, [
                    withDirectives(createVNode("input", {
                      type: "password",
                      "onUpdate:modelValue": ($event) => confirmPassword.value = $event,
                      onBlur: validateConfirmPassword,
                      onInput: validateConfirmPassword,
                      class: "form-control"
                    }, null, 40, ["onUpdate:modelValue"]), [
                      [vModelText, confirmPassword.value]
                    ]),
                    errors.value.confirmPassword ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "error-message text-danger"
                    }, toDisplayString(errors.value.confirmPassword), 1)) : createCommentVNode("", true)
                  ])
                ]),
                createVNode("div", { class: "modal-footer d-flex justify-content-center" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn btn-warning d-flex align-items-center"
                  }, " L\u01B0u ")
                ])
              ], 32)
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/ChangePasswordModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main;

export { __nuxt_component_1 as _ };
//# sourceMappingURL=ChangePasswordModal-CqXTYlrv.mjs.map
