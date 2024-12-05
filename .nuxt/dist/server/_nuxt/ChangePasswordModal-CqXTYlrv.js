import { _ as __nuxt_component_0 } from "./CVModal-MQE190QY.js";
import { e as navigateTo } from "../server.mjs";
import { ref, mergeProps, withCtx, renderSlot, createTextVNode, createVNode, withModifiers, openBlock, createBlock, withDirectives, vModelText, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrInterpolate } from "vue/server-renderer";
import { A as Api } from "./api-B8259KqO.js";
import { useToast } from "vue-toast-notification";
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
    const toast = useToast();
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
        errors.value.currentPassword = "Mật khẩu hiện tại không được để trống.";
      } else {
        errors.value.currentPassword = "";
      }
    };
    const validatePassword = () => {
      if (newPassword.value.trim().length === 0) {
        errors.value.newPassword = "Mật khẩu mới không được để trống.";
        return false;
      }
      if (newPassword.value === currentPassword.value) {
        errors.value.newPassword = "Mật khẩu mới không được trùng với mật khẩu hiện tại.";
        return false;
      } else if (newPassword.value.length < 5) {
        errors.value.newPassword = "Mật khẩu mới phải chứa ít nhất 5 ký tự.";
        return false;
      }
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
      if (!passwordRegex.test(newPassword.value)) {
        errors.value.newPassword = "Mật khẩu phải có ít nhất 5 ký tự gồm chữ hoa, chữ thường và số";
        return false;
      }
      errors.value.newPassword = "";
      return true;
    };
    const validateConfirmPassword = () => {
      if (confirmPassword.value.trim().length === 0) {
        errors.value.confirmPassword = "Xác nhận mật khẩu không được để trống.";
        return false;
      }
      if (newPassword.value !== confirmPassword.value) {
        errors.value.confirmPassword = "Xác nhận mật khẩu không khớp với mật khẩu mới.";
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
              toast.success("Đổi mật khẩu thành công");
              localStorage.removeItem("token");
              navigateTo("/Login");
              $("#changePasswordModal").modal("hide");
              $(".btn-close").click();
              resetForm();
            } else {
              errors.value.currentPassword = response.data.Message || "Mật khẩu hiện tại không chính xác.";
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
              toast.success("Đổi mật khẩu thành công");
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
              _push2(`Đổi mật khẩu`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode("Đổi mật khẩu")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form${_scopeId}>`);
            if (!__props.isAdminChangeMode) {
              _push2(`<div class="row mb-3 form-group required"${_scopeId}><label for="old-pass" class="col-sm-3 col-form-label control-label text-end"${_scopeId}> Mật khẩu hiện tại </label><div class="col-sm-9"${_scopeId}><input type="password"${ssrRenderAttr("value", currentPassword.value)} class="form-control"${_scopeId}>`);
              if (errors.value.currentPassword) {
                _push2(`<span class="error-message text-danger"${_scopeId}>${ssrInterpolate(errors.value.currentPassword)}</span>`);
              } else {
                _push2(`<!---->`);
              }
              _push2(`</div></div>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`<div class="row mb-3 form-group required"${_scopeId}><label for="new-pass" class="col-sm-3 col-form-label control-label text-end"${_scopeId}>Mật khẩu mới</label><div class="col-sm-9"${_scopeId}><input type="password"${ssrRenderAttr("value", newPassword.value)} class="form-control"${_scopeId}>`);
            if (errors.value.newPassword) {
              _push2(`<span class="error-message text-danger"${_scopeId}>${ssrInterpolate(errors.value.newPassword)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="row mb-3 form-group required"${_scopeId}><label for="cf-pass" class="col-sm-3 col-form-label control-label text-end"${_scopeId}> Xác nhận mật khẩu </label><div class="col-sm-9"${_scopeId}><input type="password"${ssrRenderAttr("value", confirmPassword.value)} class="form-control"${_scopeId}>`);
            if (errors.value.confirmPassword) {
              _push2(`<span class="error-message text-danger"${_scopeId}>${ssrInterpolate(errors.value.confirmPassword)}</span>`);
            } else {
              _push2(`<!---->`);
            }
            _push2(`</div></div><div class="modal-footer d-flex justify-content-center"${_scopeId}><button type="submit" class="btn btn-warning d-flex align-items-center"${_scopeId}> Lưu </button></div></form>`);
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
                  }, " Mật khẩu hiện tại "),
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
                  }, "Mật khẩu mới"),
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
                  }, " Xác nhận mật khẩu "),
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
                  }, " Lưu ")
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
export {
  __nuxt_component_1 as _
};
//# sourceMappingURL=ChangePasswordModal-CqXTYlrv.js.map
