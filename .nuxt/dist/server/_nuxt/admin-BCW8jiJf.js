import { f as defineNuxtRouteMiddleware, g as useNuxtApp } from "../server.mjs";
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
const admin = defineNuxtRouteMiddleware((to, from, next) => {
  const isAdminPage = to.path.includes("/tour") || to.path.includes("/account") || to.path.includes("/booking") || to.path.includes("/dashboard") || to.path.includes("/country") || to.path.includes("/customer") || to.path.includes("/hotel") || to.path.includes("/profile") || to.path.includes("/tourhotel");
  const nuxtApp = useNuxtApp();
  nuxtApp.isAdminPage = isAdminPage;
});
export {
  admin as default
};
//# sourceMappingURL=admin-BCW8jiJf.js.map
