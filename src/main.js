import.meta.glob('@/assets/css/main.css', { eager: true })
import.meta.glob('../config/style/*.{scss,css}', { eager: true })

import App from './App.vue'
import SetupApp from './modules/setup/views/Index.vue'
import { createPinia } from 'pinia'
import { createSSRApp } from 'vue'
import { createRouter } from './router'

export function createApp() {
  const isAPIConfigurationSet = __APP_ENV__.url && __APP_ENV__.project_token
  const app = createSSRApp(isAPIConfigurationSet ? App : SetupApp)
  const router = createRouter()
  const store = createPinia()

  app.use(router)
  app.use(store)

  return { app, router, store }
}