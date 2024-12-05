import { _ as __nuxt_component_0$2 } from './CVModal-MQE190QY.mjs';
import { d as distExports, _ as _export_sfc, F as Form, a as Field, E as ErrorMessage } from './server.mjs';
import { A as Api } from './api-B8259KqO.mjs';
import { ref, defineComponent, useSSRContext, mergeProps, withCtx, openBlock, createBlock, createVNode, renderSlot, createTextVNode, Fragment, renderList, toDisplayString, createCommentVNode, unref } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderStyle, ssrRenderSlot } from 'vue/server-renderer';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BBsyahRc.mjs';
import { _ as __nuxt_component_1 } from './ChangePasswordModal-CqXTYlrv.mjs';
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
import 'vue-router';
import 'lodash-es';
import 'vue-draggable-next';
import 'axios';

const toast = distExports.useToast();
const api$1 = new Api();
const _sfc_main$3 = {
  name: "CreateUpdateAccountModal",
  props: {
    editAccount: {
      type: Object,
      default: null,
      required: false
    },
    isEditMode: {
      type: Boolean,
      default: false,
      required: true
    },
    data_bs_target_modal: {
      type: String,
      default: ""
    },
    id_modal: {
      type: String,
      default: ""
    },
    roles: {
      type: Array,
      default: null,
      required: false
    }
  },
  data() {
    return {
      account: {
        id: "",
        email: "",
        password: "",
        fullName: "",
        phone: "",
        roleId: 2
      },
      emailError: ""
      // Thông báo lỗi email trùng
    };
  },
  watch: {
    editAccount: {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.account = { ...newVal };
        }
      }
    }
  },
  methods: {
    async createAccount() {
      if (this.account.email === "") {
        this.emailError = "Th\xF4ng tin n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!";
        return;
      }
      try {
        const response = await api$1.get(`/Account/email`, {
          params: { email: this.account.email }
        });
        if (response.data && response.data.responseData && Object.keys(response.data.responseData).length > 0) {
          this.emailError = "Email n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i.";
          return;
        } else {
          this.emailError = "";
        }
        const res = await api$1.postAPI("/Account/register", this.account);
        if (res.status === 200) {
          if (res.data && res.data.message) {
            toast.success(res.data.message);
          }
        }
        this.$emit("account-saved");
        (void 0).getElementById("closeModalButton").click();
      } catch (err) {
        console.error(err);
      }
    },
    async updateAccount() {
      if (this.account.email === "") {
        this.emailError = "Th\xF4ng tin n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!";
        return;
      }
      try {
        const response = await api$1.get(`/Account/email`, {
          params: { email: this.account.email }
        });
        if (response.data && response.data.responseData && Object.keys(response.data.responseData).length > 0 && this.account.email !== this.editAccount.email) {
          this.emailError = "Email n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i.";
        } else {
          this.emailError = "";
        }
        const edit = await api$1.putAPI(`/Account/${this.editAccount.id}`, this.account);
        if (edit.status === 200) {
          if (edit.data && edit.data.message) {
            toast.success(edit.data.message);
          }
        }
        this.$emit("account-saved");
        (void 0).getElementById("closeModalButton").click();
      } catch (err) {
        console.error(err);
      }
    },
    async getAccountByEmail() {
      try {
        const response = await api$1.get(`/Account/email`, {
          params: { email: this.account.email }
        });
        if (response.data.responseData) {
          this.emailError = "Email \u0111\xE3 \u0111\u01B0\u1EE3c s\u1EED d\u1EE5ng.";
        } else {
          this.emailError = "";
        }
      } catch (err) {
        console.error(err);
      }
    },
    handleSubmit() {
      if (!this.isEditMode) {
        this.createAccount();
      } else {
        this.updateAccount();
      }
    },
    getRoles() {
      api$1.get(`/Role`, null).then((res) => {
        this.roles = res.data.responseData;
      }).catch((err) => console.log(err));
    },
    resetForm() {
      console.log("resetForm \u0111\xE3 \u0111\u01B0\u1EE3c g\u1ECDi");
      this.account = {
        id: "",
        email: "",
        password: "",
        fullName: "",
        phoneNumber: "",
        roleId: 2
      };
      this.emailError = "";
      this.$refs.form.resetForm();
      this.$refs.form.setErrors({});
    },
    clearEmailError() {
      this.emailError = "";
    }
  },
  components: {
    Form,
    Field,
    ErrorMessage
  },
  emits: {
    "account-saved": null
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_CVModal = __nuxt_component_0$2;
  const _component_Form = Form;
  const _component_Field = Field;
  const _component_ErrorMessage = ErrorMessage;
  _push(ssrRenderComponent(_component_CVModal, mergeProps({
    id_model: $props.id_modal,
    data_bs_target_modal: $props.data_bs_target_modal,
    onCloseModal: $options.resetForm
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
        if (!$props.isEditMode) {
          _push2(`<span${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, () => {
            _push2(`Th\xEAm t\xE0i kho\u1EA3n`);
          }, _push2, _parent2, _scopeId);
          _push2(`</span>`);
        } else {
          _push2(`<span${_scopeId}>`);
          ssrRenderSlot(_ctx.$slots, "header", {}, () => {
            _push2(`C\u1EADp nh\u1EADt t\xE0i kho\u1EA3n`);
          }, _push2, _parent2, _scopeId);
          _push2(`</span>`);
        }
      } else {
        return [
          !$props.isEditMode ? (openBlock(), createBlock("span", { key: 0 }, [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createTextVNode("Th\xEAm t\xE0i kho\u1EA3n")
            ])
          ])) : (openBlock(), createBlock("span", { key: 1 }, [
            renderSlot(_ctx.$slots, "header", {}, () => [
              createTextVNode("C\u1EADp nh\u1EADt t\xE0i kho\u1EA3n")
            ])
          ]))
        ];
      }
    }),
    body: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Form, {
          onSubmit: $options.handleSubmit,
          ref: "form"
        }, {
          default: withCtx((_2, _push3, _parent3, _scopeId2) => {
            if (_push3) {
              _push3(`<div class="row mb-3 form-group required"${_scopeId2}><label for="email" class="col-sm-2 col-form-label control-label text-end"${_scopeId2}>Email</label><div class="col-sm-9"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                type: "text",
                modelValue: $data.account.email,
                "onUpdate:modelValue": ($event) => $data.account.email = $event,
                name: "email",
                class: "form-control",
                rules: { required: true, email: true },
                onInput: $options.clearEmailError
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ErrorMessage, {
                name: "email",
                class: "text-danger"
              }, null, _parent3, _scopeId2));
              if ($data.emailError === "Email n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i.") {
                _push3(`<span class="text-danger"${_scopeId2}>${ssrInterpolate($data.emailError)}</span>`);
              } else {
                _push3(`<!---->`);
              }
              if ($data.emailError === "Th\xF4ng tin n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!") {
                _push3(`<span class="text-danger"${_scopeId2}>${ssrInterpolate($data.emailError)}</span>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`</div></div>`);
              if (!$props.isEditMode) {
                _push3(`<div class="row mb-3 form-group required"${_scopeId2}><label for="password" class="col-sm-2 col-form-label control-label text-end"${_scopeId2}> M\u1EADt kh\u1EA9u </label><div class="col-sm-9"${_scopeId2}>`);
                _push3(ssrRenderComponent(_component_Field, {
                  name: "password",
                  rules: { required: true, min: 5, password: true },
                  modelValue: $data.account.password,
                  "onUpdate:modelValue": ($event) => $data.account.password = $event,
                  type: "password",
                  class: "form-control"
                }, null, _parent3, _scopeId2));
                _push3(ssrRenderComponent(_component_ErrorMessage, {
                  name: "password",
                  class: "text-danger"
                }, null, _parent3, _scopeId2));
                _push3(`</div></div>`);
              } else {
                _push3(`<!---->`);
              }
              _push3(`<div class="row mb-3 form-group required"${_scopeId2}><label for="fullName" class="col-sm-2 col-form-label control-label text-end"${_scopeId2}> H\u1ECD t\xEAn </label><div class="col-sm-9"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                name: "fullName",
                modelValue: $data.account.fullName,
                "onUpdate:modelValue": ($event) => $data.account.fullName = $event,
                type: "text",
                class: "form-control",
                rules: { required: true, onlyCharacters: true }
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ErrorMessage, {
                name: "fullName",
                class: "text-danger"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="phoneNumber" class="col-sm-2 col-form-label control-label text-end"${_scopeId2}>\u0110i\u1EC7n tho\u1EA1i</label><div class="col-sm-9"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                name: "phoneNumber",
                modelValue: $data.account.phone,
                "onUpdate:modelValue": ($event) => $data.account.phone = $event,
                type: "text",
                class: "form-control",
                rules: { required: true, phone: true }
              }, null, _parent3, _scopeId2));
              _push3(ssrRenderComponent(_component_ErrorMessage, {
                name: "phoneNumber",
                class: "text-danger"
              }, null, _parent3, _scopeId2));
              _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="authority" class="col-sm-2 col-form-label control-label text-end"${_scopeId2}>Quy\u1EC1n</label><div class="col-sm-9"${_scopeId2}>`);
              _push3(ssrRenderComponent(_component_Field, {
                as: "select",
                name: "roleId",
                modelValue: $data.account.roleId,
                "onUpdate:modelValue": ($event) => $data.account.roleId = $event,
                class: "form-select"
              }, {
                default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                  if (_push4) {
                    _push4(`<option selected disabled${_scopeId3}>Select Role</option><!--[-->`);
                    ssrRenderList($props.roles, (role) => {
                      _push4(`<option${ssrRenderAttr("value", role.id)}${_scopeId3}>${ssrInterpolate(role.roleName)}</option>`);
                    });
                    _push4(`<!--]-->`);
                  } else {
                    return [
                      createVNode("option", {
                        selected: "",
                        disabled: ""
                      }, "Select Role"),
                      (openBlock(true), createBlock(Fragment, null, renderList($props.roles, (role) => {
                        return openBlock(), createBlock("option", {
                          value: role.id
                        }, toDisplayString(role.roleName), 9, ["value"]);
                      }), 256))
                    ];
                  }
                }),
                _: 1
              }, _parent3, _scopeId2));
              _push3(`</div></div><div class="modal-footer align-content-center justify-content-center"${_scopeId2}><button type="submit" class="btn btn-primary"${_scopeId2}><i class="fa-solid fa-floppy-disk mx-1"${_scopeId2}></i> L\u01B0u </button><button id="closeModalButton" type="button" class="btn-close" data-bs-dismiss="modal" hidden${_scopeId2}></button></div>`);
            } else {
              return [
                createVNode("div", { class: "row mb-3 form-group required" }, [
                  createVNode("label", {
                    for: "email",
                    class: "col-sm-2 col-form-label control-label text-end"
                  }, "Email"),
                  createVNode("div", { class: "col-sm-9" }, [
                    createVNode(_component_Field, {
                      type: "text",
                      modelValue: $data.account.email,
                      "onUpdate:modelValue": ($event) => $data.account.email = $event,
                      name: "email",
                      class: "form-control",
                      rules: { required: true, email: true },
                      onInput: $options.clearEmailError
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                    createVNode(_component_ErrorMessage, {
                      name: "email",
                      class: "text-danger"
                    }),
                    $data.emailError === "Email n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i." ? (openBlock(), createBlock("span", {
                      key: 0,
                      class: "text-danger"
                    }, toDisplayString($data.emailError), 1)) : createCommentVNode("", true),
                    $data.emailError === "Th\xF4ng tin n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!" ? (openBlock(), createBlock("span", {
                      key: 1,
                      class: "text-danger"
                    }, toDisplayString($data.emailError), 1)) : createCommentVNode("", true)
                  ])
                ]),
                !$props.isEditMode ? (openBlock(), createBlock("div", {
                  key: 0,
                  class: "row mb-3 form-group required"
                }, [
                  createVNode("label", {
                    for: "password",
                    class: "col-sm-2 col-form-label control-label text-end"
                  }, " M\u1EADt kh\u1EA9u "),
                  createVNode("div", { class: "col-sm-9" }, [
                    createVNode(_component_Field, {
                      name: "password",
                      rules: { required: true, min: 5, password: true },
                      modelValue: $data.account.password,
                      "onUpdate:modelValue": ($event) => $data.account.password = $event,
                      type: "password",
                      class: "form-control"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_ErrorMessage, {
                      name: "password",
                      class: "text-danger"
                    })
                  ])
                ])) : createCommentVNode("", true),
                createVNode("div", { class: "row mb-3 form-group required" }, [
                  createVNode("label", {
                    for: "fullName",
                    class: "col-sm-2 col-form-label control-label text-end"
                  }, " H\u1ECD t\xEAn "),
                  createVNode("div", { class: "col-sm-9" }, [
                    createVNode(_component_Field, {
                      name: "fullName",
                      modelValue: $data.account.fullName,
                      "onUpdate:modelValue": ($event) => $data.account.fullName = $event,
                      type: "text",
                      class: "form-control",
                      rules: { required: true, onlyCharacters: true }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_ErrorMessage, {
                      name: "fullName",
                      class: "text-danger"
                    })
                  ])
                ]),
                createVNode("div", { class: "row mb-3 form-group required" }, [
                  createVNode("label", {
                    for: "phoneNumber",
                    class: "col-sm-2 col-form-label control-label text-end"
                  }, "\u0110i\u1EC7n tho\u1EA1i"),
                  createVNode("div", { class: "col-sm-9" }, [
                    createVNode(_component_Field, {
                      name: "phoneNumber",
                      modelValue: $data.account.phone,
                      "onUpdate:modelValue": ($event) => $data.account.phone = $event,
                      type: "text",
                      class: "form-control",
                      rules: { required: true, phone: true }
                    }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                    createVNode(_component_ErrorMessage, {
                      name: "phoneNumber",
                      class: "text-danger"
                    })
                  ])
                ]),
                createVNode("div", { class: "row mb-3 form-group required" }, [
                  createVNode("label", {
                    for: "authority",
                    class: "col-sm-2 col-form-label control-label text-end"
                  }, "Quy\u1EC1n"),
                  createVNode("div", { class: "col-sm-9" }, [
                    createVNode(_component_Field, {
                      as: "select",
                      name: "roleId",
                      modelValue: $data.account.roleId,
                      "onUpdate:modelValue": ($event) => $data.account.roleId = $event,
                      class: "form-select"
                    }, {
                      default: withCtx(() => [
                        createVNode("option", {
                          selected: "",
                          disabled: ""
                        }, "Select Role"),
                        (openBlock(true), createBlock(Fragment, null, renderList($props.roles, (role) => {
                          return openBlock(), createBlock("option", {
                            value: role.id
                          }, toDisplayString(role.roleName), 9, ["value"]);
                        }), 256))
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                  createVNode("button", {
                    type: "submit",
                    class: "btn btn-primary"
                  }, [
                    createVNode("i", { class: "fa-solid fa-floppy-disk mx-1" }),
                    createTextVNode(" L\u01B0u ")
                  ]),
                  createVNode("button", {
                    id: "closeModalButton",
                    type: "button",
                    class: "btn-close",
                    "data-bs-dismiss": "modal",
                    hidden: ""
                  })
                ])
              ];
            }
          }),
          _: 1
        }, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Form, {
            onSubmit: $options.handleSubmit,
            ref: "form"
          }, {
            default: withCtx(() => [
              createVNode("div", { class: "row mb-3 form-group required" }, [
                createVNode("label", {
                  for: "email",
                  class: "col-sm-2 col-form-label control-label text-end"
                }, "Email"),
                createVNode("div", { class: "col-sm-9" }, [
                  createVNode(_component_Field, {
                    type: "text",
                    modelValue: $data.account.email,
                    "onUpdate:modelValue": ($event) => $data.account.email = $event,
                    name: "email",
                    class: "form-control",
                    rules: { required: true, email: true },
                    onInput: $options.clearEmailError
                  }, null, 8, ["modelValue", "onUpdate:modelValue", "onInput"]),
                  createVNode(_component_ErrorMessage, {
                    name: "email",
                    class: "text-danger"
                  }),
                  $data.emailError === "Email n\xE0y \u0111\xE3 t\u1ED3n t\u1EA1i." ? (openBlock(), createBlock("span", {
                    key: 0,
                    class: "text-danger"
                  }, toDisplayString($data.emailError), 1)) : createCommentVNode("", true),
                  $data.emailError === "Th\xF4ng tin n\xE0y kh\xF4ng \u0111\u01B0\u1EE3c \u0111\u1EC3 tr\u1ED1ng!" ? (openBlock(), createBlock("span", {
                    key: 1,
                    class: "text-danger"
                  }, toDisplayString($data.emailError), 1)) : createCommentVNode("", true)
                ])
              ]),
              !$props.isEditMode ? (openBlock(), createBlock("div", {
                key: 0,
                class: "row mb-3 form-group required"
              }, [
                createVNode("label", {
                  for: "password",
                  class: "col-sm-2 col-form-label control-label text-end"
                }, " M\u1EADt kh\u1EA9u "),
                createVNode("div", { class: "col-sm-9" }, [
                  createVNode(_component_Field, {
                    name: "password",
                    rules: { required: true, min: 5, password: true },
                    modelValue: $data.account.password,
                    "onUpdate:modelValue": ($event) => $data.account.password = $event,
                    type: "password",
                    class: "form-control"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_ErrorMessage, {
                    name: "password",
                    class: "text-danger"
                  })
                ])
              ])) : createCommentVNode("", true),
              createVNode("div", { class: "row mb-3 form-group required" }, [
                createVNode("label", {
                  for: "fullName",
                  class: "col-sm-2 col-form-label control-label text-end"
                }, " H\u1ECD t\xEAn "),
                createVNode("div", { class: "col-sm-9" }, [
                  createVNode(_component_Field, {
                    name: "fullName",
                    modelValue: $data.account.fullName,
                    "onUpdate:modelValue": ($event) => $data.account.fullName = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, onlyCharacters: true }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_ErrorMessage, {
                    name: "fullName",
                    class: "text-danger"
                  })
                ])
              ]),
              createVNode("div", { class: "row mb-3 form-group required" }, [
                createVNode("label", {
                  for: "phoneNumber",
                  class: "col-sm-2 col-form-label control-label text-end"
                }, "\u0110i\u1EC7n tho\u1EA1i"),
                createVNode("div", { class: "col-sm-9" }, [
                  createVNode(_component_Field, {
                    name: "phoneNumber",
                    modelValue: $data.account.phone,
                    "onUpdate:modelValue": ($event) => $data.account.phone = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, phone: true }
                  }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                  createVNode(_component_ErrorMessage, {
                    name: "phoneNumber",
                    class: "text-danger"
                  })
                ])
              ]),
              createVNode("div", { class: "row mb-3 form-group required" }, [
                createVNode("label", {
                  for: "authority",
                  class: "col-sm-2 col-form-label control-label text-end"
                }, "Quy\u1EC1n"),
                createVNode("div", { class: "col-sm-9" }, [
                  createVNode(_component_Field, {
                    as: "select",
                    name: "roleId",
                    modelValue: $data.account.roleId,
                    "onUpdate:modelValue": ($event) => $data.account.roleId = $event,
                    class: "form-select"
                  }, {
                    default: withCtx(() => [
                      createVNode("option", {
                        selected: "",
                        disabled: ""
                      }, "Select Role"),
                      (openBlock(true), createBlock(Fragment, null, renderList($props.roles, (role) => {
                        return openBlock(), createBlock("option", {
                          value: role.id
                        }, toDisplayString(role.roleName), 9, ["value"]);
                      }), 256))
                    ]),
                    _: 1
                  }, 8, ["modelValue", "onUpdate:modelValue"])
                ])
              ]),
              createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                createVNode("button", {
                  type: "submit",
                  class: "btn btn-primary"
                }, [
                  createVNode("i", { class: "fa-solid fa-floppy-disk mx-1" }),
                  createTextVNode(" L\u01B0u ")
                ]),
                createVNode("button", {
                  id: "closeModalButton",
                  type: "button",
                  class: "btn-close",
                  "data-bs-dismiss": "modal",
                  hidden: ""
                })
              ])
            ]),
            _: 1
          }, 8, ["onSubmit"])
        ];
      }
    }),
    _: 3
  }, _parent));
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/TheFormCreateUpdateAccount.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main$2 = {
  __name: "DeleteAccountModal",
  __ssrInlineRender: true,
  props: {
    accountId: {
      type: String,
      required: true
    }
  },
  emits: ["account-deleted", "hide-modal"],
  setup(__props, { emit: __emit }) {
    const toast2 = distExports.useToast();
    const props = __props;
    const api2 = new Api();
    const emits = __emit;
    const deleteAccount = () => {
      const id = props.accountId;
      api2.deleteById("/Account", id).then((res) => {
        emits("account-deleted", id);
        emits("hide-modal");
        $(".btn-close").click();
        toast2.success("X\xF3a th\xE0nh c\xF4ng");
      }).catch((error) => {
        console.error("L\u1ED7i khi x\xF3a t\xE0i kho\u1EA3n:", error);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({ id_model: "deleteAccountModal" }, _attrs), {
        icon: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "icon", {}, void 0, true)
            ];
          }
        }),
        title: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "header", {}, () => {
              _push2(`X\xF3a t\xE0i kho\u1EA3n`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode("X\xF3a t\xE0i kho\u1EA3n")
              ], true)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p data-v-ef281b31${_scopeId}>B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a t\xE0i kho\u1EA3n n\xE0y?</p><div class="modal-footer align-content-center justify-content-center" data-v-ef281b31${_scopeId}><button type="button" class="btn btn-secondary" data-bs-dismiss="modal" data-v-ef281b31${_scopeId}> H\u1EE7y b\u1ECF </button><button type="button" class="btn btn-danger" data-v-ef281b31${_scopeId}><i class="fa-regular fa-trash-can mx-1" data-v-ef281b31${_scopeId}></i> X\xF3a </button></div>`);
          } else {
            return [
              createVNode("p", null, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a t\xE0i kho\u1EA3n n\xE0y?"),
              createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  "data-bs-dismiss": "modal"
                }, " H\u1EE7y b\u1ECF "),
                createVNode("button", {
                  type: "button",
                  class: "btn btn-danger",
                  onClick: deleteAccount
                }, [
                  createVNode("i", { class: "fa-regular fa-trash-can mx-1" }),
                  createTextVNode(" X\xF3a ")
                ])
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/DeleteAccountModal.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_3 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["__scopeId", "data-v-ef281b31"]]);
const _sfc_main$1 = {
  __name: "Search",
  __ssrInlineRender: true,
  setup(__props) {
    const search = ref("");
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<form${ssrRenderAttrs(mergeProps({ action: "" }, _attrs))}><div class="mt-3">T\xECm ki\u1EBFm:</div><div class="search-text d-flex"><div class="col-md-3"><input${ssrRenderAttr("value", unref(search))} class="form-control col-md-2" type="text" placeholder="Nh\u1EADp... "></div><span class="button d-flex"><button class="ms-2 me-1 btn btn-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>T\xECm ki\u1EBFm </button></span></div></form>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Search.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const Search = _sfc_main$1;
ref(0);
const api = new Api();
const _sfc_main = defineComponent({
  name: "index",
  data() {
    return {
      accounts: [],
      roles: [],
      currentEmail: "",
      selectedAccountId: null,
      editAccountData: {},
      isEditMode: false,
      searchString: "",
      id_modal: "create-account-modal",
      data_bs_target_modal: "#create-account-modal"
    };
  },
  mounted() {
    this.currentEmail = localStorage.getItem("email");
    this.getAccounts();
    this.getRoles();
  },
  methods: {
    getAccounts() {
      api.get(`/Account/All`, null).then((res) => {
        this.accounts = res.data.responseData;
      }).catch((err) => console.log(err));
    },
    getRoles() {
      api.get(`/Role`, null).then((res) => {
        this.roles = res.data.responseData;
      }).catch((err) => console.log(err));
    },
    deleteAccount(id) {
      this.selectedAccountId = id;
    },
    resetPasswordAccount(id) {
      this.selectedAccountId = id;
    },
    accountEdit(account) {
      this.editAccountData = { ...account };
      this.isEditMode = true;
      this.id_modal = "update-account-modal";
      this.data_bs_target_modal = "#update-account-modal";
    },
    onCreateMode() {
      this.isEditMode = false;
      this.id_modal = "create-account-modal";
      this.data_bs_target_modal = "#create-account-modal";
      this.editAccountData = {
        id: "",
        email: null,
        password: null,
        fullName: null,
        phone: null,
        roleId: 2
      };
    },
    searchByEmailOrName() {
      if (!this.searchString) {
        this.getAccounts();
        return;
      }
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      const isEmail = emailRegex.test(this.searchString);
      if (isEmail) {
        api.get(`/Account/${this.searchString}`, null).then((res) => {
          if (typeof res.data.responseData === "object" && Object.keys(res.data.responseData).length > 0) {
            this.accounts = [res.data.responseData];
          } else {
            this.accounts = [];
          }
        });
      } else {
        api.get(`/Account/searchByName/${this.searchString}`, null).then(
          (res) => {
            this.accounts = res.data.responseData;
          }
        );
      }
    },
    resetSearchForm() {
      this.searchString = "";
      this.getAccounts();
    }
  },
  components: { Search, DeleteAccountModal: __nuxt_component_3, TheFormCreateUpdateAccount: __nuxt_component_0 }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_TheFormCreateUpdateAccount = __nuxt_component_0;
  const _component_NuxtLink = __nuxt_component_0$1;
  const _component_ChangePasswordModal = __nuxt_component_1;
  const _component_DeleteAccountModal = __nuxt_component_3;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="p-4"><div class="search"><h4 class="search-text">Qu\u1EA3n l\xFD t\xE0i kho\u1EA3n</h4><form name="search"><div class="mt-3">T\xECm ki\u1EBFm:</div><div class="search-text d-flex align-content-center"><div class="col-md-3"><input class="form-control col-md-2"${ssrRenderAttr("value", _ctx.searchString)} type="text" placeholder="Nh\u1EADp email ho\u1EB7c h\u1ECD t\xEAn... "></div><span class="button d-flex"><button class="ms-2 btn-sm me-1 btn btn-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg>T\xECm ki\u1EBFm </button></span></div></form></div><div class="data"><div class="btn-handle d-flex justify-content-end mb-3"><div class="handle-create">`);
  _push(ssrRenderComponent(_component_TheFormCreateUpdateAccount, {
    isEditMode: _ctx.isEditMode,
    roles: _ctx.roles,
    id_modal: "create-account-modal",
    data_bs_target_modal: "#create-account-modal",
    onAccountSaved: _ctx.getAccounts
  }, null, _parent));
  _push(`<a href="#" data-bs-toggle="modal"${ssrRenderAttr("data-bs-target", "#create-account-modal")}><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"></path></svg></a></div></div><table class="table text-center table-hover table-striped-columns table-success"><thead class="table-primary"><tr><th scope="col">No.</th><th scope="col">Email</th><th scope="col">H\u1ECD t\xEAn</th><th scope="col">S\u1ED1 \u0111i\u1EC7n tho\u1EA1i</th><th scope="col">Quy\u1EC1n</th><th scope="col">T\xE1c v\u1EE5</th></tr></thead><tbody><!--[-->`);
  ssrRenderList(_ctx.accounts, (account, index2) => {
    _push(`<tr><td>${ssrInterpolate(++index2)}</td><td class="p-2">${ssrInterpolate(account.email)}</td><td>${ssrInterpolate(account.fullName)}</td><td>${ssrInterpolate(account.phone)}</td><td><!--[-->`);
    ssrRenderList(_ctx.roles, (role) => {
      _push(`<span>`);
      if (role.id === account.roleId) {
        _push(`<span>${ssrInterpolate(role.roleName)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</span>`);
    });
    _push(`<!--]--></td><td>`);
    if (account.email !== _ctx.currentEmail) {
      _push(`<div class="d-flex justify-content-center align-content-center align-items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link link-primary text-decoration-none mx-1",
        "data-bs-toggle": "modal",
        "data-bs-target": "#update-account-modal",
        onClick: ($event) => _ctx.accountEdit(account),
        style: { "cursor": "pointer" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M5 18.08V19h.92l9.06-9.06l-.92-.92z" opacity="0.3"${_scopeId}></path><path fill="currentColor" d="M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 24 24"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  d: "M5 18.08V19h.92l9.06-9.06l-.92-.92z",
                  opacity: "0.3"
                }),
                createVNode("path", {
                  fill: "currentColor",
                  d: "M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z"
                })
              ]))
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link link-primary text-decoration-none mx-1",
        "data-bs-toggle": "modal",
        "data-bs-target": "#changePasswordModal",
        onClick: ($event) => _ctx.resetPasswordAccount(account.id),
        style: { "cursor": "pointer" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<i class="fa-solid fa-key" style="${ssrRenderStyle({ "font-size": "0.77em" })}"${_scopeId}></i>`);
          } else {
            return [
              createVNode("i", {
                class: "fa-solid fa-key",
                style: { "font-size": "0.77em" }
              })
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        class: "link link-danger text-decoration-none mx-1",
        style: { "cursor": "pointer" },
        onClick: ($event) => _ctx.deleteAccount(account.id),
        "data-bs-toggle": "modal",
        "data-bs-target": "#deleteAccountModal"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 48 48"${_scopeId}><path fill="currentColor" d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25"${_scopeId}></path></svg>`);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "1em",
                height: "1em",
                viewBox: "0 0 48 48"
              }, [
                createVNode("path", {
                  fill: "currentColor",
                  d: "M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25"
                })
              ]))
            ];
          }
        }),
        _: 2
      }, _parent));
      _push(`</div>`);
    } else {
      _push(`<!---->`);
    }
    _push(`</td></tr>`);
  });
  _push(`<!--]--></tbody></table>`);
  _push(ssrRenderComponent(_component_TheFormCreateUpdateAccount, {
    isEditMode: _ctx.isEditMode,
    editAccount: _ctx.editAccountData,
    roles: _ctx.roles,
    id_modal: "update-account-modal",
    data_bs_target_modal: "#update-account-modal",
    onAccountSaved: _ctx.getAccounts
  }, null, _parent));
  _push(ssrRenderComponent(_component_ChangePasswordModal, {
    accountId: _ctx.selectedAccountId,
    isAdminChangeMode: true
  }, null, _parent));
  _push(ssrRenderComponent(_component_DeleteAccountModal, {
    accountId: _ctx.selectedAccountId,
    onAccountDeleted: _ctx.getAccounts
  }, null, _parent));
  _push(`<div class="d-flex justify-content-between mt-4"><div></div></div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/account/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { index as default };
//# sourceMappingURL=index-BXK8jBVk.mjs.map
