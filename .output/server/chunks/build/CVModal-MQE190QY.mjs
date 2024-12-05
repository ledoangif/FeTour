import { ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { useSSRContext } from 'vue';

const _sfc_main = {
  __name: "CVModal",
  __ssrInlineRender: true,
  props: {
    data_bs_target_modal: {
      type: String,
      default: ""
    },
    id_model: {
      type: String,
      default: "",
      required: true
    }
  },
  emits: ["close-modal"],
  setup(__props, { emit: __emit }) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[--><div data-bs-toggle="modal"${ssrRenderAttr("data-bs-target", __props.data_bs_target_modal)} data-bs-whatever="@mdo">`);
      ssrRenderSlot(_ctx.$slots, "icon", {}, null, _push, _parent);
      _push(`</div><div class="modal fade"${ssrRenderAttr("id", __props.id_model)} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static" data-bs-keyboard="false"><div class="modal-dialog modal-xl"><div class="modal-content"><div class="modal-header"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 26 26" class="me-1"><g fill="none"><defs><mask id="pepiconsPencilPlusCircleFilled0"><path fill="#fff" d="M0 0h26v26H0z"></path><g fill="#000"><path d="M8 13.5a.5.5 0 0 1 0-1h10a.5.5 0 0 1 0 1z"></path><path d="M12.5 8a.5.5 0 0 1 1 0v10a.5.5 0 0 1-1 0z"></path></g></mask></defs><circle cx="13" cy="13" r="13" fill="#006eff" mask="url(#pepiconsPencilPlusCircleFilled0)"></circle></g></svg><h5 class="modal-title text-primary" id="exampleModalLabel">`);
      ssrRenderSlot(_ctx.$slots, "title", {}, null, _push, _parent);
      _push(`</h5><button type="button" class="btn-close" data-bs-dismiss="modal"></button></div><div class="modal-body">`);
      ssrRenderSlot(_ctx.$slots, "body", {}, null, _push, _parent);
      _push(`</div></div></div></div><!--]-->`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/form/CVModal.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = _sfc_main;

export { __nuxt_component_0 as _ };
//# sourceMappingURL=CVModal-MQE190QY.mjs.map
