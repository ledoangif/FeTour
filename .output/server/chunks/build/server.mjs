import * as vue from 'vue';
import { hasInjectionContext, inject, version, unref, defineAsyncComponent, defineComponent, ref, provide, createElementBlock, h, computed, shallowReactive, watch, Suspense, nextTick, Transition, toRef, resolveDynamicComponent, mergeProps, useSSRContext, createApp, effectScope, reactive, getCurrentInstance, toValue, isRef, readonly, watchEffect, shallowRef, onErrorCaptured, onServerPrefetch, createVNode, isReadonly, isShallow, isReactive, toRaw, withCtx } from 'vue';
import { d as useRuntimeConfig$1, $ as $fetch, w as withQuery, l as hasProtocol, p as parseURL, m as isScriptProtocol, j as joinURL, n as defu, o as sanitizeStatusCode, q as createHooks, h as createError$1, t as toRouteMatcher, r as createRouter$1 } from '../runtime.mjs';
import { getActiveHead } from 'unhead';
import { defineHeadPlugin } from '@unhead/shared';
import { useRoute as useRoute$1, RouterView, createMemoryHistory, createRouter, START_LOCATION } from 'vue-router';
import { isString, isNumber, isArray, keys } from 'lodash-es';
import { VueDraggableNext } from 'vue-draggable-next';
import { ssrRenderSuspense, ssrRenderComponent, ssrRenderVNode, ssrRenderAttrs } from 'vue/server-renderer';

function createContext$1(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers$1.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers$1.delete(onLeave);
      }
    }
  };
}
function createNamespace$1(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext$1({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis$1 = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey$2 = "__unctx__";
const defaultNamespace = _globalThis$1[globalKey$2] || (_globalThis$1[globalKey$2] = createNamespace$1());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey$1 = "__unctx_async_handlers__";
const asyncHandlers$1 = _globalThis$1[asyncHandlersKey$1] || (_globalThis$1[asyncHandlersKey$1] = /* @__PURE__ */ new Set());

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var dist = {exports: {}};

const require$$0 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(vue);

(function (module, exports) {
	(function webpackUniversalModuleDefinition(root, factory) {
		module.exports = factory(require$$0);
	})(commonjsGlobal, (__WEBPACK_EXTERNAL_MODULE__976__) => {
	return /******/ (() => { // webpackBootstrap
	/******/ 	var __webpack_modules__ = ({

	/***/ 772:
	/***/ ((__unused_webpack_module, exports) => {


	Object.defineProperty(exports, "__esModule", ({ value: true }));
	// runtime helper for setting properties on components
	// in a tree-shakable way
	exports["default"] = (sfc, props) => {
	    const target = sfc.__vccOpts || sfc;
	    for (const [key, val] of props) {
	        target[key] = val;
	    }
	    return target;
	};


	/***/ }),

	/***/ 976:
	/***/ ((module) => {

	module.exports = __WEBPACK_EXTERNAL_MODULE__976__;

	/***/ })

	/******/ 	});
	/************************************************************************/
	/******/ 	// The module cache
	/******/ 	var __webpack_module_cache__ = {};
	/******/ 	
	/******/ 	// The require function
	/******/ 	function __webpack_require__(moduleId) {
	/******/ 		// Check if module is in cache
	/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
	/******/ 		if (cachedModule !== undefined) {
	/******/ 			return cachedModule.exports;
	/******/ 		}
	/******/ 		// Create a new module (and put it into the cache)
	/******/ 		var module = __webpack_module_cache__[moduleId] = {
	/******/ 			// no module.id needed
	/******/ 			// no module.loaded needed
	/******/ 			exports: {}
	/******/ 		};
	/******/ 	
	/******/ 		// Execute the module function
	/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
	/******/ 	
	/******/ 		// Return the exports of the module
	/******/ 		return module.exports;
	/******/ 	}
	/******/ 	
	/************************************************************************/
	/******/ 	/* webpack/runtime/define property getters */
	/******/ 	(() => {
	/******/ 		// define getter functions for harmony exports
	/******/ 		__webpack_require__.d = (exports, definition) => {
	/******/ 			for(var key in definition) {
	/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
	/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
	/******/ 				}
	/******/ 			}
	/******/ 		};
	/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
	/******/ 	(() => {
	/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
	/******/ 	})();
	/******/ 	
	/******/ 	/* webpack/runtime/make namespace object */
	/******/ 	(() => {
	/******/ 		// define __esModule on exports
	/******/ 		__webpack_require__.r = (exports) => {
	/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
	/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
	/******/ 			}
	/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
	/******/ 		};
	/******/ 	})();
	/******/ 	
	/************************************************************************/
	var __webpack_exports__ = {};
	// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
	(() => {
	// ESM COMPAT FLAG
	__webpack_require__.r(__webpack_exports__);

	// EXPORTS
	__webpack_require__.d(__webpack_exports__, {
	  ToastComponent: () => (/* reexport */ Component),
	  ToastPlugin: () => (/* binding */ ToastPlugin),
	  ToastPositions: () => (/* reexport */ positions),
	  "default": () => (/* binding */ src),
	  useToast: () => (/* reexport */ useToast)
	});

	// EXTERNAL MODULE: external {"commonjs":"vue","commonjs2":"vue","amd":"vue","root":"Vue"}
	var external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_ = __webpack_require__(976);

	const _hoisted_1 = /*#__PURE__*/(0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createElementVNode)("div", {
	  class: "v-toast__icon"
	}, null, -1);
	const _hoisted_2 = ["innerHTML"];
	function render(_ctx, _cache, $props, $setup, $data, $options) {
	  return (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.openBlock)(), (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createBlock)(external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.Transition, {
	    "enter-active-class": _ctx.transition.enter,
	    "leave-active-class": _ctx.transition.leave
	  }, {
	    default: (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.withCtx)(() => [(0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.withDirectives)((0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createElementVNode)("div", {
	      ref: "root",
	      role: "alert",
	      class: (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.normalizeClass)(["v-toast__item", [`v-toast__item--${_ctx.type}`, `v-toast__item--${_ctx.position}`]]),
	      onMouseover: _cache[0] || (_cache[0] = $event => _ctx.toggleTimer(true)),
	      onMouseleave: _cache[1] || (_cache[1] = $event => _ctx.toggleTimer(false)),
	      onClick: _cache[2] || (_cache[2] = function () {
	        return _ctx.whenClicked && _ctx.whenClicked(...arguments);
	      })
	    }, [_hoisted_1, (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.createElementVNode)("p", {
	      class: "v-toast__text",
	      innerHTML: _ctx.message
	    }, null, 8, _hoisted_2)], 34), [[external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.vShow, _ctx.isActive]])]),
	    _: 1
	  }, 8, ["enter-active-class", "leave-active-class"]);
	}

	function removeElement(el) {
	  if (typeof el.remove !== 'undefined') {
	    el.remove();
	  } else {
	    el.parentNode?.removeChild(el);
	  }
	}
	function createComponent(component, props, parentContainer) {
	  let slots = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
	  const vNode = (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.h)(component, props, slots);
	  const container = document.createElement('div');
	  container.classList.add('v-toast--pending');
	  parentContainer.appendChild(container);
	  (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.render)(vNode, container);
	  return vNode.component;
	}
	// https://stackoverflow.com/a/3969760
	class Timer {
	  constructor(callback, delay) {
	    this.startedAt = Date.now();
	    this.callback = callback;
	    this.delay = delay;
	    this.timer = setTimeout(callback, delay);
	  }
	  pause() {
	    this.stop();
	    this.delay -= Date.now() - this.startedAt;
	  }
	  resume() {
	    this.stop();
	    this.startedAt = Date.now();
	    this.timer = setTimeout(this.callback, this.delay);
	  }
	  stop() {
	    clearTimeout(this.timer);
	  }
	}
	/* harmony default export */ const positions = (Object.freeze({
	  TOP_RIGHT: 'top-right',
	  TOP: 'top',
	  TOP_LEFT: 'top-left',
	  BOTTOM_RIGHT: 'bottom-right',
	  BOTTOM: 'bottom',
	  BOTTOM_LEFT: 'bottom-left'
	}));
	/* harmony default export */ function mitt(n){return {all:n=n||new Map,on:function(t,e){var i=n.get(t);i?i.push(e):n.set(t,[e]);},off:function(t,e){var i=n.get(t);i&&(e?i.splice(i.indexOf(e)>>>0,1):n.set(t,[]));},emit:function(t,e){var i=n.get(t);i&&i.slice().map(function(n){n(e);}),(i=n.get("*"))&&i.slice().map(function(n){n(t,e);});}}}

	const eventBus = mitt();
	/* harmony default export */ const bus = (eventBus);





	/* harmony default export */ const Componentvue_type_script_lang_js = ((0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.defineComponent)({
	  name: 'Toast',
	  props: {
	    message: {
	      type: String,
	      required: true
	    },
	    type: {
	      type: String,
	      default: 'success'
	    },
	    position: {
	      type: String,
	      default: positions.BOTTOM_RIGHT,
	      validator(value) {
	        return Object.values(positions).includes(value);
	      }
	    },
	    duration: {
	      type: Number,
	      default: 3000
	    },
	    dismissible: {
	      type: Boolean,
	      default: true
	    },
	    onDismiss: {
	      type: Function,
	      default: () => {}
	    },
	    onClick: {
	      type: Function,
	      default: () => {}
	    },
	    queue: Boolean,
	    pauseOnHover: {
	      type: Boolean,
	      default: true
	    }
	  },
	  data() {
	    return {
	      isActive: false,
	      parentTop: null,
	      parentBottom: null,
	      isHovered: false
	    };
	  },
	  beforeMount() {
	    this.setupContainer();
	  },
	  mounted() {
	    this.showNotice();
	    bus.on('toast-clear', this.dismiss);
	  },
	  methods: {
	    setupContainer() {
	      this.parentTop = document.querySelector('.v-toast.v-toast--top');
	      this.parentBottom = document.querySelector('.v-toast.v-toast--bottom');
	      // No need to create them, they already exists
	      if (this.parentTop && this.parentBottom) return;
	      if (!this.parentTop) {
	        this.parentTop = document.createElement('div');
	        this.parentTop.className = 'v-toast v-toast--top';
	      }
	      if (!this.parentBottom) {
	        this.parentBottom = document.createElement('div');
	        this.parentBottom.className = 'v-toast v-toast--bottom';
	      }
	      const container = document.body;
	      container.appendChild(this.parentTop);
	      container.appendChild(this.parentBottom);
	    },
	    shouldQueue() {
	      if (!this.queue) return false;
	      return this.parentTop.childElementCount > 0 || this.parentBottom.childElementCount > 0;
	    },
	    dismiss() {
	      if (this.timer) this.timer.stop();
	      clearTimeout(this.queueTimer);
	      this.isActive = false;

	      // Timeout for the animation complete before destroying
	      setTimeout(() => {
	        this.onDismiss.apply(null, arguments);
	        const wrapper = this.$refs.root;
	        // unmount the component
	        (0, external_commonjs_vue_commonjs2_vue_amd_vue_root_Vue_.render)(null, wrapper);
	        removeElement(wrapper);
	      }, 150);
	    },
	    showNotice() {
	      if (this.shouldQueue()) {
	        // Call recursively if it should queue
	        this.queueTimer = setTimeout(this.showNotice, 250);
	        return;
	      }
	      const wrapper = this.$refs.root.parentElement;
	      this.correctParent.insertAdjacentElement('afterbegin', this.$refs.root);
	      removeElement(wrapper);
	      this.isActive = true;
	      if (this.duration) {
	        this.timer = new Timer(this.dismiss, this.duration);
	      }
	    },
	    whenClicked() {
	      if (!this.dismissible) return;
	      this.onClick.apply(null, arguments);
	      this.dismiss();
	    },
	    toggleTimer(newVal) {
	      if (!this.pauseOnHover || !this.timer) return;
	      newVal ? this.timer.pause() : this.timer.resume();
	    }
	  },
	  computed: {
	    correctParent() {
	      switch (this.position) {
	        case positions.TOP:
	        case positions.TOP_RIGHT:
	        case positions.TOP_LEFT:
	          return this.parentTop;
	        case positions.BOTTOM:
	        case positions.BOTTOM_RIGHT:
	        case positions.BOTTOM_LEFT:
	          return this.parentBottom;
	      }
	    },
	    transition() {
	      switch (this.position) {
	        case positions.TOP:
	        case positions.TOP_RIGHT:
	        case positions.TOP_LEFT:
	          return {
	            enter: 'v-toast--fade-in-down',
	            leave: 'v-toast--fade-out'
	          };
	        case positions.BOTTOM:
	        case positions.BOTTOM_RIGHT:
	        case positions.BOTTOM_LEFT:
	          return {
	            enter: 'v-toast--fade-in-up',
	            leave: 'v-toast--fade-out'
	          };
	      }
	    }
	  },
	  beforeUnmount() {
	    bus.off('toast-clear', this.dismiss);
	  }
	}));
	 
	// EXTERNAL MODULE: ./node_modules/.pnpm/vue-loader@17.1.1_@vue+compiler-sfc@3.3.4_vue@3.3.4_webpack@5.84.1/node_modules/vue-loader/dist/exportHelper.js
	var exportHelper = __webpack_require__(772);
	const __exports__ = /*#__PURE__*/(0, exportHelper["default"])(Componentvue_type_script_lang_js, [['render',render]]);

	/* harmony default export */ const Component = (__exports__);



	const useToast = function () {
	  let globalProps = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
	  return {
	    open(options) {
	      let message = null;
	      if (typeof options === 'string') message = options;
	      const defaultProps = {
	        message
	      };
	      const propsData = Object.assign({}, defaultProps, globalProps, options);
	      const instance = createComponent(Component, propsData, document.body);
	      return {
	        dismiss: instance.ctx.dismiss
	      };
	    },
	    clear() {
	      bus.emit('toast-clear');
	    },
	    success(message) {
	      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.open(Object.assign({}, {
	        message,
	        type: 'success'
	      }, options));
	    },
	    error(message) {
	      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.open(Object.assign({}, {
	        message,
	        type: 'error'
	      }, options));
	    },
	    info(message) {
	      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.open(Object.assign({}, {
	        message,
	        type: 'info'
	      }, options));
	    },
	    warning(message) {
	      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.open(Object.assign({}, {
	        message,
	        type: 'warning'
	      }, options));
	    },
	    default(message) {
	      let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	      return this.open(Object.assign({}, {
	        message,
	        type: 'default'
	      }, options));
	    }
	  };
	};



	const ToastPlugin = {
	  install: function (app) {
	    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	    let instance = useToast(options);
	    app.config.globalProperties.$toast = instance;
	    app.provide('$toast', instance);
	  }
	};
	/* harmony default export */ const src = (ToastPlugin);

	})();

	/******/ 	return __webpack_exports__;
	/******/ })()
	;
	}); 
} (dist));

var distExports = dist.exports;

const appConfig = useRuntimeConfig$1().app;
const baseURL = () => appConfig.baseURL;
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
const nuxtAppCtx = /* @__PURE__ */ getContext("nuxt-app", {
  asyncContext: false
});
const NuxtPluginIndicator = "__nuxt_plugin";
function createNuxtApp(options) {
  let hydratingCount = 0;
  const nuxtApp = {
    _scope: effectScope(),
    provide: void 0,
    globalName: "nuxt",
    versions: {
      get nuxt() {
        return "3.11.1";
      },
      get vue() {
        return nuxtApp.vueApp.version;
      }
    },
    payload: reactive({
      data: {},
      state: {},
      once: /* @__PURE__ */ new Set(),
      _errors: {},
      ...{ serverRendered: true }
    }),
    static: {
      data: {}
    },
    runWithContext: (fn) => nuxtApp._scope.run(() => callWithNuxt(nuxtApp, fn)),
    isHydrating: false,
    deferHydration() {
      if (!nuxtApp.isHydrating) {
        return () => {
        };
      }
      hydratingCount++;
      let called = false;
      return () => {
        if (called) {
          return;
        }
        called = true;
        hydratingCount--;
        if (hydratingCount === 0) {
          nuxtApp.isHydrating = false;
          return nuxtApp.callHook("app:suspense:resolve");
        }
      };
    },
    _asyncDataPromises: {},
    _asyncData: {},
    _payloadRevivers: {},
    ...options
  };
  nuxtApp.hooks = createHooks();
  nuxtApp.hook = nuxtApp.hooks.hook;
  {
    const contextCaller = async function(hooks, args) {
      for (const hook of hooks) {
        await nuxtApp.runWithContext(() => hook(...args));
      }
    };
    nuxtApp.hooks.callHook = (name, ...args) => nuxtApp.hooks.callHookWith(contextCaller, name, ...args);
  }
  nuxtApp.callHook = nuxtApp.hooks.callHook;
  nuxtApp.provide = (name, value) => {
    const $name = "$" + name;
    defineGetter(nuxtApp, $name, value);
    defineGetter(nuxtApp.vueApp.config.globalProperties, $name, value);
  };
  defineGetter(nuxtApp.vueApp, "$nuxt", nuxtApp);
  defineGetter(nuxtApp.vueApp.config.globalProperties, "$nuxt", nuxtApp);
  {
    if (nuxtApp.ssrContext) {
      nuxtApp.ssrContext.nuxt = nuxtApp;
      nuxtApp.ssrContext._payloadReducers = {};
      nuxtApp.payload.path = nuxtApp.ssrContext.url;
    }
    nuxtApp.ssrContext = nuxtApp.ssrContext || {};
    if (nuxtApp.ssrContext.payload) {
      Object.assign(nuxtApp.payload, nuxtApp.ssrContext.payload);
    }
    nuxtApp.ssrContext.payload = nuxtApp.payload;
    nuxtApp.ssrContext.config = {
      public: options.ssrContext.runtimeConfig.public,
      app: options.ssrContext.runtimeConfig.app
    };
  }
  const runtimeConfig = options.ssrContext.runtimeConfig;
  nuxtApp.provide("config", runtimeConfig);
  return nuxtApp;
}
async function applyPlugin(nuxtApp, plugin2) {
  if (plugin2.hooks) {
    nuxtApp.hooks.addHooks(plugin2.hooks);
  }
  if (typeof plugin2 === "function") {
    const { provide: provide2 } = await nuxtApp.runWithContext(() => plugin2(nuxtApp)) || {};
    if (provide2 && typeof provide2 === "object") {
      for (const key in provide2) {
        nuxtApp.provide(key, provide2[key]);
      }
    }
  }
}
async function applyPlugins(nuxtApp, plugins2) {
  var _a, _b;
  const resolvedPlugins = [];
  const unresolvedPlugins = [];
  const parallels = [];
  const errors = [];
  let promiseDepth = 0;
  async function executePlugin(plugin2) {
    var _a2;
    const unresolvedPluginsForThisPlugin = ((_a2 = plugin2.dependsOn) == null ? void 0 : _a2.filter((name) => plugins2.some((p) => p._name === name) && !resolvedPlugins.includes(name))) ?? [];
    if (unresolvedPluginsForThisPlugin.length > 0) {
      unresolvedPlugins.push([new Set(unresolvedPluginsForThisPlugin), plugin2]);
    } else {
      const promise = applyPlugin(nuxtApp, plugin2).then(async () => {
        if (plugin2._name) {
          resolvedPlugins.push(plugin2._name);
          await Promise.all(unresolvedPlugins.map(async ([dependsOn, unexecutedPlugin]) => {
            if (dependsOn.has(plugin2._name)) {
              dependsOn.delete(plugin2._name);
              if (dependsOn.size === 0) {
                promiseDepth++;
                await executePlugin(unexecutedPlugin);
              }
            }
          }));
        }
      });
      if (plugin2.parallel) {
        parallels.push(promise.catch((e) => errors.push(e)));
      } else {
        await promise;
      }
    }
  }
  for (const plugin2 of plugins2) {
    if (((_a = nuxtApp.ssrContext) == null ? void 0 : _a.islandContext) && ((_b = plugin2.env) == null ? void 0 : _b.islands) === false) {
      continue;
    }
    await executePlugin(plugin2);
  }
  await Promise.all(parallels);
  if (promiseDepth) {
    for (let i = 0; i < promiseDepth; i++) {
      await Promise.all(parallels);
    }
  }
  if (errors.length) {
    throw errors[0];
  }
}
// @__NO_SIDE_EFFECTS__
function defineNuxtPlugin(plugin2) {
  if (typeof plugin2 === "function") {
    return plugin2;
  }
  const _name = plugin2._name || plugin2.name;
  delete plugin2.name;
  return Object.assign(plugin2.setup || (() => {
  }), plugin2, { [NuxtPluginIndicator]: true, _name });
}
function callWithNuxt(nuxt, setup, args) {
  const fn = () => args ? setup(...args) : setup();
  {
    return nuxt.vueApp.runWithContext(() => nuxtAppCtx.callAsync(nuxt, fn));
  }
}
// @__NO_SIDE_EFFECTS__
function tryUseNuxtApp() {
  var _a;
  let nuxtAppInstance;
  if (hasInjectionContext()) {
    nuxtAppInstance = (_a = getCurrentInstance()) == null ? void 0 : _a.appContext.app.$nuxt;
  }
  nuxtAppInstance = nuxtAppInstance || nuxtAppCtx.tryUse();
  return nuxtAppInstance || null;
}
// @__NO_SIDE_EFFECTS__
function useNuxtApp() {
  const nuxtAppInstance = /* @__PURE__ */ tryUseNuxtApp();
  if (!nuxtAppInstance) {
    {
      throw new Error("[nuxt] instance unavailable");
    }
  }
  return nuxtAppInstance;
}
// @__NO_SIDE_EFFECTS__
function useRuntimeConfig(_event) {
  return (/* @__PURE__ */ useNuxtApp()).$config;
}
function defineGetter(obj, key, val) {
  Object.defineProperty(obj, key, { get: () => val });
}
const LayoutMetaSymbol = Symbol("layout-meta");
const PageRouteSymbol = Symbol("route");
const useRouter = () => {
  var _a;
  return (_a = /* @__PURE__ */ useNuxtApp()) == null ? void 0 : _a.$router;
};
const useRoute = () => {
  if (hasInjectionContext()) {
    return inject(PageRouteSymbol, (/* @__PURE__ */ useNuxtApp())._route);
  }
  return (/* @__PURE__ */ useNuxtApp())._route;
};
// @__NO_SIDE_EFFECTS__
function defineNuxtRouteMiddleware(middleware) {
  return middleware;
}
const isProcessingMiddleware = () => {
  try {
    if ((/* @__PURE__ */ useNuxtApp())._processingMiddleware) {
      return true;
    }
  } catch {
    return true;
  }
  return false;
};
const navigateTo = (to, options) => {
  if (!to) {
    to = "/";
  }
  const toPath = typeof to === "string" ? to : withQuery(to.path || "/", to.query || {}) + (to.hash || "");
  if (options == null ? void 0 : options.open) {
    return Promise.resolve();
  }
  const isExternal = (options == null ? void 0 : options.external) || hasProtocol(toPath, { acceptRelative: true });
  if (isExternal) {
    if (!(options == null ? void 0 : options.external)) {
      throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");
    }
    const protocol = parseURL(toPath).protocol;
    if (protocol && isScriptProtocol(protocol)) {
      throw new Error(`Cannot navigate to a URL with '${protocol}' protocol.`);
    }
  }
  const inMiddleware = isProcessingMiddleware();
  const router = useRouter();
  const nuxtApp = /* @__PURE__ */ useNuxtApp();
  {
    if (nuxtApp.ssrContext) {
      const fullPath = typeof to === "string" || isExternal ? toPath : router.resolve(to).fullPath || "/";
      const location2 = isExternal ? toPath : joinURL((/* @__PURE__ */ useRuntimeConfig()).app.baseURL, fullPath);
      const redirect = async function(response) {
        await nuxtApp.callHook("app:redirected");
        const encodedLoc = location2.replace(/"/g, "%22");
        nuxtApp.ssrContext._renderResponse = {
          statusCode: sanitizeStatusCode((options == null ? void 0 : options.redirectCode) || 302, 302),
          body: `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`,
          headers: { location: location2 }
        };
        return response;
      };
      if (!isExternal && inMiddleware) {
        router.afterEach((final) => final.fullPath === fullPath ? redirect(false) : void 0);
        return to;
      }
      return redirect(!inMiddleware ? void 0 : (
        /* abort route navigation */
        false
      ));
    }
  }
  if (isExternal) {
    nuxtApp._scope.stop();
    if (options == null ? void 0 : options.replace) {
      (void 0).replace(toPath);
    } else {
      (void 0).href = toPath;
    }
    if (inMiddleware) {
      if (!nuxtApp.isHydrating) {
        return false;
      }
      return new Promise(() => {
      });
    }
    return Promise.resolve();
  }
  return (options == null ? void 0 : options.replace) ? router.replace(to) : router.push(to);
};
const NUXT_ERROR_SIGNATURE = "__nuxt_error";
const useError = () => toRef((/* @__PURE__ */ useNuxtApp()).payload, "error");
const showError = (error) => {
  const nuxtError = createError(error);
  try {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const error2 = useError();
    if (false)
      ;
    error2.value = error2.value || nuxtError;
  } catch {
    throw nuxtError;
  }
  return nuxtError;
};
const isNuxtError = (error) => !!error && typeof error === "object" && NUXT_ERROR_SIGNATURE in error;
const createError = (error) => {
  const nuxtError = createError$1(error);
  Object.defineProperty(nuxtError, NUXT_ERROR_SIGNATURE, {
    value: true,
    configurable: false,
    writable: false
  });
  return nuxtError;
};
version.startsWith("3");
function resolveUnref(r) {
  return typeof r === "function" ? r() : unref(r);
}
function resolveUnrefHeadInput(ref2, lastKey = "") {
  if (ref2 instanceof Promise)
    return ref2;
  const root = resolveUnref(ref2);
  if (!ref2 || !root)
    return root;
  if (Array.isArray(root))
    return root.map((r) => resolveUnrefHeadInput(r, lastKey));
  if (typeof root === "object") {
    return Object.fromEntries(
      Object.entries(root).map(([k, v]) => {
        if (k === "titleTemplate" || k.startsWith("on"))
          return [k, unref(v)];
        return [k, resolveUnrefHeadInput(v, k)];
      })
    );
  }
  return root;
}
defineHeadPlugin({
  hooks: {
    "entries:resolve": function(ctx) {
      for (const entry2 of ctx.entries)
        entry2.resolvedInput = resolveUnrefHeadInput(entry2.input);
    }
  }
});
const headSymbol = "usehead";
const _global = typeof globalThis !== "undefined" ? globalThis : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
const globalKey$1 = "__unhead_injection_handler__";
function setHeadInjectionHandler(handler) {
  _global[globalKey$1] = handler;
}
function injectHead() {
  if (globalKey$1 in _global) {
    return _global[globalKey$1]();
  }
  const head = inject(headSymbol);
  if (!head && "production" !== "production")
    console.warn("Unhead is missing Vue context, falling back to shared context. This may have unexpected results.");
  return head || getActiveHead();
}
const unhead_KgADcZ0jPj = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:head",
  enforce: "pre",
  setup(nuxtApp) {
    const head = nuxtApp.ssrContext.head;
    setHeadInjectionHandler(
      // need a fresh instance of the nuxt app to avoid parallel requests interfering with each other
      () => (/* @__PURE__ */ useNuxtApp()).vueApp._context.provides.usehead
    );
    nuxtApp.vueApp.use(head);
  }
});
function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
_globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());
function executeAsync(function_) {
  const restores = [];
  for (const leaveHandler of asyncHandlers) {
    const restore2 = leaveHandler();
    if (restore2) {
      restores.push(restore2);
    }
  }
  const restore = () => {
    for (const restore2 of restores) {
      restore2();
    }
  };
  let awaitable = function_();
  if (awaitable && typeof awaitable === "object" && "catch" in awaitable) {
    awaitable = awaitable.catch((error) => {
      restore();
      throw error;
    });
  }
  return [awaitable, restore];
}
const interpolatePath = (route, match) => {
  return match.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
};
const generateRouteKey$1 = (routeProps, override) => {
  const matchedRoute = routeProps.route.matched.find((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === routeProps.Component.type;
  });
  const source = override ?? (matchedRoute == null ? void 0 : matchedRoute.meta.key) ?? (matchedRoute && interpolatePath(routeProps.route, matchedRoute));
  return typeof source === "function" ? source(routeProps.route) : source;
};
const wrapInKeepAlive = (props, children) => {
  return { default: () => children };
};
function toArray$1(value) {
  return Array.isArray(value) ? value : [value];
}
const appLayoutTransition = false;
const appPageTransition = false;
const appKeepalive = false;
const nuxtLinkDefaults = { "componentName": "NuxtLink" };
async function getRouteRules(url) {
  {
    const _routeRulesMatcher = toRouteMatcher(
      createRouter$1({ routes: (/* @__PURE__ */ useRuntimeConfig()).nitro.routeRules })
    );
    return defu({}, ..._routeRulesMatcher.matchAll(url).reverse());
  }
}
const __nuxt_page_meta$g = {
  middleware: ["admin", "auth", "auth-admin"]
};
const __nuxt_page_meta$f = {
  middleware: ["auth", "admin"]
};
const __nuxt_page_meta$e = {
  layout: false
};
const __nuxt_page_meta$d = {
  middleware: ["auth", "admin"]
};
const __nuxt_page_meta$c = {
  middleware: ["auth", "admin"]
};
const __nuxt_page_meta$b = {
  layout: false
};
const __nuxt_page_meta$a = {
  middleware: ["auth", "admin"]
};
const __nuxt_page_meta$9 = {
  middleware: ["auth", "admin", "auth-admin"]
};
const __nuxt_page_meta$8 = {
  middleware: ["auth", "admin"]
};
const __nuxt_page_meta$7 = {
  layout: false
};
const __nuxt_page_meta$6 = {
  layout: false
};
const __nuxt_page_meta$5 = {
  layout: false
};
const __nuxt_page_meta$4 = {
  layout: false
};
const __nuxt_page_meta$3 = {
  middleware: ["auth", "admin"]
};
const __nuxt_page_meta$2 = {
  middleware: ["auth", "admin"]
};
const __nuxt_page_meta$1 = {
  layout: false
};
const __nuxt_page_meta = {
  layout: false
};
const _routes = [
  {
    name: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.name) ?? "account",
    path: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.path) ?? "/account",
    meta: __nuxt_page_meta$g || {},
    alias: (__nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.alias) || [],
    redirect: __nuxt_page_meta$g == null ? void 0 : __nuxt_page_meta$g.redirect,
    component: () => import('./index-BXK8jBVk.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.name) ?? "booking",
    path: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.path) ?? "/booking",
    meta: __nuxt_page_meta$f || {},
    alias: (__nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.alias) || [],
    redirect: __nuxt_page_meta$f == null ? void 0 : __nuxt_page_meta$f.redirect,
    component: () => import('./index-CXNT504A.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.name) ?? "contact",
    path: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.path) ?? "/contact",
    meta: __nuxt_page_meta$e || {},
    alias: (__nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.alias) || [],
    redirect: __nuxt_page_meta$e == null ? void 0 : __nuxt_page_meta$e.redirect,
    component: () => import('./index-BQZLZWxc.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.name) ?? "country",
    path: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.path) ?? "/country",
    meta: __nuxt_page_meta$d || {},
    alias: (__nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.alias) || [],
    redirect: __nuxt_page_meta$d == null ? void 0 : __nuxt_page_meta$d.redirect,
    component: () => import('./index-C4BjHznL.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.name) ?? "customer",
    path: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.path) ?? "/customer",
    meta: __nuxt_page_meta$c || {},
    alias: (__nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.alias) || [],
    redirect: __nuxt_page_meta$c == null ? void 0 : __nuxt_page_meta$c.redirect,
    component: () => import('./index-Dsbs_Ojj.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.name) ?? "customerbooking",
    path: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.path) ?? "/customerbooking",
    meta: __nuxt_page_meta$b || {},
    alias: (__nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.alias) || [],
    redirect: __nuxt_page_meta$b == null ? void 0 : __nuxt_page_meta$b.redirect,
    component: () => import('./index-8l-ppG7U.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.name) ?? "customerInTour",
    path: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.path) ?? "/customerInTour",
    meta: __nuxt_page_meta$a || {},
    alias: (__nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.alias) || [],
    redirect: __nuxt_page_meta$a == null ? void 0 : __nuxt_page_meta$a.redirect,
    component: () => import('./index-_nNs_EdK.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.name) ?? "Dashboard",
    path: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.path) ?? "/Dashboard",
    meta: __nuxt_page_meta$9 || {},
    alias: (__nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.alias) || [],
    redirect: __nuxt_page_meta$9 == null ? void 0 : __nuxt_page_meta$9.redirect,
    component: () => import('./Dashboard-C0FJ39xc.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.name) ?? "hotel",
    path: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.path) ?? "/hotel",
    meta: __nuxt_page_meta$8 || {},
    alias: (__nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.alias) || [],
    redirect: __nuxt_page_meta$8 == null ? void 0 : __nuxt_page_meta$8.redirect,
    component: () => import('./index-BsTyv4RN.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.name) ?? "index",
    path: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.path) ?? "/",
    meta: __nuxt_page_meta$7 || {},
    alias: (__nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.alias) || [],
    redirect: __nuxt_page_meta$7 == null ? void 0 : __nuxt_page_meta$7.redirect,
    component: () => import('./index-LiBDAbnD.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.name) ?? "Login",
    path: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.path) ?? "/Login",
    meta: __nuxt_page_meta$6 || {},
    alias: (__nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.alias) || [],
    redirect: __nuxt_page_meta$6 == null ? void 0 : __nuxt_page_meta$6.redirect,
    component: () => import('./Login-BUuWrkFi.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.name) ?? "payment",
    path: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.path) ?? "/payment",
    meta: __nuxt_page_meta$5 || {},
    alias: (__nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.alias) || [],
    redirect: __nuxt_page_meta$5 == null ? void 0 : __nuxt_page_meta$5.redirect,
    component: () => import('./index-Bm4oHk51.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.name) ?? "paymentResponse",
    path: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.path) ?? "/paymentResponse",
    meta: __nuxt_page_meta$4 || {},
    alias: (__nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.alias) || [],
    redirect: __nuxt_page_meta$4 == null ? void 0 : __nuxt_page_meta$4.redirect,
    component: () => import('./index-D0re39W_.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.name) ?? "profile-id",
    path: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.path) ?? "/profile/:id()",
    meta: __nuxt_page_meta$3 || {},
    alias: (__nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.alias) || [],
    redirect: __nuxt_page_meta$3 == null ? void 0 : __nuxt_page_meta$3.redirect,
    component: () => import('./_id_-BMHofiNT.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.name) ?? "tour",
    path: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.path) ?? "/tour",
    meta: __nuxt_page_meta$2 || {},
    alias: (__nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.alias) || [],
    redirect: __nuxt_page_meta$2 == null ? void 0 : __nuxt_page_meta$2.redirect,
    component: () => import('./index-Bd0GqjGn.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.name) ?? "tourcustomer",
    path: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.path) ?? "/tourcustomer",
    meta: __nuxt_page_meta$1 || {},
    alias: (__nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.alias) || [],
    redirect: __nuxt_page_meta$1 == null ? void 0 : __nuxt_page_meta$1.redirect,
    component: () => import('./index-DSu3Rcmp.mjs').then((m) => m.default || m)
  },
  {
    name: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.name) ?? "tourdetail",
    path: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.path) ?? "/tourdetail",
    meta: __nuxt_page_meta || {},
    alias: (__nuxt_page_meta == null ? void 0 : __nuxt_page_meta.alias) || [],
    redirect: __nuxt_page_meta == null ? void 0 : __nuxt_page_meta.redirect,
    component: () => import('./index-Cmm02sOK.mjs').then((m) => m.default || m)
  }
];
const _wrapIf = (component, props, slots) => {
  props = props === true ? {} : props;
  return { default: () => {
    var _a;
    return props ? h(component, props, slots) : (_a = slots.default) == null ? void 0 : _a.call(slots);
  } };
};
function generateRouteKey(route) {
  const source = (route == null ? void 0 : route.meta.key) ?? route.path.replace(/(:\w+)\([^)]+\)/g, "$1").replace(/(:\w+)[?+*]/g, "$1").replace(/:\w+/g, (r) => {
    var _a;
    return ((_a = route.params[r.slice(1)]) == null ? void 0 : _a.toString()) || "";
  });
  return typeof source === "function" ? source(route) : source;
}
function isChangingPage(to, from) {
  if (to === from || from === START_LOCATION) {
    return false;
  }
  if (generateRouteKey(to) !== generateRouteKey(from)) {
    return true;
  }
  const areComponentsSame = to.matched.every(
    (comp, index) => {
      var _a, _b;
      return comp.components && comp.components.default === ((_b = (_a = from.matched[index]) == null ? void 0 : _a.components) == null ? void 0 : _b.default);
    }
  );
  if (areComponentsSame) {
    return false;
  }
  return true;
}
const routerOptions0 = {
  scrollBehavior(to, from, savedPosition) {
    var _a;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const behavior = ((_a = useRouter().options) == null ? void 0 : _a.scrollBehaviorType) ?? "auto";
    let position = savedPosition || void 0;
    const routeAllowsScrollToTop = typeof to.meta.scrollToTop === "function" ? to.meta.scrollToTop(to, from) : to.meta.scrollToTop;
    if (!position && from && to && routeAllowsScrollToTop !== false && isChangingPage(to, from)) {
      position = { left: 0, top: 0 };
    }
    if (to.path === from.path) {
      if (from.hash && !to.hash) {
        return { left: 0, top: 0 };
      }
      if (to.hash) {
        return { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
      }
      return false;
    }
    const hasTransition = (route) => !!(route.meta.pageTransition ?? appPageTransition);
    const hookToWait = hasTransition(from) && hasTransition(to) ? "page:transition:finish" : "page:finish";
    return new Promise((resolve) => {
      nuxtApp.hooks.hookOnce(hookToWait, async () => {
        await new Promise((resolve2) => setTimeout(resolve2, 0));
        if (to.hash) {
          position = { el: to.hash, top: _getHashElementScrollMarginTop(to.hash), behavior };
        }
        resolve(position);
      });
    });
  }
};
function _getHashElementScrollMarginTop(selector) {
  try {
    const elem = (void 0).querySelector(selector);
    if (elem) {
      return parseFloat(getComputedStyle(elem).scrollMarginTop);
    }
  } catch {
  }
  return 0;
}
const configRouterOptions = {
  hashMode: false,
  scrollBehaviorType: "auto"
};
const routerOptions = {
  ...configRouterOptions,
  ...routerOptions0
};
const validate$1 = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  var _a;
  let __temp, __restore;
  if (!((_a = to.meta) == null ? void 0 : _a.validate)) {
    return;
  }
  useRouter();
  const result = ([__temp, __restore] = executeAsync(() => Promise.resolve(to.meta.validate(to))), __temp = await __temp, __restore(), __temp);
  if (result === true) {
    return;
  }
  {
    return result;
  }
});
const manifest_45route_45rule = /* @__PURE__ */ defineNuxtRouteMiddleware(async (to) => {
  {
    return;
  }
});
const globalMiddleware = [
  validate$1,
  manifest_45route_45rule
];
const namedMiddleware = {
  admin: () => import('./admin-BCW8jiJf.mjs'),
  auth: () => import('./auth-CzF--Qsm.mjs'),
  "auth-admin": () => import('./authAdmin-cNcbHxCB.mjs')
};
const plugin = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:router",
  enforce: "pre",
  async setup(nuxtApp) {
    var _a, _b, _c;
    let __temp, __restore;
    let routerBase = (/* @__PURE__ */ useRuntimeConfig()).app.baseURL;
    if (routerOptions.hashMode && !routerBase.includes("#")) {
      routerBase += "#";
    }
    const history = ((_a = routerOptions.history) == null ? void 0 : _a.call(routerOptions, routerBase)) ?? createMemoryHistory(routerBase);
    const routes = ((_b = routerOptions.routes) == null ? void 0 : _b.call(routerOptions, _routes)) ?? _routes;
    let startPosition;
    const initialURL = nuxtApp.ssrContext.url;
    const router = createRouter({
      ...routerOptions,
      scrollBehavior: (to, from, savedPosition) => {
        if (from === START_LOCATION) {
          startPosition = savedPosition;
          return;
        }
        if (routerOptions.scrollBehavior) {
          router.options.scrollBehavior = routerOptions.scrollBehavior;
          if ("scrollRestoration" in (void 0).history) {
            const unsub = router.beforeEach(() => {
              unsub();
              (void 0).history.scrollRestoration = "manual";
            });
          }
          return routerOptions.scrollBehavior(to, START_LOCATION, startPosition || savedPosition);
        }
      },
      history,
      routes
    });
    nuxtApp.vueApp.use(router);
    const previousRoute = shallowRef(router.currentRoute.value);
    router.afterEach((_to, from) => {
      previousRoute.value = from;
    });
    Object.defineProperty(nuxtApp.vueApp.config.globalProperties, "previousRoute", {
      get: () => previousRoute.value
    });
    const _route = shallowRef(router.resolve(initialURL));
    const syncCurrentRoute = () => {
      _route.value = router.currentRoute.value;
    };
    nuxtApp.hook("page:finish", syncCurrentRoute);
    router.afterEach((to, from) => {
      var _a2, _b2, _c2, _d;
      if (((_b2 = (_a2 = to.matched[0]) == null ? void 0 : _a2.components) == null ? void 0 : _b2.default) === ((_d = (_c2 = from.matched[0]) == null ? void 0 : _c2.components) == null ? void 0 : _d.default)) {
        syncCurrentRoute();
      }
    });
    const route = {};
    for (const key in _route.value) {
      Object.defineProperty(route, key, {
        get: () => _route.value[key]
      });
    }
    nuxtApp._route = shallowReactive(route);
    nuxtApp._middleware = nuxtApp._middleware || {
      global: [],
      named: {}
    };
    useError();
    try {
      if (true) {
        ;
        [__temp, __restore] = executeAsync(() => router.push(initialURL)), await __temp, __restore();
        ;
      }
      ;
      [__temp, __restore] = executeAsync(() => router.isReady()), await __temp, __restore();
      ;
    } catch (error2) {
      [__temp, __restore] = executeAsync(() => nuxtApp.runWithContext(() => showError(error2))), await __temp, __restore();
    }
    if ((_c = nuxtApp.ssrContext) == null ? void 0 : _c.islandContext) {
      return { provide: { router } };
    }
    const initialLayout = nuxtApp.payload.state._layout;
    router.beforeEach(async (to, from) => {
      var _a2, _b2;
      await nuxtApp.callHook("page:loading:start");
      to.meta = reactive(to.meta);
      if (nuxtApp.isHydrating && initialLayout && !isReadonly(to.meta.layout)) {
        to.meta.layout = initialLayout;
      }
      nuxtApp._processingMiddleware = true;
      if (!((_a2 = nuxtApp.ssrContext) == null ? void 0 : _a2.islandContext)) {
        const middlewareEntries = /* @__PURE__ */ new Set([...globalMiddleware, ...nuxtApp._middleware.global]);
        for (const component of to.matched) {
          const componentMiddleware = component.meta.middleware;
          if (!componentMiddleware) {
            continue;
          }
          for (const entry2 of toArray$1(componentMiddleware)) {
            middlewareEntries.add(entry2);
          }
        }
        {
          const routeRules = await nuxtApp.runWithContext(() => getRouteRules(to.path));
          if (routeRules.appMiddleware) {
            for (const key in routeRules.appMiddleware) {
              if (routeRules.appMiddleware[key]) {
                middlewareEntries.add(key);
              } else {
                middlewareEntries.delete(key);
              }
            }
          }
        }
        for (const entry2 of middlewareEntries) {
          const middleware = typeof entry2 === "string" ? nuxtApp._middleware.named[entry2] || await ((_b2 = namedMiddleware[entry2]) == null ? void 0 : _b2.call(namedMiddleware).then((r) => r.default || r)) : entry2;
          if (!middleware) {
            throw new Error(`Unknown route middleware: '${entry2}'.`);
          }
          const result = await nuxtApp.runWithContext(() => middleware(to, from));
          {
            if (result === false || result instanceof Error) {
              const error2 = result || createError$1({
                statusCode: 404,
                statusMessage: `Page Not Found: ${initialURL}`
              });
              await nuxtApp.runWithContext(() => showError(error2));
              return false;
            }
          }
          if (result === true) {
            continue;
          }
          if (result || result === false) {
            return result;
          }
        }
      }
    });
    router.onError(async () => {
      delete nuxtApp._processingMiddleware;
      await nuxtApp.callHook("page:loading:end");
    });
    router.afterEach(async (to, _from, failure) => {
      delete nuxtApp._processingMiddleware;
      if (failure) {
        await nuxtApp.callHook("page:loading:end");
      }
      if ((failure == null ? void 0 : failure.type) === 4) {
        return;
      }
      if (to.matched.length === 0) {
        await nuxtApp.runWithContext(() => showError(createError$1({
          statusCode: 404,
          fatal: false,
          statusMessage: `Page not found: ${to.fullPath}`,
          data: {
            path: to.fullPath
          }
        })));
      } else if (to.redirectedFrom && to.fullPath !== initialURL) {
        await nuxtApp.runWithContext(() => navigateTo(to.fullPath || "/"));
      }
    });
    nuxtApp.hooks.hookOnce("app:created", async () => {
      try {
        const to = router.resolve(initialURL);
        if ("name" in to) {
          to.name = void 0;
        }
        await router.replace({
          ...to,
          force: true
        });
        router.options.scrollBehavior = routerOptions.scrollBehavior;
      } catch (error2) {
        await nuxtApp.runWithContext(() => showError(error2));
      }
    });
    return { provide: { router } };
  }
});
function definePayloadReducer(name, reduce) {
  {
    (/* @__PURE__ */ useNuxtApp()).ssrContext._payloadReducers[name] = reduce;
  }
}
const reducers = {
  NuxtError: (data) => isNuxtError(data) && data.toJSON(),
  EmptyShallowRef: (data) => isRef(data) && isShallow(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  EmptyRef: (data) => isRef(data) && !data.value && (typeof data.value === "bigint" ? "0n" : JSON.stringify(data.value) || "_"),
  ShallowRef: (data) => isRef(data) && isShallow(data) && data.value,
  ShallowReactive: (data) => isReactive(data) && isShallow(data) && toRaw(data),
  Ref: (data) => isRef(data) && data.value,
  Reactive: (data) => isReactive(data) && toRaw(data)
};
const revive_payload_server_eJ33V7gbc6 = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:revive-payload:server",
  setup() {
    for (const reducer in reducers) {
      definePayloadReducer(reducer, reducers[reducer]);
    }
  }
});
const LazyIcon = defineAsyncComponent(() => import('./Icon-BNOXHT5T.mjs').then((r) => r.default));
const LazyIconCSS = defineAsyncComponent(() => import('./IconCSS-CZu6KJwV.mjs').then((r) => r.default));
const lazyGlobalComponents = [
  ["Icon", LazyIcon],
  ["IconCSS", LazyIconCSS]
];
const components_plugin_KR1HBZs4kY = /* @__PURE__ */ defineNuxtPlugin({
  name: "nuxt:global-components",
  setup(nuxtApp) {
    for (const [name, component] of lazyGlobalComponents) {
      nuxtApp.vueApp.component(name, component);
      nuxtApp.vueApp.component("Lazy" + name, component);
    }
  }
});
const clientOnlySymbol = Symbol.for("nuxt:client-only");
defineComponent({
  name: "ClientOnly",
  inheritAttrs: false,
  // eslint-disable-next-line vue/require-prop-types
  props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
  setup(_, { slots, attrs }) {
    const mounted = ref(false);
    provide(clientOnlySymbol, true);
    return (props) => {
      var _a;
      if (mounted.value) {
        return (_a = slots.default) == null ? void 0 : _a.call(slots);
      }
      const slot = slots.fallback || slots.placeholder;
      if (slot) {
        return slot();
      }
      const fallbackStr = props.fallback || props.placeholder || "";
      const fallbackTag = props.fallbackTag || props.placeholderTag || "span";
      return createElementBlock(fallbackTag, attrs, fallbackStr);
    };
  }
});
const breakpointsBootstrapV5 = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
  xxl: 1400
};
function startsWithBreakPoint(value) {
  return keys(breakpointsBootstrapV5).findIndex(
    (breakpoint) => value.startsWith(breakpoint)
  ) >= 0;
}
function isNumrable(value) {
  return !isNaN(parseInt(value));
}
function hasValue(value) {
  return isString(value) && value || isNumber(value) || isArray(value);
}
function toArray(value) {
  if (isArray(value)) {
    return value;
  }
  if (isString(value)) {
    return value.split(" ").filter((item) => item);
  }
  if (value == void 0 || value == false) {
    return [];
  }
  return [value];
}
function spacing(val, tag) {
  if (isNumrable(val)) {
    return `${tag}-${val}`;
  }
  if (startsWithBreakPoint(val)) {
    return `${tag}-${val}`;
  }
  if (val == "auto") {
    return `${tag}-${val}`;
  }
  return `${tag}${val}`;
}
function useDirective(element) {
  if (element && element.attributes) {
    for (const attr of element.attributes) {
      switch (attr.name) {
        case "text-break":
          element.classList.add(
            `text-break`
          );
          break;
        case "text-alignment":
          element.classList.add(
            `text-${attr.value}`
          );
          break;
        case "text-wrap":
          element.classList.add(
            `text-${attr.value}`
          );
          break;
        case "align-self":
          element.classList.add(
            `align-self-${attr.value}`
          );
          break;
        case "align-items":
          element.classList.add(
            `align-items-${attr.value}`
          );
          break;
        case "align-content":
          element.classList.add(
            `align-content-${attr.value}`
          );
          break;
        case "flex":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `d${hasValue(attr.value) ? `-${n}` : ""}-flex`)
          );
          break;
        case "flex-direction":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `flex-${n}`)
          );
          break;
        case "flex-fill":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `flex${hasValue(attr.value) ? `-${n}` : ""}-fill`)
          );
          break;
        case "flex-grow":
          element.classList.add(
            `flex-${attr.value}`
          );
          break;
        case "flex-wrap":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `flex-${n}`)
          );
          break;
        case "flex-order":
          element.classList.add(
            `order-${attr.value}`
          );
          break;
        case "float":
          element.classList.add(
            `float-${attr.value}`
          );
          break;
        case "shadow":
          element.classList.add(
            `shadow${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "ratio":
          element.classList.add(
            `ratio-${attr.value}`
          );
          break;
        case "fixed":
          element.classList.add(
            `fixed-${attr.value}`
          );
          break;
        case "sticky":
          element.classList.add(
            `sticky-top`
          );
          break;
        case "overflow":
          element.classList.add(
            `overflow-${attr.value}`
          );
          break;
        case "table-responsive":
          element.classList.add(
            `table-responsive${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "justify-content":
          element.classList.add(
            `justify-content-${attr.value}`
          );
          break;
        case "align":
          element.classList.add(
            `align-${attr.value}`
          );
          break;
        case "order":
          element.classList.add(
            `order-${attr.value}`
          );
          break;
        case "offset":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `offset-${n}`)
          );
          break;
        case "object-fit":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `object-fit-${n}`)
          );
          break;
        case "z":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `z-${n}`)
          );
          break;
        case "font-size":
          element.classList.add(
            `fs-${attr.value}`
          );
          break;
        case "font-weight":
          element.classList.add(
            `fw-${attr.value}`
          );
          break;
        case "font-style":
          element.classList.add(
            `fst-${attr.value}`
          );
          break;
        case "line-height":
          element.classList.add(
            `lh-${attr.value}`
          );
          break;
        case "font-monospace":
          element.classList.add(
            `font-monospace`
          );
          break;
        case "text-reset":
          element.classList.add(
            `text-reset`
          );
          break;
        case "text-decoration":
          element.classList.add(
            `text-decoration-${attr.value}`
          );
          break;
        case "text-truncate":
          element.classList.add(
            `text-truncate`
          );
          break;
        case "text-transform":
          element.classList.add(
            `text-${attr.value}`
          );
          break;
        case "text-background":
          element.classList.add(
            `text-bg-${attr.value}`
          );
          break;
        case "headings":
          element.classList.add(
            `h${attr.value}`
          );
          break;
        case "text-color":
          element.classList.add(
            `text-${attr.value}`
          );
          break;
        case "padding":
          element.classList.add(
            ...addClassNames(attr.value, (n) => spacing(n, "p"))
          );
          break;
        case "margin":
          element.classList.add(
            ...addClassNames(attr.value, (n) => spacing(n, "m"))
          );
          break;
        case "gap":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `gap-${n}`)
          );
          break;
        case "visually-hidden":
          element.classList.add(
            `visually-hidden${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "vertical-Align":
          element.classList.add(
            `align-${attr.value}`
          );
          break;
        case "user-select":
          element.classList.add(
            `user-select-${attr.value}`
          );
          break;
        case "pointer-events":
          element.classList.add(
            `pe-${attr.value}`
          );
          break;
        case "background-color":
          element.classList.add(
            `bg-${attr.value}`
          );
          break;
        case "background-gradient":
          element.classList.add(
            `bg-gradient`
          );
          break;
        case "background-opacity":
          element.classList.add(
            `bg-opacity-${attr.value}`
          );
          break;
        case "relative-width":
          element.classList.add(
            `w-${attr.value}`
          );
          break;
        case "relative-height":
          element.classList.add(
            `h-${attr.value}`
          );
          break;
        case "max-width":
          element.classList.add(
            `mw-100`
          );
          break;
        case "max-height":
          element.classList.add(
            `mh-100`
          );
          break;
        case "viewport-width":
          element.classList.add(
            `vw-100`
          );
          break;
        case "viewport-height":
          element.classList.add(
            `vh-100`
          );
          break;
        case "min-viewport-width":
          element.classList.add(
            `min-vw-100`
          );
          break;
        case "min-viewport-height":
          element.classList.add(
            `min-vh-100`
          );
          break;
        case "display":
          element.classList.add(
            ...addClassNames(attr.value, (n) => `d-${n}`)
          );
          break;
        case "opacity":
          element.classList.add(
            `opacity-${attr.value}`
          );
          break;
        case "placeholder":
          element.classList.add(
            `placeholder${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "placeholder-size":
          element.classList.add(
            `placeholder-${attr.value}`
          );
          break;
        case "col":
          element.classList.add(
            ...addClassNames(hasValue(attr.value), (n) => `col-${n}`)
          );
          break;
        case "position":
          element.classList.add(
            `position-${attr.value}`
          );
          break;
        case "top":
          element.classList.add(
            `top-${attr.value}`
          );
          break;
        case "start":
          element.classList.add(
            `start-${attr.value}`
          );
          break;
        case "end":
          element.classList.add(
            `end-${attr.value}`
          );
          break;
        case "bottom":
          element.classList.add(
            `bottom-${attr.value}`
          );
          break;
        case "translate":
          element.classList.add(
            `translate-${attr.value}`
          );
          break;
        case "focus-ring":
          element.classList.add(
            `focus-ring`
          );
          break;
        case "border":
          element.classList.add(
            `border${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "border-color":
          element.classList.add(
            `border-${attr.value}`
          );
          break;
        case "border-width":
          element.classList.add(
            `border-${attr.value}`
          );
          break;
        case "rounded":
          element.classList.add(
            `rounded${hasValue(attr.value) ? `-${attr.value}` : ""}`
          );
          break;
        case "rounded-size":
          element.classList.add(
            `rounded-${attr.value}`
          );
          break;
        case "link-opacity":
          element.classList.add(
            `link-opacity-${attr.value}`
          );
          break;
        case "link-underline":
          element.classList.add(
            `link-underline`
          );
          element.classList.add(
            ...addClassNames(hasValue(attr.value), (n) => `link-underline-opacity-${n}`)
          );
          break;
        case "link-offset":
          element.classList.add(
            ...addClassNames(hasValue(attr.value), (n) => `link-offset-${n}`)
          );
      }
    }
  }
}
function addClassNames(value, func) {
  const classArray = [];
  const values = toArray(value);
  values.forEach((n) => {
    classArray.push(func(n));
  });
  return classArray;
}
const bootstrap_PT9DIEO8vo = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive(
    "bootstrap",
    {
      mounted(el) {
        useDirective(el);
      }
    }
  );
});
const element_plus_teleports_plugin_h4Dmekbj62 = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.hook("app:rendered", (ctx) => {
    var _a;
    if ((_a = ctx.ssrContext) == null ? void 0 : _a.teleports) {
      ctx.ssrContext.teleports = renderTeleports(ctx.ssrContext.teleports);
    }
  });
});
function renderTeleports(teleports) {
  const body = Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith("#el-popper-container-") || [].includes(key)) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || "");
  return { ...teleports, body };
}
const ID_INJECTION_KEY = Symbol("elIdInjection");
ref(0);
const ZINDEX_INJECTION_KEY = Symbol("elZIndexContextKey");
const element_plus_injection_plugin_1RNPi6ogby = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.provide(ID_INJECTION_KEY, { "prefix": 1024, "current": 0 }).provide(ZINDEX_INJECTION_KEY, { "current": 0 });
});
const vue_draggable_UPVdqOrVyH = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component("draggable", VueDraggableNext);
});
const api_GFfDXud5Cr = /* @__PURE__ */ defineNuxtPlugin(() => {
});
const axious_tw6KwSywaj = /* @__PURE__ */ defineNuxtPlugin((nuxtApp) => {
  const toast = distExports.useToast();
  nuxtApp.provide("toast", toast);
});
/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function isCallable(fn) {
  return typeof fn === "function";
}
function isNullOrUndefined$1(value) {
  return value === null || value === void 0;
}
const isObject = (obj) => obj !== null && !!obj && typeof obj === "object" && !Array.isArray(obj);
function isIndex(value) {
  return Number(value) >= 0;
}
function toNumber(value) {
  const n = parseFloat(value);
  return isNaN(n) ? value : n;
}
function isObjectLike(value) {
  return typeof value === "object" && value !== null;
}
function getTag(value) {
  if (value == null) {
    return value === void 0 ? "[object Undefined]" : "[object Null]";
  }
  return Object.prototype.toString.call(value);
}
function isPlainObject(value) {
  if (!isObjectLike(value) || getTag(value) !== "[object Object]") {
    return false;
  }
  if (Object.getPrototypeOf(value) === null) {
    return true;
  }
  let proto = value;
  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }
  return Object.getPrototypeOf(value) === proto;
}
function merge(target, source) {
  Object.keys(source).forEach((key) => {
    if (isPlainObject(source[key]) && isPlainObject(target[key])) {
      if (!target[key]) {
        target[key] = {};
      }
      merge(target[key], source[key]);
      return;
    }
    target[key] = source[key];
  });
  return target;
}
function normalizeFormPath(path) {
  const pathArr = path.split(".");
  if (!pathArr.length) {
    return "";
  }
  let fullPath = String(pathArr[0]);
  for (let i = 1; i < pathArr.length; i++) {
    if (isIndex(pathArr[i])) {
      fullPath += `[${pathArr[i]}]`;
      continue;
    }
    fullPath += `.${pathArr[i]}`;
  }
  return fullPath;
}
const RULES = {};
function defineRule(id, validator) {
  guardExtend(id, validator);
  RULES[id] = validator;
}
function resolveRule(id) {
  return RULES[id];
}
function guardExtend(id, validator) {
  if (isCallable(validator)) {
    return;
  }
  throw new Error(`Extension Error: The validator '${id}' must be a function.`);
}
function set(obj, key, val) {
  if (typeof val.value === "object")
    val.value = klona(val.value);
  if (!val.enumerable || val.get || val.set || !val.configurable || !val.writable || key === "__proto__") {
    Object.defineProperty(obj, key, val);
  } else
    obj[key] = val.value;
}
function klona(x) {
  if (typeof x !== "object")
    return x;
  var i = 0, k, list, tmp, str = Object.prototype.toString.call(x);
  if (str === "[object Object]") {
    tmp = Object.create(x.__proto__ || null);
  } else if (str === "[object Array]") {
    tmp = Array(x.length);
  } else if (str === "[object Set]") {
    tmp = /* @__PURE__ */ new Set();
    x.forEach(function(val) {
      tmp.add(klona(val));
    });
  } else if (str === "[object Map]") {
    tmp = /* @__PURE__ */ new Map();
    x.forEach(function(val, key) {
      tmp.set(klona(key), klona(val));
    });
  } else if (str === "[object Date]") {
    tmp = /* @__PURE__ */ new Date(+x);
  } else if (str === "[object RegExp]") {
    tmp = new RegExp(x.source, x.flags);
  } else if (str === "[object DataView]") {
    tmp = new x.constructor(klona(x.buffer));
  } else if (str === "[object ArrayBuffer]") {
    tmp = x.slice(0);
  } else if (str.slice(-6) === "Array]") {
    tmp = new x.constructor(x);
  }
  if (tmp) {
    for (list = Object.getOwnPropertySymbols(x); i < list.length; i++) {
      set(tmp, list[i], Object.getOwnPropertyDescriptor(x, list[i]));
    }
    for (i = 0, list = Object.getOwnPropertyNames(x); i < list.length; i++) {
      if (Object.hasOwnProperty.call(tmp, k = list[i]) && tmp[k] === x[k])
        continue;
      set(tmp, k, Object.getOwnPropertyDescriptor(x, k));
    }
  }
  return tmp || x;
}
const FormContextKey = Symbol("vee-validate-form");
const FieldContextKey = Symbol("vee-validate-field-instance");
const IS_ABSENT = Symbol("Default empty value");
function isLocator(value) {
  return isCallable(value) && !!value.__locatorRef;
}
function isTypedSchema(value) {
  return !!value && isCallable(value.parse) && value.__type === "VVTypedSchema";
}
function isYupValidator(value) {
  return !!value && isCallable(value.validate);
}
function hasCheckedAttr(type) {
  return type === "checkbox" || type === "radio";
}
function isContainerValue(value) {
  return isObject(value) || Array.isArray(value);
}
function isEmptyContainer(value) {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return isObject(value) && Object.keys(value).length === 0;
}
function isNotNestedPath(path) {
  return /^\[.+\]$/i.test(path);
}
function isNativeMultiSelect(el) {
  return isNativeSelect(el) && el.multiple;
}
function isNativeSelect(el) {
  return el.tagName === "SELECT";
}
function isNativeMultiSelectNode(tag, attrs) {
  const hasTruthyBindingValue = ![false, null, void 0, 0].includes(attrs.multiple) && !Number.isNaN(attrs.multiple);
  return tag === "select" && "multiple" in attrs && hasTruthyBindingValue;
}
function shouldHaveValueBinding(tag, attrs) {
  return !isNativeMultiSelectNode(tag, attrs) && attrs.type !== "file" && !hasCheckedAttr(attrs.type);
}
function isFormSubmitEvent(evt) {
  return isEvent(evt) && evt.target && "submit" in evt.target;
}
function isEvent(evt) {
  if (!evt) {
    return false;
  }
  if (typeof Event !== "undefined" && isCallable(Event) && evt instanceof Event) {
    return true;
  }
  if (evt && evt.srcElement) {
    return true;
  }
  return false;
}
function isPropPresent(obj, prop) {
  return prop in obj && obj[prop] !== IS_ABSENT;
}
function isEqual(a, b) {
  if (a === b)
    return true;
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (a.constructor !== b.constructor)
      return false;
    var length, i, keys2;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (!isEqual(a[i], b[i]))
          return false;
      return true;
    }
    if (a instanceof Map && b instanceof Map) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      for (i of a.entries())
        if (!isEqual(i[1], b.get(i[0])))
          return false;
      return true;
    }
    if (isFile() && isFile()) {
      if (a.size !== b.size)
        return false;
      if (a.name !== b.name)
        return false;
      if (a.lastModified !== b.lastModified)
        return false;
      if (a.type !== b.type)
        return false;
      return true;
    }
    if (a instanceof Set && b instanceof Set) {
      if (a.size !== b.size)
        return false;
      for (i of a.entries())
        if (!b.has(i[0]))
          return false;
      return true;
    }
    if (ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length)
        return false;
      for (i = length; i-- !== 0; )
        if (a[i] !== b[i])
          return false;
      return true;
    }
    if (a.constructor === RegExp)
      return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf)
      return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString)
      return a.toString() === b.toString();
    keys2 = Object.keys(a);
    length = keys2.length;
    for (i = length; i-- !== 0; ) {
      var key = keys2[i];
      if (!isEqual(a[key], b[key]))
        return false;
    }
    return true;
  }
  return a !== a && b !== b;
}
function isFile(a) {
  {
    return false;
  }
}
function cleanupNonNestedPath(path) {
  if (isNotNestedPath(path)) {
    return path.replace(/\[|\]/gi, "");
  }
  return path;
}
function getFromPath(object, path, fallback) {
  if (!object) {
    return fallback;
  }
  if (isNotNestedPath(path)) {
    return object[cleanupNonNestedPath(path)];
  }
  const resolvedValue = (path || "").split(/\.|\[(\d+)\]/).filter(Boolean).reduce((acc, propKey) => {
    if (isContainerValue(acc) && propKey in acc) {
      return acc[propKey];
    }
    return fallback;
  }, object);
  return resolvedValue;
}
function setInPath(object, path, value) {
  if (isNotNestedPath(path)) {
    object[cleanupNonNestedPath(path)] = value;
    return;
  }
  const keys2 = path.split(/\.|\[(\d+)\]/).filter(Boolean);
  let acc = object;
  for (let i = 0; i < keys2.length; i++) {
    if (i === keys2.length - 1) {
      acc[keys2[i]] = value;
      return;
    }
    if (!(keys2[i] in acc) || isNullOrUndefined$1(acc[keys2[i]])) {
      acc[keys2[i]] = isIndex(keys2[i + 1]) ? [] : {};
    }
    acc = acc[keys2[i]];
  }
}
function unset(object, key) {
  if (Array.isArray(object) && isIndex(key)) {
    object.splice(Number(key), 1);
    return;
  }
  if (isObject(object)) {
    delete object[key];
  }
}
function unsetPath(object, path) {
  if (isNotNestedPath(path)) {
    delete object[cleanupNonNestedPath(path)];
    return;
  }
  const keys2 = path.split(/\.|\[(\d+)\]/).filter(Boolean);
  let acc = object;
  for (let i = 0; i < keys2.length; i++) {
    if (i === keys2.length - 1) {
      unset(acc, keys2[i]);
      break;
    }
    if (!(keys2[i] in acc) || isNullOrUndefined$1(acc[keys2[i]])) {
      break;
    }
    acc = acc[keys2[i]];
  }
  const pathValues = keys2.map((_, idx) => {
    return getFromPath(object, keys2.slice(0, idx).join("."));
  });
  for (let i = pathValues.length - 1; i >= 0; i--) {
    if (!isEmptyContainer(pathValues[i])) {
      continue;
    }
    if (i === 0) {
      unset(object, keys2[0]);
      continue;
    }
    unset(pathValues[i - 1], keys2[i - 1]);
  }
}
function keysOf(record) {
  return Object.keys(record);
}
function injectWithSelf(symbol, def = void 0) {
  const vm = getCurrentInstance();
  return (vm === null || vm === void 0 ? void 0 : vm.provides[symbol]) || inject(symbol, def);
}
function resolveNextCheckboxValue(currentValue, checkedValue, uncheckedValue) {
  if (Array.isArray(currentValue)) {
    const newVal = [...currentValue];
    const idx = newVal.findIndex((v) => isEqual(v, checkedValue));
    idx >= 0 ? newVal.splice(idx, 1) : newVal.push(checkedValue);
    return newVal;
  }
  return isEqual(currentValue, checkedValue) ? uncheckedValue : checkedValue;
}
function debounceAsync(inner, ms = 0) {
  let timer = null;
  let resolves = [];
  return function(...args) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      const result = inner(...args);
      resolves.forEach((r) => r(result));
      resolves = [];
    }, ms);
    return new Promise((resolve) => resolves.push(resolve));
  };
}
function applyModelModifiers(value, modifiers) {
  if (!isObject(modifiers)) {
    return value;
  }
  if (modifiers.number) {
    return toNumber(value);
  }
  return value;
}
function withLatest(fn, onDone) {
  let latestRun;
  return async function runLatest(...args) {
    const pending = fn(...args);
    latestRun = pending;
    const result = await pending;
    if (pending !== latestRun) {
      return result;
    }
    latestRun = void 0;
    return onDone(result, args);
  };
}
function normalizeErrorItem(message) {
  return Array.isArray(message) ? message : message ? [message] : [];
}
function omit(obj, keys2) {
  const target = {};
  for (const key in obj) {
    if (!keys2.includes(key)) {
      target[key] = obj[key];
    }
  }
  return target;
}
function debounceNextTick(inner) {
  let lastTick = null;
  let resolves = [];
  return function(...args) {
    const thisTick = nextTick(() => {
      if (lastTick !== thisTick) {
        return;
      }
      const result = inner(...args);
      resolves.forEach((r) => r(result));
      resolves = [];
      lastTick = null;
    });
    lastTick = thisTick;
    return new Promise((resolve) => resolves.push(resolve));
  };
}
function normalizeChildren(tag, context, slotProps) {
  if (!context.slots.default) {
    return context.slots.default;
  }
  if (typeof tag === "string" || !tag) {
    return context.slots.default(slotProps());
  }
  return {
    default: () => {
      var _a, _b;
      return (_b = (_a = context.slots).default) === null || _b === void 0 ? void 0 : _b.call(_a, slotProps());
    }
  };
}
function getBoundValue(el) {
  if (hasValueBinding(el)) {
    return el._value;
  }
  return void 0;
}
function hasValueBinding(el) {
  return "_value" in el;
}
function parseInputValue(el) {
  if (el.type === "number") {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
  }
  if (el.type === "range") {
    return Number.isNaN(el.valueAsNumber) ? el.value : el.valueAsNumber;
  }
  return el.value;
}
function normalizeEventValue(value) {
  if (!isEvent(value)) {
    return value;
  }
  const input = value.target;
  if (hasCheckedAttr(input.type) && hasValueBinding(input)) {
    return getBoundValue(input);
  }
  if (input.type === "file" && input.files) {
    const files = Array.from(input.files);
    return input.multiple ? files : files[0];
  }
  if (isNativeMultiSelect(input)) {
    return Array.from(input.options).filter((opt) => opt.selected && !opt.disabled).map(getBoundValue);
  }
  if (isNativeSelect(input)) {
    const selectedOption = Array.from(input.options).find((opt) => opt.selected);
    return selectedOption ? getBoundValue(selectedOption) : input.value;
  }
  return parseInputValue(input);
}
function normalizeRules(rules) {
  const acc = {};
  Object.defineProperty(acc, "_$$isNormalized", {
    value: true,
    writable: false,
    enumerable: false,
    configurable: false
  });
  if (!rules) {
    return acc;
  }
  if (isObject(rules) && rules._$$isNormalized) {
    return rules;
  }
  if (isObject(rules)) {
    return Object.keys(rules).reduce((prev, curr) => {
      const params = normalizeParams(rules[curr]);
      if (rules[curr] !== false) {
        prev[curr] = buildParams(params);
      }
      return prev;
    }, acc);
  }
  if (typeof rules !== "string") {
    return acc;
  }
  return rules.split("|").reduce((prev, rule) => {
    const parsedRule = parseRule(rule);
    if (!parsedRule.name) {
      return prev;
    }
    prev[parsedRule.name] = buildParams(parsedRule.params);
    return prev;
  }, acc);
}
function normalizeParams(params) {
  if (params === true) {
    return [];
  }
  if (Array.isArray(params)) {
    return params;
  }
  if (isObject(params)) {
    return params;
  }
  return [params];
}
function buildParams(provided) {
  const mapValueToLocator = (value) => {
    if (typeof value === "string" && value[0] === "@") {
      return createLocator(value.slice(1));
    }
    return value;
  };
  if (Array.isArray(provided)) {
    return provided.map(mapValueToLocator);
  }
  if (provided instanceof RegExp) {
    return [provided];
  }
  return Object.keys(provided).reduce((prev, key) => {
    prev[key] = mapValueToLocator(provided[key]);
    return prev;
  }, {});
}
const parseRule = (rule) => {
  let params = [];
  const name = rule.split(":")[0];
  if (rule.includes(":")) {
    params = rule.split(":").slice(1).join(":").split(",");
  }
  return { name, params };
};
function createLocator(value) {
  const locator = (crossTable) => {
    const val = getFromPath(crossTable, value) || crossTable[value];
    return val;
  };
  locator.__locatorRef = value;
  return locator;
}
function extractLocators(params) {
  if (Array.isArray(params)) {
    return params.filter(isLocator);
  }
  return keysOf(params).filter((key) => isLocator(params[key])).map((key) => params[key]);
}
const DEFAULT_CONFIG = {
  generateMessage: ({ field }) => `${field} is not valid.`,
  bails: true,
  validateOnBlur: true,
  validateOnChange: true,
  validateOnInput: false,
  validateOnModelUpdate: true
};
let currentConfig = Object.assign({}, DEFAULT_CONFIG);
const getConfig = () => currentConfig;
const setConfig = (newConf) => {
  currentConfig = Object.assign(Object.assign({}, currentConfig), newConf);
};
const configure = setConfig;
async function validate(value, rules, options = {}) {
  const shouldBail = options === null || options === void 0 ? void 0 : options.bails;
  const field = {
    name: (options === null || options === void 0 ? void 0 : options.name) || "{field}",
    rules,
    label: options === null || options === void 0 ? void 0 : options.label,
    bails: shouldBail !== null && shouldBail !== void 0 ? shouldBail : true,
    formData: (options === null || options === void 0 ? void 0 : options.values) || {}
  };
  const result = await _validate(field, value);
  const errors = result.errors;
  return {
    errors,
    valid: !errors.length
  };
}
async function _validate(field, value) {
  if (isTypedSchema(field.rules) || isYupValidator(field.rules)) {
    return validateFieldWithTypedSchema(value, field.rules);
  }
  if (isCallable(field.rules) || Array.isArray(field.rules)) {
    const ctx = {
      field: field.label || field.name,
      name: field.name,
      label: field.label,
      form: field.formData,
      value
    };
    const pipeline = Array.isArray(field.rules) ? field.rules : [field.rules];
    const length2 = pipeline.length;
    const errors2 = [];
    for (let i = 0; i < length2; i++) {
      const rule = pipeline[i];
      const result = await rule(value, ctx);
      const isValid = typeof result !== "string" && !Array.isArray(result) && result;
      if (isValid) {
        continue;
      }
      if (Array.isArray(result)) {
        errors2.push(...result);
      } else {
        const message = typeof result === "string" ? result : _generateFieldError(ctx);
        errors2.push(message);
      }
      if (field.bails) {
        return {
          errors: errors2
        };
      }
    }
    return {
      errors: errors2
    };
  }
  const normalizedContext = Object.assign(Object.assign({}, field), { rules: normalizeRules(field.rules) });
  const errors = [];
  const rulesKeys = Object.keys(normalizedContext.rules);
  const length = rulesKeys.length;
  for (let i = 0; i < length; i++) {
    const rule = rulesKeys[i];
    const result = await _test(normalizedContext, value, {
      name: rule,
      params: normalizedContext.rules[rule]
    });
    if (result.error) {
      errors.push(result.error);
      if (field.bails) {
        return {
          errors
        };
      }
    }
  }
  return {
    errors
  };
}
function isYupError(err) {
  return !!err && err.name === "ValidationError";
}
function yupToTypedSchema(yupSchema) {
  const schema = {
    __type: "VVTypedSchema",
    async parse(values) {
      var _a;
      try {
        const output = await yupSchema.validate(values, { abortEarly: false });
        return {
          output,
          errors: []
        };
      } catch (err) {
        if (!isYupError(err)) {
          throw err;
        }
        if (!((_a = err.inner) === null || _a === void 0 ? void 0 : _a.length) && err.errors.length) {
          return { errors: [{ path: err.path, errors: err.errors }] };
        }
        const errors = err.inner.reduce((acc, curr) => {
          const path = curr.path || "";
          if (!acc[path]) {
            acc[path] = { errors: [], path };
          }
          acc[path].errors.push(...curr.errors);
          return acc;
        }, {});
        return { errors: Object.values(errors) };
      }
    }
  };
  return schema;
}
async function validateFieldWithTypedSchema(value, schema) {
  const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema);
  const result = await typedSchema.parse(value);
  const messages = [];
  for (const error of result.errors) {
    if (error.errors.length) {
      messages.push(...error.errors);
    }
  }
  return {
    errors: messages
  };
}
async function _test(field, value, rule) {
  const validator = resolveRule(rule.name);
  if (!validator) {
    throw new Error(`No such validator '${rule.name}' exists.`);
  }
  const params = fillTargetValues(rule.params, field.formData);
  const ctx = {
    field: field.label || field.name,
    name: field.name,
    label: field.label,
    value,
    form: field.formData,
    rule: Object.assign(Object.assign({}, rule), { params })
  };
  const result = await validator(value, params, ctx);
  if (typeof result === "string") {
    return {
      error: result
    };
  }
  return {
    error: result ? void 0 : _generateFieldError(ctx)
  };
}
function _generateFieldError(fieldCtx) {
  const message = getConfig().generateMessage;
  if (!message) {
    return "Field is invalid";
  }
  return message(fieldCtx);
}
function fillTargetValues(params, crossTable) {
  const normalize = (value) => {
    if (isLocator(value)) {
      return value(crossTable);
    }
    return value;
  };
  if (Array.isArray(params)) {
    return params.map(normalize);
  }
  return Object.keys(params).reduce((acc, param) => {
    acc[param] = normalize(params[param]);
    return acc;
  }, {});
}
async function validateTypedSchema(schema, values) {
  const typedSchema = isTypedSchema(schema) ? schema : yupToTypedSchema(schema);
  const validationResult = await typedSchema.parse(klona(values));
  const results = {};
  const errors = {};
  for (const error of validationResult.errors) {
    const messages = error.errors;
    const path = (error.path || "").replace(/\["(\d+)"\]/g, (_, m) => {
      return `[${m}]`;
    });
    results[path] = { valid: !messages.length, errors: messages };
    if (messages.length) {
      errors[path] = messages[0];
    }
  }
  return {
    valid: !validationResult.errors.length,
    results,
    errors,
    values: validationResult.value
  };
}
async function validateObjectSchema(schema, values, opts) {
  const paths = keysOf(schema);
  const validations = paths.map(async (path) => {
    var _a, _b, _c;
    const strings = (_a = opts === null || opts === void 0 ? void 0 : opts.names) === null || _a === void 0 ? void 0 : _a[path];
    const fieldResult = await validate(getFromPath(values, path), schema[path], {
      name: (strings === null || strings === void 0 ? void 0 : strings.name) || path,
      label: strings === null || strings === void 0 ? void 0 : strings.label,
      values,
      bails: (_c = (_b = opts === null || opts === void 0 ? void 0 : opts.bailsMap) === null || _b === void 0 ? void 0 : _b[path]) !== null && _c !== void 0 ? _c : true
    });
    return Object.assign(Object.assign({}, fieldResult), { path });
  });
  let isAllValid = true;
  const validationResults = await Promise.all(validations);
  const results = {};
  const errors = {};
  for (const result of validationResults) {
    results[result.path] = {
      valid: result.valid,
      errors: result.errors
    };
    if (!result.valid) {
      isAllValid = false;
      errors[result.path] = result.errors[0];
    }
  }
  return {
    valid: isAllValid,
    results,
    errors
  };
}
let ID_COUNTER = 0;
function useFieldState(path, init) {
  const { value, initialValue, setInitialValue } = _useFieldValue(path, init.modelValue, init.form);
  if (!init.form) {
    let setState2 = function(state2) {
      var _a;
      if ("value" in state2) {
        value.value = state2.value;
      }
      if ("errors" in state2) {
        setErrors(state2.errors);
      }
      if ("touched" in state2) {
        meta.touched = (_a = state2.touched) !== null && _a !== void 0 ? _a : meta.touched;
      }
      if ("initialValue" in state2) {
        setInitialValue(state2.initialValue);
      }
    };
    const { errors: errors2, setErrors } = createFieldErrors();
    const id = ID_COUNTER >= Number.MAX_SAFE_INTEGER ? 0 : ++ID_COUNTER;
    const meta = createFieldMeta(value, initialValue, errors2, init.schema);
    return {
      id,
      path,
      value,
      initialValue,
      meta,
      flags: { pendingUnmount: { [id]: false }, pendingReset: false },
      errors: errors2,
      setState: setState2
    };
  }
  const state = init.form.createPathState(path, {
    bails: init.bails,
    label: init.label,
    type: init.type,
    validate: init.validate,
    schema: init.schema
  });
  const errors = computed(() => state.errors);
  function setState(state2) {
    var _a, _b, _c;
    if ("value" in state2) {
      value.value = state2.value;
    }
    if ("errors" in state2) {
      (_a = init.form) === null || _a === void 0 ? void 0 : _a.setFieldError(unref(path), state2.errors);
    }
    if ("touched" in state2) {
      (_b = init.form) === null || _b === void 0 ? void 0 : _b.setFieldTouched(unref(path), (_c = state2.touched) !== null && _c !== void 0 ? _c : false);
    }
    if ("initialValue" in state2) {
      setInitialValue(state2.initialValue);
    }
  }
  return {
    id: Array.isArray(state.id) ? state.id[state.id.length - 1] : state.id,
    path,
    value,
    errors,
    meta: state,
    initialValue,
    flags: state.__flags,
    setState
  };
}
function _useFieldValue(path, modelValue, form) {
  const modelRef = ref(unref(modelValue));
  function resolveInitialValue2() {
    if (!form) {
      return unref(modelRef);
    }
    return getFromPath(form.initialValues.value, unref(path), unref(modelRef));
  }
  function setInitialValue(value2) {
    if (!form) {
      modelRef.value = value2;
      return;
    }
    form.setFieldInitialValue(unref(path), value2, true);
  }
  const initialValue = computed(resolveInitialValue2);
  if (!form) {
    const value2 = ref(resolveInitialValue2());
    return {
      value: value2,
      initialValue,
      setInitialValue
    };
  }
  const currentValue = resolveModelValue(modelValue, form, initialValue, path);
  form.stageInitialValue(unref(path), currentValue, true);
  const value = computed({
    get() {
      return getFromPath(form.values, unref(path));
    },
    set(newVal) {
      form.setFieldValue(unref(path), newVal, false);
    }
  });
  return {
    value,
    initialValue,
    setInitialValue
  };
}
function resolveModelValue(modelValue, form, initialValue, path) {
  if (isRef(modelValue)) {
    return unref(modelValue);
  }
  if (modelValue !== void 0) {
    return modelValue;
  }
  return getFromPath(form.values, unref(path), unref(initialValue));
}
function createFieldMeta(currentValue, initialValue, errors, schema) {
  var _a, _b;
  const isRequired = (_b = (_a = schema === null || schema === void 0 ? void 0 : schema.describe) === null || _a === void 0 ? void 0 : _a.call(schema).required) !== null && _b !== void 0 ? _b : false;
  const meta = reactive({
    touched: false,
    pending: false,
    valid: true,
    required: isRequired,
    validated: !!unref(errors).length,
    initialValue: computed(() => unref(initialValue)),
    dirty: computed(() => {
      return !isEqual(unref(currentValue), unref(initialValue));
    })
  });
  watch(errors, (value) => {
    meta.valid = !value.length;
  }, {
    immediate: true,
    flush: "sync"
  });
  return meta;
}
function createFieldErrors() {
  const errors = ref([]);
  return {
    errors,
    setErrors: (messages) => {
      errors.value = normalizeErrorItem(messages);
    }
  };
}
function useField(path, rules, opts) {
  if (hasCheckedAttr(opts === null || opts === void 0 ? void 0 : opts.type)) {
    return useFieldWithChecked(path, rules, opts);
  }
  return _useField(path, rules, opts);
}
function _useField(path, rules, opts) {
  const { initialValue: modelValue, validateOnMount, bails, type, checkedValue, label, validateOnValueUpdate, uncheckedValue, controlled, keepValueOnUnmount, syncVModel, form: controlForm } = normalizeOptions(opts);
  const injectedForm = controlled ? injectWithSelf(FormContextKey) : void 0;
  const form = controlForm || injectedForm;
  const name = computed(() => normalizeFormPath(toValue(path)));
  const validator = computed(() => {
    const schema = toValue(form === null || form === void 0 ? void 0 : form.schema);
    if (schema) {
      return void 0;
    }
    const rulesValue = unref(rules);
    if (isYupValidator(rulesValue) || isTypedSchema(rulesValue) || isCallable(rulesValue) || Array.isArray(rulesValue)) {
      return rulesValue;
    }
    return normalizeRules(rulesValue);
  });
  const { id, value, initialValue, meta, setState, errors, flags } = useFieldState(name, {
    modelValue,
    form,
    bails,
    label,
    type,
    validate: validator.value ? validate$12 : void 0,
    schema: isTypedSchema(rules) ? rules : void 0
  });
  const errorMessage = computed(() => errors.value[0]);
  if (syncVModel) {
    useVModel({
      value,
      prop: syncVModel,
      handleChange,
      shouldValidate: () => validateOnValueUpdate && !flags.pendingReset
    });
  }
  const handleBlur = (evt, shouldValidate = false) => {
    meta.touched = true;
    if (shouldValidate) {
      validateWithStateMutation();
    }
  };
  async function validateCurrentValue(mode) {
    var _a, _b;
    if (form === null || form === void 0 ? void 0 : form.validateSchema) {
      const { results } = await form.validateSchema(mode);
      return (_a = results[toValue(name)]) !== null && _a !== void 0 ? _a : { valid: true, errors: [] };
    }
    if (validator.value) {
      return validate(value.value, validator.value, {
        name: toValue(name),
        label: toValue(label),
        values: (_b = form === null || form === void 0 ? void 0 : form.values) !== null && _b !== void 0 ? _b : {},
        bails
      });
    }
    return { valid: true, errors: [] };
  }
  const validateWithStateMutation = withLatest(async () => {
    meta.pending = true;
    meta.validated = true;
    return validateCurrentValue("validated-only");
  }, (result) => {
    if (flags.pendingUnmount[field.id]) {
      return result;
    }
    setState({ errors: result.errors });
    meta.pending = false;
    meta.valid = result.valid;
    return result;
  });
  const validateValidStateOnly = withLatest(async () => {
    return validateCurrentValue("silent");
  }, (result) => {
    meta.valid = result.valid;
    return result;
  });
  function validate$12(opts2) {
    if ((opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) === "silent") {
      return validateValidStateOnly();
    }
    return validateWithStateMutation();
  }
  function handleChange(e, shouldValidate = true) {
    const newValue = normalizeEventValue(e);
    setValue(newValue, shouldValidate);
  }
  function setTouched(isTouched) {
    meta.touched = isTouched;
  }
  function resetField(state) {
    var _a;
    const newValue = state && "value" in state ? state.value : initialValue.value;
    setState({
      value: klona(newValue),
      initialValue: klona(newValue),
      touched: (_a = state === null || state === void 0 ? void 0 : state.touched) !== null && _a !== void 0 ? _a : false,
      errors: (state === null || state === void 0 ? void 0 : state.errors) || []
    });
    meta.pending = false;
    meta.validated = false;
    validateValidStateOnly();
  }
  const vm = getCurrentInstance();
  function setValue(newValue, shouldValidate = true) {
    value.value = vm && syncVModel ? applyModelModifiers(newValue, vm.props.modelModifiers) : newValue;
    const validateFn = shouldValidate ? validateWithStateMutation : validateValidStateOnly;
    validateFn();
  }
  function setErrors(errors2) {
    setState({ errors: Array.isArray(errors2) ? errors2 : [errors2] });
  }
  const valueProxy = computed({
    get() {
      return value.value;
    },
    set(newValue) {
      setValue(newValue, validateOnValueUpdate);
    }
  });
  const field = {
    id,
    name,
    label,
    value: valueProxy,
    meta,
    errors,
    errorMessage,
    type,
    checkedValue,
    uncheckedValue,
    bails,
    keepValueOnUnmount,
    resetField,
    handleReset: () => resetField(),
    validate: validate$12,
    handleChange,
    handleBlur,
    setState,
    setTouched,
    setErrors,
    setValue
  };
  provide(FieldContextKey, field);
  if (isRef(rules) && typeof unref(rules) !== "function") {
    watch(rules, (value2, oldValue) => {
      if (isEqual(value2, oldValue)) {
        return;
      }
      meta.validated ? validateWithStateMutation() : validateValidStateOnly();
    }, {
      deep: true
    });
  }
  if (!form) {
    return field;
  }
  const dependencies = computed(() => {
    const rulesVal = validator.value;
    if (!rulesVal || isCallable(rulesVal) || isYupValidator(rulesVal) || isTypedSchema(rulesVal) || Array.isArray(rulesVal)) {
      return {};
    }
    return Object.keys(rulesVal).reduce((acc, rule) => {
      const deps = extractLocators(rulesVal[rule]).map((dep) => dep.__locatorRef).reduce((depAcc, depName) => {
        const depValue = getFromPath(form.values, depName) || form.values[depName];
        if (depValue !== void 0) {
          depAcc[depName] = depValue;
        }
        return depAcc;
      }, {});
      Object.assign(acc, deps);
      return acc;
    }, {});
  });
  watch(dependencies, (deps, oldDeps) => {
    if (!Object.keys(deps).length) {
      return;
    }
    const shouldValidate = !isEqual(deps, oldDeps);
    if (shouldValidate) {
      meta.validated ? validateWithStateMutation() : validateValidStateOnly();
    }
  });
  return field;
}
function normalizeOptions(opts) {
  const defaults = () => ({
    initialValue: void 0,
    validateOnMount: false,
    bails: true,
    label: void 0,
    validateOnValueUpdate: true,
    keepValueOnUnmount: void 0,
    syncVModel: false,
    controlled: true
  });
  const isVModelSynced = !!(opts === null || opts === void 0 ? void 0 : opts.syncVModel);
  const modelPropName = typeof (opts === null || opts === void 0 ? void 0 : opts.syncVModel) === "string" ? opts.syncVModel : (opts === null || opts === void 0 ? void 0 : opts.modelPropName) || "modelValue";
  const initialValue = isVModelSynced && !("initialValue" in (opts || {})) ? getCurrentModelValue(getCurrentInstance(), modelPropName) : opts === null || opts === void 0 ? void 0 : opts.initialValue;
  if (!opts) {
    return Object.assign(Object.assign({}, defaults()), { initialValue });
  }
  const checkedValue = "valueProp" in opts ? opts.valueProp : opts.checkedValue;
  const controlled = "standalone" in opts ? !opts.standalone : opts.controlled;
  const syncVModel = (opts === null || opts === void 0 ? void 0 : opts.modelPropName) || (opts === null || opts === void 0 ? void 0 : opts.syncVModel) || false;
  return Object.assign(Object.assign(Object.assign({}, defaults()), opts || {}), {
    initialValue,
    controlled: controlled !== null && controlled !== void 0 ? controlled : true,
    checkedValue,
    syncVModel
  });
}
function useFieldWithChecked(name, rules, opts) {
  const form = !(opts === null || opts === void 0 ? void 0 : opts.standalone) ? injectWithSelf(FormContextKey) : void 0;
  const checkedValue = opts === null || opts === void 0 ? void 0 : opts.checkedValue;
  const uncheckedValue = opts === null || opts === void 0 ? void 0 : opts.uncheckedValue;
  function patchCheckedApi(field) {
    const handleChange = field.handleChange;
    const checked = computed(() => {
      const currentValue = toValue(field.value);
      const checkedVal = toValue(checkedValue);
      return Array.isArray(currentValue) ? currentValue.findIndex((v) => isEqual(v, checkedVal)) >= 0 : isEqual(checkedVal, currentValue);
    });
    function handleCheckboxChange(e, shouldValidate = true) {
      var _a, _b;
      if (checked.value === ((_a = e === null || e === void 0 ? void 0 : e.target) === null || _a === void 0 ? void 0 : _a.checked)) {
        if (shouldValidate) {
          field.validate();
        }
        return;
      }
      const path = toValue(name);
      const pathState = form === null || form === void 0 ? void 0 : form.getPathState(path);
      const value = normalizeEventValue(e);
      let newValue = (_b = toValue(checkedValue)) !== null && _b !== void 0 ? _b : value;
      if (form && (pathState === null || pathState === void 0 ? void 0 : pathState.multiple) && pathState.type === "checkbox") {
        newValue = resolveNextCheckboxValue(getFromPath(form.values, path) || [], newValue, void 0);
      } else if ((opts === null || opts === void 0 ? void 0 : opts.type) === "checkbox") {
        newValue = resolveNextCheckboxValue(toValue(field.value), newValue, toValue(uncheckedValue));
      }
      handleChange(newValue, shouldValidate);
    }
    return Object.assign(Object.assign({}, field), {
      checked,
      checkedValue,
      uncheckedValue,
      handleChange: handleCheckboxChange
    });
  }
  return patchCheckedApi(_useField(name, rules, opts));
}
function useVModel({ prop, value, handleChange, shouldValidate }) {
  const vm = getCurrentInstance();
  if (!vm || !prop) {
    return;
  }
  const propName = typeof prop === "string" ? prop : "modelValue";
  const emitName = `update:${propName}`;
  if (!(propName in vm.props)) {
    return;
  }
  watch(value, (newValue) => {
    if (isEqual(newValue, getCurrentModelValue(vm, propName))) {
      return;
    }
    vm.emit(emitName, newValue);
  });
  watch(() => getCurrentModelValue(vm, propName), (propValue) => {
    if (propValue === IS_ABSENT && value.value === void 0) {
      return;
    }
    const newValue = propValue === IS_ABSENT ? void 0 : propValue;
    if (isEqual(newValue, value.value)) {
      return;
    }
    handleChange(newValue, shouldValidate());
  });
}
function getCurrentModelValue(vm, propName) {
  if (!vm) {
    return void 0;
  }
  return vm.props[propName];
}
const FieldImpl = /* @__PURE__ */ defineComponent({
  name: "Field",
  inheritAttrs: false,
  props: {
    as: {
      type: [String, Object],
      default: void 0
    },
    name: {
      type: String,
      required: true
    },
    rules: {
      type: [Object, String, Function],
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: false
    },
    validateOnBlur: {
      type: Boolean,
      default: void 0
    },
    validateOnChange: {
      type: Boolean,
      default: void 0
    },
    validateOnInput: {
      type: Boolean,
      default: void 0
    },
    validateOnModelUpdate: {
      type: Boolean,
      default: void 0
    },
    bails: {
      type: Boolean,
      default: () => getConfig().bails
    },
    label: {
      type: String,
      default: void 0
    },
    uncheckedValue: {
      type: null,
      default: void 0
    },
    modelValue: {
      type: null,
      default: IS_ABSENT
    },
    modelModifiers: {
      type: null,
      default: () => ({})
    },
    "onUpdate:modelValue": {
      type: null,
      default: void 0
    },
    standalone: {
      type: Boolean,
      default: false
    },
    keepValue: {
      type: Boolean,
      default: void 0
    }
  },
  setup(props, ctx) {
    const rules = toRef(props, "rules");
    const name = toRef(props, "name");
    const label = toRef(props, "label");
    const uncheckedValue = toRef(props, "uncheckedValue");
    const keepValue = toRef(props, "keepValue");
    const { errors, value, errorMessage, validate: validateField, handleChange, handleBlur, setTouched, resetField, handleReset, meta, checked, setErrors } = useField(name, rules, {
      validateOnMount: props.validateOnMount,
      bails: props.bails,
      standalone: props.standalone,
      type: ctx.attrs.type,
      initialValue: resolveInitialValue(props, ctx),
      // Only for checkboxes and radio buttons
      checkedValue: ctx.attrs.value,
      uncheckedValue,
      label,
      validateOnValueUpdate: props.validateOnModelUpdate,
      keepValueOnUnmount: keepValue,
      syncVModel: true
    });
    const onChangeHandler = function handleChangeWithModel(e, shouldValidate = true) {
      handleChange(e, shouldValidate);
    };
    const sharedProps = computed(() => {
      const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = resolveValidationTriggers(props);
      function baseOnBlur(e) {
        handleBlur(e, validateOnBlur);
        if (isCallable(ctx.attrs.onBlur)) {
          ctx.attrs.onBlur(e);
        }
      }
      function baseOnInput(e) {
        onChangeHandler(e, validateOnInput);
        if (isCallable(ctx.attrs.onInput)) {
          ctx.attrs.onInput(e);
        }
      }
      function baseOnChange(e) {
        onChangeHandler(e, validateOnChange);
        if (isCallable(ctx.attrs.onChange)) {
          ctx.attrs.onChange(e);
        }
      }
      const attrs = {
        name: props.name,
        onBlur: baseOnBlur,
        onInput: baseOnInput,
        onChange: baseOnChange
      };
      attrs["onUpdate:modelValue"] = (e) => onChangeHandler(e, validateOnModelUpdate);
      return attrs;
    });
    const fieldProps = computed(() => {
      const attrs = Object.assign({}, sharedProps.value);
      if (hasCheckedAttr(ctx.attrs.type) && checked) {
        attrs.checked = checked.value;
      }
      const tag = resolveTag(props, ctx);
      if (shouldHaveValueBinding(tag, ctx.attrs)) {
        attrs.value = value.value;
      }
      return attrs;
    });
    const componentProps = computed(() => {
      return Object.assign(Object.assign({}, sharedProps.value), { modelValue: value.value });
    });
    function slotProps() {
      return {
        field: fieldProps.value,
        componentField: componentProps.value,
        value: value.value,
        meta,
        errors: errors.value,
        errorMessage: errorMessage.value,
        validate: validateField,
        resetField,
        handleChange: onChangeHandler,
        handleInput: (e) => onChangeHandler(e, false),
        handleReset,
        handleBlur: sharedProps.value.onBlur,
        setTouched,
        setErrors
      };
    }
    ctx.expose({
      value,
      meta,
      errors,
      errorMessage,
      setErrors,
      setTouched,
      reset: resetField,
      validate: validateField,
      handleChange
    });
    return () => {
      const tag = resolveDynamicComponent(resolveTag(props, ctx));
      const children = normalizeChildren(tag, ctx, slotProps);
      if (tag) {
        return h(tag, Object.assign(Object.assign({}, ctx.attrs), fieldProps.value), children);
      }
      return children;
    };
  }
});
function resolveTag(props, ctx) {
  let tag = props.as || "";
  if (!props.as && !ctx.slots.default) {
    tag = "input";
  }
  return tag;
}
function resolveValidationTriggers(props) {
  var _a, _b, _c, _d;
  const { validateOnInput, validateOnChange, validateOnBlur, validateOnModelUpdate } = getConfig();
  return {
    validateOnInput: (_a = props.validateOnInput) !== null && _a !== void 0 ? _a : validateOnInput,
    validateOnChange: (_b = props.validateOnChange) !== null && _b !== void 0 ? _b : validateOnChange,
    validateOnBlur: (_c = props.validateOnBlur) !== null && _c !== void 0 ? _c : validateOnBlur,
    validateOnModelUpdate: (_d = props.validateOnModelUpdate) !== null && _d !== void 0 ? _d : validateOnModelUpdate
  };
}
function resolveInitialValue(props, ctx) {
  if (!hasCheckedAttr(ctx.attrs.type)) {
    return isPropPresent(props, "modelValue") ? props.modelValue : ctx.attrs.value;
  }
  return isPropPresent(props, "modelValue") ? props.modelValue : void 0;
}
const Field = FieldImpl;
let FORM_COUNTER = 0;
const PRIVATE_PATH_STATE_KEYS = ["bails", "fieldsCount", "id", "multiple", "type", "validate"];
function resolveInitialValues(opts) {
  const providedValues = Object.assign({}, toValue((opts === null || opts === void 0 ? void 0 : opts.initialValues) || {}));
  const schema = unref(opts === null || opts === void 0 ? void 0 : opts.validationSchema);
  if (schema && isTypedSchema(schema) && isCallable(schema.cast)) {
    return klona(schema.cast(providedValues) || {});
  }
  return klona(providedValues);
}
function useForm(opts) {
  var _a;
  const formId = FORM_COUNTER++;
  let FIELD_ID_COUNTER = 0;
  const isSubmitting = ref(false);
  const isValidating = ref(false);
  const submitCount = ref(0);
  const fieldArrays = [];
  const formValues = reactive(resolveInitialValues(opts));
  const pathStates = ref([]);
  const extraErrorsBag = ref({});
  const pathStateLookup = ref({});
  const rebuildPathLookup = debounceNextTick(() => {
    pathStateLookup.value = pathStates.value.reduce((names, state) => {
      names[normalizeFormPath(toValue(state.path))] = state;
      return names;
    }, {});
  });
  function setFieldError(field, message) {
    const state = findPathState(field);
    if (!state) {
      if (typeof field === "string") {
        extraErrorsBag.value[normalizeFormPath(field)] = normalizeErrorItem(message);
      }
      return;
    }
    if (typeof field === "string") {
      const normalizedPath = normalizeFormPath(field);
      if (extraErrorsBag.value[normalizedPath]) {
        delete extraErrorsBag.value[normalizedPath];
      }
    }
    state.errors = normalizeErrorItem(message);
    state.valid = !state.errors.length;
  }
  function setErrors(paths) {
    keysOf(paths).forEach((path) => {
      setFieldError(path, paths[path]);
    });
  }
  if (opts === null || opts === void 0 ? void 0 : opts.initialErrors) {
    setErrors(opts.initialErrors);
  }
  const errorBag = computed(() => {
    const pathErrors = pathStates.value.reduce((acc, state) => {
      if (state.errors.length) {
        acc[state.path] = state.errors;
      }
      return acc;
    }, {});
    return Object.assign(Object.assign({}, extraErrorsBag.value), pathErrors);
  });
  const errors = computed(() => {
    return keysOf(errorBag.value).reduce((acc, key) => {
      const errors2 = errorBag.value[key];
      if (errors2 === null || errors2 === void 0 ? void 0 : errors2.length) {
        acc[key] = errors2[0];
      }
      return acc;
    }, {});
  });
  const fieldNames = computed(() => {
    return pathStates.value.reduce((names, state) => {
      names[state.path] = { name: state.path || "", label: state.label || "" };
      return names;
    }, {});
  });
  const fieldBailsMap = computed(() => {
    return pathStates.value.reduce((map, state) => {
      var _a2;
      map[state.path] = (_a2 = state.bails) !== null && _a2 !== void 0 ? _a2 : true;
      return map;
    }, {});
  });
  const initialErrors = Object.assign({}, (opts === null || opts === void 0 ? void 0 : opts.initialErrors) || {});
  const keepValuesOnUnmount = (_a = opts === null || opts === void 0 ? void 0 : opts.keepValuesOnUnmount) !== null && _a !== void 0 ? _a : false;
  const { initialValues, originalInitialValues, setInitialValues } = useFormInitialValues(pathStates, formValues, opts);
  const meta = useFormMeta(pathStates, formValues, originalInitialValues, errors);
  const controlledValues = computed(() => {
    return pathStates.value.reduce((acc, state) => {
      const value = getFromPath(formValues, state.path);
      setInPath(acc, state.path, value);
      return acc;
    }, {});
  });
  const schema = opts === null || opts === void 0 ? void 0 : opts.validationSchema;
  function createPathState(path, config) {
    var _a2, _b;
    const initialValue = computed(() => getFromPath(initialValues.value, toValue(path)));
    const pathStateExists = pathStateLookup.value[toValue(path)];
    const isCheckboxOrRadio = (config === null || config === void 0 ? void 0 : config.type) === "checkbox" || (config === null || config === void 0 ? void 0 : config.type) === "radio";
    if (pathStateExists && isCheckboxOrRadio) {
      pathStateExists.multiple = true;
      const id2 = FIELD_ID_COUNTER++;
      if (Array.isArray(pathStateExists.id)) {
        pathStateExists.id.push(id2);
      } else {
        pathStateExists.id = [pathStateExists.id, id2];
      }
      pathStateExists.fieldsCount++;
      pathStateExists.__flags.pendingUnmount[id2] = false;
      return pathStateExists;
    }
    const currentValue = computed(() => getFromPath(formValues, toValue(path)));
    const pathValue = toValue(path);
    const unsetBatchIndex = UNSET_BATCH.findIndex((_path) => _path === pathValue);
    if (unsetBatchIndex !== -1) {
      UNSET_BATCH.splice(unsetBatchIndex, 1);
    }
    const isRequired = computed(() => {
      var _a3, _b2, _c, _d, _e, _f;
      if (isTypedSchema(schema)) {
        return (_c = (_b2 = (_a3 = schema).describe) === null || _b2 === void 0 ? void 0 : _b2.call(_a3, toValue(path)).required) !== null && _c !== void 0 ? _c : false;
      }
      if (isTypedSchema(config === null || config === void 0 ? void 0 : config.schema)) {
        return (_f = (_e = (_d = config === null || config === void 0 ? void 0 : config.schema).describe) === null || _e === void 0 ? void 0 : _e.call(_d).required) !== null && _f !== void 0 ? _f : false;
      }
      return false;
    });
    const id = FIELD_ID_COUNTER++;
    const state = reactive({
      id,
      path,
      touched: false,
      pending: false,
      valid: true,
      validated: !!((_a2 = initialErrors[pathValue]) === null || _a2 === void 0 ? void 0 : _a2.length),
      required: isRequired,
      initialValue,
      errors: shallowRef([]),
      bails: (_b = config === null || config === void 0 ? void 0 : config.bails) !== null && _b !== void 0 ? _b : false,
      label: config === null || config === void 0 ? void 0 : config.label,
      type: (config === null || config === void 0 ? void 0 : config.type) || "default",
      value: currentValue,
      multiple: false,
      __flags: {
        pendingUnmount: { [id]: false },
        pendingReset: false
      },
      fieldsCount: 1,
      validate: config === null || config === void 0 ? void 0 : config.validate,
      dirty: computed(() => {
        return !isEqual(unref(currentValue), unref(initialValue));
      })
    });
    pathStates.value.push(state);
    pathStateLookup.value[pathValue] = state;
    rebuildPathLookup();
    if (errors.value[pathValue] && !initialErrors[pathValue]) {
      nextTick(() => {
        validateField(pathValue, { mode: "silent" });
      });
    }
    if (isRef(path)) {
      watch(path, (newPath) => {
        rebuildPathLookup();
        const nextValue = klona(currentValue.value);
        pathStateLookup.value[newPath] = state;
        nextTick(() => {
          setInPath(formValues, newPath, nextValue);
        });
      });
    }
    return state;
  }
  const debouncedSilentValidation = debounceAsync(_validateSchema, 5);
  const debouncedValidation = debounceAsync(_validateSchema, 5);
  const validateSchema = withLatest(async (mode) => {
    return await (mode === "silent" ? debouncedSilentValidation() : debouncedValidation());
  }, (formResult, [mode]) => {
    const currentErrorsPaths = keysOf(formCtx.errorBag.value);
    const paths = [
      .../* @__PURE__ */ new Set([...keysOf(formResult.results), ...pathStates.value.map((p) => p.path), ...currentErrorsPaths])
    ].sort();
    const results = paths.reduce((validation, _path) => {
      var _a2;
      const expectedPath = _path;
      const pathState = findPathState(expectedPath) || findHoistedPath(expectedPath);
      const messages = ((_a2 = formResult.results[expectedPath]) === null || _a2 === void 0 ? void 0 : _a2.errors) || [];
      const path = toValue(pathState === null || pathState === void 0 ? void 0 : pathState.path) || expectedPath;
      const fieldResult = mergeValidationResults({ errors: messages, valid: !messages.length }, validation.results[path]);
      validation.results[path] = fieldResult;
      if (!fieldResult.valid) {
        validation.errors[path] = fieldResult.errors[0];
      }
      if (pathState && extraErrorsBag.value[path]) {
        delete extraErrorsBag.value[path];
      }
      if (!pathState) {
        setFieldError(path, messages);
        return validation;
      }
      pathState.valid = fieldResult.valid;
      if (mode === "silent") {
        return validation;
      }
      if (mode === "validated-only" && !pathState.validated) {
        return validation;
      }
      setFieldError(pathState, fieldResult.errors);
      return validation;
    }, { valid: formResult.valid, results: {}, errors: {} });
    if (formResult.values) {
      results.values = formResult.values;
    }
    keysOf(results.results).forEach((path) => {
      var _a2;
      const pathState = findPathState(path);
      if (!pathState) {
        return;
      }
      if (mode === "silent") {
        return;
      }
      if (mode === "validated-only" && !pathState.validated) {
        return;
      }
      setFieldError(pathState, (_a2 = results.results[path]) === null || _a2 === void 0 ? void 0 : _a2.errors);
    });
    return results;
  });
  function mutateAllPathState(mutation) {
    pathStates.value.forEach(mutation);
  }
  function findPathState(path) {
    const normalizedPath = typeof path === "string" ? normalizeFormPath(path) : path;
    const pathState = typeof normalizedPath === "string" ? pathStateLookup.value[normalizedPath] : normalizedPath;
    return pathState;
  }
  function findHoistedPath(path) {
    const candidates = pathStates.value.filter((state) => path.startsWith(state.path));
    return candidates.reduce((bestCandidate, candidate) => {
      if (!bestCandidate) {
        return candidate;
      }
      return candidate.path.length > bestCandidate.path.length ? candidate : bestCandidate;
    }, void 0);
  }
  let UNSET_BATCH = [];
  let PENDING_UNSET;
  function unsetPathValue(path) {
    UNSET_BATCH.push(path);
    if (!PENDING_UNSET) {
      PENDING_UNSET = nextTick(() => {
        const sortedPaths = [...UNSET_BATCH].sort().reverse();
        sortedPaths.forEach((p) => {
          unsetPath(formValues, p);
        });
        UNSET_BATCH = [];
        PENDING_UNSET = null;
      });
    }
    return PENDING_UNSET;
  }
  function makeSubmissionFactory(onlyControlled) {
    return function submitHandlerFactory(fn, onValidationError) {
      return function submissionHandler(e) {
        if (e instanceof Event) {
          e.preventDefault();
          e.stopPropagation();
        }
        mutateAllPathState((s) => s.touched = true);
        isSubmitting.value = true;
        submitCount.value++;
        return validate2().then((result) => {
          const values = klona(formValues);
          if (result.valid && typeof fn === "function") {
            const controlled = klona(controlledValues.value);
            let submittedValues = onlyControlled ? controlled : values;
            if (result.values) {
              submittedValues = result.values;
            }
            return fn(submittedValues, {
              evt: e,
              controlledValues: controlled,
              setErrors,
              setFieldError,
              setTouched,
              setFieldTouched,
              setValues,
              setFieldValue,
              resetForm,
              resetField
            });
          }
          if (!result.valid && typeof onValidationError === "function") {
            onValidationError({
              values,
              evt: e,
              errors: result.errors,
              results: result.results
            });
          }
        }).then((returnVal) => {
          isSubmitting.value = false;
          return returnVal;
        }, (err) => {
          isSubmitting.value = false;
          throw err;
        });
      };
    };
  }
  const handleSubmitImpl = makeSubmissionFactory(false);
  const handleSubmit = handleSubmitImpl;
  handleSubmit.withControlled = makeSubmissionFactory(true);
  function removePathState(path, id) {
    const idx = pathStates.value.findIndex((s) => {
      return s.path === path && (Array.isArray(s.id) ? s.id.includes(id) : s.id === id);
    });
    const pathState = pathStates.value[idx];
    if (idx === -1 || !pathState) {
      return;
    }
    nextTick(() => {
      validateField(path, { mode: "silent", warn: false });
    });
    if (pathState.multiple && pathState.fieldsCount) {
      pathState.fieldsCount--;
    }
    if (Array.isArray(pathState.id)) {
      const idIndex = pathState.id.indexOf(id);
      if (idIndex >= 0) {
        pathState.id.splice(idIndex, 1);
      }
      delete pathState.__flags.pendingUnmount[id];
    }
    if (!pathState.multiple || pathState.fieldsCount <= 0) {
      pathStates.value.splice(idx, 1);
      unsetInitialValue(path);
      rebuildPathLookup();
      delete pathStateLookup.value[path];
    }
  }
  function destroyPath(path) {
    keysOf(pathStateLookup.value).forEach((key) => {
      if (key.startsWith(path)) {
        delete pathStateLookup.value[key];
      }
    });
    pathStates.value = pathStates.value.filter((s) => !s.path.startsWith(path));
    nextTick(() => {
      rebuildPathLookup();
    });
  }
  const formCtx = {
    formId,
    values: formValues,
    controlledValues,
    errorBag,
    errors,
    schema,
    submitCount,
    meta,
    isSubmitting,
    isValidating,
    fieldArrays,
    keepValuesOnUnmount,
    validateSchema: unref(schema) ? validateSchema : void 0,
    validate: validate2,
    setFieldError,
    validateField,
    setFieldValue,
    setValues,
    setErrors,
    setFieldTouched,
    setTouched,
    resetForm,
    resetField,
    handleSubmit,
    useFieldModel,
    defineInputBinds,
    defineComponentBinds,
    defineField,
    stageInitialValue,
    unsetInitialValue,
    setFieldInitialValue,
    createPathState,
    getPathState: findPathState,
    unsetPathValue,
    removePathState,
    initialValues,
    getAllPathStates: () => pathStates.value,
    destroyPath,
    isFieldTouched,
    isFieldDirty,
    isFieldValid
  };
  function setFieldValue(field, value, shouldValidate = true) {
    const clonedValue = klona(value);
    const path = typeof field === "string" ? field : field.path;
    const pathState = findPathState(path);
    if (!pathState) {
      createPathState(path);
    }
    setInPath(formValues, path, clonedValue);
    if (shouldValidate) {
      validateField(path);
    }
  }
  function forceSetValues(fields, shouldValidate = true) {
    keysOf(formValues).forEach((key) => {
      delete formValues[key];
    });
    keysOf(fields).forEach((path) => {
      setFieldValue(path, fields[path], false);
    });
    if (shouldValidate) {
      validate2();
    }
  }
  function setValues(fields, shouldValidate = true) {
    merge(formValues, fields);
    fieldArrays.forEach((f) => f && f.reset());
    if (shouldValidate) {
      validate2();
    }
  }
  function createModel(path, shouldValidate) {
    const pathState = findPathState(toValue(path)) || createPathState(path);
    return computed({
      get() {
        return pathState.value;
      },
      set(value) {
        var _a2;
        const pathValue = toValue(path);
        setFieldValue(pathValue, value, (_a2 = toValue(shouldValidate)) !== null && _a2 !== void 0 ? _a2 : false);
      }
    });
  }
  function setFieldTouched(field, isTouched) {
    const pathState = findPathState(field);
    if (pathState) {
      pathState.touched = isTouched;
    }
  }
  function isFieldTouched(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.touched;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.touched);
  }
  function isFieldDirty(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.dirty;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).some((s) => s.dirty);
  }
  function isFieldValid(field) {
    const pathState = findPathState(field);
    if (pathState) {
      return pathState.valid;
    }
    return pathStates.value.filter((s) => s.path.startsWith(field)).every((s) => s.valid);
  }
  function setTouched(fields) {
    if (typeof fields === "boolean") {
      mutateAllPathState((state) => {
        state.touched = fields;
      });
      return;
    }
    keysOf(fields).forEach((field) => {
      setFieldTouched(field, !!fields[field]);
    });
  }
  function resetField(field, state) {
    var _a2;
    const newValue = state && "value" in state ? state.value : getFromPath(initialValues.value, field);
    const pathState = findPathState(field);
    if (pathState) {
      pathState.__flags.pendingReset = true;
    }
    setFieldInitialValue(field, klona(newValue), true);
    setFieldValue(field, newValue, false);
    setFieldTouched(field, (_a2 = state === null || state === void 0 ? void 0 : state.touched) !== null && _a2 !== void 0 ? _a2 : false);
    setFieldError(field, (state === null || state === void 0 ? void 0 : state.errors) || []);
    nextTick(() => {
      if (pathState) {
        pathState.__flags.pendingReset = false;
      }
    });
  }
  function resetForm(resetState, opts2) {
    let newValues = klona((resetState === null || resetState === void 0 ? void 0 : resetState.values) ? resetState.values : originalInitialValues.value);
    newValues = (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) ? newValues : merge(originalInitialValues.value, newValues);
    newValues = isTypedSchema(schema) && isCallable(schema.cast) ? schema.cast(newValues) : newValues;
    setInitialValues(newValues);
    mutateAllPathState((state) => {
      var _a2;
      state.__flags.pendingReset = true;
      state.validated = false;
      state.touched = ((_a2 = resetState === null || resetState === void 0 ? void 0 : resetState.touched) === null || _a2 === void 0 ? void 0 : _a2[state.path]) || false;
      setFieldValue(state.path, getFromPath(newValues, state.path), false);
      setFieldError(state.path, void 0);
    });
    (opts2 === null || opts2 === void 0 ? void 0 : opts2.force) ? forceSetValues(newValues, false) : setValues(newValues, false);
    setErrors((resetState === null || resetState === void 0 ? void 0 : resetState.errors) || {});
    submitCount.value = (resetState === null || resetState === void 0 ? void 0 : resetState.submitCount) || 0;
    nextTick(() => {
      validate2({ mode: "silent" });
      mutateAllPathState((state) => {
        state.__flags.pendingReset = false;
      });
    });
  }
  async function validate2(opts2) {
    const mode = (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || "force";
    if (mode === "force") {
      mutateAllPathState((f) => f.validated = true);
    }
    if (formCtx.validateSchema) {
      return formCtx.validateSchema(mode);
    }
    isValidating.value = true;
    const validations = await Promise.all(pathStates.value.map((state) => {
      if (!state.validate) {
        return Promise.resolve({
          key: state.path,
          valid: true,
          errors: []
        });
      }
      return state.validate(opts2).then((result) => {
        return {
          key: state.path,
          valid: result.valid,
          errors: result.errors
        };
      });
    }));
    isValidating.value = false;
    const results = {};
    const errors2 = {};
    for (const validation of validations) {
      results[validation.key] = {
        valid: validation.valid,
        errors: validation.errors
      };
      if (validation.errors.length) {
        errors2[validation.key] = validation.errors[0];
      }
    }
    return {
      valid: validations.every((r) => r.valid),
      results,
      errors: errors2
    };
  }
  async function validateField(path, opts2) {
    var _a2;
    const state = findPathState(path);
    if (state && (opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) !== "silent") {
      state.validated = true;
    }
    if (schema) {
      const { results } = await validateSchema((opts2 === null || opts2 === void 0 ? void 0 : opts2.mode) || "validated-only");
      return results[path] || { errors: [], valid: true };
    }
    if (state === null || state === void 0 ? void 0 : state.validate) {
      return state.validate(opts2);
    }
    !state && ((_a2 = opts2 === null || opts2 === void 0 ? void 0 : opts2.warn) !== null && _a2 !== void 0 ? _a2 : true);
    return Promise.resolve({ errors: [], valid: true });
  }
  function unsetInitialValue(path) {
    unsetPath(initialValues.value, path);
  }
  function stageInitialValue(path, value, updateOriginal = false) {
    setFieldInitialValue(path, value);
    setInPath(formValues, path, value);
    if (updateOriginal && !(opts === null || opts === void 0 ? void 0 : opts.initialValues)) {
      setInPath(originalInitialValues.value, path, klona(value));
    }
  }
  function setFieldInitialValue(path, value, updateOriginal = false) {
    setInPath(initialValues.value, path, klona(value));
    if (updateOriginal) {
      setInPath(originalInitialValues.value, path, klona(value));
    }
  }
  async function _validateSchema() {
    const schemaValue = unref(schema);
    if (!schemaValue) {
      return { valid: true, results: {}, errors: {} };
    }
    isValidating.value = true;
    const formResult = isYupValidator(schemaValue) || isTypedSchema(schemaValue) ? await validateTypedSchema(schemaValue, formValues) : await validateObjectSchema(schemaValue, formValues, {
      names: fieldNames.value,
      bailsMap: fieldBailsMap.value
    });
    isValidating.value = false;
    return formResult;
  }
  const submitForm = handleSubmit((_, { evt }) => {
    if (isFormSubmitEvent(evt)) {
      evt.target.submit();
    }
  });
  if (isRef(schema)) {
    watch(schema, () => {
      var _a2;
      (_a2 = formCtx.validateSchema) === null || _a2 === void 0 ? void 0 : _a2.call(formCtx, "validated-only");
    });
  }
  provide(FormContextKey, formCtx);
  function defineField(path, config) {
    const label = isCallable(config) ? void 0 : config === null || config === void 0 ? void 0 : config.label;
    const pathState = findPathState(toValue(path)) || createPathState(path, { label });
    const evalConfig = () => isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
    function onBlur() {
      var _a2;
      pathState.touched = true;
      const validateOnBlur = (_a2 = evalConfig().validateOnBlur) !== null && _a2 !== void 0 ? _a2 : getConfig().validateOnBlur;
      if (validateOnBlur) {
        validateField(pathState.path);
      }
    }
    function onInput() {
      var _a2;
      const validateOnInput = (_a2 = evalConfig().validateOnInput) !== null && _a2 !== void 0 ? _a2 : getConfig().validateOnInput;
      if (validateOnInput) {
        nextTick(() => {
          validateField(pathState.path);
        });
      }
    }
    function onChange() {
      var _a2;
      const validateOnChange = (_a2 = evalConfig().validateOnChange) !== null && _a2 !== void 0 ? _a2 : getConfig().validateOnChange;
      if (validateOnChange) {
        nextTick(() => {
          validateField(pathState.path);
        });
      }
    }
    const props = computed(() => {
      const base = {
        onChange,
        onInput,
        onBlur
      };
      if (isCallable(config)) {
        return Object.assign(Object.assign({}, base), config(omit(pathState, PRIVATE_PATH_STATE_KEYS)).props || {});
      }
      if (config === null || config === void 0 ? void 0 : config.props) {
        return Object.assign(Object.assign({}, base), config.props(omit(pathState, PRIVATE_PATH_STATE_KEYS)));
      }
      return base;
    });
    const model = createModel(path, () => {
      var _a2, _b, _c;
      return (_c = (_a2 = evalConfig().validateOnModelUpdate) !== null && _a2 !== void 0 ? _a2 : (_b = getConfig()) === null || _b === void 0 ? void 0 : _b.validateOnModelUpdate) !== null && _c !== void 0 ? _c : true;
    });
    return [model, props];
  }
  function useFieldModel(pathOrPaths) {
    if (!Array.isArray(pathOrPaths)) {
      return createModel(pathOrPaths);
    }
    return pathOrPaths.map((p) => createModel(p, true));
  }
  function defineInputBinds(path, config) {
    const [model, props] = defineField(path, config);
    function onBlur() {
      props.value.onBlur();
    }
    function onInput(e) {
      const value = normalizeEventValue(e);
      setFieldValue(toValue(path), value, false);
      props.value.onInput();
    }
    function onChange(e) {
      const value = normalizeEventValue(e);
      setFieldValue(toValue(path), value, false);
      props.value.onChange();
    }
    return computed(() => {
      return Object.assign(Object.assign({}, props.value), {
        onBlur,
        onInput,
        onChange,
        value: model.value
      });
    });
  }
  function defineComponentBinds(path, config) {
    const [model, props] = defineField(path, config);
    const pathState = findPathState(toValue(path));
    function onUpdateModelValue(value) {
      model.value = value;
    }
    return computed(() => {
      const conf = isCallable(config) ? config(omit(pathState, PRIVATE_PATH_STATE_KEYS)) : config || {};
      return Object.assign({ [conf.model || "modelValue"]: model.value, [`onUpdate:${conf.model || "modelValue"}`]: onUpdateModelValue }, props.value);
    });
  }
  return Object.assign(Object.assign({}, formCtx), { values: readonly(formValues), handleReset: () => resetForm(), submitForm });
}
function useFormMeta(pathsState, currentValues, initialValues, errors) {
  const MERGE_STRATEGIES = {
    touched: "some",
    pending: "some",
    valid: "every"
  };
  const isDirty = computed(() => {
    return !isEqual(currentValues, unref(initialValues));
  });
  function calculateFlags() {
    const states = pathsState.value;
    return keysOf(MERGE_STRATEGIES).reduce((acc, flag) => {
      const mergeMethod = MERGE_STRATEGIES[flag];
      acc[flag] = states[mergeMethod]((s) => s[flag]);
      return acc;
    }, {});
  }
  const flags = reactive(calculateFlags());
  watchEffect(() => {
    const value = calculateFlags();
    flags.touched = value.touched;
    flags.valid = value.valid;
    flags.pending = value.pending;
  });
  return computed(() => {
    return Object.assign(Object.assign({ initialValues: unref(initialValues) }, flags), { valid: flags.valid && !keysOf(errors.value).length, dirty: isDirty.value });
  });
}
function useFormInitialValues(pathsState, formValues, opts) {
  const values = resolveInitialValues(opts);
  const initialValues = ref(values);
  const originalInitialValues = ref(klona(values));
  function setInitialValues(values2, updateFields = false) {
    initialValues.value = merge(klona(initialValues.value) || {}, klona(values2));
    originalInitialValues.value = merge(klona(originalInitialValues.value) || {}, klona(values2));
    if (!updateFields) {
      return;
    }
    pathsState.value.forEach((state) => {
      const wasTouched = state.touched;
      if (wasTouched) {
        return;
      }
      const newValue = getFromPath(initialValues.value, state.path);
      setInPath(formValues, state.path, klona(newValue));
    });
  }
  return {
    initialValues,
    originalInitialValues,
    setInitialValues
  };
}
function mergeValidationResults(a, b) {
  if (!b) {
    return a;
  }
  return {
    valid: a.valid && b.valid,
    errors: [...a.errors, ...b.errors]
  };
}
const FormImpl = /* @__PURE__ */ defineComponent({
  name: "Form",
  inheritAttrs: false,
  props: {
    as: {
      type: null,
      default: "form"
    },
    validationSchema: {
      type: Object,
      default: void 0
    },
    initialValues: {
      type: Object,
      default: void 0
    },
    initialErrors: {
      type: Object,
      default: void 0
    },
    initialTouched: {
      type: Object,
      default: void 0
    },
    validateOnMount: {
      type: Boolean,
      default: false
    },
    onSubmit: {
      type: Function,
      default: void 0
    },
    onInvalidSubmit: {
      type: Function,
      default: void 0
    },
    keepValues: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const validationSchema = toRef(props, "validationSchema");
    const keepValues = toRef(props, "keepValues");
    const { errors, errorBag, values, meta, isSubmitting, isValidating, submitCount, controlledValues, validate: validate2, validateField, handleReset, resetForm, handleSubmit, setErrors, setFieldError, setFieldValue, setValues, setFieldTouched, setTouched, resetField } = useForm({
      validationSchema: validationSchema.value ? validationSchema : void 0,
      initialValues: props.initialValues,
      initialErrors: props.initialErrors,
      initialTouched: props.initialTouched,
      validateOnMount: props.validateOnMount,
      keepValuesOnUnmount: keepValues
    });
    const submitForm = handleSubmit((_, { evt }) => {
      if (isFormSubmitEvent(evt)) {
        evt.target.submit();
      }
    }, props.onInvalidSubmit);
    const onSubmit = props.onSubmit ? handleSubmit(props.onSubmit, props.onInvalidSubmit) : submitForm;
    function handleFormReset(e) {
      if (isEvent(e)) {
        e.preventDefault();
      }
      handleReset();
      if (typeof ctx.attrs.onReset === "function") {
        ctx.attrs.onReset();
      }
    }
    function handleScopedSlotSubmit(evt, onSubmit2) {
      const onSuccess = typeof evt === "function" && !onSubmit2 ? evt : onSubmit2;
      return handleSubmit(onSuccess, props.onInvalidSubmit)(evt);
    }
    function getValues() {
      return klona(values);
    }
    function getMeta() {
      return klona(meta.value);
    }
    function getErrors() {
      return klona(errors.value);
    }
    function slotProps() {
      return {
        meta: meta.value,
        errors: errors.value,
        errorBag: errorBag.value,
        values,
        isSubmitting: isSubmitting.value,
        isValidating: isValidating.value,
        submitCount: submitCount.value,
        controlledValues: controlledValues.value,
        validate: validate2,
        validateField,
        handleSubmit: handleScopedSlotSubmit,
        handleReset,
        submitForm,
        setErrors,
        setFieldError,
        setFieldValue,
        setValues,
        setFieldTouched,
        setTouched,
        resetForm,
        resetField,
        getValues,
        getMeta,
        getErrors
      };
    }
    ctx.expose({
      setFieldError,
      setErrors,
      setFieldValue,
      setValues,
      setFieldTouched,
      setTouched,
      resetForm,
      validate: validate2,
      validateField,
      resetField,
      getValues,
      getMeta,
      getErrors,
      values,
      meta,
      errors
    });
    return function renderForm() {
      const tag = props.as === "form" ? props.as : !props.as ? null : resolveDynamicComponent(props.as);
      const children = normalizeChildren(tag, ctx, slotProps);
      if (!tag) {
        return children;
      }
      const formAttrs = tag === "form" ? {
        // Disables native validation as vee-validate will handle it.
        novalidate: true
      } : {};
      return h(tag, Object.assign(Object.assign(Object.assign({}, formAttrs), ctx.attrs), { onSubmit, onReset: handleFormReset }), children);
    };
  }
});
const Form = FormImpl;
const ErrorMessageImpl = /* @__PURE__ */ defineComponent({
  name: "ErrorMessage",
  props: {
    as: {
      type: String,
      default: void 0
    },
    name: {
      type: String,
      required: true
    }
  },
  setup(props, ctx) {
    const form = inject(FormContextKey, void 0);
    const message = computed(() => {
      return form === null || form === void 0 ? void 0 : form.errors.value[props.name];
    });
    function slotProps() {
      return {
        message: message.value
      };
    }
    return () => {
      if (!message.value) {
        return void 0;
      }
      const tag = props.as ? resolveDynamicComponent(props.as) : props.as;
      const children = normalizeChildren(tag, ctx, slotProps);
      const attrs = Object.assign({ role: "alert" }, ctx.attrs);
      if (!tag && (Array.isArray(children) || !children) && (children === null || children === void 0 ? void 0 : children.length)) {
        return children;
      }
      if ((Array.isArray(children) || !children) && !(children === null || children === void 0 ? void 0 : children.length)) {
        return h(tag || "span", attrs, message.value);
      }
      return h(tag, attrs, children);
    };
  }
});
const ErrorMessage = ErrorMessageImpl;
/**
  * vee-validate v4.12.6
  * (c) 2024 Abdelrahman Awad
  * @license MIT
  */
function getSingleParam(params, paramName) {
  return Array.isArray(params) ? params[0] : params[paramName];
}
function isEmpty(value) {
  if (value === null || value === void 0 || value === "") {
    return true;
  }
  if (Array.isArray(value) && value.length === 0) {
    return true;
  }
  return false;
}
const minValidator = (value, params) => {
  if (isEmpty(value)) {
    return true;
  }
  const length = getSingleParam(params, "length");
  if (Array.isArray(value)) {
    return value.every((val) => minValidator(val, { length }));
  }
  return [...String(value)].length >= Number(length);
};
function isNullOrUndefined(value) {
  return value === null || value === void 0;
}
function isEmptyArray(arr) {
  return Array.isArray(arr) && arr.length === 0;
}
const requiredValidator = (value) => {
  if (isNullOrUndefined(value) || isEmptyArray(value) || value === false) {
    return false;
  }
  return !!String(value).trim().length;
};
const vee_validate_KcKlKmvCrJ = /* @__PURE__ */ defineNuxtPlugin(() => {
  configure({
    generateMessage: (ctx) => {
      const messages = {
        required: `Thông tin này không được để trống!`,
        min: `Trường ${ctx.field} phải có ít nhất ${ctx.rule.params[0]} ký tự!`,
        numeric: `Trường ${ctx.field} phải là một số hợp lệ!`
      };
      return messages[ctx.rule.name];
    }
  });
  defineRule("required", requiredValidator);
  defineRule("min", minValidator);
  defineRule("email", (value) => {
    if (!value || !value.length) {
      return true;
    }
    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)) {
      return "Vui lòng nhập một email hợp lệ.";
    }
    return true;
  });
  defineRule("minLength", (value, [limit = 0]) => {
    if (!value || !value.length) {
      return true;
    }
    if (value.length < limit) {
      return `This field must be at least ${limit} characters`;
    }
    return true;
  });
  defineRule("password", (value) => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{5,}$/;
    return pattern.test(value) || "Mật khẩu phải có ít nhất 5 ký tự bao gồm chữ hoa, chữ thường và số.";
  });
  defineRule("phone", (value) => {
    const pattern = /((03|05|07|08|09|01[2|6|8|9])+([0-9]{8})|((\+84)+([0-9]{9})))\b/;
    return pattern.test(value) || "Số điện thoại không đúng.";
  });
  defineRule("onlyCharacters", (value) => {
    const pattern = /^[A-Za-zÀ-ỹ\s]+$/;
    return pattern.test(value) || "Họ tên chỉ được chứa ký tự chữ cái.";
  });
  defineRule("point", (value) => {
    const number = parseFloat(value);
    if (isNaN(number) && value != null) {
      return "Trường này phải là một số.";
    }
    if (number < 1 || number > 5) {
      return "Số phải nằm trong khoảng từ 1 đến 5.";
    }
    return true;
  });
  defineRule("naturalNumber", (value) => {
    const number = parseInt(value, 10);
    if (isNaN(number) || number < 1) {
      return "Phải là số tự nhiên và phải lớn hơn hoặc bằng 1.";
    }
    return true;
  });
  defineRule("cost", (value) => {
    const number = parseInt(value, 10);
    if (isNaN(number) || number < 0 || value.includes(".")) {
      return "Giá tiền là số nguyên dương lớn hơn 0, có dấu phẩy phân cách hàng nghìn.";
    }
    return true;
  });
  defineRule("discount", (value) => {
    const number = parseFloat(value);
    if (isNaN(number) || number < 0 || number > 100) {
      return "Giảm giá phải là một số và nằm trong khoảng từ 0 đến 100.";
    }
    return true;
  });
  defineRule("endDateGreaterThanStart", (value, [startDate]) => {
    if (!value || !startDate)
      return true;
    const start = new Date(startDate);
    const end = new Date(value);
    return end > start || "Ngày kết thúc phải lớn hơn ngày bắt đầu";
  });
  defineRule("paymentedLimit", (value, [totalBill]) => {
    if (value > totalBill) {
      return "Số tiền thanh toán không được lớn hơn tổng tiền";
    }
    return true;
  });
});
const plugins = [
  unhead_KgADcZ0jPj,
  plugin,
  revive_payload_server_eJ33V7gbc6,
  components_plugin_KR1HBZs4kY,
  bootstrap_PT9DIEO8vo,
  element_plus_teleports_plugin_h4Dmekbj62,
  element_plus_injection_plugin_1RNPi6ogby,
  vue_draggable_UPVdqOrVyH,
  api_GFfDXud5Cr,
  axious_tw6KwSywaj,
  vee_validate_KcKlKmvCrJ
];
const layouts = {
  default: () => import('./default-CuVs_HLa.mjs').then((m) => m.default || m)
};
const LayoutLoader = defineComponent({
  name: "LayoutLoader",
  inheritAttrs: false,
  props: {
    name: String,
    layoutProps: Object
  },
  async setup(props, context) {
    const LayoutComponent = await layouts[props.name]().then((r) => r.default || r);
    return () => h(LayoutComponent, props.layoutProps, context.slots);
  }
});
const __nuxt_component_0 = defineComponent({
  name: "NuxtLayout",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean, Object],
      default: null
    },
    fallback: {
      type: [String, Object],
      default: null
    }
  },
  setup(props, context) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const injectedRoute = inject(PageRouteSymbol);
    const route = injectedRoute === useRoute() ? useRoute$1() : injectedRoute;
    const layout = computed(() => {
      let layout2 = unref(props.name) ?? route.meta.layout ?? "default";
      if (layout2 && !(layout2 in layouts)) {
        if (props.fallback) {
          layout2 = unref(props.fallback);
        }
      }
      return layout2;
    });
    const layoutRef = ref();
    context.expose({ layoutRef });
    const done = nuxtApp.deferHydration();
    return () => {
      const hasLayout = layout.value && layout.value in layouts;
      const transitionProps = route.meta.layoutTransition ?? appLayoutTransition;
      return _wrapIf(Transition, hasLayout && transitionProps, {
        default: () => h(Suspense, { suspensible: true, onResolve: () => {
          nextTick(done);
        } }, {
          default: () => h(
            LayoutProvider,
            {
              layoutProps: mergeProps(context.attrs, { ref: layoutRef }),
              key: layout.value || void 0,
              name: layout.value,
              shouldProvide: !props.name,
              hasTransition: !!transitionProps
            },
            context.slots
          )
        })
      }).default();
    };
  }
});
const LayoutProvider = defineComponent({
  name: "NuxtLayoutProvider",
  inheritAttrs: false,
  props: {
    name: {
      type: [String, Boolean]
    },
    layoutProps: {
      type: Object
    },
    hasTransition: {
      type: Boolean
    },
    shouldProvide: {
      type: Boolean
    }
  },
  setup(props, context) {
    const name = props.name;
    if (props.shouldProvide) {
      provide(LayoutMetaSymbol, {
        isCurrent: (route) => name === (route.meta.layout ?? "default")
      });
    }
    return () => {
      var _a, _b;
      if (!name || typeof name === "string" && !(name in layouts)) {
        return (_b = (_a = context.slots).default) == null ? void 0 : _b.call(_a);
      }
      return h(
        LayoutLoader,
        { key: name, layoutProps: props.layoutProps, name },
        context.slots
      );
    };
  }
});
const RouteProvider = defineComponent({
  props: {
    vnode: {
      type: Object,
      required: true
    },
    route: {
      type: Object,
      required: true
    },
    vnodeRef: Object,
    renderKey: String,
    trackRootNodes: Boolean
  },
  setup(props) {
    const previousKey = props.renderKey;
    const previousRoute = props.route;
    const route = {};
    for (const key in props.route) {
      Object.defineProperty(route, key, {
        get: () => previousKey === props.renderKey ? props.route[key] : previousRoute[key]
      });
    }
    provide(PageRouteSymbol, shallowReactive(route));
    return () => {
      return h(props.vnode, { ref: props.vnodeRef });
    };
  }
});
const __nuxt_component_1 = defineComponent({
  name: "NuxtPage",
  inheritAttrs: false,
  props: {
    name: {
      type: String
    },
    transition: {
      type: [Boolean, Object],
      default: void 0
    },
    keepalive: {
      type: [Boolean, Object],
      default: void 0
    },
    route: {
      type: Object
    },
    pageKey: {
      type: [Function, String],
      default: null
    }
  },
  setup(props, { attrs, expose }) {
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    const pageRef = ref();
    const forkRoute = inject(PageRouteSymbol, null);
    let previousPageKey;
    expose({ pageRef });
    inject(LayoutMetaSymbol, null);
    let vnode;
    const done = nuxtApp.deferHydration();
    if (props.pageKey) {
      watch(() => props.pageKey, (next, prev) => {
        if (next !== prev) {
          nuxtApp.callHook("page:loading:start");
        }
      });
    }
    return () => {
      return h(RouterView, { name: props.name, route: props.route, ...attrs }, {
        default: (routeProps) => {
          if (!routeProps.Component) {
            done();
            return;
          }
          const key = generateRouteKey$1(routeProps, props.pageKey);
          if (!nuxtApp.isHydrating && !hasChildrenRoutes(forkRoute, routeProps.route, routeProps.Component) && previousPageKey === key) {
            nuxtApp.callHook("page:loading:end");
          }
          previousPageKey = key;
          const hasTransition = !!(props.transition ?? routeProps.route.meta.pageTransition ?? appPageTransition);
          const transitionProps = hasTransition && _mergeTransitionProps([
            props.transition,
            routeProps.route.meta.pageTransition,
            appPageTransition,
            { onAfterLeave: () => {
              nuxtApp.callHook("page:transition:finish", routeProps.Component);
            } }
          ].filter(Boolean));
          const keepaliveConfig = props.keepalive ?? routeProps.route.meta.keepalive ?? appKeepalive;
          vnode = _wrapIf(
            Transition,
            hasTransition && transitionProps,
            wrapInKeepAlive(
              keepaliveConfig,
              h(Suspense, {
                suspensible: true,
                onPending: () => nuxtApp.callHook("page:start", routeProps.Component),
                onResolve: () => {
                  nextTick(() => nuxtApp.callHook("page:finish", routeProps.Component).then(() => nuxtApp.callHook("page:loading:end")).finally(done));
                }
              }, {
                default: () => {
                  const providerVNode = h(RouteProvider, {
                    key: key || void 0,
                    vnode: routeProps.Component,
                    route: routeProps.route,
                    renderKey: key || void 0,
                    trackRootNodes: hasTransition,
                    vnodeRef: pageRef
                  });
                  return providerVNode;
                }
              })
            )
          ).default();
          return vnode;
        }
      });
    };
  }
});
function _mergeTransitionProps(routeProps) {
  const _props = routeProps.map((prop) => ({
    ...prop,
    onAfterLeave: prop.onAfterLeave ? toArray$1(prop.onAfterLeave) : void 0
  }));
  return defu(..._props);
}
function hasChildrenRoutes(fork, newRoute, Component) {
  if (!fork) {
    return false;
  }
  const index = newRoute.matched.findIndex((m) => {
    var _a;
    return ((_a = m.components) == null ? void 0 : _a.default) === (Component == null ? void 0 : Component.type);
  });
  return index < newRoute.matched.length - 1;
}
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLayout = __nuxt_component_0;
  const _component_NuxtPage = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(_attrs)}>`);
  _push(ssrRenderComponent(_component_NuxtLayout, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_NuxtPage, null, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_NuxtPage)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("app.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const AppComponent = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]);
const _sfc_main$1 = {
  __name: "nuxt-error-page",
  __ssrInlineRender: true,
  props: {
    error: Object
  },
  setup(__props) {
    const props = __props;
    const _error = props.error;
    _error.stack ? _error.stack.split("\n").splice(1).map((line) => {
      const text = line.replace("webpack:/", "").replace(".vue", ".js").trim();
      return {
        text,
        internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
      };
    }).map((i) => `<span class="stack${i.internal ? " internal" : ""}">${i.text}</span>`).join("\n") : "";
    const statusCode = Number(_error.statusCode || 500);
    const is404 = statusCode === 404;
    const statusMessage = _error.statusMessage ?? (is404 ? "Page Not Found" : "Internal Server Error");
    const description = _error.message || _error.toString();
    const stack = void 0;
    const _Error404 = defineAsyncComponent(() => import('./error-404-DFisIfRq.mjs').then((r) => r.default || r));
    const _Error = defineAsyncComponent(() => import('./error-500-xH3MAS1B.mjs').then((r) => r.default || r));
    const ErrorTemplate = is404 ? _Error404 : _Error;
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(ErrorTemplate), mergeProps({ statusCode: unref(statusCode), statusMessage: unref(statusMessage), description: unref(description), stack: unref(stack) }, _attrs), null, _parent));
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-error-page.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const ErrorComponent = _sfc_main$1;
const _sfc_main = {
  __name: "nuxt-root",
  __ssrInlineRender: true,
  setup(__props) {
    const IslandRenderer = () => null;
    const nuxtApp = /* @__PURE__ */ useNuxtApp();
    nuxtApp.deferHydration();
    nuxtApp.ssrContext.url;
    const SingleRenderer = false;
    provide(PageRouteSymbol, useRoute());
    nuxtApp.hooks.callHookWith((hooks) => hooks.map((hook) => hook()), "vue:setup");
    const error = useError();
    onErrorCaptured((err, target, info) => {
      nuxtApp.hooks.callHook("vue:error", err, target, info).catch((hookError) => console.error("[nuxt] Error in `vue:error` hook", hookError));
      {
        const p = nuxtApp.runWithContext(() => showError(err));
        onServerPrefetch(() => p);
        return false;
      }
    });
    const islandContext = nuxtApp.ssrContext.islandContext;
    return (_ctx, _push, _parent, _attrs) => {
      ssrRenderSuspense(_push, {
        default: () => {
          if (unref(error)) {
            _push(ssrRenderComponent(unref(ErrorComponent), { error: unref(error) }, null, _parent));
          } else if (unref(islandContext)) {
            _push(ssrRenderComponent(unref(IslandRenderer), { context: unref(islandContext) }, null, _parent));
          } else if (unref(SingleRenderer)) {
            ssrRenderVNode(_push, createVNode(resolveDynamicComponent(unref(SingleRenderer)), null, null), _parent);
          } else {
            _push(ssrRenderComponent(unref(AppComponent), null, null, _parent));
          }
        },
        _: 1
      });
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("node_modules/nuxt/dist/app/components/nuxt-root.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const RootComponent = _sfc_main;
let entry;
{
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (error) {
      await nuxt.hooks.callHook("app:error", error);
      nuxt.payload.error = nuxt.payload.error || createError(error);
    }
    if (ssrContext == null ? void 0 : ssrContext._renderResponse) {
      throw new Error("skipping render");
    }
    return vueApp;
  };
}
const entry$1 = (ssrContext) => entry(ssrContext);

const server = /*#__PURE__*/Object.freeze({
  __proto__: null,
  E: ErrorMessage,
  F: Form,
  _: _export_sfc,
  a: Field,
  b: useRoute,
  c: __nuxt_component_0,
  d: useRuntimeConfig,
  default: entry$1,
  e: navigateTo,
  f: defineNuxtRouteMiddleware,
  g: useNuxtApp,
  i: injectHead,
  n: nuxtLinkDefaults,
  r: resolveUnrefHeadInput,
  u: useRouter
});

export { ErrorMessage as E, Form as F, _export_sfc as _, Field as a, useRouter as b, __nuxt_component_0 as c, distExports as d, defineNuxtRouteMiddleware as e, useNuxtApp as f, nuxtLinkDefaults as g, useRuntimeConfig as h, injectHead as i, navigateTo as n, resolveUnrefHeadInput as r, server as s, useRoute as u };
//# sourceMappingURL=server.mjs.map
