import { e as defineNuxtRouteMiddleware, b as useRouter } from './server.mjs';
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

const authAdmin = defineNuxtRouteMiddleware((to, from) => {
  useRouter();
});

export { authAdmin as default };
//# sourceMappingURL=authAdmin-cNcbHxCB.mjs.map
