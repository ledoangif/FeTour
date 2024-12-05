import { _ as __nuxt_component_0$2 } from './CVModal-MQE190QY.mjs';
import { ref, onMounted, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, watch, renderSlot, createTextVNode, createCommentVNode, unref, withDirectives, Fragment, renderList, toDisplayString, vModelSelect } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderSlot } from 'vue/server-renderer';
import { A as Api } from './api-B8259KqO.mjs';
import { d as distExports, F as Form, a as Field, E as ErrorMessage } from './server.mjs';
import { _ as __nuxt_component_0$1 } from './nuxt-link-BBsyahRc.mjs';
import 'axios';
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

const _sfc_main$2 = {
  __name: "TheFormCreateUpdateCustomer",
  __ssrInlineRender: true,
  props: {
    editCustomer: {
      type: Object,
      default: null,
      required: false
    },
    isEditMode: {
      type: Boolean,
      default: false,
      required: true
    }
  },
  emits: ["Customer-saved"],
  setup(__props, { emit: __emit }) {
    const toast = distExports.useToast();
    const api = new Api();
    const emits = __emit;
    const formcus = ref(null);
    const props = __props;
    const Gender = [true, false];
    const resetForm = () => {
      Customer.value = { ...defaultCustomer };
      if (formcus.value) {
        formcus.value.resetForm({
          values: { ...Customer.value },
          errors: {}
        });
      }
    };
    const defaultCustomer = {
      nameCustomer: "",
      phoneNumber: "",
      identityCard: "",
      address: "",
      email: "",
      accountBank: "",
      gender: true,
      bankName: ""
    };
    const Customer = ref({ ...defaultCustomer });
    const updateCustomer = () => {
      const data = {
        nameCustomer: Customer.value.nameCustomer,
        phoneNumber: Customer.value.phoneNumber,
        address: Customer.value.address,
        email: Customer.value.email,
        identityCard: Customer.value.identityCard,
        accountBank: Customer.value.accountBank,
        gender: JSON.parse(Customer.value.gender),
        bankName: Customer.value.bankName,
        id: props.editCustomer.id
      };
      api.putAPI(`/Customer/${props.editCustomer.id}`, data).then((res) => {
        emits("Customer-saved");
        toast.success("C\u1EADp nh\u1EADt th\xE0nh c\xF4ng");
        (void 0).getElementById("closeModalButton").click();
      }).catch((error) => {
        console.error("Error updating Customer:", error);
      });
      resetForm();
    };
    const handleSubmit = () => {
      if (props.isEditMode) {
        updateCustomer();
      } else {
        createCustomer();
      }
    };
    watch(
      () => props.editCustomer,
      (newVal) => {
        if (newVal) {
          Customer.value = { ...newVal };
          if (formcus.value) {
            formcus.value.resetForm({
              values: { ...Customer.value },
              // Gán giá trị từ editCustomer
              errors: {}
              // Đảm bảo không có lỗi nào
            });
          }
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({
        id_model: "create-update-Customer-modal",
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
            if (__props.isEditMode) {
              _push2(`<span${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                _push2(`C\u1EADp nh\u1EADt kh\xE1ch h\xE0ng`);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<!---->`);
            }
          } else {
            return [
              __props.isEditMode ? (openBlock(), createBlock("span", { key: 0 }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createTextVNode("C\u1EADp nh\u1EADt kh\xE1ch h\xE0ng")
                ])
              ])) : createCommentVNode("", true)
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Form), {
              ref_key: "formcus",
              ref: formcus,
              onSubmit: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="row"${_scopeId2}><div class="row col-lg-6 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> T\xEAn kh\xE1ch h\xE0ng </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "nameCustomer",
                    modelValue: Customer.value.nameCustomer,
                    "onUpdate:modelValue": ($event) => Customer.value.nameCustomer = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, onlyCharacters: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "nameCustomer",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> S\u1ED1 \u0111i\u1EC7n tho\u1EA1i </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "phoneNumber",
                    modelValue: Customer.value.phoneNumber,
                    "onUpdate:modelValue": ($event) => Customer.value.phoneNumber = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, phone: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "phoneNumber",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> \u0110\u1ECBa ch\u1EC9 </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "address",
                    modelValue: Customer.value.address,
                    "onUpdate:modelValue": ($event) => Customer.value.address = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "address",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Gi\u1EDBi t\xEDnh </label><div class="col-sm-8"${_scopeId2}><select class="form-control"${_scopeId2}><!--[-->`);
                  ssrRenderList(Gender, (gender) => {
                    _push3(`<option${ssrRenderAttr("value", gender)}${_scopeId2}>${ssrInterpolate(gender ? "Nam" : "N\u1EEF")}</option>`);
                  });
                  _push3(`<!--]--></select></div></div></div><div class="row col-lg-6 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> CCCD </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "identityCard",
                    modelValue: Customer.value.identityCard,
                    "onUpdate:modelValue": ($event) => Customer.value.identityCard = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "identityCard",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Email </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "email",
                    modelValue: Customer.value.email,
                    "onUpdate:modelValue": ($event) => Customer.value.email = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, email: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "email",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> S\u1ED1 t\xE0i kho\u1EA3n </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "accountBank",
                    modelValue: Customer.value.accountBank,
                    "onUpdate:modelValue": ($event) => Customer.value.accountBank = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "accountBank",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Ng\xE2n h\xE0ng </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "bankName",
                    modelValue: Customer.value.bankName,
                    "onUpdate:modelValue": ($event) => Customer.value.bankName = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "bankName",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div><div class="modal-footer align-content-center justify-content-center"${_scopeId2}>`);
                  if (__props.isEditMode) {
                    _push3(`<button type="submit" class="btn btn-sm btn-primary d-flex align-items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 -70 700 700"${_scopeId2}><path fill="#f7f7f7" d="m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"${_scopeId2}></path></svg> L\u01B0u </button>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<button id="closeModalButton" type="button" class="btn-close" data-bs-dismiss="modal" hidden${_scopeId2}></button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " T\xEAn kh\xE1ch h\xE0ng "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "nameCustomer",
                              modelValue: Customer.value.nameCustomer,
                              "onUpdate:modelValue": ($event) => Customer.value.nameCustomer = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true, onlyCharacters: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "nameCustomer",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "phoneNumber",
                              modelValue: Customer.value.phoneNumber,
                              "onUpdate:modelValue": ($event) => Customer.value.phoneNumber = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true, phone: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "phoneNumber",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " \u0110\u1ECBa ch\u1EC9 "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "address",
                              modelValue: Customer.value.address,
                              "onUpdate:modelValue": ($event) => Customer.value.address = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "address",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Gi\u1EDBi t\xEDnh "),
                          createVNode("div", { class: "col-sm-8" }, [
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => Customer.value.gender = $event,
                              class: "form-control"
                            }, [
                              (openBlock(), createBlock(Fragment, null, renderList(Gender, (gender) => {
                                return createVNode("option", {
                                  key: gender,
                                  value: gender
                                }, toDisplayString(gender ? "Nam" : "N\u1EEF"), 9, ["value"]);
                              }), 64))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, Customer.value.gender]
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " CCCD "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "identityCard",
                              modelValue: Customer.value.identityCard,
                              "onUpdate:modelValue": ($event) => Customer.value.identityCard = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "identityCard",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Email "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "email",
                              modelValue: Customer.value.email,
                              "onUpdate:modelValue": ($event) => Customer.value.email = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true, email: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "email",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " S\u1ED1 t\xE0i kho\u1EA3n "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "accountBank",
                              modelValue: Customer.value.accountBank,
                              "onUpdate:modelValue": ($event) => Customer.value.accountBank = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "accountBank",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Ng\xE2n h\xE0ng "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "bankName",
                              modelValue: Customer.value.bankName,
                              "onUpdate:modelValue": ($event) => Customer.value.bankName = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "bankName",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                      __props.isEditMode ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "submit",
                        class: "btn btn-sm btn-primary d-flex align-items-center"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "0.88em",
                          height: "1em",
                          viewBox: "0 -70 700 700"
                        }, [
                          createVNode("path", {
                            fill: "#f7f7f7",
                            d: "m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"
                          })
                        ])),
                        createTextVNode(" L\u01B0u ")
                      ])) : createCommentVNode("", true),
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
              createVNode(unref(Form), {
                ref_key: "formcus",
                ref: formcus,
                onSubmit: handleSubmit
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " T\xEAn kh\xE1ch h\xE0ng "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "nameCustomer",
                            modelValue: Customer.value.nameCustomer,
                            "onUpdate:modelValue": ($event) => Customer.value.nameCustomer = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true, onlyCharacters: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "nameCustomer",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "phoneNumber",
                            modelValue: Customer.value.phoneNumber,
                            "onUpdate:modelValue": ($event) => Customer.value.phoneNumber = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true, phone: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "phoneNumber",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " \u0110\u1ECBa ch\u1EC9 "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "address",
                            modelValue: Customer.value.address,
                            "onUpdate:modelValue": ($event) => Customer.value.address = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "address",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Gi\u1EDBi t\xEDnh "),
                        createVNode("div", { class: "col-sm-8" }, [
                          withDirectives(createVNode("select", {
                            "onUpdate:modelValue": ($event) => Customer.value.gender = $event,
                            class: "form-control"
                          }, [
                            (openBlock(), createBlock(Fragment, null, renderList(Gender, (gender) => {
                              return createVNode("option", {
                                key: gender,
                                value: gender
                              }, toDisplayString(gender ? "Nam" : "N\u1EEF"), 9, ["value"]);
                            }), 64))
                          ], 8, ["onUpdate:modelValue"]), [
                            [vModelSelect, Customer.value.gender]
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " CCCD "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "identityCard",
                            modelValue: Customer.value.identityCard,
                            "onUpdate:modelValue": ($event) => Customer.value.identityCard = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "identityCard",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Email "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "email",
                            modelValue: Customer.value.email,
                            "onUpdate:modelValue": ($event) => Customer.value.email = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true, email: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "email",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " S\u1ED1 t\xE0i kho\u1EA3n "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "accountBank",
                            modelValue: Customer.value.accountBank,
                            "onUpdate:modelValue": ($event) => Customer.value.accountBank = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "accountBank",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Ng\xE2n h\xE0ng "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "bankName",
                            modelValue: Customer.value.bankName,
                            "onUpdate:modelValue": ($event) => Customer.value.bankName = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "bankName",
                            class: "text-danger"
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                    __props.isEditMode ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "submit",
                      class: "btn btn-sm btn-primary d-flex align-items-center"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "0.88em",
                        height: "1em",
                        viewBox: "0 -70 700 700"
                      }, [
                        createVNode("path", {
                          fill: "#f7f7f7",
                          d: "m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"
                        })
                      ])),
                      createTextVNode(" L\u01B0u ")
                    ])) : createCommentVNode("", true),
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
              }, 512)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/TheFormCreateUpdateCustomer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "DeleteCustomerModal",
  __ssrInlineRender: true,
  props: {
    CustomerId: {
      type: String,
      required: true
    }
  },
  emits: ["Customer-deleted", "hide-modal"],
  setup(__props, { emit: __emit }) {
    const toast = distExports.useToast();
    const props = __props;
    const api = new Api();
    const emits = __emit;
    const deleteCustomer = () => {
      const id = props.CustomerId;
      api.deleteById("/Customer", id).then((res) => {
        emits("Customer-deleted", id);
        emits("hide-modal");
        $(".btn-close").click();
        toast.success("X\xF3a th\xE0nh c\xF4ng");
      }).catch((error) => {
        console.error("L\u1ED7i khi x\xF3a kh\xE1ch h\xE0ng:", error);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({ id_model: "deleteCustomerModal" }, _attrs), {
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
              _push2(`X\xF3a kh\xE1ch h\xE0ng n\xE0y`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode("X\xF3a kh\xE1ch h\xE0ng n\xE0y")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xE1ch h\xE0ng n\xE0y?</p><div class="modal-footer align-content-center justify-content-center"${_scopeId}><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"${_scopeId}> H\u1EE7y b\u1ECF </button><button type="button" class="btn btn-danger"${_scopeId}> X\xF3a </button></div>`);
          } else {
            return [
              createVNode("p", null, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xE1ch h\xE0ng n\xE0y?"),
              createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  "data-bs-dismiss": "modal"
                }, " H\u1EE7y b\u1ECF "),
                createVNode("button", {
                  type: "button",
                  class: "btn btn-danger",
                  onClick: deleteCustomer
                }, " X\xF3a ")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/DeleteCustomerModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DeleteCustomerModal = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const api = new Api();
    const Customers = ref([]);
    const selectedCustomerId = ref(null);
    const editCustomerData = ref({});
    const isEditMode = ref(false);
    const searchString = ref("");
    ref(1);
    ref(0);
    ref(0);
    ref(10);
    const getCustomers = async () => {
      try {
        var response = await api.get(
          `/Customer`,
          null
        );
        Customers.value = response.data.responseData;
      } catch (err) {
        console.log(err);
      }
    };
    const deleteCustomer = async (id) => {
      try {
        selectedCustomerId.value = id;
      } catch (err) {
        console.log(err);
      }
    };
    const CustomerEdit = async (Customer) => {
      try {
        editCustomerData.value = {
          nameCustomer: Customer.nameCustomer,
          phoneNumber: Customer.phoneNumber,
          identityCard: Customer.identityCard,
          address: Customer.address,
          email: Customer.email,
          accountBank: Customer.accountBank,
          gender: Customer.gender,
          bankName: Customer.bankName,
          id: Customer.id
        };
        isEditMode.value = true;
      } catch (err) {
        console.log(err);
      }
    };
    onMounted(async () => {
      await getCustomers();
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheFormCreateUpdateCustomer = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="p-4"><div class="search"><h4 class="search-text h5">Kh\xE1ch h\xE0ng</h4><form name="search"><div class="mt-3">T\xECm ki\u1EBFm:</div><div class="search-text d-flex align-content-center"><div class="col-md-3"><input class="form-control col-md-2"${ssrRenderAttr("value", searchString.value)} type="text" placeholder=" S\u1ED1 \u0111i\u1EC7n tho\u1EA1i... "></div><span class="button d-flex"><button class="ms-2 btn-sm me-1 btn btn-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg> T\xECm ki\u1EBFm </button></span></div></form></div><div class="data"><div class="btn-handle d-flex justify-content-end mb-3">`);
      _push(ssrRenderComponent(_component_TheFormCreateUpdateCustomer, {
        isEditMode: isEditMode.value,
        editCustomer: editCustomerData.value,
        onCustomerSaved: getCustomers
      }, null, _parent));
      _push(`</div><table class="table text-center table-hover table-success table-striped-columns"><thead class="table-primary table-active"><tr><th scope="col">No.</th><th colspan="2">Th\xF4ng tin kh\xE1ch h\xE0ng</th><th colspan="2">Th\xF4ng tin li\xEAn l\u1EA1c</th><th scope="col">\u0110\u1ECBa ch\u1EC9</th><th colspan="2">Th\xF4ng tin thanh to\xE1n</th><th scope="col">T\xE1c v\u1EE5</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(Customers.value, (Customer, index) => {
        _push(`<tr><td class="p-4 booking-id-col">${ssrInterpolate(++index)}</td><td colspan="2" class="p-4">${ssrInterpolate(Customer.nameCustomer)} - `);
        if (Customer.gender == true) {
          _push(`<span>Nam</span>`);
        } else {
          _push(`<span>N\u1EEF</span>`);
        }
        _push(`<br><span>CCCD : ${ssrInterpolate(Customer.identityCard)}</span></td><td colspan="2" class="p-4"><a class="phone-link"${ssrRenderAttr("href", `tel://${Customer.phoneNumber}`)}>${ssrInterpolate(Customer.phoneNumber)} <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone-forward-fill ms-2" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877zm10.761.135a.5.5 0 0 1 .708 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 0 1-.708-.708L14.293 4H9.5a.5.5 0 0 1 0-1h4.793l-1.647-1.646a.5.5 0 0 1 0-.708"></path></svg></a><br><span>${ssrInterpolate(Customer.email)}</span></td><td class="p-4">${ssrInterpolate(Customer.address)}</td><td colspan="2" class="p-4">${ssrInterpolate(Customer.accountBank)} <br> ${ssrInterpolate(Customer.bankName)}</td><td class="p-4"><div class="d-flex justify-content-center align-content-center align-items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link link-primary text-decoration-none mx-1",
          "data-bs-toggle": "modal",
          "data-bs-target": "#create-update-Customer-modal",
          onClick: ($event) => CustomerEdit(Customer),
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
          class: "link link-danger text-decoration-none mx-1",
          style: { "cursor": "pointer" },
          onClick: ($event) => deleteCustomer(Customer.id),
          "data-bs-toggle": "modal",
          "data-bs-target": "#deleteCustomerModal"
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
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      _push(ssrRenderComponent(DeleteCustomerModal, {
        CustomerId: selectedCustomerId.value,
        onCustomerDeleted: getCustomers,
        onHideModal: getCustomers
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Dsbs_Ojj.mjs.map
