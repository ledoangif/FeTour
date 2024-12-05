import { ref, computed, mergeProps, useSSRContext } from "vue";
import { useRoute } from "vue-router";
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from "vue/server-renderer";
import "./axiousInstance-DrjyNm3h.js";
import "axios";
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const Tours = ref([]);
    ref("");
    ref(2);
    const route = useRoute();
    computed(() => route.query.id);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "row" }, _attrs))}><div class="p-4"><div class="search"><h4 class="search-text h5">Danh sách khách hàng trong Tour</h4></div><div class="data"><div class="btn-handle d-flex justify-content-end mb-3"><div class="reload"><a class="text-info" href="#"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path fill="currentColor" d="M256 48C141.31 48 48 141.31 48 256s93.31 208 208 208s208-93.31 208-208S370.69 48 256 48m120 190.77h-89l36.88-36.88l-5.6-6.51a87.38 87.38 0 1 0-62.94 148a87.55 87.55 0 0 0 82.42-58.25l5.37-15.13l30.17 10.67l-5.3 15.13a119.4 119.4 0 1 1-112.62-159.18a118.34 118.34 0 0 1 86.36 36.95l.56.62l4.31 5L376 149.81Z"></path></svg></a></div></div><table class="table text-center table-hover table-success table-striped-columns table-responsive table-bordered"><thead class="table-primary table-active"><tr><th>No.</th><th>Mã đơn đặt</th><th colspan="2">Thông tin khách đặt </th><th colspan="2">Khách hàng trong đơn đặt</th></tr></thead><tbody><!--[-->`);
      ssrRenderList(Tours.value, (Tour, index) => {
        _push(`<tr><td class="py-auto booking-id-col">${ssrInterpolate(++index)}</td><td class="py-auto booking-id-col">${ssrInterpolate(Tour.bookingId)}</td><td class="p-auto w-25" colspan="2">${ssrInterpolate(Tour.nameCustomer)} <br><a class="phone-link"${ssrRenderAttr("href", `tel://${Tour.phoneNumber}`)}>${ssrInterpolate(Tour.phoneNumber)}</a></td><td class="p-2 w-25" colspan="2"><span>${Tour.customerinTour}</span></td></tr>`);
      });
      _push(`<!--]--></tbody></table></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/customerInTour/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=index-_nNs_EdK.js.map
