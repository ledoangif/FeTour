import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["bootstrapIcons"]?: typeof import("nuxt-bootstrap-icons").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["icon"]?: typeof import("nuxt-icon").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["veeValidate"]?: typeof import("@vee-validate/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["elementPlus"]?: typeof import("@element-plus/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["vueuse"]?: typeof import("@vueuse/nuxt").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["fonts"]?: typeof import("@nuxt/fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["usebootstrap"]?: typeof import("usebootstrap").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["tiptap"]?: typeof import("nuxt-tiptap-editor").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["nuxt-bootstrap-icons", Exclude<NuxtConfig["bootstrapIcons"], boolean>] | ["nuxt-icon", Exclude<NuxtConfig["icon"], boolean>] | ["@vee-validate/nuxt", Exclude<NuxtConfig["veeValidate"], boolean>] | ["@element-plus/nuxt", Exclude<NuxtConfig["elementPlus"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["@vueuse/nuxt", Exclude<NuxtConfig["vueuse"], boolean>] | ["@nuxt/fonts", Exclude<NuxtConfig["fonts"], boolean>] | ["usebootstrap", Exclude<NuxtConfig["usebootstrap"], boolean>] | ["nuxt-tiptap-editor", Exclude<NuxtConfig["tiptap"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },
  }
  interface PublicRuntimeConfig {

  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }