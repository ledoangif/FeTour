import { _ as __nuxt_component_0$2 } from './CVModal-MQE190QY.mjs';
import { ref, mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, watch, renderSlot, createTextVNode, unref } from 'vue';
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
  __name: "TheFormCreateUpdateHotel",
  __ssrInlineRender: true,
  props: {
    editHotel: {
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
  emits: ["Hotel-saved"],
  setup(__props, { emit: __emit }) {
    const toast = distExports.useToast();
    const api = new Api();
    const emits = __emit;
    const formKey = ref(0);
    const formRef = ref(null);
    const props = __props;
    const Hotel = ref({
      hotelName: "",
      linkHotel: "",
      rate: "",
      address: "",
      ceo: "",
      hotline: ""
    });
    const resetForm = () => {
      Hotel.value = {
        hotelName: "",
        linkHotel: "",
        rate: "",
        address: "",
        ceo: "",
        hotline: ""
      };
      formKey.value += 1;
    };
    const createHotel = () => {
      const formData = new FormData();
      formData.append("hotelName", Hotel.value.hotelName);
      formData.append("linkHotel", Hotel.value.linkHotel);
      formData.append("address", Hotel.value.address);
      formData.append("rate", Hotel.value.rate);
      formData.append("ceo", Hotel.value.ceo);
      formData.append("hotline", Hotel.value.hotline);
      const hotel = api.postAPI("/Hotel", formData).then((res) => {
        if (hotel.status === 200) {
          if (hotel.data && hotel.data.message) {
            toast.success(hotel.data.message);
          }
        }
        emits("Hotel-saved");
        (void 0).getElementById("closeModalButton").click();
      }).catch((error) => {
        console.error("Error creating Hotel:", error);
      });
    };
    const updateHotel = () => {
      const data = {
        hotelName: Hotel.value.hotelName,
        linkHotel: Hotel.value.linkHotel,
        rate: Hotel.value.rate,
        address: Hotel.value.address,
        ceo: Hotel.value.ceo,
        hotline: Hotel.value.hotline,
        id: props.editHotel.id
      };
      api.putAPI(`/Hotel/${props.editHotel.id}`, data).then((res) => {
        emits("Hotel-saved");
        toast.success("C\u1EADp nh\u1EADt th\xE0nh c\xF4ng");
        (void 0).getElementById("closeModalButton").click();
      }).catch((error) => {
        console.error("Error updating Hotel:", error);
      });
    };
    const handleSubmit = () => {
      try {
        if (props.isEditMode) {
          updateHotel();
        } else {
          createHotel();
        }
      } catch (error) {
        console.error("Submit failed:", error);
      }
    };
    watch(
      () => props.editHotel,
      (newVal) => {
        if (newVal) {
          Hotel.value = { ...newVal };
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({
        id_model: "create-update-Hotel-modal",
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
            if (!__props.isEditMode) {
              _push2(`<span${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                _push2(`Th\xEAm kh\xE1ch s\u1EA1n`);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<span${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                _push2(`C\u1EADp nh\u1EADt kh\xE1ch s\u1EA1n`);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            }
          } else {
            return [
              !__props.isEditMode ? (openBlock(), createBlock("span", { key: 0 }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createTextVNode("Th\xEAm kh\xE1ch s\u1EA1n")
                ])
              ])) : (openBlock(), createBlock("span", { key: 1 }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createTextVNode("C\u1EADp nh\u1EADt kh\xE1ch s\u1EA1n")
                ])
              ]))
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Form), {
              ref_key: "formRef",
              ref: formRef,
              onSubmit: handleSubmit,
              key: formKey.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="row"${_scopeId2}><div class="row col-lg-8 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> T\xEAn kh\xE1ch s\u1EA1n </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "hotelName",
                    modelValue: Hotel.value.hotelName,
                    "onUpdate:modelValue": ($event) => Hotel.value.hotelName = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, onlyCharacters: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "hotelName",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="row col-lg-4 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> S\u1ED1 sao </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "rate",
                    modelValue: Hotel.value.rate,
                    "onUpdate:modelValue": ($event) => Hotel.value.rate = $event,
                    class: "form-control",
                    type: "number",
                    rules: { required: true, point: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "rate",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div><div class="row"${_scopeId2}><div class="row col-lg-8 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Link Page </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "linkHotel",
                    modelValue: Hotel.value.linkHotel,
                    "onUpdate:modelValue": ($event) => Hotel.value.linkHotel = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "linkHotel",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="row col-lg-4 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Ch\u1EE7 s\u1EDF h\u1EEFu </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "ceo",
                    modelValue: Hotel.value.ceo,
                    "onUpdate:modelValue": ($event) => Hotel.value.ceo = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "ceo",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div><div class="row"${_scopeId2}><div class="row col-lg-8 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> \u0110\u1ECBa ch\u1EC9 </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "address",
                    modelValue: Hotel.value.address,
                    "onUpdate:modelValue": ($event) => Hotel.value.address = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "address",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="row col-lg-4 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Hotline </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "hotline",
                    modelValue: Hotel.value.hotline,
                    "onUpdate:modelValue": ($event) => Hotel.value.hotline = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, phone: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(unref(ErrorMessage), {
                    name: "hotline",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div></div><div class="modal-footer align-content-center justify-content-center"${_scopeId2}>`);
                  if (__props.isEditMode) {
                    _push3(`<button type="submit" class="btn btn-sm btn-primary d-flex align-items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="0.88em" height="1em" viewBox="0 -70 700 700"${_scopeId2}><path fill="#f7f7f7" d="m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"${_scopeId2}></path></svg> L\u01B0u </button>`);
                  } else {
                    _push3(`<button type="submit" class="btn btn-sm btn-primary d-flex align-items-center"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" width="10px" height="10px" viewBox="0 -70 700 700"${_scopeId2}><path fill="#f7f7f7" d="m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"${_scopeId2}></path></svg> Th\xEAm </button>`);
                  }
                  _push3(`<button id="closeModalButton" type="button" class="btn-close" data-bs-dismiss="modal" hidden${_scopeId2}></button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "row col-lg-8 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " T\xEAn kh\xE1ch s\u1EA1n "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "hotelName",
                              modelValue: Hotel.value.hotelName,
                              "onUpdate:modelValue": ($event) => Hotel.value.hotelName = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true, onlyCharacters: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "hotelName",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row col-lg-4 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " S\u1ED1 sao "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "rate",
                              modelValue: Hotel.value.rate,
                              "onUpdate:modelValue": ($event) => Hotel.value.rate = $event,
                              class: "form-control",
                              type: "number",
                              rules: { required: true, point: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "rate",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "row col-lg-8 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Link Page "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "linkHotel",
                              modelValue: Hotel.value.linkHotel,
                              "onUpdate:modelValue": ($event) => Hotel.value.linkHotel = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "linkHotel",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row col-lg-4 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Ch\u1EE7 s\u1EDF h\u1EEFu "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "ceo",
                              modelValue: Hotel.value.ceo,
                              "onUpdate:modelValue": ($event) => Hotel.value.ceo = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "ceo",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row" }, [
                      createVNode("div", { class: "row col-lg-8 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " \u0110\u1ECBa ch\u1EC9 "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "address",
                              modelValue: Hotel.value.address,
                              "onUpdate:modelValue": ($event) => Hotel.value.address = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "address",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row col-lg-4 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Hotline "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "hotline",
                              modelValue: Hotel.value.hotline,
                              "onUpdate:modelValue": ($event) => Hotel.value.hotline = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true, phone: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "hotline",
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
                      ])) : (openBlock(), createBlock("button", {
                        key: 1,
                        type: "submit",
                        class: "btn btn-sm btn-primary d-flex align-items-center"
                      }, [
                        (openBlock(), createBlock("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          width: "10px",
                          height: "10px",
                          viewBox: "0 -70 700 700"
                        }, [
                          createVNode("path", {
                            fill: "#f7f7f7",
                            d: "m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"
                          })
                        ])),
                        createTextVNode(" Th\xEAm ")
                      ])),
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
              (openBlock(), createBlock(unref(Form), {
                ref_key: "formRef",
                ref: formRef,
                onSubmit: handleSubmit,
                key: formKey.value
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "row col-lg-8 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " T\xEAn kh\xE1ch s\u1EA1n "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "hotelName",
                            modelValue: Hotel.value.hotelName,
                            "onUpdate:modelValue": ($event) => Hotel.value.hotelName = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true, onlyCharacters: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "hotelName",
                            class: "text-danger"
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row col-lg-4 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " S\u1ED1 sao "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "rate",
                            modelValue: Hotel.value.rate,
                            "onUpdate:modelValue": ($event) => Hotel.value.rate = $event,
                            class: "form-control",
                            type: "number",
                            rules: { required: true, point: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "rate",
                            class: "text-danger"
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "row col-lg-8 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Link Page "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "linkHotel",
                            modelValue: Hotel.value.linkHotel,
                            "onUpdate:modelValue": ($event) => Hotel.value.linkHotel = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "linkHotel",
                            class: "text-danger"
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row col-lg-4 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Ch\u1EE7 s\u1EDF h\u1EEFu "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "ceo",
                            modelValue: Hotel.value.ceo,
                            "onUpdate:modelValue": ($event) => Hotel.value.ceo = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "ceo",
                            class: "text-danger"
                          })
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "row col-lg-8 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " \u0110\u1ECBa ch\u1EC9 "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "address",
                            modelValue: Hotel.value.address,
                            "onUpdate:modelValue": ($event) => Hotel.value.address = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "address",
                            class: "text-danger"
                          })
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row col-lg-4 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Hotline "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "hotline",
                            modelValue: Hotel.value.hotline,
                            "onUpdate:modelValue": ($event) => Hotel.value.hotline = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true, phone: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(unref(ErrorMessage), {
                            name: "hotline",
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
                    ])) : (openBlock(), createBlock("button", {
                      key: 1,
                      type: "submit",
                      class: "btn btn-sm btn-primary d-flex align-items-center"
                    }, [
                      (openBlock(), createBlock("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        width: "10px",
                        height: "10px",
                        viewBox: "0 -70 700 700"
                      }, [
                        createVNode("path", {
                          fill: "#f7f7f7",
                          d: "m433.941 129.941l-83.882-83.882A48 48 0 0 0 316.118 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h352c26.51 0 48-21.49 48-48V163.882a48 48 0 0 0-14.059-33.941M224 416c-35.346 0-64-28.654-64-64c0-35.346 28.654-64 64-64s64 28.654 64 64c0 35.346-28.654 64-64 64m96-304.52V212c0 6.627-5.373 12-12 12H76c-6.627 0-12-5.373-12-12V108c0-6.627 5.373-12 12-12h228.52c3.183 0 6.235 1.264 8.485 3.515l3.48 3.48A11.996 11.996 0 0 1 320 111.48"
                        })
                      ])),
                      createTextVNode(" Th\xEAm ")
                    ])),
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
              }))
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/TheFormCreateUpdateHotel.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "DeleteHotelModal",
  __ssrInlineRender: true,
  props: {
    HotelId: {
      type: String,
      required: true
    }
  },
  emits: ["Hotel-deleted", "hide-modal"],
  setup(__props, { emit: __emit }) {
    const toast = distExports.useToast();
    const props = __props;
    const api = new Api();
    const emits = __emit;
    const deleteHotel = () => {
      const id = props.HotelId;
      api.deleteById("/Hotel", id).then((res) => {
        emits("Hotel-deleted", id);
        emits("hide-modal");
        $(".btn-close").click();
        toast.success("X\xF3a th\xE0nh c\xF4ng");
      }).catch((error) => {
        console.error("L\u1ED7i khi x\xF3a hkh\xE1ch s\u1EA1n:", error);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0$2;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({ id_model: "deleteHotelModal" }, _attrs), {
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
              _push2(`X\xF3a kh\xE1ch s\u1EA1n n\xE0y`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode("X\xF3a kh\xE1ch s\u1EA1n n\xE0y")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xE1ch s\u1EA1n n\xE0y?</p><div class="modal-footer align-content-center justify-content-center"${_scopeId}><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"${_scopeId}> H\u1EE7y b\u1ECF </button><button type="button" class="btn btn-danger"${_scopeId}> X\xF3a </button></div>`);
          } else {
            return [
              createVNode("p", null, "B\u1EA1n c\xF3 ch\u1EAFc ch\u1EAFn mu\u1ED1n x\xF3a kh\xE1ch s\u1EA1n n\xE0y?"),
              createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  "data-bs-dismiss": "modal"
                }, " H\u1EE7y b\u1ECF "),
                createVNode("button", {
                  type: "button",
                  class: "btn btn-danger",
                  onClick: deleteHotel
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/DeleteHotelModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DeleteHotelModal = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const api = new Api();
    const Hotels = ref([]);
    const selectedHotelId = ref(null);
    const editHotelData = ref({});
    const isEditMode = ref(false);
    const searchString = ref("");
    ref(1);
    ref(0);
    ref(0);
    ref(10);
    const role = ref("");
    const getHotels = async () => {
      try {
        var response = await api.get(
          `/Hotel`,
          null
        );
        Hotels.value = response.data.responseData;
      } catch (err) {
        console.log(err);
      }
    };
    const deleteHotel = async (id) => {
      try {
        selectedHotelId.value = id;
      } catch (err) {
        console.log(err);
      }
    };
    const HotelEdit = async (Hotels2) => {
      try {
        editHotelData.value = {
          hotelName: Hotels2.hotelName,
          linkHotel: Hotels2.linkHotel,
          rate: Hotels2.rate,
          address: Hotels2.address,
          ceo: Hotels2.ceo,
          hotline: Hotels2.hotline,
          id: Hotels2.id
        };
        isEditMode.value = true;
      } catch (err) {
        console.log(err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheFormCreateUpdateHotel = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="p-4"><div class="search"><h4 class="search-text h5">Kh\xE1ch s\u1EA1n</h4><form name="search"><div class="mt-3">T\xECm ki\u1EBFm:</div><div class="search-text d-flex align-content-center"><div class="col-md-3"><input class="form-control col-md-2"${ssrRenderAttr("value", searchString.value)} type="text" placeholder=" T\xEAn kh\xE1ch s\u1EA1n... "></div><span class="button d-flex"><button class="ms-2 btn-sm me-1 btn btn-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg> T\xECm ki\u1EBFm </button></span></div></form></div><div class="data"><div class="btn-handle d-flex justify-content-end mb-3"><div class="handle-create">`);
      _push(ssrRenderComponent(_component_TheFormCreateUpdateHotel, {
        isEditMode: isEditMode.value,
        editHotel: editHotelData.value,
        onHotelSaved: getHotels
      }, null, _parent));
      _push(`<a href="#" data-bs-toggle="modal" data-bs-target="#create-update-Hotel-modal"><svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"></path></svg></a></div></div><table class="table text-center table-hover table-success table-striped-columns"><thead class="table-primary table-active"><tr><th scope="col">No.</th><th>Kh\xE1ch s\u1EA1n</th><th>\u0110\u1ECBa ch\u1EC9</th><th>Hotline</th><th>Ch\u1EE7 s\u1EDF h\u1EEFu</th><th>S\u1ED1 sao</th><th scope="col">T\xE1c v\u1EE5</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(Hotels.value, (Hotel, index) => {
        _push(`<tr><td>${ssrInterpolate(++index)}</td><td class="text-decoration-none"><a${ssrRenderAttr("href", Hotel.linkHotel)}>${ssrInterpolate(Hotel.hotelName)}</a></td><td>${ssrInterpolate(Hotel.address)}</td><td>${ssrInterpolate(Hotel.hotline)}</td><td>${ssrInterpolate(Hotel.ceo)}</td><td><div class="d-flex flex-row justify-content-center"><div class="pb-2">${ssrInterpolate(Hotel.rate)}</div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="18" height="18" fill="yellow" class="ms-1"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"></path></svg></div></td><td><div class="d-flex justify-content-center align-content-center align-items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link link-primary text-decoration-none mx-1",
          "data-bs-toggle": "modal",
          "data-bs-target": "#create-update-Hotel-modal",
          onClick: ($event) => HotelEdit(Hotel),
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
        if (role.value == "Admin") {
          _push(ssrRenderComponent(_component_NuxtLink, {
            class: "link link-danger text-decoration-none mx-1",
            style: { "cursor": "pointer" },
            onClick: ($event) => deleteHotel(Hotel.id),
            "data-bs-toggle": "modal",
            "data-bs-target": "#deleteHotelModal"
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
        } else {
          _push(`<!---->`);
        }
        _push(`</div></td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      _push(ssrRenderComponent(DeleteHotelModal, {
        HotelId: selectedHotelId.value,
        onHotelDeleted: getHotels,
        onHideModal: ($event) => getHotels()
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hotel/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BsTyv4RN.mjs.map
