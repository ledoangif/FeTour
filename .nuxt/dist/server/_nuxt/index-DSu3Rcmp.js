import { _ as __nuxt_component_0, a as __nuxt_component_2 } from "./Footer-ByW4O3lP.js";
import { _ as _export_sfc, a as Field } from "../server.mjs";
import { _ as __nuxt_component_0$1 } from "./nuxt-link-BBsyahRc.js";
import { computed, unref, useSSRContext, ref, withCtx, createVNode, createTextVNode } from "vue";
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle, ssrRenderList, ssrInterpolate, ssrRenderComponent, ssrIncludeBooleanAttr, ssrLooseContain, ssrLooseEqual, ssrRenderAttr } from "vue/server-renderer";
import { A as Api } from "./api-B8259KqO.js";
import { a as formatDate, f as formatCurrency } from "./validate-DZZjg1ZS.js";
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
import "vue-toast-notification";
import "@vue/devtools-api";
import "date-fns";
const visiblePages = 1;
const _sfc_main$1 = {
  __name: "Pagination",
  __ssrInlineRender: true,
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    nextPage: {
      type: Function,
      required: true
    },
    previousPage: {
      type: Function,
      required: true
    },
    setPage: {
      type: Function,
      required: true
    }
  },
  setup(__props) {
    const props = __props;
    const displayPages = computed(() => {
      const start = Math.max(2, props.currentPage - visiblePages);
      const end = Math.min(props.totalPages - 1, props.currentPage + visiblePages);
      const pages = [];
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      if (start > 2) {
        pages.unshift("...");
      }
      if (end < props.totalPages - 1) {
        pages.push("...");
      }
      return pages;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(_attrs)}><nav aria-label="Page navigation example"><div class="pagination"><button class="${ssrRenderClass([{ "disabled-button": props.currentPage === 1 }, "page-link btn-arrow"])}" aria-label="Previous"><div class="btn-svg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.7265 12L12.6665 11.06L9.61317 8L12.6665 4.94L11.7265 4L7.7265 8L11.7265 12Z" fill="#333333"></path><path d="M7.33344 12L8.27344 11.06L5.2201 8L8.27344 4.94L7.33344 4L3.33344 8L7.33344 12Z" fill="#333333"></path></svg></div></button><button class="${ssrRenderClass([{ "disabled-button": props.currentPage === 1 }, "page-link btn-arrow"])}" aria-label="Previous"><div class="btn-svg"><svg width="5" height="8" viewBox="0 0 5 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.06 8L5 7.06L1.94667 4L5 0.94L4.06 8.21774e-08L0.0599996 4L4.06 8Z" fill="black"></path></svg></div></button><span style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([{ activePagination: props.currentPage == 1 }, "page-item page-link"])}">1 </span><!--[-->`);
      ssrRenderList(unref(displayPages), (page) => {
        _push(`<span>`);
        if (page === "...") {
          _push(`<span>${ssrInterpolate(page)}</span>`);
        } else {
          _push(`<span style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([{ activePagination: page === props.currentPage }, "page-item page-link"])}">${ssrInterpolate(page)}</span>`);
        }
        _push(`</span>`);
      });
      _push(`<!--]-->`);
      if (props.totalPages > 1) {
        _push(`<span style="${ssrRenderStyle({ "cursor": "pointer" })}" class="${ssrRenderClass([{ activePagination: props.currentPage === props.totalPages }, "page-item page-link"])}">${ssrInterpolate(props.totalPages)}</span>`);
      } else {
        _push(`<!---->`);
      }
      _push(`<button class="${ssrRenderClass([{ "disabled-button": props.currentPage === props.totalPages }, "page-link btn-arrow"])}" aria-label="Next"><div class="btn-svg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.94 4L6 4.94L9.05333 8L6 11.06L6.94 12L10.94 8L6.94 4Z" fill="black"></path></svg></div></button><button class="${ssrRenderClass([{ "disabled-button": props.currentPage === props.totalPages }, "page-link btn-arrow"])}" aria-label="Next"><div class="btn-svg"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.2735 4L3.3335 4.94L6.38683 8L3.3335 11.06L4.2735 12L8.2735 8L4.2735 4Z" fill="black"></path><path d="M8.66656 4L7.72656 4.94L10.7799 8L7.72656 11.06L8.66656 12L12.6666 8L8.66656 4Z" fill="black"></path></svg></div></button></div></nav></div>`);
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Pagination.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = _sfc_main$1;
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const api = new Api();
    const Tour = ref([]);
    const placeStart = ref("Nơi khởi hành");
    const dateStart = ref("");
    const placeEnd = ref("Nơi kết thúc");
    const nameTour = ref("");
    const placeStartList = ref([]);
    const placeEndList = ref([]);
    const Country = ref([]);
    const isLocal = ref(true);
    const isLocal2 = ref(true);
    const pageNumber = ref(1);
    const totalPage = ref(0);
    const totalCount = ref(0);
    const pageSize = ref(9);
    const getTours = async () => {
      try {
        var response = await api.get(
          `/Tour/GetAllPaginationBeforeStartOneDay?PageSize=${pageSize.value}&PageNumber=${pageNumber.value}`
        );
        Tour.value = response.data.responseData.data;
        totalCount.value = response.data.responseData.pagination.totalCount;
        totalPage.value = response.data.responseData.pagination.totalPage;
      } catch (err) {
        console.log(err);
      }
    };
    const handleCountrySelect = async (id) => {
      const res = await api.get(`Tour/GetToursByCountry?countryId=${id}`);
      if (res.data.responseData.length === 0) {
        alert("Không có tour nào phù hợp với tìm kiếm của bạn!");
        return;
      }
      Tour.value = res.data.responseData;
    };
    const nextPage = () => {
      pageNumber.value++;
      getTours();
    };
    const previousPage = () => {
      pageNumber.value--;
      getTours();
    };
    const setPage = (number) => {
      pageNumber.value = number;
      getTours();
    };
    const filteredCountries = computed(() => {
      if (!isLocal.value) {
        return Country.value.filter((country) => country.id !== 1);
      }
      return Country.value;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_HeaderHome = __nuxt_component_0;
      const _component_Field = Field;
      const _component_NuxtLink = __nuxt_component_0$1;
      const _component_Pagination = __nuxt_component_3;
      const _component_Footer = __nuxt_component_2;
      _push(`<!--[-->`);
      _push(ssrRenderComponent(_component_HeaderHome, null, null, _parent));
      _push(`<section class="banner_inner" id="home" data-v-18791b4a><div class="banner_inner_overlay" data-v-18791b4a></div></section><section class="packages pb-5" data-v-18791b4a><div class="container py-lg-4 py-sm-4" data-v-18791b4a><form class="rounded-4 bg-white searchTour" name="search" data-v-18791b4a><div class="border-bottom border-warning pb-3" data-v-18791b4a><div class="d-flex flex-md-row col-12 mt-3" data-v-18791b4a><button type="button" class="${ssrRenderClass({
        "bg-warning btn-default rounded-2 p-3 ": isLocal.value === true,
        "form-control": true
      })}" data-v-18791b4a> Du lịch trong nước </button><button type="button" class="${ssrRenderClass({
        "bg-warning btn-default rounded-2  p-3 ": isLocal.value === false,
        "form-control ms-2": true
      })}" data-v-18791b4a> Du lịch nước ngoài </button><div class="col-8 col-md-6 ps-md-2 mt-2 mt-md-0" data-v-18791b4a>`);
      _push(ssrRenderComponent(_component_Field, {
        name: "name",
        modelValue: nameTour.value,
        "onUpdate:modelValue": ($event) => nameTour.value = $event,
        type: "text",
        class: "form-control p-3",
        placeholder: "Nhập từ khóa tour"
      }, null, _parent));
      _push(`</div></div></div><div class="d-flex flex-column flex-md-row" data-v-18791b4a><div class="col-12 col-md-3 ms-0 ms-md-3 my-4 rounded-3 w-100" style="${ssrRenderStyle({ "border": "3px solid #ffc107" })}" data-v-18791b4a><div class="ms-5" data-v-18791b4a>Điểm đi</div><div class="d-flex flex-row" data-v-18791b4a><i class="fa-solid fa-location-dot col-2 mt-2" data-v-18791b4a></i><select class="col-10 form-select mb-2" data-v-18791b4a><option disabled value="Nơi khởi hành" data-v-18791b4a${ssrIncludeBooleanAttr(Array.isArray(placeStart.value) ? ssrLooseContain(placeStart.value, "Nơi khởi hành") : ssrLooseEqual(placeStart.value, "Nơi khởi hành")) ? " selected" : ""}><i class="fa-solid fa-location-dot" data-v-18791b4a></i> Nơi khởi hành </option><!--[-->`);
      ssrRenderList(placeStartList.value, (item) => {
        _push(`<option${ssrRenderAttr("value", item)} data-v-18791b4a><i class="fa-solid fa-location-dot" data-v-18791b4a></i> ${ssrInterpolate(item)}</option>`);
      });
      _push(`<!--]--></select></div></div><div class="my-auto mx-2" data-v-18791b4a><i class="fa-solid fa-arrow-right-arrow-left" style="${ssrRenderStyle({ "font-size": "1.5em" })}" data-v-18791b4a></i></div>`);
      if (isLocal.value) {
        _push(`<div class="col-12 col-md-3 ms-0 ms-md-3 my-4 rounded-3 w-100" style="${ssrRenderStyle({ "border": "3px solid #ffc107" })}" data-v-18791b4a><div class="ms-5" data-v-18791b4a>Điểm đến</div><div class="d-flex flex-row" data-v-18791b4a><i class="fa-solid fa-location-dot col-2 mt-2" data-v-18791b4a></i><select class="col-10 form-select mb-2" data-v-18791b4a><option disabled value="Nơi kết thúc" data-v-18791b4a${ssrIncludeBooleanAttr(Array.isArray(placeEnd.value) ? ssrLooseContain(placeEnd.value, "Nơi kết thúc") : ssrLooseEqual(placeEnd.value, "Nơi kết thúc")) ? " selected" : ""}> Nơi kết thúc </option><!--[-->`);
        ssrRenderList(placeEndList.value, (item) => {
          _push(`<option${ssrRenderAttr("value", item)} data-v-18791b4a>${ssrInterpolate(item)}</option>`);
        });
        _push(`<!--]--></select></div></div>`);
      } else {
        _push(`<div class="col-12 col-md-3 ms-0 ms-md-3 my-4 rounded-3 w-100" style="${ssrRenderStyle({ "border": "3px solid #ffc107" })}" data-v-18791b4a><div class="ms-5" data-v-18791b4a>Điểm đến</div><div class="d-flex flex-row" data-v-18791b4a><i class="fa-solid fa-location-dot col-2 mt-2" data-v-18791b4a></i><select class="col-10 form-select mb-2" data-v-18791b4a><option disabled value="Nơi kết thúc" data-v-18791b4a${ssrIncludeBooleanAttr(Array.isArray(placeEnd.value) ? ssrLooseContain(placeEnd.value, "Nơi kết thúc") : ssrLooseEqual(placeEnd.value, "Nơi kết thúc")) ? " selected" : ""}> Nơi kết thúc </option><!--[-->`);
        ssrRenderList(unref(filteredCountries), (item) => {
          _push(`<option${ssrRenderAttr("value", item.id)} data-v-18791b4a>${ssrInterpolate(item.countryName)}</option>`);
        });
        _push(`<!--]--></select></div></div>`);
      }
      _push(`<div class="col-12 col-md-3 ms-0 ms-md-3 my-4 rounded-3 w-100" style="${ssrRenderStyle({ "border": "3px solid #ffc107" })}" data-v-18791b4a><div class="ms-5" data-v-18791b4a>Ngày đi</div><div class="d-flex flex-row" data-v-18791b4a><i class="fa-solid fa-calendar mt-2 me-2" data-v-18791b4a></i><input${ssrRenderAttr("value", dateStart.value)} type="date" class="col-10 form-control mb-2" data-v-18791b4a></div></div><button class="col-1.5 my-4 rounded-3 ms-3 bg-warning" style="${ssrRenderStyle({ "border": "3px solid #ffc107" })}" type="submit" data-v-18791b4a><div class="d-flex flex-row py-3 px-3" data-v-18791b4a><i class="fa-solid fa-magnifying-glass mt-2 me-2" data-v-18791b4a></i><div class="h4" data-v-18791b4a>Tìm kiếm</div></div></button></div></form><h3 class="heading text-capitalize text-center mt-5" data-v-18791b4a> Tour hot <i class="fa-solid fa-fire text-danger" style="${ssrRenderStyle({ "font-size": "1em" })}" data-v-18791b4a></i></h3><p class="text mt-2 mb-5 text-center" data-v-18791b4a> Những trải nghiệm tuyệt vời trong tour sẽ không làm bạn thất vọng </p><div class="d-flex flex-row col-6 my-3 ms-auto justify-content-end" data-v-18791b4a><i class="fa-solid fa-arrow-down-wide-short mt-1 me-2" style="${ssrRenderStyle({ "font-size": "1.3em" })}" data-v-18791b4a></i><i class="fa-solid fa-arrow-up-wide-short mt-1 me-2" style="${ssrRenderStyle({ "font-size": "1.3em" })}" data-v-18791b4a></i><button type="button" class="${ssrRenderClass({
        "bg-light btn-default rounded-2 py-2  ": isLocal2.value,
        "form-control col-3": true
      })}" data-v-18791b4a><h6 data-v-18791b4a>Tour nội địa</h6></button><button type="button" class="${ssrRenderClass({
        "bg-light btn-default rounded-2 ": !isLocal2.value,
        "form-control ms-2 col-4": true
      })}" data-v-18791b4a><h6 data-v-18791b4a>Tour nước ngoài</h6></button></div><div class="row" id="displayTours" data-v-18791b4a><!--[-->`);
      ssrRenderList(Tour.value, (item) => {
        _push(`<div class="col-lg-4 col-sm-6 mb-5" data-v-18791b4a><div class="image-tour position-relative" data-v-18791b4a><img${ssrRenderAttr("src", item.image)} class="img-fluid" style="${ssrRenderStyle({ "width": "100%", "height": "100%", "object-fit": "cover" })}" data-v-18791b4a></div><div class="package-info" style="${ssrRenderStyle({ "height": "350px" })}" data-v-18791b4a><span data-v-18791b4a>${ssrInterpolate(unref(formatDate)(item.dateStart))} -&gt; ${ssrInterpolate(unref(formatDate)(item.dateEnd))} - ${ssrInterpolate(item.numOfDay)} ngày </span><h5 class="mt-2" data-v-18791b4a><a data-v-18791b4a>${ssrInterpolate(item.nameTour)}</a></h5><ul class="listing mt-3" data-v-18791b4a>`);
        if (item.discount > 0) {
          _push(`<li data-v-18791b4a> Giá :<span class="text-decoration-line-through ms-2" data-v-18791b4a>${ssrInterpolate(unref(formatCurrency)(item.cost))}</span></li>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<li class="d-flex justify-content-between" data-v-18791b4a><span class="text-danger" data-v-18791b4a>${ssrInterpolate(unref(formatCurrency)(item.priceSale))}</span>`);
        if (item.discount > 0) {
          _push(`<button type="button" class="btn btn-warning" data-v-18791b4a>${ssrInterpolate(item.discount)} % Giảm </button>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</li><div class="d-flex justify-content-between mt-2" data-v-18791b4a>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: {
            path: "/customerbooking",
            query: { id: item.id }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="btn btn-danger btn-small" data-v-18791b4a${_scopeId}><i class="fa-solid fa-cart-shopping text-white" data-v-18791b4a${_scopeId}></i> Đặt ngay </button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-danger btn-small"
                }, [
                  createVNode("i", { class: "fa-solid fa-cart-shopping text-white" }),
                  createTextVNode(" Đặt ngay ")
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(ssrRenderComponent(_component_NuxtLink, {
          class: "link link-danger text-decoration-none mx-1",
          style: { "cursor": "pointer" },
          to: {
            path: "/tourdetail",
            query: { id: item.id }
          }
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<button type="button" class="btn btn-outline-success" data-v-18791b4a${_scopeId}> Xem chi tiết </button>`);
            } else {
              return [
                createVNode("button", {
                  type: "button",
                  class: "btn btn-outline-success"
                }, " Xem chi tiết ")
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</div><div class="d-flex flex-row justify-content-between mt-2 mt-2" data-v-18791b4a><div class="d-flex mt-2 justify-content-end mt-2" data-v-18791b4a><span class="text-decoration-underline me-2" data-v-18791b4a> Số chỗ còn nhận: </span> ${ssrInterpolate(item.slot)}</div></div></ul></div></div>`);
      });
      _push(`<!--]--></div><div class="d-flex justify-content-between" data-v-18791b4a><div class="d-flex align-items-center" data-v-18791b4a><span data-v-18791b4a>`);
      _push(ssrRenderComponent(_component_Pagination, {
        "current-page": pageNumber.value,
        "total-pages": totalPage.value,
        "next-page": nextPage,
        "previous-page": previousPage,
        "set-page": setPage
      }, null, _parent));
      _push(`</span></div></div></div></section>`);
      _push(ssrRenderComponent(_component_Footer, { onSelectCountry: handleCountrySelect }, null, _parent));
      _push(`<!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/tourcustomer/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-18791b4a"]]);
export {
  index as default
};
//# sourceMappingURL=index-DSu3Rcmp.js.map
