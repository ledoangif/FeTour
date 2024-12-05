import { e as defineNuxtRouteMiddleware, f as useNuxtApp } from './server.mjs';
import 'vue';
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
import 'vue/server-renderer';

const admin = defineNuxtRouteMiddleware((to, from, next) => {
  const isAdminPage = to.path.includes("/tour") || to.path.includes("/account") || to.path.includes("/booking") || to.path.includes("/dashboard") || to.path.includes("/country") || to.path.includes("/customer") || to.path.includes("/hotel") || to.path.includes("/profile") || to.path.includes("/tourhotel");
  const nuxtApp = useNuxtApp();
  nuxtApp.isAdminPage = isAdminPage;
});

export { admin as default };
//# sourceMappingURL=admin-BCW8jiJf.mjs.map
