import { F as Form, a as Field, E as ErrorMessage } from "../server.mjs";
import { _ as __nuxt_component_0 } from "./CVModal-MQE190QY.js";
import { _ as __nuxt_component_2 } from "./server-placeholder-DrBExW9e.js";
import { ref, watch, computed, mergeProps, withCtx, renderSlot, openBlock, createBlock, createTextVNode, unref, isRef, Fragment, renderList, createVNode, toDisplayString, createCommentVNode, useSSRContext } from "vue";
import { ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual } from "vue/server-renderer";
import { A as Api } from "./api-B8259KqO.js";
import { useToast } from "vue-toast-notification";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BBsyahRc.js";
import { f as formatCurrency, a as formatDate } from "./validate-DZZjg1ZS.js";
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
import "./axiousInstance-DrjyNm3h.js";
import "axios";
import "date-fns";
const _sfc_main$2 = {
  __name: "TheFormCreateUpdateTour",
  __ssrInlineRender: true,
  props: {
    editTour: {
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
  emits: ["Tour-saved"],
  setup(__props, { emit: __emit }) {
    const keyformtour = ref(0);
    const toast = useToast();
    const api = new Api();
    const Country = ref([]);
    const form = ref(null);
    const emits = __emit;
    ref("");
    const props = __props;
    const resetForm = () => {
      Tour.value.nameTour = "", Tour.value.descripttion = "", Tour.value.seat = "", Tour.value.cost = "", Tour.value.priceBuy = "", Tour.value.discount = "", Tour.value.dateEnd = "", Tour.value.dateStart = "", Tour.value.placeEnd = "", Tour.value.placeStart = "", Tour.value.timeEnd = "", Tour.value.timeStart = "", Tour.value.place = "", Tour.value.plan = "", Tour.value.image = "", Tour.value.serviceInclude = "", Tour.value.serviceNotInclude = "", Tour.value.countryId = "", Tour.value.isLocal = "", Tour.value.meetingPoint = "", keyformtour.value += 1;
      errorMessage.value = "";
      errorMessage1.value = {};
    };
    const errorMessage = ref("");
    const Tour = ref({
      nameTour: "",
      descripttion: "",
      seat: "",
      cost: "",
      priceBuy: "",
      discount: "",
      dateEnd: "",
      dateStart: "",
      placeEnd: "",
      placeStart: "",
      timeEnd: "",
      timeStart: "",
      place: "",
      plan: "",
      image: "",
      serviceInclude: "",
      serviceNotInclude: "",
      countryId: "",
      isLocal: "",
      meetingPoint: ""
    });
    const handlefiles = async (event) => {
      const files = event.target.files;
      const file = files[0];
      if (!file) {
        alert("Vui lòng chọn một file.");
        return;
      }
      const validExtensions = ["image/jpeg", "image/png"];
      if (!validExtensions.includes(file.type)) {
        alert("Chỉ chấp nhận ảnh có định dạng JPG hoặc PNG.");
        event.target.value = "";
        return;
      }
      const maxSize = 2 * 1024 * 1024;
      if (file.size > maxSize) {
        alert("Kích thước file không được vượt quá 2MB.");
        event.target.value = "";
        return;
      }
      const formData = new FormData();
      formData.append("ImageFile", file);
      try {
        const response = await api.postAPI("/Tour/UploadFile", formData);
        if (response.data) {
          Tour.value.image = response.data;
          toast.success("Tải ảnh thành công!");
          console.log("Ảnh đã được tải lên thành công:", response.data);
        }
      } catch (error) {
        toast.error("Tải ảnh thất bại vui lòng tải lại");
      }
    };
    const isLocal = [
      { id: 1, value: true },
      { id: 2, value: false }
    ];
    const createTour = () => {
      try {
        const formData2 = new FormData();
        formData2.append("nameTour", Tour.value.nameTour);
        formData2.append("descripttion", Tour.value.descripttion);
        formData2.append("seat", Tour.value.seat);
        const cleanCost = parseFloat(Tour.value.cost.replace(/[\D\s\._\-]+/g, ""));
        formData2.append("cost", isNaN(cleanCost) ? 0 : cleanCost);
        const cleanCost1 = parseFloat(Tour.value.priceBuy.replace(/[\D\s\._\-]+/g, ""));
        formData2.append("priceBuy", isNaN(cleanCost1) ? 0 : cleanCost1);
        formData2.append("discount", Tour.value.discount);
        formData2.append("islocal", Tour.value.isLocal);
        formData2.append("dateEnd", Tour.value.dateEnd);
        formData2.append("dateStart", Tour.value.dateStart);
        formData2.append("plan", Tour.value.plan);
        formData2.append("image", Tour.value.image);
        formData2.append("serviceInclude", Tour.value.serviceInclude);
        formData2.append("serviceNotInclude", Tour.value.serviceNotInclude);
        formData2.append("countryId", Tour.value.countryId);
        formData2.append("timeStart", Tour.value.timeStart);
        formData2.append("timeEnd", Tour.value.timeEnd);
        formData2.append("placeStart", Tour.value.placeStart);
        formData2.append("placeEnd", Tour.value.placeEnd);
        formData2.append("place", Tour.value.place);
        formData2.append("meetingPoint", Tour.value.meetingPoint);
        api.postAPI("/Tour/InsertTour", formData2);
        emits("Tour-saved");
        toast.success("Thêm thành công!");
        (void 0).getElementById("closeModalButton").click();
      } catch (error) {
        console.error("Error creating Tour:", error);
      }
    };
    const updateTour = () => {
      const costStr = Tour.value.cost ? String(Tour.value.cost) : "";
      const cleanCost = parseFloat(costStr.replace(/[^0-9.-]+/g, ""));
      const costStr1 = Tour.value.cost ? String(Tour.value.priceBuy) : "";
      const cleanCost1 = parseFloat(costStr1.replace(/[^0-9.-]+/g, ""));
      const data = {
        nameTour: Tour.value.nameTour || "",
        // Đảm bảo chuỗi không null
        descripttion: Tour.value.descripttion || "",
        seat: Number(Tour.value.seat) || 0,
        // Đảm bảo số nguyên
        cost: isNaN(cleanCost) ? 0 : cleanCost,
        priceBuy: isNaN(cleanCost1) ? 0 : cleanCost1,
        // isLocal: !!Tour.value.isLocal, // Đảm bảo boolean
        isLocal: JSON.parse(Tour.value.isLocal) || false,
        dateEnd: Tour.value.dateEnd || null,
        // Hoặc định dạng chuẩn ISO nếu backend yêu cầu
        discount: parseFloat(Tour.value.discount) || 0,
        dateStart: Tour.value.dateStart || null,
        plan: Tour.value.plan || "",
        image: Tour.value.image || "",
        serviceInclude: Tour.value.serviceInclude || "",
        serviceNotInclude: Tour.value.serviceNotInclude || "",
        countryId: Number(Tour.value.countryId) || null,
        timeEnd: Tour.value.timeEnd || "",
        timeStart: Tour.value.timeStart || "",
        placeEnd: Tour.value.placeEnd || "",
        placeStart: Tour.value.placeStart || "",
        place: Tour.value.place || "",
        meetingPoint: Tour.value.meetingPoint || "",
        id: props.editTour.id || null
      };
      console.log(data);
      api.putAPI(`/Tour/${props.editTour.id}`, data).then((res) => {
        emits("Tour-saved");
        console.log(res.data);
        toast.success("Cập nhật thành công");
        (void 0).getElementById("closeModalButton").click();
      }).catch((error) => {
        console.error("Error updating Tour:", error);
      });
    };
    const errorMessage1 = ref({});
    const validateTipTap = (content, fieldName) => {
      const div = (void 0).createElement("div");
      div.innerHTML = content;
      const text = div.textContent.trim();
      if (!text) {
        errorMessage1.value[fieldName] = "Thông tin này không được để trống!";
        return false;
      }
      errorMessage1.value[fieldName] = "";
      return true;
    };
    const handleSubmit = () => {
      const isServiceIncludeValid = validateTipTap(Tour.value.serviceInclude, "serviceInclude");
      const isServiceNotIncludeValid = validateTipTap(Tour.value.serviceNotInclude, "serviceNotInclude");
      const isPlanValid = validateTipTap(Tour.value.plan, "plan");
      if (isServiceIncludeValid && isServiceNotIncludeValid && isPlanValid) {
        if (props.isEditMode) {
          updateTour();
        } else {
          createTour();
        }
      }
    };
    watch(
      () => props.editTour,
      (newVal) => {
        if (newVal) {
          Tour.value = { ...newVal };
          Tour.value.dateStart = props.editTour.dateStart ? props.editTour.dateStart.split("T")[0] : "";
          Tour.value.dateEnd = props.editTour.dateEnd ? props.editTour.dateEnd.split("T")[0] : "";
        }
      },
      { immediate: true }
    );
    watch(() => Tour.value.isLocal, (newValue) => {
      if (newValue) {
        const vietnam = Country.value.find((country) => country.id === 1);
        if (vietnam) {
          Tour.value.countryId = vietnam.id;
        }
      }
    });
    const filteredCountries = computed(() => {
      if (Tour.value.isLocal) {
        return Country.value.filter((country) => country.id === 1);
      } else {
        return Country.value.filter((country) => country.id !== 1);
      }
    });
    const computedValue = computed({
      get: () => {
        var input = String(Tour.value.cost || "").replace(/[\D\s\._\-]+/g, "");
        input = input ? parseFloat(input, 10) : 0;
        return input.toLocaleString("en-US");
      },
      set: (newValue) => {
        newValue = String(newValue).replace(/[^\d.-]+/g, "");
        newValue = newValue ? parseFloat(newValue, 10) : 0;
        let isNumber = !isNaN(parseFloat(newValue)) && isFinite(newValue);
        if (newValue == "") {
          Tour.value.cost = "";
        }
        if (isNumber && parseFloat(newValue) > 0) {
          Tour.value.cost = newValue.toLocaleString("en-US");
        }
      }
    });
    const computedValue1 = computed({
      get: () => {
        var input = String(Tour.value.priceBuy || "").replace(/[\D\s\._\-]+/g, "");
        input = input ? parseFloat(input, 10) : 0;
        return input.toLocaleString("en-US");
      },
      set: (newValue) => {
        newValue = String(newValue).replace(/[^\d.-]+/g, "");
        newValue = newValue ? parseFloat(newValue, 10) : 0;
        let isNumber = !isNaN(parseFloat(newValue)) && isFinite(newValue);
        if (newValue == "") {
          Tour.value.priceBuy = "";
        }
        if (isNumber && parseFloat(newValue) > 0) {
          Tour.value.priceBuy = newValue.toLocaleString("en-US");
        }
      }
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0;
      const _component_ErrorMessage = ErrorMessage;
      const _component_TipTap = __nuxt_component_2;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({
        id_model: "create-update-Tour-modal",
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
                _push2(`Thêm Tour du lịch `);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            } else {
              _push2(`<span${_scopeId}>`);
              ssrRenderSlot(_ctx.$slots, "header", {}, () => {
                _push2(`Cập nhật Tour du lịch`);
              }, _push2, _parent2, _scopeId);
              _push2(`</span>`);
            }
          } else {
            return [
              !__props.isEditMode ? (openBlock(), createBlock("span", { key: 0 }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createTextVNode("Thêm Tour du lịch ")
                ])
              ])) : (openBlock(), createBlock("span", { key: 1 }, [
                renderSlot(_ctx.$slots, "header", {}, () => [
                  createTextVNode("Cập nhật Tour du lịch")
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
              onSubmit: handleSubmit,
              key: keyformtour.value
            }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="row"${_scopeId2}><div class="row col-lg-6 mb-3 form-group required"${_scopeId2}><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Ảnh </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "image",
                    modelValue: Tour.value.image,
                    "onUpdate:modelValue": ($event) => Tour.value.image = $event,
                    type: "file",
                    class: "form-control",
                    rules: { required: true },
                    onChange: handlefiles
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "image",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Số lượng vé </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    id: "seat",
                    name: "seat",
                    modelValue: Tour.value.seat,
                    "onUpdate:modelValue": ($event) => Tour.value.seat = $event,
                    class: "form-control",
                    rules: { required: true, naturalNumber: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "seat",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`<br${_scopeId2}></div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Giá mua </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    id: "priceBuy",
                    name: "priceBuy",
                    modelValue: unref(computedValue1),
                    "onUpdate:modelValue": ($event) => isRef(computedValue1) ? computedValue1.value = $event : null,
                    class: "form-control",
                    rules: { required: true, cost: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "priceBuy",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Giá bán gốc </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    id: "cost",
                    name: "cost",
                    modelValue: unref(computedValue),
                    "onUpdate:modelValue": ($event) => isRef(computedValue) ? computedValue.value = $event : null,
                    class: "form-control",
                    rules: { required: true, cost: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "cost",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Giảm giá </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "discount",
                    modelValue: Tour.value.discount,
                    "onUpdate:modelValue": ($event) => Tour.value.discount = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true, discount: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "discount",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Nội địa? </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    as: "select",
                    id: "isLocal",
                    name: "isLocal",
                    modelValue: Tour.value.isLocal,
                    "onUpdate:modelValue": ($event) => Tour.value.isLocal = $event,
                    class: "form-control"
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(isLocal, (item) => {
                          _push4(`<option class="text-dark"${ssrRenderAttr("value", item.value)}${_scopeId3}>${ssrInterpolate(item.value ? "Nội địa" : "Nước ngoài")}</option>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(), createBlock(Fragment, null, renderList(isLocal, (item) => {
                            return createVNode("option", {
                              class: "text-dark",
                              value: item.value
                            }, toDisplayString(item.value ? "Nội địa" : "Nước ngoài"), 9, ["value"]);
                          }), 64))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "isLocal",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Quốc Gia </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    as: "select",
                    id: "country",
                    name: "country",
                    modelValue: Tour.value.countryId,
                    "onUpdate:modelValue": ($event) => Tour.value.countryId = $event,
                    class: "form-control",
                    rules: { required: true }
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`<!--[-->`);
                        ssrRenderList(unref(filteredCountries), (item) => {
                          _push4(`<option class="text-dark"${ssrRenderAttr("value", item.id)}${_scopeId3}>${ssrInterpolate(item.countryName)}</option>`);
                        });
                        _push4(`<!--]-->`);
                      } else {
                        return [
                          (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCountries), (item) => {
                            return openBlock(), createBlock("option", {
                              class: "text-dark",
                              value: item.id
                            }, toDisplayString(item.countryName), 9, ["value"]);
                          }), 256))
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "country",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Địa điểm </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "place",
                    modelValue: Tour.value.place,
                    "onUpdate:modelValue": ($event) => Tour.value.place = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "place",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Nơi khởi hành </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "placeStart",
                    modelValue: Tour.value.placeStart,
                    "onUpdate:modelValue": ($event) => Tour.value.placeStart = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "placeStart",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Nơi tập trung </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "meetingPoint",
                    modelValue: Tour.value.meetingPoint,
                    "onUpdate:modelValue": ($event) => Tour.value.meetingPoint = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "meetingPoint",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Nơi kết thúc </label><div class="col-sm-8"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "placeEnd",
                    modelValue: Tour.value.placeEnd,
                    "onUpdate:modelValue": ($event) => Tour.value.placeEnd = $event,
                    type: "text",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "placeEnd",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Ngày bắt đầu </label><div class="col-sm-8 d-flex flex-row"${_scopeId2}><span class="col-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "timeStart",
                    modelValue: Tour.value.timeStart,
                    "onUpdate:modelValue": ($event) => Tour.value.timeStart = $event,
                    type: "time",
                    class: "input-edit me-1 form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "timeStart",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="col-8 ms-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "dateStart",
                    modelValue: Tour.value.dateStart,
                    "onUpdate:modelValue": ($event) => Tour.value.dateStart = $event,
                    type: "date",
                    class: "form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "dateStart",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div></div><div class="row mb-3 form-group required"${_scopeId2}><label for="source-name" class="col-sm-4 col-form-label control-label text-end"${_scopeId2}> Ngày kết thúc </label><div class="col-sm-8 d-flex flex-row"${_scopeId2}><span class="col-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "timeEnd",
                    modelValue: Tour.value.timeEnd,
                    "onUpdate:modelValue": ($event) => Tour.value.timeEnd = $event,
                    type: "time",
                    class: "input-edit me-1 form-control",
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "timeEnd",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span><span class="col-8 ms-2"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    name: "dateEnd",
                    modelValue: Tour.value.dateEnd,
                    "onUpdate:modelValue": ($event) => Tour.value.dateEnd = $event,
                    type: "date",
                    class: "form-control",
                    rules: { required: true, endDateGreaterThanStart: [Tour.value.dateStart] }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "dateEnd",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</span></div></div></div><div class="row col-lg-6"${_scopeId2}><div class="row form-group required mb-3"${_scopeId2}><label for="source-name" class="col-sm-3 col-form-label control-label text-end"${_scopeId2}>Tên Tour </label><div class="col-9"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    as: "textarea",
                    name: "nameTour",
                    modelValue: Tour.value.nameTour,
                    "onUpdate:modelValue": ($event) => Tour.value.nameTour = $event,
                    type: "text",
                    class: "form-control",
                    style: { "height": "50px" },
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "nameTour",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row form-group required mb-3"${_scopeId2}><label for="source-name" class="col-sm-3 col-form-label control-label text-end"${_scopeId2}>Mô tả </label><div class="col-sm-9"${_scopeId2}>`);
                  _push3(ssrRenderComponent(unref(Field), {
                    as: "textarea",
                    name: "descripttion",
                    modelValue: Tour.value.descripttion,
                    "onUpdate:modelValue": ($event) => Tour.value.descripttion = $event,
                    type: "text",
                    class: "form-control",
                    style: { "height": "150px" },
                    rules: { required: true }
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_ErrorMessage, {
                    name: "descripttion",
                    class: "text-danger"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="row form-group required mb-3"${_scopeId2}><label for="source-name" class="col-sm-3 col-form-label control-label text-end"${_scopeId2}>Dịch vụ bao gồm </label><div class="col-sm-9"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TipTap, {
                    modelValue: Tour.value.serviceInclude,
                    "onUpdate:modelValue": ($event) => Tour.value.serviceInclude = $event
                  }, null, _parent3, _scopeId2));
                  if (errorMessage1.value.serviceInclude) {
                    _push3(`<p class="text-danger"${_scopeId2}>${ssrInterpolate(errorMessage1.value.serviceInclude)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="row form-group required mb-3"${_scopeId2}><label for="source-name" class="col-sm-3 col-form-label control-label text-end"${_scopeId2}>Dịch vụ không bao gồm </label><div class="col-sm-9"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TipTap, {
                    modelValue: Tour.value.serviceNotInclude,
                    "onUpdate:modelValue": ($event) => Tour.value.serviceNotInclude = $event
                  }, null, _parent3, _scopeId2));
                  if (errorMessage1.value.serviceNotInclude) {
                    _push3(`<p class="text-danger"${_scopeId2}>${ssrInterpolate(errorMessage1.value.serviceNotInclude)}</p>`);
                  } else {
                    _push3(`<!---->`);
                  }
                  _push3(`</div></div><div class="row form-group required mb-3"${_scopeId2}><label for="source-name" class="col-sm-3 col-form-label control-label text-end"${_scopeId2}>Lịch Trình </label><div class="col-sm-9"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_TipTap, {
                    modelValue: Tour.value.plan,
                    "onUpdate:modelValue": ($event) => Tour.value.plan = $event
                  }, null, _parent3, _scopeId2));
                  if (errorMessage1.value.plan) {
                    _push3(`<p class="text-danger"${_scopeId2}>${ssrInterpolate(errorMessage1.value.plan)}</p>`);
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
                      createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Ảnh "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "image",
                              modelValue: Tour.value.image,
                              "onUpdate:modelValue": ($event) => Tour.value.image = $event,
                              type: "file",
                              class: "form-control",
                              rules: { required: true },
                              onChange: handlefiles
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "image",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Số lượng vé "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              id: "seat",
                              name: "seat",
                              modelValue: Tour.value.seat,
                              "onUpdate:modelValue": ($event) => Tour.value.seat = $event,
                              class: "form-control",
                              rules: { required: true, naturalNumber: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "seat",
                              class: "text-danger"
                            }),
                            createVNode("br")
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Giá mua "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              id: "priceBuy",
                              name: "priceBuy",
                              modelValue: unref(computedValue1),
                              "onUpdate:modelValue": ($event) => isRef(computedValue1) ? computedValue1.value = $event : null,
                              class: "form-control",
                              rules: { required: true, cost: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "priceBuy",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Giá bán gốc "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              id: "cost",
                              name: "cost",
                              modelValue: unref(computedValue),
                              "onUpdate:modelValue": ($event) => isRef(computedValue) ? computedValue.value = $event : null,
                              class: "form-control",
                              rules: { required: true, cost: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "cost",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Giảm giá "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "discount",
                              modelValue: Tour.value.discount,
                              "onUpdate:modelValue": ($event) => Tour.value.discount = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true, discount: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "discount",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Nội địa? "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              as: "select",
                              id: "isLocal",
                              name: "isLocal",
                              modelValue: Tour.value.isLocal,
                              "onUpdate:modelValue": ($event) => Tour.value.isLocal = $event,
                              class: "form-control"
                            }, {
                              default: withCtx(() => [
                                (openBlock(), createBlock(Fragment, null, renderList(isLocal, (item) => {
                                  return createVNode("option", {
                                    class: "text-dark",
                                    value: item.value
                                  }, toDisplayString(item.value ? "Nội địa" : "Nước ngoài"), 9, ["value"]);
                                }), 64))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "isLocal",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Quốc Gia "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              as: "select",
                              id: "country",
                              name: "country",
                              modelValue: Tour.value.countryId,
                              "onUpdate:modelValue": ($event) => Tour.value.countryId = $event,
                              class: "form-control",
                              rules: { required: true }
                            }, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCountries), (item) => {
                                  return openBlock(), createBlock("option", {
                                    class: "text-dark",
                                    value: item.id
                                  }, toDisplayString(item.countryName), 9, ["value"]);
                                }), 256))
                              ]),
                              _: 1
                            }, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "country",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Địa điểm "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "place",
                              modelValue: Tour.value.place,
                              "onUpdate:modelValue": ($event) => Tour.value.place = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "place",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Nơi khởi hành "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "placeStart",
                              modelValue: Tour.value.placeStart,
                              "onUpdate:modelValue": ($event) => Tour.value.placeStart = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "placeStart",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Nơi tập trung "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "meetingPoint",
                              modelValue: Tour.value.meetingPoint,
                              "onUpdate:modelValue": ($event) => Tour.value.meetingPoint = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "meetingPoint",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Nơi kết thúc "),
                          createVNode("div", { class: "col-sm-8" }, [
                            createVNode(unref(Field), {
                              name: "placeEnd",
                              modelValue: Tour.value.placeEnd,
                              "onUpdate:modelValue": ($event) => Tour.value.placeEnd = $event,
                              type: "text",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "placeEnd",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Ngày bắt đầu "),
                          createVNode("div", { class: "col-sm-8 d-flex flex-row" }, [
                            createVNode("span", { class: "col-4" }, [
                              createVNode(unref(Field), {
                                name: "timeStart",
                                modelValue: Tour.value.timeStart,
                                "onUpdate:modelValue": ($event) => Tour.value.timeStart = $event,
                                type: "time",
                                class: "input-edit me-1 form-control",
                                rules: { required: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_ErrorMessage, {
                                name: "timeStart",
                                class: "text-danger"
                              })
                            ]),
                            createVNode("span", { class: "col-8 ms-2" }, [
                              createVNode(unref(Field), {
                                name: "dateStart",
                                modelValue: Tour.value.dateStart,
                                "onUpdate:modelValue": ($event) => Tour.value.dateStart = $event,
                                type: "date",
                                class: "form-control",
                                rules: { required: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_ErrorMessage, {
                                name: "dateStart",
                                class: "text-danger"
                              })
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "row mb-3 form-group required" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-4 col-form-label control-label text-end"
                          }, " Ngày kết thúc "),
                          createVNode("div", { class: "col-sm-8 d-flex flex-row" }, [
                            createVNode("span", { class: "col-4" }, [
                              createVNode(unref(Field), {
                                name: "timeEnd",
                                modelValue: Tour.value.timeEnd,
                                "onUpdate:modelValue": ($event) => Tour.value.timeEnd = $event,
                                type: "time",
                                class: "input-edit me-1 form-control",
                                rules: { required: true }
                              }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                              createVNode(_component_ErrorMessage, {
                                name: "timeEnd",
                                class: "text-danger"
                              })
                            ]),
                            createVNode("span", { class: "col-8 ms-2" }, [
                              createVNode(unref(Field), {
                                name: "dateEnd",
                                modelValue: Tour.value.dateEnd,
                                "onUpdate:modelValue": ($event) => Tour.value.dateEnd = $event,
                                type: "date",
                                class: "form-control",
                                rules: { required: true, endDateGreaterThanStart: [Tour.value.dateStart] }
                              }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                              createVNode(_component_ErrorMessage, {
                                name: "dateEnd",
                                class: "text-danger"
                              })
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row col-lg-6" }, [
                        createVNode("div", { class: "row form-group required mb-3" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-3 col-form-label control-label text-end"
                          }, "Tên Tour "),
                          createVNode("div", { class: "col-9" }, [
                            createVNode(unref(Field), {
                              as: "textarea",
                              name: "nameTour",
                              modelValue: Tour.value.nameTour,
                              "onUpdate:modelValue": ($event) => Tour.value.nameTour = $event,
                              type: "text",
                              class: "form-control",
                              style: { "height": "50px" },
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "nameTour",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row form-group required mb-3" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-3 col-form-label control-label text-end"
                          }, "Mô tả "),
                          createVNode("div", { class: "col-sm-9" }, [
                            createVNode(unref(Field), {
                              as: "textarea",
                              name: "descripttion",
                              modelValue: Tour.value.descripttion,
                              "onUpdate:modelValue": ($event) => Tour.value.descripttion = $event,
                              type: "text",
                              class: "form-control",
                              style: { "height": "150px" },
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "descripttion",
                              class: "text-danger"
                            })
                          ])
                        ]),
                        createVNode("div", { class: "row form-group required mb-3" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-3 col-form-label control-label text-end"
                          }, "Dịch vụ bao gồm "),
                          createVNode("div", { class: "col-sm-9" }, [
                            createVNode(_component_TipTap, {
                              modelValue: Tour.value.serviceInclude,
                              "onUpdate:modelValue": ($event) => Tour.value.serviceInclude = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            errorMessage1.value.serviceInclude ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(errorMessage1.value.serviceInclude), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row form-group required mb-3" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-3 col-form-label control-label text-end"
                          }, "Dịch vụ không bao gồm "),
                          createVNode("div", { class: "col-sm-9" }, [
                            createVNode(_component_TipTap, {
                              modelValue: Tour.value.serviceNotInclude,
                              "onUpdate:modelValue": ($event) => Tour.value.serviceNotInclude = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            errorMessage1.value.serviceNotInclude ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(errorMessage1.value.serviceNotInclude), 1)) : createCommentVNode("", true)
                          ])
                        ]),
                        createVNode("div", { class: "row form-group required mb-3" }, [
                          createVNode("label", {
                            for: "source-name",
                            class: "col-sm-3 col-form-label control-label text-end"
                          }, "Lịch Trình "),
                          createVNode("div", { class: "col-sm-9" }, [
                            createVNode(_component_TipTap, {
                              modelValue: Tour.value.plan,
                              "onUpdate:modelValue": ($event) => Tour.value.plan = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            errorMessage1.value.plan ? (openBlock(), createBlock("p", {
                              key: 0,
                              class: "text-danger"
                            }, toDisplayString(errorMessage1.value.plan), 1)) : createCommentVNode("", true)
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
              (openBlock(), createBlock(unref(Form), {
                ref_key: "form",
                ref: form,
                onSubmit: handleSubmit,
                key: keyformtour.value
              }, {
                default: withCtx(() => [
                  createVNode("div", { class: "row" }, [
                    createVNode("div", { class: "row col-lg-6 mb-3 form-group required" }, [
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Ảnh "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "image",
                            modelValue: Tour.value.image,
                            "onUpdate:modelValue": ($event) => Tour.value.image = $event,
                            type: "file",
                            class: "form-control",
                            rules: { required: true },
                            onChange: handlefiles
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "image",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Số lượng vé "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            id: "seat",
                            name: "seat",
                            modelValue: Tour.value.seat,
                            "onUpdate:modelValue": ($event) => Tour.value.seat = $event,
                            class: "form-control",
                            rules: { required: true, naturalNumber: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "seat",
                            class: "text-danger"
                          }),
                          createVNode("br")
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Giá mua "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            id: "priceBuy",
                            name: "priceBuy",
                            modelValue: unref(computedValue1),
                            "onUpdate:modelValue": ($event) => isRef(computedValue1) ? computedValue1.value = $event : null,
                            class: "form-control",
                            rules: { required: true, cost: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "priceBuy",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Giá bán gốc "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            id: "cost",
                            name: "cost",
                            modelValue: unref(computedValue),
                            "onUpdate:modelValue": ($event) => isRef(computedValue) ? computedValue.value = $event : null,
                            class: "form-control",
                            rules: { required: true, cost: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "cost",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Giảm giá "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "discount",
                            modelValue: Tour.value.discount,
                            "onUpdate:modelValue": ($event) => Tour.value.discount = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true, discount: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "discount",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Nội địa? "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            as: "select",
                            id: "isLocal",
                            name: "isLocal",
                            modelValue: Tour.value.isLocal,
                            "onUpdate:modelValue": ($event) => Tour.value.isLocal = $event,
                            class: "form-control"
                          }, {
                            default: withCtx(() => [
                              (openBlock(), createBlock(Fragment, null, renderList(isLocal, (item) => {
                                return createVNode("option", {
                                  class: "text-dark",
                                  value: item.value
                                }, toDisplayString(item.value ? "Nội địa" : "Nước ngoài"), 9, ["value"]);
                              }), 64))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "isLocal",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Quốc Gia "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            as: "select",
                            id: "country",
                            name: "country",
                            modelValue: Tour.value.countryId,
                            "onUpdate:modelValue": ($event) => Tour.value.countryId = $event,
                            class: "form-control",
                            rules: { required: true }
                          }, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(filteredCountries), (item) => {
                                return openBlock(), createBlock("option", {
                                  class: "text-dark",
                                  value: item.id
                                }, toDisplayString(item.countryName), 9, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          }, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "country",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Địa điểm "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "place",
                            modelValue: Tour.value.place,
                            "onUpdate:modelValue": ($event) => Tour.value.place = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "place",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Nơi khởi hành "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "placeStart",
                            modelValue: Tour.value.placeStart,
                            "onUpdate:modelValue": ($event) => Tour.value.placeStart = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "placeStart",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Nơi tập trung "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "meetingPoint",
                            modelValue: Tour.value.meetingPoint,
                            "onUpdate:modelValue": ($event) => Tour.value.meetingPoint = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "meetingPoint",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Nơi kết thúc "),
                        createVNode("div", { class: "col-sm-8" }, [
                          createVNode(unref(Field), {
                            name: "placeEnd",
                            modelValue: Tour.value.placeEnd,
                            "onUpdate:modelValue": ($event) => Tour.value.placeEnd = $event,
                            type: "text",
                            class: "form-control",
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "placeEnd",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Ngày bắt đầu "),
                        createVNode("div", { class: "col-sm-8 d-flex flex-row" }, [
                          createVNode("span", { class: "col-4" }, [
                            createVNode(unref(Field), {
                              name: "timeStart",
                              modelValue: Tour.value.timeStart,
                              "onUpdate:modelValue": ($event) => Tour.value.timeStart = $event,
                              type: "time",
                              class: "input-edit me-1 form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "timeStart",
                              class: "text-danger"
                            })
                          ]),
                          createVNode("span", { class: "col-8 ms-2" }, [
                            createVNode(unref(Field), {
                              name: "dateStart",
                              modelValue: Tour.value.dateStart,
                              "onUpdate:modelValue": ($event) => Tour.value.dateStart = $event,
                              type: "date",
                              class: "form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "dateStart",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "row mb-3 form-group required" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-4 col-form-label control-label text-end"
                        }, " Ngày kết thúc "),
                        createVNode("div", { class: "col-sm-8 d-flex flex-row" }, [
                          createVNode("span", { class: "col-4" }, [
                            createVNode(unref(Field), {
                              name: "timeEnd",
                              modelValue: Tour.value.timeEnd,
                              "onUpdate:modelValue": ($event) => Tour.value.timeEnd = $event,
                              type: "time",
                              class: "input-edit me-1 form-control",
                              rules: { required: true }
                            }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                            createVNode(_component_ErrorMessage, {
                              name: "timeEnd",
                              class: "text-danger"
                            })
                          ]),
                          createVNode("span", { class: "col-8 ms-2" }, [
                            createVNode(unref(Field), {
                              name: "dateEnd",
                              modelValue: Tour.value.dateEnd,
                              "onUpdate:modelValue": ($event) => Tour.value.dateEnd = $event,
                              type: "date",
                              class: "form-control",
                              rules: { required: true, endDateGreaterThanStart: [Tour.value.dateStart] }
                            }, null, 8, ["modelValue", "onUpdate:modelValue", "rules"]),
                            createVNode(_component_ErrorMessage, {
                              name: "dateEnd",
                              class: "text-danger"
                            })
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "row col-lg-6" }, [
                      createVNode("div", { class: "row form-group required mb-3" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-3 col-form-label control-label text-end"
                        }, "Tên Tour "),
                        createVNode("div", { class: "col-9" }, [
                          createVNode(unref(Field), {
                            as: "textarea",
                            name: "nameTour",
                            modelValue: Tour.value.nameTour,
                            "onUpdate:modelValue": ($event) => Tour.value.nameTour = $event,
                            type: "text",
                            class: "form-control",
                            style: { "height": "50px" },
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "nameTour",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row form-group required mb-3" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-3 col-form-label control-label text-end"
                        }, "Mô tả "),
                        createVNode("div", { class: "col-sm-9" }, [
                          createVNode(unref(Field), {
                            as: "textarea",
                            name: "descripttion",
                            modelValue: Tour.value.descripttion,
                            "onUpdate:modelValue": ($event) => Tour.value.descripttion = $event,
                            type: "text",
                            class: "form-control",
                            style: { "height": "150px" },
                            rules: { required: true }
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_ErrorMessage, {
                            name: "descripttion",
                            class: "text-danger"
                          })
                        ])
                      ]),
                      createVNode("div", { class: "row form-group required mb-3" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-3 col-form-label control-label text-end"
                        }, "Dịch vụ bao gồm "),
                        createVNode("div", { class: "col-sm-9" }, [
                          createVNode(_component_TipTap, {
                            modelValue: Tour.value.serviceInclude,
                            "onUpdate:modelValue": ($event) => Tour.value.serviceInclude = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          errorMessage1.value.serviceInclude ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(errorMessage1.value.serviceInclude), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "row form-group required mb-3" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-3 col-form-label control-label text-end"
                        }, "Dịch vụ không bao gồm "),
                        createVNode("div", { class: "col-sm-9" }, [
                          createVNode(_component_TipTap, {
                            modelValue: Tour.value.serviceNotInclude,
                            "onUpdate:modelValue": ($event) => Tour.value.serviceNotInclude = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          errorMessage1.value.serviceNotInclude ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(errorMessage1.value.serviceNotInclude), 1)) : createCommentVNode("", true)
                        ])
                      ]),
                      createVNode("div", { class: "row form-group required mb-3" }, [
                        createVNode("label", {
                          for: "source-name",
                          class: "col-sm-3 col-form-label control-label text-end"
                        }, "Lịch Trình "),
                        createVNode("div", { class: "col-sm-9" }, [
                          createVNode(_component_TipTap, {
                            modelValue: Tour.value.plan,
                            "onUpdate:modelValue": ($event) => Tour.value.plan = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          errorMessage1.value.plan ? (openBlock(), createBlock("p", {
                            key: 0,
                            class: "text-danger"
                          }, toDisplayString(errorMessage1.value.plan), 1)) : createCommentVNode("", true)
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/TheFormCreateUpdateTour.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = _sfc_main$2;
const _sfc_main$1 = {
  __name: "DeleteTourModal",
  __ssrInlineRender: true,
  props: {
    TourId: {
      type: String,
      required: true
    }
  },
  emits: ["Tour-deleted", "hide-modal"],
  setup(__props, { emit: __emit }) {
    const toast = useToast();
    const props = __props;
    const api = new Api();
    const emits = __emit;
    const deleteTour = () => {
      const id = props.TourId;
      api.deleteById("/Tour", id).then((res) => {
        emits("Tour-deleted", id);
        emits("hide-modal");
        $(".btn-close").click();
        toast.success("Xóa thành công");
      }).catch((error) => {
        console.error("Lỗi khi xóa hTour:", error);
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_CVModal = __nuxt_component_0;
      _push(ssrRenderComponent(_component_CVModal, mergeProps({ id_model: "deleteTourModal" }, _attrs), {
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
              _push2(`Xóa Tour này`);
            }, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "header", {}, () => [
                createTextVNode("Xóa Tour này")
              ])
            ];
          }
        }),
        body: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<p${_scopeId}>Bạn có chắc chắn muốn xóa Tour này?</p><div class="modal-footer align-content-center justify-content-center"${_scopeId}><button type="button" class="btn btn-secondary" data-bs-dismiss="modal"${_scopeId}> Hủy bỏ </button><button type="button" class="btn btn-danger"${_scopeId}> Xóa </button></div>`);
          } else {
            return [
              createVNode("p", null, "Bạn có chắc chắn muốn xóa Tour này?"),
              createVNode("div", { class: "modal-footer align-content-center justify-content-center" }, [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-secondary",
                  "data-bs-dismiss": "modal"
                }, " Hủy bỏ "),
                createVNode("button", {
                  type: "button",
                  class: "btn btn-danger",
                  onClick: deleteTour
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/DeleteTourModal.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const DeleteTourModal = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const api = new Api();
    const Tours = ref([]);
    const selectedTourId = ref(null);
    const editTourData = ref({});
    const isEditMode = ref(false);
    ref([]);
    const placeStart = ref("Nơi khởi hành");
    const dateStart = ref("");
    const placeEnd = ref("Nơi kết thúc");
    const nameTour = ref("");
    const placeStartList = ref([]);
    const placeEndList = ref([]);
    const Country = ref([]);
    const isLocal = ref(true);
    ref(true);
    const getTours = async () => {
      try {
        var response = await api.get(
          `/Tour/GetAllTour`,
          null
        );
        Tours.value = response.data.responseData;
      } catch (err) {
        console.log(err);
      }
    };
    const deleteTour = async (id) => {
      try {
        selectedTourId.value = id;
      } catch (err) {
        console.log(err);
      }
    };
    const TourEdit = async (Tour) => {
      try {
        editTourData.value = {
          nameTour: Tour.nameTour,
          descripttion: Tour.descripttion,
          seat: Tour.seat,
          cost: Tour.cost,
          priceBuy: Tour.priceBuy,
          discount: Tour.discount,
          isLocal: Tour.isLocal,
          dateEnd: Tour.dateEnd,
          dateStart: Tour.dateStart,
          timeEnd: Tour.timeEnd,
          timeStart: Tour.timeStart,
          placeStart: Tour.placeStart,
          placeEnd: Tour.placeEnd,
          place: Tour.place,
          plan: Tour.plan,
          isFinish: Tour.isFinish,
          image: Tour.image,
          numOfDay: Tour.numOfDay,
          priceSale: Tour.priceSale,
          serviceInclude: Tour.serviceInclude,
          serviceNotInclude: Tour.serviceNotInclude,
          countryId: Tour.countryId,
          meetingPoint: Tour.meetingPoint,
          id: Tour.id
        };
        isEditMode.value = true;
      } catch (err) {
        console.log(err);
      }
    };
    const filteredCountries = computed(() => {
      if (!isLocal.value) {
        return Country.value.filter((country) => country.id !== 1);
      }
      return Country.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Field = Field;
      const _component_TheFormCreateUpdateTour = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="p-4"><div class="search"><h4 class="search-text h5">Tour du lịch</h4><form class="rounded-5 bg-light col-11" name="search"><div class="border-bottom border-success pb-3"><div class="d-flex flex-row mt-3 p-2"><div class="col-2"><button type="button" class="${ssrRenderClass({
        "bg-infor btn-default rounded-2": isLocal.value === true,
        "form-control": true
      })}"> Du lịch trong nước </button></div><div class="col-2"><button type="button" class="${ssrRenderClass({
        "bg-infor btn-default rounded-2 ": isLocal.value === false,
        "form-control ms-2": true
      })}"> Du lịch nước ngoài </button></div><div class="col-sm-6 ms-2">`);
      _push(ssrRenderComponent(_component_Field, {
        name: "name",
        modelValue: nameTour.value,
        "onUpdate:modelValue": ($event) => nameTour.value = $event,
        type: "text",
        class: "form-control ms-2",
        placeholder: "Tên tour... "
      }, null, _parent));
      _push(`</div></div></div><div class="d-flex flex-row"><div class="col-3 ms-3 my-4 rounded-3" style="${ssrRenderStyle({ "border": "1px solid #ccc" })}"><div class="ms-5">Điểm đi</div><div class="d-flex flex-row col-9"><i class="fa-solid fa-location-dot col-3 ps-3 pt-2"></i><select class="col-6 form-select mb-2"><option disabled value="Nơi khởi hành"${ssrIncludeBooleanAttr(Array.isArray(placeStart.value) ? ssrLooseContain(placeStart.value, "Nơi khởi hành") : ssrLooseEqual(placeStart.value, "Nơi khởi hành")) ? " selected" : ""}><i class="fa-solid fa-location-dot"></i> Nơi khởi hành </option><!--[-->`);
      ssrRenderList(placeStartList.value, (item) => {
        _push(`<option${ssrRenderAttr("value", item)}><i class="fa-solid fa-location-dot"></i> ${ssrInterpolate(item)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="my-auto"><i class="fa-solid fa-arrow-right-arrow-left mx-3" style="${ssrRenderStyle({ "font-size": "1.5em" })}"></i></div>`);
      if (isLocal.value) {
        _push(`<div class="col-3 my-4 rounded-3" style="${ssrRenderStyle({ "border": "1px solid #ccc" })}"><div class="ms-5">Điểm đến</div><div class="d-flex flex-row col-9"><i class="fa-solid fa-location-dot col-3 ps-3 mt-2"></i><select class="col-6 form-select mb-2"><option disabled value="Nơi kết thúc"${ssrIncludeBooleanAttr(Array.isArray(placeEnd.value) ? ssrLooseContain(placeEnd.value, "Nơi kết thúc") : ssrLooseEqual(placeEnd.value, "Nơi kết thúc")) ? " selected" : ""}> Nơi kết thúc </option><!--[-->`);
        ssrRenderList(placeEndList.value, (item) => {
          _push(`<option${ssrRenderAttr("value", item)}>${ssrInterpolate(item)}</option>`);
        });
        _push(`<!--]--></select></div></div>`);
      } else {
        _push(`<div class="col-3 my-4 rounded-3" style="${ssrRenderStyle({ "border": "1px solid #ccc" })}"><div class="ms-5">Điểm đến</div><div class="d-flex flex-row col-9"><i class="fa-solid fa-location-dot col-3 mt-2 ps-3"></i><select class="col-6 form-select mb-2"><option disabled value="Nơi kết thúc"${ssrIncludeBooleanAttr(Array.isArray(placeEnd.value) ? ssrLooseContain(placeEnd.value, "Nơi kết thúc") : ssrLooseEqual(placeEnd.value, "Nơi kết thúc")) ? " selected" : ""}> Nơi kết thúc </option><!--[-->`);
        ssrRenderList(unref(filteredCountries), (item) => {
          _push(`<option${ssrRenderAttr("value", item.id)}>${ssrInterpolate(item.countryName)}</option>`);
        });
        _push(`<!--]--></select></div></div>`);
      }
      _push(`<div class="col-3 my-4 rounded-3 ms-3" style="${ssrRenderStyle({ "border": "1px solid #ccc" })}"><div class="ms-5">Ngày đi</div><div class="d-flex flex-row col-9"><i class="fa-solid fa-calendar mt-2 ms-2"></i><input${ssrRenderAttr("value", dateStart.value)} type="date" class="col-6 form-control mb-2 ms-3"></div></div><div class="col-2 mt-2"><button class="my-4 rounded-3 ms-3 bg-infor" style="${ssrRenderStyle({ "border": "1px solid #ccc" })}" type="submit"><div class="d-flex flex-row s"><i class="fa-solid fa-magnifying-glass mt-1 p-3"></i><div class="h6 mt-3">Tìm kiếm</div></div></button></div></div></form></div><div class="data"><div class="btn-handle d-flex justify-content-end mb-3"><div class="handle-create">`);
      _push(ssrRenderComponent(_component_TheFormCreateUpdateTour, {
        isEditMode: isEditMode.value,
        editTour: editTourData.value,
        onTourSaved: getTours
      }, null, _parent));
      _push(`<a href="#" data-bs-toggle="modal" data-bs-target="#create-update-Tour-modal"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256"><path fill="currentColor" d="M208 32H48a16 16 0 0 0-16 16v160a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16m-24 104h-48v48a8 8 0 0 1-16 0v-48H72a8 8 0 0 1 0-16h48V72a8 8 0 0 1 16 0v48h48a8 8 0 0 1 0 16"></path></svg></a></div></div><table class="table text-center table-hover table-success table-striped-columns table-responsive table-bordered"><thead class="table-primary table-active"><tr><th>No.</th><th>Thông tin tour</th><th>Thời gian</th><th>Tác vụ</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(Tours.value, (Tour, index) => {
        _push(`<tr><td class="p-4 booking-id-col">${ssrInterpolate(++index)}</td><td class="p-4"><span class="text-danger">${ssrInterpolate(Tour.nameTour)}</span><br><div class="row"><div class="col-6"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" width="15" height="15" class="me-1 mb-1" fill="green"><path d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z"></path></svg><span>${ssrInterpolate(Tour.seat)}</span><br><i class="fa-solid fa-arrow-trend-down"></i> ${ssrInterpolate(Tour.discount || 0)} % <br> Giá mua: <span>${ssrInterpolate(unref(formatCurrency)(Tour.priceBuy))}</span><br> Giá bán: <span>${ssrInterpolate(unref(formatCurrency)(Tour.priceSale))}</span><br><span class="text-decoration-underline me-2"> Số vé còn lại: </span> ${ssrInterpolate(Tour.slot)}</div><div class="col-6"><i class="fa-solid fa-earth-africa me-1"></i><!--[-->`);
        ssrRenderList(Country.value, (item) => {
          _push(`<span>`);
          if (item.id == Tour.countryId) {
            _push(`<span class="mt-2">${ssrInterpolate(item.countryName)}</span>`);
          } else {
            _push(`<!---->`);
          }
          _push(`</span>`);
        });
        _push(`<!--]--><br></div></div></td><td class="w-20 p-2">${ssrInterpolate(unref(formatDate)(Tour.dateStart))}<br> ${ssrInterpolate(unref(formatDate)(Tour.dateEnd))}</td><td class="p-4"><div class="d-flex justify-content-center align-content-center align-items-center">`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link link-primary text-decoration-none mx-1",
          "data-bs-toggle": "modal",
          "data-bs-target": "#create-update-Tour-modal",
          onClick: ($event) => TourEdit(Tour),
          style: { "cursor": "pointer" }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24"${_scopeId}><path fill="currentColor" d="M5 18.08V19h.92l9.06-9.06l-.92-.92z" opacity="0.3"${_scopeId}></path><path fill="currentColor" d="M20.71 7.04a.996.996 0 0 0 0-1.41l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83l3.75 3.75zM3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM5.92 19H5v-.92l9.06-9.06l.92.92z"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1.2em",
                  height: "1.2em",
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
          onClick: ($event) => deleteTour(Tour.id),
          "data-bs-toggle": "modal",
          "data-bs-target": "#deleteTourModal"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 48 48"${_scopeId}><path fill="currentColor" d="M20 10.5v.5h8v-.5a4 4 0 0 0-8 0m-2.5.5v-.5a6.5 6.5 0 1 1 13 0v.5h11.25a1.25 1.25 0 1 1 0 2.5h-2.917l-2 23.856A7.25 7.25 0 0 1 29.608 44H18.392a7.25 7.25 0 0 1-7.224-6.644l-2-23.856H6.25a1.25 1.25 0 1 1 0-2.5zm4 9.25a1.25 1.25 0 1 0-2.5 0v14.5a1.25 1.25 0 1 0 2.5 0zM27.75 19c-.69 0-1.25.56-1.25 1.25v14.5a1.25 1.25 0 1 0 2.5 0v-14.5c0-.69-.56-1.25-1.25-1.25"${_scopeId}></path></svg>`);
            } else {
              return [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "1.2em",
                  height: "1.2em",
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
        _push(`</div><div class="d-flex flex-row mt-2 ps-5"></div></td></tr>`);
      });
      _push(`<!--]--></tbody></table>`);
      _push(ssrRenderComponent(DeleteTourModal, {
        TourId: selectedTourId.value,
        onTourDeleted: getTours,
        onHideModal: getTours
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tour/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-Bd0GqjGn.js.map
