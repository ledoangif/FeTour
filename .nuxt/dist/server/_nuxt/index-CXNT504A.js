import { _ as __nuxt_component_0$1 } from "./CVModal-MQE190QY.js";
import { _ as __nuxt_component_2 } from "./server-placeholder-DrBExW9e.js";
import { ref, watch, mergeProps, withCtx, renderSlot, openBlock, createBlock, createTextVNode, createVNode, unref, Fragment, renderList, toDisplayString, withDirectives, vModelSelect, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from "vue/server-renderer";
import { A as Api } from "./api-B8259KqO.js";
import { F as Form, a as Field, E as ErrorMessage } from "../server.mjs";
import { T as Tour_constants } from "./constants-TVWakoW1.js";
import { useToast } from "vue-toast-notification";
import { _ as __nuxt_component_0$2 } from "./nuxt-link-BBsyahRc.js";
import { f as formatCurrency } from "./validate-DZZjg1ZS.js";
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
import "ufo";
import "devalue";
import "destr";
import "lodash-es";
import "vue-draggable-next";
import "@vue/devtools-api";
import "date-fns";
const _sfc_main$2 = {
  __name: "TheFormCreateUpdateBooking",
  __ssrInlineRender: true,
  props: {
    editBooking: {
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
  emits: ["Booking-saved"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const api = new Api();
    const form = ref(null);
    const emits = __emit;
    ref({});
    const showKH = ref(false);
    const props = __props;
    const statusBill = [
      { id: 1, value: "Đã thanh toán" },
      { id: 2, value: "Đã đặt cọc" },
      { id: 3, value: "Hủy" },
      { id: 4, value: "Chờ xử lý" },
      { id: 5, value: "Khách hàng hủy" }
    ];
    const defaultBooking = {
      tourId: "",
      customerId: "",
      totalBill: "",
      paymented: "",
      paymentBy: "",
      child: "",
      adult: "",
      statusBill: "Chờ xử lý",
      customerInTours: "",
      id: "",
      nameCustomer: "",
      phoneNumber: "",
      identityCard: "",
      address: "",
      email: "",
      accountBank: "",
      gender: true,
      bankName: "",
      idCustomer: ""
    };
    const Booking = ref({ ...defaultBooking });
    const resetForm = () => {
      Booking.value = { ...defaultBooking };
      errorCustomerInTours.value = "";
    };
    const Gender = [true, false];
    const showCustmomer = () => {
      showKH.value = !showKH.value;
    };
    const updateBooking = async () => {
      if (Booking.value.paymented > Booking.value.totalBill) {
        alert("Số tiền thanh toán không được vượt quá tổng tiền.");
        Booking.value.paymented = Booking.value.totalBill;
        return;
      }
      const data = {
        tourId: Booking.value.tourId,
        customerId: Booking.value.customerId,
        totalBill: Booking.value.totalBill,
        paymented: Booking.value.paymented,
        paymentBy: Booking.value.paymentBy,
        paymentTime: props.editBooking.paymentTime,
        isLocal: Booking.value.isLocal,
        adult: Booking.value.adult,
        statusBill: Booking.value.statusBill,
        customerInTours: Booking.value.customerInTours,
        createDate: props.editBooking.createDate,
        updateDate: /* @__PURE__ */ new Date(),
        id: props.editBooking.id
      };
      const dataCustomer = {
        nameCustomer: Booking.value.nameCustomer,
        phoneNumber: Booking.value.phoneNumber,
        identityCard: Booking.value.identityCard,
        address: Booking.value.address,
        email: Booking.value.email,
        accountBank: Booking.value.accountBank,
        gender: Booking.value.gender,
        bankName: Booking.value.bankName,
        id: props.editBooking.customerId
      };
      try {
        if (showKH.value == true) {
          await api.putAPI(`/Customer/${props.editBooking.customerId}`, dataCustomer);
        }
        const booking = await api.putAPI(`/Booking/${props.editBooking.id}`, data);
        if (booking.status === 200) {
          if (booking.data && booking.data.message) {
            toast.success(booking.data.message);
          }
        }
        emits("Booking-saved");
        const formData = new FormData();
        formData.append("to", Booking.value.email);
        formData.append("status", data.statusBill);
        const mail = await api.postAPI(`/Booking/TestSendMailByStatus?id=${props.editBooking.id}`, formData);
        if (mail.status === 200) {
          if (mail.data && mail.data.message) {
            toast.success(mail.data.message);
          }
        }
        (void 0).getElementById("closeModalButton").click();
      } catch (error) {
        console.error("Error updating Booking:", error);
      }
    };
    const errorCustomerInTours = ref("");
    const handleSubmit = () => {
      const tempDiv = (void 0).createElement("div");
      tempDiv.innerHTML = Booking.value.customerInTours;
      const textContent = tempDiv.textContent.trim();
      if (!textContent) {
        errorCustomerInTours.value = "Thông tin này không được để trống!";
        return;
      } else {
        errorCustomerInTours.value = "";
      }
      if (props.isEditMode) {
        updateBooking();
      } else {
        createBooking();
      }
    };
    const isDisabled = (status) => {
      return status === Tour_constants.Cancel || status === Tour_constants.Paid || status === Tour_constants.Deposited || status === Tour_constants.success || //    status===Tour_constants.Customercancel||
      status === Tour_constants.Pending;
    };
    watch(
      () => props.editBooking,
      (newVal) => {
        if (newVal) {
          Booking.value = { ...newVal };
          if (form.value) {
            form.value.resetForm({
              values: { ...Booking.value },
              // Cập nhật giá trị mới cho form
              errors: {}
              // Đặt lại tất cả lỗi
            });
          }
        }
      },
      { immediate: true }
    );
    watch(
      () => Booking.value.statusBill,
      (newStatus) => {
        if (newStatus === "Đã thanh toán") {
          Booking.value.paymented = Booking.value.totalBill;
        } else if (newStatus === "Đã đặt cọc" || newStatus === "Hủy") {
          Booking.value.paymented = 1e5;
        } else if (newStatus === "Chờ xử lý") {
          Booking.value.paymented = 0;
        }
      },
      { immediate: true }
    );
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0$1;
      const _component_TipTap = __nuxt_component_2;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({
        id_model: "create-update-Booking-modal",
        onCloseModal: resetForm,
        "<!--": "",
        "Lắng": "",
        nghe: "",
        "sự": "",
        "kiện": "",
        "đóng": "",
        modal: "",
        "và": "",
        "gọi": "",
        resetForm: "",
        "--": ""
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
                _push2(`Thêm Booking du lịch `);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<span${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                _push2(`<div${_scopeId}><span${_scopeId}>Cập nhật Booking du lịch</span> <button type="button" class="btn btn-success ms-5"${_scopeId}>Cập nhật khách hàng</button></div>`);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            }
          } else {
            return [
              !__props.isEditMode ? (openBlock(), createBlock("span", { key: 0 }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createTextVNode("Thêm Booking du lịch ")
                ])
              ])) : (openBlock(), createBlock("span", { key: 1 }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createVNode("div", null, [
                    createVNode("span", null, "Cập nhật Booking du lịch"),
                    createTextVNode(),
                    createVNode("button", {
                      type: "button",
                      class: "btn btn-success ms-5",
                      onClick: showCustmomer
                    }, "Cập nhật khách hàng")
                  ])
                ])
              ]))
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(Form), {
              ref_key: "form",
              ref: form,
              onSubmit: handleSubmit
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="row"${_scopeId2}>`);
                  if (showKH.value) {
                    _push3(`<div class="bg-light row m-0 p-2 mb-3"${_scopeId2}><div class="row col-lg-6 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Tên khách hàng </label><div class="col-sm-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Field), {
                      name: "nameCustomer",
                      modelValue: Booking.value.nameCustomer,
                      "onUpdate:modelValue": ($event) => Booking.value.nameCustomer = $event,
                      type: "text",
                      class: "form-control",
                      rules: { required: true, onlyCharacters: true }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ErrorMessage), {
                      name: "nameCustomer",
                      class: "text-danger"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Số điện thoại </label><div class="col-sm-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Field), {
                      name: "phoneNumber",
                      modelValue: Booking.value.phoneNumber,
                      "onUpdate:modelValue": ($event) => Booking.value.phoneNumber = $event,
                      type: "text",
                      class: "form-control",
                      rules: { required: true, phone: true }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ErrorMessage), {
                      name: "phoneNumber",
                      class: "text-danger"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Địa chỉ </label><div class="col-sm-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Field), {
                      name: "address",
                      modelValue: Booking.value.address,
                      "onUpdate:modelValue": ($event) => Booking.value.address = $event,
                      type: "text",
                      class: "form-control",
                      rules: { required: true }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ErrorMessage), {
                      name: "address",
                      class: "text-danger"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Giới tính </label><div class="col-sm-8"${_scopeId2}><select class="form-control"${_scopeId2}><!--[-->`);
                    ssrRenderList(Gender, (gender) => {
                      _push3(`<option${ssrRenderAttr("value", gender)}${_scopeId2}>${ssrInterpolate(gender ? "Nam" : "Nữ")}</option>`);
                    });
                    _push3(`<!--]--></select></div></div></div><div class="row col-lg-6 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> CCCD </label><div class="col-sm-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Field), {
                      name: "identityCard",
                      modelValue: Booking.value.identityCard,
                      "onUpdate:modelValue": ($event) => Booking.value.identityCard = $event,
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
                      modelValue: Booking.value.email,
                      "onUpdate:modelValue": ($event) => Booking.value.email = $event,
                      type: "text",
                      class: "form-control",
                      rules: { email: true }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ErrorMessage), {
                      name: "email",
                      class: "text-danger"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Ngân hàng </label><div class="col-sm-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Field), {
                      name: "bankName",
                      modelValue: Booking.value.bankName,
                      "onUpdate:modelValue": ($event) => Booking.value.bankName = $event,
                      type: "text",
                      class: "form-control",
                      rules: { required: true }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ErrorMessage), {
                      name: "bankName",
                      class: "text-danger"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Số tài khoản </label><div class="col-sm-8"${_scopeId2}>`);
                    _push3(ssrRenderComponent(unref(Field), {
                      name: "accountBank",
                      modelValue: Booking.value.accountBank,
                      "onUpdate:modelValue": ($event) => Booking.value.accountBank = $event,
                      type: "text",
                      class: "form-control",
                      rules: { required: true }
                    }, null, _parent3, _scopeId2));
                    _push3(ssrRenderComponent(unref(ErrorMessage), {
                      name: "accountBank",
                      class: "text-danger"
                    }, null, _parent3, _scopeId2));
                    _push3(`</div></div></div></div>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`<div class="row col-lg-6 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Mã tour </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "tourId",
                    modelValue: Booking.value.tourId,
                    "onUpdate:modelValue": ($event) => Booking.value.tourId = $event,
                    type: "text",
                    class: "form-control",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Mã khách hàng </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    id: "customerId",
                    name: "customerId",
                    modelValue: Booking.value.customerId,
                    "onUpdate:modelValue": ($event) => Booking.value.customerId = $event,
                    class: "form-control",
                    type: "text",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`<br${_scopeId2}></div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Vé người lớn </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "adult",
                    modelValue: Booking.value.adult,
                    "onUpdate:modelValue": ($event) => Booking.value.adult = $event,
                    type: "text",
                    class: "form-control",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}>Tổng tiền </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    id: "totalBill",
                    name: "totalBill",
                    modelValue: Booking.value.totalBill,
                    "onUpdate:modelValue": ($event) => Booking.value.totalBill = $event,
                    class: "form-control",
                    type: "text",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Đã thanh toán </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "paymented",
                    modelValue: Booking.value.paymented,
                    "onUpdate:modelValue": ($event) => Booking.value.paymented = $event,
                    type: "text",
                    class: "form-control",
                    disabled: isDisabled(Booking.value.statusBill)
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="row col-lg-6"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Vé trẻ em </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "child",
                    modelValue: Booking.value.child,
                    "onUpdate:modelValue": ($event) => Booking.value.child = $event,
                    type: "text",
                    class: "form-control",
                    disabled: ""
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Trạng thái đơn </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    as: "select",
                    id: "statusBill",
                    name: "statusBill",
                    modelValue: Booking.value.statusBill,
                    "onUpdate:modelValue": ($event) => Booking.value.statusBill = $event,
                    class: "form-control"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(statusBill, (item) => {
                          _push4(`<option class="text-dark"${ssrRenderAttr("value", item.value)}${_scopeId3}>${ssrInterpolate(item.value)}</option>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(statusBill, (item) => {
                            return createVNode("option", {
                              class: "text-dark",
                              value: item.value
                            }, toDisplayString(item.value), 9, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row form-group required mb-3"${_scopeId2}><label for="source-name" class="col-sm-3 col-form-label control-label text-end"${_scopeId2}>Danh sách khách hàng </label><div class="col-sm-9"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TipTap, {
                    modelValue: Booking.value.customerInTours,
                    "onUpdate:modelValue": ($event) => Booking.value.customerInTours = $event
                  }, null, _parent3, _scopeId2));
                  if (errorCustomerInTours.value) {
                    _push3(`<span class="text-danger"${_scopeId2}>${ssrInterpolate(errorCustomerInTours.value)}</span>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div></div></div><div class="modal-footer align-content-center justify-content-center"${_scopeId2}>`);
                  if (__props.isEditMode) {
                    _push3(`<button type="submit" class="btn btn-sm btn-primary d-flex align-items-center"${_scopeId2}> Lưu </button>`);
                  } else {
                    _push3(`<button type="submit" class="btn btn-sm btn-primary d-flex align-items-center"${_scopeId2}> Thêm </button>`);
                  }
                  _push3(`<button id="closeModalButton" type="button" class="btn-close" data-bs-dismiss="modal" hidden${_scopeId2}></button></div>`);
                } else {
                  return [
                    createVNode("div", { class: "row" }, [
                      showKH.value ? (openBlock(), createBlock("div", {
                        key: 0,
                        class: "bg-light row m-0 p-2 mb-3"
                      }, [
                        createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                          createVNode("div", { class: "row mb-3 form-group required" }, [
                            createVNode("label", {
                              for: "source-name",
                              class: "col-sm-4 col-form-label control-label text-end"
                            }, " Tên khách hàng "),
                            createVNode("div", { class: "col-sm-8" }, [
                              createVNode(unref(Field), {
                                name: "nameCustomer",
                                modelValue: Booking.value.nameCustomer,
                                "onUpdate:modelValue": ($event) => Booking.value.nameCustomer = $event,
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
                            }, " Số điện thoại "),
                            createVNode("div", { class: "col-sm-8" }, [
                              createVNode(unref(Field), {
                                name: "phoneNumber",
                                modelValue: Booking.value.phoneNumber,
                                "onUpdate:modelValue": ($event) => Booking.value.phoneNumber = $event,
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
                            }, " Địa chỉ "),
                            createVNode("div", { class: "col-sm-8" }, [
                              createVNode(unref(Field), {
                                name: "address",
                                modelValue: Booking.value.address,
                                "onUpdate:modelValue": ($event) => Booking.value.address = $event,
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
                            }, " Giới tính "),
                            createVNode("div", { class: "col-sm-8" }, [
                              withDirectives(createVNode("select", {
                                "onUpdate:modelValue": ($event) => Booking.value.gender = $event,
                                class: "form-control"
                              }, [
                                (openBlock(), createBlock(Fragment, null, renderList(Gender, (gender) => {
                                  return createVNode("option", {
                                    key: gender,
                                    value: gender
                                  }, toDisplayString(gender ? "Nam" : "Nữ"), 9, ["value"]);
                                }), 64))
                              ], 8, ["onUpdate:modelValue"]), [
                                [vModelSelect, Booking.value.gender]
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
                                modelValue: Booking.value.identityCard,
                                "onUpdate:modelValue": ($event) => Booking.value.identityCard = $event,
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
                                modelValue: Booking.value.email,
                                "onUpdate:modelValue": ($event) => Booking.value.email = $event,
                                type: "text",
                                class: "form-control",
                                rules: { email: true }
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
                            }, " Ngân hàng "),
                            createVNode("div", { class: "col-sm-8" }, [
                              createVNode(unref(Field), {
                                name: "bankName",
                                modelValue: Booking.value.bankName,
                                "onUpdate:modelValue": ($event) => Booking.value.bankName = $event,
                                type: "text",
                                class: "form-control",
                                rules: { required: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(unref(ErrorMessage), {
                                name: "bankName",
                                class: "text-danger"
                              })
                            ])
                          ]),
                          createVNode("div", { class: "row mb-3 form-group required" }, [
                            createVNode("label", {
                              for: "source-name",
                              class: "col-sm-4 col-form-label control-label text-end"
                            }, " Số tài khoản "),
                            createVNode("div", { class: "col-sm-8" }, [
                              createVNode(unref(Field), {
                                name: "accountBank",
                                modelValue: Booking.value.accountBank,
                                "onUpdate:modelValue": ($event) => Booking.value.accountBank = $event,
                                type: "text",
                                class: "form-control",
                                rules: { required: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(unref(ErrorMessage), {
                                name: "accountBank",
                                class: "text-danger"
                              })
                            ])
                          ])
                        ])
                      ])) : createCommentVNode("", true),
                      createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Mã tour "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "tourId",
                              modelValue: Booking.value.tourId,
                              "onUpdate:modelValue": ($event) => Booking.value.tourId = $event,
                              type: "text",
                              class: "form-control",
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "row form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Mã khách hàng "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              id: "customerId",
                              name: "customerId",
                              modelValue: Booking.value.customerId,
                              "onUpdate:modelValue": ($event) => Booking.value.customerId = $event,
                              class: "form-control",
                              type: "text",
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode("br")
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Vé người lớn "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "adult",
                              modelValue: Booking.value.adult,
                              "onUpdate:modelValue": ($event) => Booking.value.adult = $event,
                              type: "text",
                              class: "form-control",
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, "Tổng tiền "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              id: "totalBill",
                              name: "totalBill",
                              modelValue: Booking.value.totalBill,
                              "onUpdate:modelValue": ($event) => Booking.value.totalBill = $event,
                              class: "form-control",
                              type: "text",
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Đã thanh toán "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "paymented",
                              modelValue: Booking.value.paymented,
                              "onUpdate:modelValue": ($event) => Booking.value.paymented = $event,
                              type: "text",
                              class: "form-control",
                              disabled: isDisabled(Booking.value.statusBill)
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row col-lg-6" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Vé trẻ em "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "child",
                              modelValue: Booking.value.child,
                              "onUpdate:modelValue": ($event) => Booking.value.child = $event,
                              type: "text",
                              class: "form-control",
                              disabled: ""
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Trạng thái đơn "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              as: "select",
                              id: "statusBill",
                              name: "statusBill",
                              modelValue: Booking.value.statusBill,
                              "onUpdate:modelValue": ($event) => Booking.value.statusBill = $event,
                              class: "form-control"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(statusBill, (item) => {
                                  return createVNode("option", {
                                    class: "text-dark",
                                    value: item.value
                                  }, toDisplayString(item.value), 9, ["value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "row form-group required mb-3" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-3 col-form-label control-label text-end"
                          }, "Danh sách khách hàng "),
                          createVNode("div", { class: "col-sm-9" }, [
                            createVNode(_component_TipTap, {
                              modelValue: Booking.value.customerInTours,
                              "onUpdate:modelValue": ($event) => Booking.value.customerInTours = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            errorCustomerInTours.value ? (openBlock(), createBlock("span", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(errorCustomerInTours.value), 1)) : createCommentVNode("", true)
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                      __props.isEditMode ? (openBlock(), createBlock("button", {
                        key: 0,
                        type: "submit",
                        class: "btn btn-sm btn-primary d-flex align-items-center"
                      }, " Lưu ")) : (openBlock(), createBlock("button", {
                        key: 1,
                        type: "submit",
                        class: "btn btn-sm btn-primary d-flex align-items-center"
                      }, " Thêm ")),
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
                ref_key: "form",
                ref: form,
                onSubmit: handleSubmit
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "row" }, [
                    showKH.value ? (openBlock(), createBlock("div", {
                      key: 0,
                      class: "bg-light row m-0 p-2 mb-3"
                    }, [
                      createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Tên khách hàng "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "nameCustomer",
                              modelValue: Booking.value.nameCustomer,
                              "onUpdate:modelValue": ($event) => Booking.value.nameCustomer = $event,
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
                          }, " Số điện thoại "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "phoneNumber",
                              modelValue: Booking.value.phoneNumber,
                              "onUpdate:modelValue": ($event) => Booking.value.phoneNumber = $event,
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
                          }, " Địa chỉ "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "address",
                              modelValue: Booking.value.address,
                              "onUpdate:modelValue": ($event) => Booking.value.address = $event,
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
                          }, " Giới tính "),
                          createVNode("div", { class: "col-sm-8" }, [
                            withDirectives(createVNode("select", {
                              "onUpdate:modelValue": ($event) => Booking.value.gender = $event,
                              class: "form-control"
                            }, [
                              (openBlock(), createBlock(Fragment, null, renderList(Gender, (gender) => {
                                return createVNode("option", {
                                  key: gender,
                                  value: gender
                                }, toDisplayString(gender ? "Nam" : "Nữ"), 9, ["value"]);
                              }), 64))
                            ], 8, ["onUpdate:modelValue"]), [
                              [vModelSelect, Booking.value.gender]
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
                              modelValue: Booking.value.identityCard,
                              "onUpdate:modelValue": ($event) => Booking.value.identityCard = $event,
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
                              modelValue: Booking.value.email,
                              "onUpdate:modelValue": ($event) => Booking.value.email = $event,
                              type: "text",
                              class: "form-control",
                              rules: { email: true }
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
                          }, " Ngân hàng "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "bankName",
                              modelValue: Booking.value.bankName,
                              "onUpdate:modelValue": ($event) => Booking.value.bankName = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "bankName",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Số tài khoản "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "accountBank",
                              modelValue: Booking.value.accountBank,
                              "onUpdate:modelValue": ($event) => Booking.value.accountBank = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(unref(ErrorMessage), {
                              name: "accountBank",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ])
                    ])) : createCommentVNode("", true),
                    createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Mã tour "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "tourId",
                            modelValue: Booking.value.tourId,
                            "onUpdate:modelValue": ($event) => Booking.value.tourId = $event,
                            type: "text",
                            class: "form-control",
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "row form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Mã khách hàng "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            id: "customerId",
                            name: "customerId",
                            modelValue: Booking.value.customerId,
                            "onUpdate:modelValue": ($event) => Booking.value.customerId = $event,
                            class: "form-control",
                            type: "text",
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode("br")
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Vé người lớn "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "adult",
                            modelValue: Booking.value.adult,
                            "onUpdate:modelValue": ($event) => Booking.value.adult = $event,
                            type: "text",
                            class: "form-control",
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, "Tổng tiền "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            id: "totalBill",
                            name: "totalBill",
                            modelValue: Booking.value.totalBill,
                            "onUpdate:modelValue": ($event) => Booking.value.totalBill = $event,
                            class: "form-control",
                            type: "text",
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Đã thanh toán "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "paymented",
                            modelValue: Booking.value.paymented,
                            "onUpdate:modelValue": ($event) => Booking.value.paymented = $event,
                            type: "text",
                            class: "form-control",
                            disabled: isDisabled(Booking.value.statusBill)
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "disabled"])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row col-lg-6" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Vé trẻ em "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "child",
                            modelValue: Booking.value.child,
                            "onUpdate:modelValue": ($event) => Booking.value.child = $event,
                            type: "text",
                            class: "form-control",
                            disabled: ""
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Trạng thái đơn "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            as: "select",
                            id: "statusBill",
                            name: "statusBill",
                            modelValue: Booking.value.statusBill,
                            "onUpdate:modelValue": ($event) => Booking.value.statusBill = $event,
                            class: "form-control"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(statusBill, (item) => {
                                return createVNode("option", {
                                  class: "text-dark",
                                  value: item.value
                                }, toDisplayString(item.value), 9, ["value"]);
                              }), 64))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "row form-group required mb-3" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-3 col-form-label control-label text-end"
                        }, "Danh sách khách hàng "),
                        createVNode("div", { class: "col-sm-9" }, [
                          createVNode(_component_TipTap, {
                            modelValue: Booking.value.customerInTours,
                            "onUpdate:modelValue": ($event) => Booking.value.customerInTours = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          errorCustomerInTours.value ? (openBlock(), createBlock("span", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(errorCustomerInTours.value), 1)) : createCommentVNode("", true)
                        ])
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                    __props.isEditMode ? (openBlock(), createBlock("button", {
                      key: 0,
                      type: "submit",
                      class: "btn btn-sm btn-primary d-flex align-items-center"
                    }, " Lưu ")) : (openBlock(), createBlock("button", {
                      key: 1,
                      type: "submit",
                      class: "btn btn-sm btn-primary d-flex align-items-center"
                    }, " Thêm ")),
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
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` &gt; `);
          } else {
            return [
              createTextVNode(" > ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/TheFormCreateUpdateBooking.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "DeleteBookingModal",
  __ssrInlineRender: true,
  props: {
    BookingId: {
      type: String,
      required: true
    }
  },
  emits: ["Booking-deleted", "hide-modal"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const props = __props;
    const api = new Api();
    const emits = __emit;
    const deleteBooking = () => {
      const id = props.BookingId;
      api.deleteById("/Booking", id).then((res) => {
        emits("Booking-deleted", id);
        emits("hide-modal");
        $(".btn-close").click();
        toast.success("Xóa thành công");
      }).catch((error) => {
        console.error("Lỗi khi xóa đơn đặt:", error);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({ id_model: "deleteBookingModal" }, _attrs), {
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
              _push2(`Xóa đơn đặtnày`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode("Xóa đơn đặtnày")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Bạn có chắc chắn muốn xóa đơn đặtnày?</p><div class="modal-footer align-content-center justify-content-center"${_scopeId}><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"${_scopeId}> Hủy bỏ </button><button type="button" class="btn btn-danger"${_scopeId}> Xóa </button></div>`);
          } else {
            return [
              createVNode("p", null, "Bạn có chắc chắn muốn xóa đơn đặtnày?"),
              createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  "data-bs-dismiss": "modal"
                }, " Hủy bỏ "),
                createVNode("button", {
                  type: "button",
                  class: "btn btn-danger",
                  onClick: deleteBooking
                }, " Xóa ")
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/DeleteBookingModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DeleteBookingModal = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const api = new Api();
    const Bookings = ref([]);
    const selectedBookingId = ref(null);
    const editBookingData = ref({});
    const isEditMode = ref(false);
    const searchString = ref("");
    ref(1);
    ref(0);
    ref(0);
    ref(10);
    const Customer = ref([]);
    const Tour = ref([]);
    const customer = ref({});
    const getBookings = async () => {
      try {
        var response = await api.get(
          `/Booking`,
          null
        );
        Bookings.value = response.data.responseData;
      } catch (err) {
        console.log(err);
      }
    };
    const getInfor = async () => {
      const res = await api.get(`/Customer`, null);
      Customer.value = res.data.responseData;
      const resTour = await api.get(`/Tour/GetAllTour`, null);
      Tour.value = resTour.data.responseData;
      await getBookings();
    };
    const deleteBooking = async (id) => {
      try {
        selectedBookingId.value = id;
      } catch (err) {
        console.log(err);
      }
    };
    const BookingEdit = async (Booking) => {
      try {
        const res = await api.get(`/Customer/${Booking.customerId}`, null);
        customer.value = res.data.responseData;
        editBookingData.value = {
          ...Booking,
          nameCustomer: customer.value.nameCustomer,
          phoneNumber: customer.value.phoneNumber,
          address: customer.value.address,
          gender: customer.value.gender,
          identityCard: customer.value.identityCard,
          email: customer.value.email,
          accountBank: customer.value.accountBank,
          bankName: customer.value.bankName
        };
        isEditMode.value = true;
      } catch (err) {
        console.log(err);
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_TheFormCreateUpdateBooking = __nuxt_component_0;
      const _component_NuxtLink = __nuxt_component_0$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="p-4"><div class="search"><h4 class="search-text h5">Đơn đặt tour</h4><form name="search"><div class="mt-3">Tìm kiếm:</div><div class="search-text d-flex align-content-center"><div class="col-md-3"><input class="form-control col-md-2"${ssrRenderAttr("value", searchString.value)} type="text" placeholder=" Mã đơn đặt... "></div><span class="button d-flex"><button class="ms-2 btn-sm me-1 btn btn-primary" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"></path></svg> Tìm kiếm </button></span></div></form></div><div class="data"><div class="btn-handle d-flex justify-content-end mb-3">`);
      _push(ssrRenderComponent(_component_TheFormCreateUpdateBooking, {
        isEditMode: isEditMode.value,
        editBooking: editBookingData.value,
        onBookingSaved: getInfor
      }, null, _parent));
      _push(`</div><table class="table text-center table-hover table-success table-striped-columns"><thead class="table-primary table-active"><tr><th scope="col">No.</th><th colspan="2">Thông tin khách hàng </th><th colspan="2">Thông tin tour</th><th colspan="2">Thông tin thanh toán</th><th colspan="2">Trạng thái đơn đặt</th><th scope="col">Tác vụ</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(Bookings.value, (Booking, index) => {
        _push(`<tr><td class="p-4">${ssrInterpolate(++index)}</td><td colspan="2" class="p-4"><!--[-->`);
        ssrRenderList(Customer.value, (item) => {
          _push(`<span>`);
          if (item.id == Booking.customerId) {
            _push(`<span>${ssrInterpolate(item.nameCustomer)}<br><a class="phone-link"${ssrRenderAttr("href", `tel://${item.phoneNumber}`)}>${ssrInterpolate(item.phoneNumber)}</a><br> ${ssrInterpolate(item.email)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></td><td colspan="2" class="p-4 w-25"><!--[-->`);
        ssrRenderList(Tour.value, (item) => {
          _push(`<span>`);
          if (item.id == Booking.tourId) {
            _push(`<span>${ssrInterpolate(item.nameTour)}<br><span class="text-danger">${ssrInterpolate(unref(formatCurrency)(item.priceSale))}</span></span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--></td><td colspan="2" class="p-4 w-25"><span>Vé người lớn : ${ssrInterpolate(Booking.adult)}</span> <br>`);
        if (Booking.child > 0) {
          _push(`<span> Vé trẻ em : ${ssrInterpolate(Booking.child)}</span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<br><span> Thành tiền : ${ssrInterpolate(unref(formatCurrency)(Booking.totalBill))}</span><br>`);
        if (Booking.paymentBy == unref(Tour_constants).Banking) {
          _push(`<span> Hình thức : <i class="fa-solid fa-money-check-dollar"></i></span>`);
        } else {
          _push(`<!---->`);
        }
        if (Booking.paymentBy == unref(Tour_constants).Cash) {
          _push(`<span> Hình thức : <i class="fa-solid fa-money-bills"></i></span>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td colspan="2" class="p-4 w-25"><span> Đã thanh toán : ${ssrInterpolate(unref(formatCurrency)(Booking.paymented))}</span><br><span> Trạng thái : ${ssrInterpolate(Booking.statusBill)}</span><br>`);
        if (Booking.statusBill === unref(Tour_constants).Paid) {
          _push(`<button class="btn btn-success btn-sm mt-2"> Success </button>`);
        } else if (Booking.statusBill === unref(Tour_constants).Customercancel) {
          _push(`<button class="btn btn-danger btn-sm mt-2"> Customercancel </button>`);
        } else if (Booking.statusBill === unref(Tour_constants).Deposited) {
          _push(`<button class="btn btn-warning btn-sm mt-2"> Deposited </button>`);
        } else if (Booking.statusBill === unref(Tour_constants).Cancel) {
          _push(`<button class="btn btn-danger btn-sm mt-2"> Cancel </button>`);
        } else if (Booking.statusBill === unref(Tour_constants).Pending) {
          _push(`<button class="btn btn-secondary btn-sm mt-2"> Pending </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</td><td class="p-4"><div class="d-flex justify-content-center align-content-center align-items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link link-primary text-decoration-none mx-1",
          "data-bs-toggle": "modal",
          "data-bs-target": "#create-update-Booking-modal",
          onClick: ($event) => BookingEdit(Booking),
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
          onClick: ($event) => deleteBooking(Booking.id),
          "data-bs-toggle": "modal",
          "data-bs-target": "#deleteBookingModal"
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
      _push(ssrRenderComponent(DeleteBookingModal, {
        BookingId: selectedBookingId.value,
        onBookingDeleted: getBookings,
        onHideModal: getBookings
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/booking/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-CXNT504A.js.map
