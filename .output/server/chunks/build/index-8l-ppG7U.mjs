import { _ as __nuxt_component_0, a as __nuxt_component_2$2 } from './Footer-ByW4O3lP.mjs';
import { _ as __nuxt_component_2$1 } from './server-placeholder-DrBExW9e.mjs';
import { _ as _export_sfc, u as useRoute, F as Form, a as Field, E as ErrorMessage, b as useRouter } from './server.mjs';
import { useSSRContext, ref, computed, unref, withCtx, createVNode, mergeProps } from 'vue';
import { ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderAttrs } from 'vue/server-renderer';
import { a as formatDate, b as formatDate2, f as formatCurrency } from './validate-DZZjg1ZS.mjs';
import './nuxt-link-BBsyahRc.mjs';
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
import 'date-fns';

const _sfc_main$1 = {
  __name: "InforTour",
  __ssrInlineRender: true,
  props: {
    countAdult: Number,
    countChild: Number,
    toTalChild: Number,
    toTalBill: Number,
    formatDate2: Function,
    tour: Object,
    customer: Object,
    listCustomer: String,
    payment: String
  },
  setup(__props) {
    useRouter();
    const props = __props;
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "col-4 mt-5" }, _attrs))} data-v-7a74d02c><div class="mt-5" style="${ssrRenderStyle({ "border": "2px solid rgba(211, 211, 211, 0.5)", "height": "580px" })}" data-v-7a74d02c><h5 class="fw-bold mt-4 ms-3" data-v-7a74d02c>T\xF3m t\u1EAFt chuy\u1EBFn \u0111i</h5><div class="d-flex flex-row m-3" data-v-7a74d02c><div class="col-2 p-0 m-0" data-v-7a74d02c><div class="image-tour4 position-relative mt-3 ms-2" data-v-7a74d02c><img${ssrRenderAttr("src", props.tour.image)} class="img-fluid" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-7a74d02c></div></div><div class="col-10" data-v-7a74d02c><h6 class="mt-3" data-v-7a74d02c>${ssrInterpolate(props.tour.nameTour)}</h6></div></div><div class="d-flex flex-row m-3" data-v-7a74d02c><div class="col-1 p-0 m-0 text-end" style="${ssrRenderStyle({ "color": "#377df4" })}" data-v-7a74d02c><i class="fa-solid fa-calendar-week ms-4" data-v-7a74d02c></i><br data-v-7a74d02c><div class="" data-v-7a74d02c> |<br data-v-7a74d02c> |<br data-v-7a74d02c> |<br data-v-7a74d02c></div><i class="fa-solid fa-calendar-week ms-4" data-v-7a74d02c></i><br data-v-7a74d02c></div><div class="col-11" data-v-7a74d02c><span data-v-7a74d02c>B\u1EAFt \u0111\u1EA7u chuy\u1EC3n \u0111i</span> <br data-v-7a74d02c><span class="fw-bold" data-v-7a74d02c>${ssrInterpolate(props.formatDate2(props.tour.dateStart))}</span><div class="" data-v-7a74d02c><br data-v-7a74d02c></div><span data-v-7a74d02c>K\u1EBFt th\xFAc chuy\u1EC3n \u0111i</span> <br data-v-7a74d02c><span class="fw-bold" data-v-7a74d02c>${ssrInterpolate(props.formatDate2(props.tour.dateEnd))}</span></div></div><div class="d-flex flex-row me-3 ms-3 mt-5" data-v-7a74d02c><div class="col-4 p-0 m-0 text-end d-flex flex-row" data-v-7a74d02c><i class="fa-solid fa-users me-1" data-v-7a74d02c></i><h6 data-v-7a74d02c>H\xE0nh kh\xE1ch</h6></div><div class="col-9 text-end text-danger" data-v-7a74d02c><h6 class="me-4 text-danger" data-v-7a74d02c>${ssrInterpolate(unref(formatCurrency)(props.toTalBill))}</h6></div></div><div class="d-flex flex-row me-3 ms-3 mt-3 justify-content-between border-bottom pb-3" data-v-7a74d02c><div class="col-4 p-0 m-0 text-end d-flex flex-row" data-v-7a74d02c><h6 data-v-7a74d02c>Ng\u01B0\u1EDDi l\u1EDBn</h6></div><div class="col-9 text-danger d-flex flex-row justify-content-end" data-v-7a74d02c><h6 class="me-1" data-v-7a74d02c>${ssrInterpolate(props.countAdult)} x</h6><h6 class="me-4" data-v-7a74d02c>${ssrInterpolate(unref(formatCurrency)(props.tour.priceSale))}</h6></div></div>`);
      if (props.countChild > 0) {
        _push(`<div class="d-flex flex-row me-4 ms-3 mt-3 justify-content-between border-bottom pb-3" data-v-7a74d02c><div class="col-4 p-0 m-0 text-end d-flex flex-row" data-v-7a74d02c><h6 data-v-7a74d02c>Tr\u1EBB em</h6></div><div class="col-9 text-danger d-flex flex-row justify-content-end" data-v-7a74d02c><h6 class="me-1" data-v-7a74d02c>${ssrInterpolate(props.countChild)}x</h6><h6 class="me-4" data-v-7a74d02c>${ssrInterpolate(unref(formatCurrency)(props.toTalChild))}</h6></div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<div class="d-flex flex-row me-3 ms-3 mt-3 justify-content-between" data-v-7a74d02c><div class="col-4 p-0 m-0 text-end d-flex flex-row" data-v-7a74d02c><h4 class="text-danger" data-v-7a74d02c>T\u1ED5ng ti\u1EC1n</h4></div><div class="col-9 text-danger d-flex flex-row justify-content-end" data-v-7a74d02c><h4 class="me-4 text-danger" data-v-7a74d02c>${ssrInterpolate(unref(formatCurrency)(props.toTalBill))}</h4></div></div><div class="p-3" data-v-7a74d02c><button type="button" class="btn btn-danger btn-small mb-3 w-100 mt-3" data-v-7a74d02c><i class="fa-solid fa-cart-shopping text-white" data-v-7a74d02c></i> \u0110\u1EB7t ngay </button></div></div></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Client/InforTour.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-7a74d02c"]]);
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const Tour = ref([]);
    const countAdult = ref(1);
    const countChild = ref(0);
    const ListCustomer = ref(null);
    const CustomerInfo = ref({
      nameCustomer: "",
      phoneNumber: "",
      address: "",
      email: ""
    });
    computed(() => route.query.id);
    const payment = ref(null);
    const ToTalChild = computed(() => {
      return Tour.value.priceSale * 0.9;
    });
    const ToTalBill = computed(() => {
      const totalAdult = countAdult.value * Tour.value.priceSale;
      const totalChild = countChild.value * (Tour.value.priceSale * 0.9);
      return totalAdult + totalChild;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderHome = __nuxt_component_0;
      const _component_TipTap = __nuxt_component_2$1;
      const _component_InforTour = __nuxt_component_2;
      const _component_Footer = __nuxt_component_2$2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderHome, null, null, _parent));
      _push(`<section class="banner_inner" id="home" data-v-9c0d1339><div class="banner_inner_overlay" data-v-9c0d1339></div></section><div class="fs-5 border-bottom py-4" data-v-9c0d1339><div class="container d-flex flex-row" data-v-9c0d1339><div style="${ssrRenderStyle({ "color": "#377df4" })}" class="me-2" data-v-9c0d1339>1.Nh\u1EADp th\xF4ng tin </div></div></div><section class="packages" data-v-9c0d1339><div class="container py-lg-4" data-v-9c0d1339><div class="row bg-light rounded-5" id="displayTours" style="${ssrRenderStyle({ "height": "250px" })}" data-v-9c0d1339><div class="col-4 p-0 m-0" data-v-9c0d1339><div class="image-tour3 position-relative" data-v-9c0d1339><img${ssrRenderAttr("src", Tour.value.image)} class="img-fluid" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-9c0d1339></div></div><div class="col-8" data-v-9c0d1339><h5 class="mt-3" data-v-9c0d1339>${ssrInterpolate(Tour.value.nameTour)}</h5><h6 class="mt-3" data-v-9c0d1339> Ng\xE0y kh\u1EDFi h\xE0nh : ${ssrInterpolate(unref(formatDate)(Tour.value.dateStart))}</h6><h6 class="mt-3" data-v-9c0d1339>Th\u1EDDi gian : ${ssrInterpolate(Tour.value.numOfDay)} ng\xE0y</h6><h6 class="mt-3" data-v-9c0d1339>N\u01A1i kh\u1EDFi h\xE0nh : ${ssrInterpolate(Tour.value.placeStart)}</h6><h6 class="mt-3" data-v-9c0d1339>S\u1ED1 ch\u1ED7 c\xF2n nh\u1EADn:${ssrInterpolate(Tour.value.slot)}</h6></div></div><div class="row mt-5" data-v-9c0d1339><div class="col-8" data-v-9c0d1339><h4 class="heading fw-bold" data-v-9c0d1339>T\u1ED5ng quan v\u1EC1 chuy\u1EBFn \u0111i</h4><h5 class="heading mt-5" data-v-9c0d1339>Th\xF4ng tin li\xEAn l\u1EA1c</h5>`);
      _push(ssrRenderComponent(unref(Form), {
        class: "rounded-4 bg-light mt-2",
        style: { "height": "250px" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="row" data-v-9c0d1339${_scopeId}><div class="col-6" data-v-9c0d1339${_scopeId}><div class="my-3 form-group required" data-v-9c0d1339${_scopeId}><label for="source-name" class="col-form-label control-label ms-4" data-v-9c0d1339${_scopeId}> H\u1ECD v\xE0 t\xEAn </label><div class="col-sm-12" data-v-9c0d1339${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "nameCustomer",
              modelValue: CustomerInfo.value.nameCustomer,
              "onUpdate:modelValue": ($event) => CustomerInfo.value.nameCustomer = $event,
              type: "text",
              class: "form-control",
              rules: { required: true, onlyCharacters: true }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "nameCustomer",
              class: "text-danger"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="my-3 form-group required" data-v-9c0d1339${_scopeId}><label for="source-name" class="col-form-label control-label ms-4" data-v-9c0d1339${_scopeId}> S\u1ED1 \u0111i\u1EC7n tho\u1EA1i </label><div class="col-sm-12" data-v-9c0d1339${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "phoneNumber",
              modelValue: CustomerInfo.value.phoneNumber,
              "onUpdate:modelValue": ($event) => CustomerInfo.value.phoneNumber = $event,
              type: "text",
              class: "form-control",
              rules: { required: true, phone: true }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "phoneNumber",
              class: "text-danger"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div><div class="col-6" data-v-9c0d1339${_scopeId}><div class="my-3 form-group required" data-v-9c0d1339${_scopeId}><label for="source-name" class="col-form-label control-label ms-4" data-v-9c0d1339${_scopeId}> Email </label><div class="col-sm-12" data-v-9c0d1339${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "email",
              modelValue: CustomerInfo.value.email,
              "onUpdate:modelValue": ($event) => CustomerInfo.value.email = $event,
              type: "text",
              class: "form-control",
              rules: { required: true, email: true }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "email",
              class: "text-danger"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="my-3 form-group required" data-v-9c0d1339${_scopeId}><label for="source-name" class="col-form-label control-label ms-4" data-v-9c0d1339${_scopeId}> \u0110\u1ECBa ch\u1EC9 </label><div class="col-sm-12" data-v-9c0d1339${_scopeId}>`);
            _push2(ssrRenderComponent(unref(Field), {
              name: "address",
              modelValue: CustomerInfo.value.address,
              "onUpdate:modelValue": ($event) => CustomerInfo.value.address = $event,
              type: "text",
              class: "form-control",
              rules: { required: true }
            }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(ErrorMessage), {
              name: "address",
              class: "text-danger"
            }, null, _parent2, _scopeId));
            _push2(`</div></div></div></div>`);
          } else {
            return [
              createVNode("div", { class: "row" }, [
                createVNode("div", { class: "col-6" }, [
                  createVNode("div", { class: "my-3 form-group required" }, [
                    createVNode("label", {
                      for: "source-name",
                      class: "col-form-label control-label ms-4"
                    }, " H\u1ECD v\xE0 t\xEAn "),
                    createVNode("div", { class: "col-sm-12" }, [
                      createVNode(unref(Field), {
                        name: "nameCustomer",
                        modelValue: CustomerInfo.value.nameCustomer,
                        "onUpdate:modelValue": ($event) => CustomerInfo.value.nameCustomer = $event,
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
                  createVNode("div", { class: "my-3 form-group required" }, [
                    createVNode("label", {
                      for: "source-name",
                      class: "col-form-label control-label ms-4"
                    }, " S\u1ED1 \u0111i\u1EC7n tho\u1EA1i "),
                    createVNode("div", { class: "col-sm-12" }, [
                      createVNode(unref(Field), {
                        name: "phoneNumber",
                        modelValue: CustomerInfo.value.phoneNumber,
                        "onUpdate:modelValue": ($event) => CustomerInfo.value.phoneNumber = $event,
                        type: "text",
                        class: "form-control",
                        rules: { required: true, phone: true }
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                      createVNode(unref(ErrorMessage), {
                        name: "phoneNumber",
                        class: "text-danger"
                      })
                    ])
                  ])
                ]),
                createVNode("div", { class: "col-6" }, [
                  createVNode("div", { class: "my-3 form-group required" }, [
                    createVNode("label", {
                      for: "source-name",
                      class: "col-form-label control-label ms-4"
                    }, " Email "),
                    createVNode("div", { class: "col-sm-12" }, [
                      createVNode(unref(Field), {
                        name: "email",
                        modelValue: CustomerInfo.value.email,
                        "onUpdate:modelValue": ($event) => CustomerInfo.value.email = $event,
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
                  createVNode("div", { class: "my-3 form-group required" }, [
                    createVNode("label", {
                      for: "source-name",
                      class: "col-form-label control-label ms-4"
                    }, " \u0110\u1ECBa ch\u1EC9 "),
                    createVNode("div", { class: "col-sm-12" }, [
                      createVNode(unref(Field), {
                        name: "address",
                        modelValue: CustomerInfo.value.address,
                        "onUpdate:modelValue": ($event) => CustomerInfo.value.address = $event,
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
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<h4 class="heading mt-5" data-v-9c0d1339>H\xE0nh kh\xE1ch</h4><div class="row mt-3 ms-1 d-flex justify-content-between" data-v-9c0d1339><div class="col-5 rounded-3" style="${ssrRenderStyle({ "border": "2px solid rgba(211, 211, 211, 0.5)", "height": "50px" })}" data-v-9c0d1339><div class="d-flex flex-row justify-content-between" data-v-9c0d1339><div data-v-9c0d1339><span class="fw-bold" data-v-9c0d1339>Ng\u01B0\u1EDDi l\u1EDBn</span> <br data-v-9c0d1339><span data-v-9c0d1339>T\u1EEB 12 tu\u1ED5i tr\u1EDF l\xEAn</span></div><div class="d-flex flex-row py-2" data-v-9c0d1339><i class="fa-solid fa-minus me-2 mt-2" data-v-9c0d1339></i><h5 data-v-9c0d1339>${ssrInterpolate(countAdult.value)}</h5><i class="fa-solid fa-plus ms-2 mt-2" data-v-9c0d1339></i></div></div></div><div class="col-5 rounded-3" style="${ssrRenderStyle({ "border": "2px solid rgba(211, 211, 211, 0.5)", "height": "50px" })}" data-v-9c0d1339><div class="d-flex flex-row justify-content-between" data-v-9c0d1339><div data-v-9c0d1339><span class="fw-bold" data-v-9c0d1339>Tr\u1EBB em </span> <br data-v-9c0d1339><span data-v-9c0d1339>T\u1EEB 2 tu\u1ED5i \u0111\u1EBFn d\u01B0\u1EDBi 12 tu\u1ED5i</span></div><div class="d-flex flex-row py-2" data-v-9c0d1339><i class="fa-solid fa-minus me-2 mt-2" data-v-9c0d1339></i><h5 data-v-9c0d1339>${ssrInterpolate(countChild.value)}</h5><i class="fa-solid fa-plus ms-2 mt-2" data-v-9c0d1339></i></div></div></div></div><h5 class="heading mt-5" data-v-9c0d1339>Th\xF4ng tin h\xE0nh kh\xE1ch</h5><div class="rounded-4 bg-light mt-2" style="${ssrRenderStyle({ "height": "400px" })}" data-v-9c0d1339><div class="my-3 form-group" data-v-9c0d1339><label for="source-name" class="col-form-label control-label ms-4" data-v-9c0d1339> H\u1ECD v\xE0 t\xEAn </label><div class="col-sm-12" data-v-9c0d1339>`);
      _push(ssrRenderComponent(_component_TipTap, {
        modelValue: ListCustomer.value,
        "onUpdate:modelValue": ($event) => ListCustomer.value = $event
      }, null, _parent));
      _push(`</div><div class="text-danger ms-4 mt-2" data-v-9c0d1339><div class="required mb-3" data-v-9c0d1339>H\u01B0\u1EDBng d\u1EABn \u0111i\u1EC1n th\xF4ng tin:</div><div data-v-9c0d1339> Q\xFAy kh\xE1ch ch\u1ECDn <i class="fa-solid fa-clipboard-list" data-v-9c0d1339></i> tr\xEAn thanh c\xF4ng c\u1EE5 c\u1EE7a \xF4 tr\u1ED1ng<br data-v-9c0d1339> Sau khi \u0111\xE3 hi\u1EC3n th\u1ECB d\u1EA1ng 1. trong \xF4 tr\u1ED1ng. Qu\xFD kh\xE1ch h\xE3y nh\u1EADp th\xF4ng tin h\xE0nh kh\xE1ch trong v\xE9 \u0111\u1EB7t tour n\xE0y d\u01B0\u1EDBi d\u1EA1ng nh\u01B0 sau: <br data-v-9c0d1339> 1. Nguy\u1EC5n V\u0103n A, 23/09/1991 <br data-v-9c0d1339> 2. Tr\u1EA7n Long Anh, 23/09/1970<br data-v-9c0d1339></div></div></div></div></div>`);
      _push(ssrRenderComponent(_component_InforTour, {
        countAdult: countAdult.value,
        countChild: countChild.value,
        toTalChild: unref(ToTalChild),
        toTalBill: unref(ToTalBill),
        formatDate2: unref(formatDate2),
        tour: Tour.value,
        customer: CustomerInfo.value,
        listCustomer: ListCustomer.value,
        payment: payment.value
      }, null, _parent));
      _push(`</div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customerbooking/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-9c0d1339"]]);

export { index as default };
//# sourceMappingURL=index-8l-ppG7U.mjs.map
