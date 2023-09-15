import { ComputedRef, Ref } from 'vue'
export type LayoutKey = string
declare module "C:/Users/He Tianxing/Documents/lottery/LotteryWebPage/node_modules/nuxt/dist/pages/runtime/composables" {
  interface PageMeta {
    layout?: false | LayoutKey | Ref<LayoutKey> | ComputedRef<LayoutKey>
  }
}