import { defineWebApplication, Extension, AppMenuItemExtension } from '@opencloud-eu/web-pkg'
import { urlJoin } from '@opencloud-eu/web-client'
import '@opencloud-eu/extension-sdk/tailwind.css'
import { RouteRecordRaw } from 'vue-router'
import { computed } from 'vue'
import { appName, initLanguage, loadLanguage } from './composables/useLanguage'

export default defineWebApplication({
  setup() {
    // Initialize language early
    initLanguage()

    const appInfo = {
      id: 'web-calendar',
      name: appName(),
      icon: 'calendar',
      color: '#3788d8'
    }

    const routes: RouteRecordRaw[] = [
      {
        path: '/',
        name: 'web-calendar',
        component: async () => {
          const [view] = await Promise.all([import('./views/Calendar.vue'), loadLanguage()])
          return view
        },
        meta: {
          authContext: 'user',
          title: appName()
        }
      }
    ]

    const extensions = () => {
      return computed<Extension[]>(() => {
        const menuItems: AppMenuItemExtension[] = [
          {
            id: `app.${appInfo.id}.menuItem`,
            type: 'appMenuItem',
            label: () => appInfo.name,
            color: appInfo.color,
            icon: appInfo.icon,
            path: urlJoin(appInfo.id)
          }
        ]
        return [...menuItems]
      })
    }

    return {
      appInfo,
      routes,
      extensions: extensions()
    }
  }
})
