// src/types/i18n.ts
export enum SupportedLocales {
    EN = 'en',
    ES = 'es',
    FR = 'fr',
    DE = 'de',
  }
  
  export interface Locale {
    code: SupportedLocales
    name: string
    nativeName: string
    flag: string
  }
  
  export interface AppTranslations {
    common: {
      loading: string
      error: string
    }
    navigation: {
      sneakPeek: string
      joinWaitlist: string
      about: string
    }
    animations: {
      title: string
      subtitle: string
    }
    landing: {
      title: string
      subtitle: string
    }
    botAndRecipes: {
      title: string
      subtitle: string
      headers: Record<string, string>
      descriptions: Record<string, string>
      tags: Record<string, string>
    }
    product: {
      title: string
      subtitle: string
      headers: Record<string, string>
      descriptions: Record<string, string>
      tags: Record<string, string>
    }
    footer: {
      aiCook: string
      contactUs: string
      copyright: string
    }
  }
  
  // Type for nested translation keys with dot notation
  export type TranslationKey = 
    | 'common.loading'
    | 'common.error'
    | 'navigation.sneakPeek'
    | 'navigation.joinWaitlist'
    | 'navigation.about'
    | 'animations.title'
    | 'animations.subtitle'
    | 'landing.title'
    | 'landing.subtitle'
    | 'botAndRecipes.title'
    | 'botAndRecipes.subtitle'
    | `botAndRecipes.headers.${string}`
    | `botAndRecipes.descriptions.${string}`
    | `botAndRecipes.tags.${string}`
    | 'product.title'
    | 'product.subtitle'
    | `product.headers.${string}`
    | `product.descriptions.${string}`
    | `product.tags.${string}`
    | 'footer.aiCook'
    | 'footer.contactUs'
    | 'footer.copyright'
  
  export interface I18nContextValue {
    locale: SupportedLocales
    translations: AppTranslations
    isLoading: boolean
    error: string | null
    t: (key: TranslationKey | string, fallback?: string) => string
    changeLanguage: (newLocale: SupportedLocales) => Promise<void>
    getAvailableLanguages: () => Locale[]
    getCurrentLanguage: () => Locale | undefined
    supportedLocales: SupportedLocales[]
    isReady: boolean
  }