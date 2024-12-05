import { f as defineNuxtRouteMiddleware, u as useRouter } from "../server.mjs";
import "jwt-decode";
import "vue";
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
import "vue/server-renderer";
const authAdmin = defineNuxtRouteMiddleware((to, from) => {
  useRouter();
});
export {
  authAdmin as default
};
//# sourceMappingURL=authAdmin-cNcbHxCB.js.map
