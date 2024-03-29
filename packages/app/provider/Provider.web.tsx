import { TamaguiProvider, TamaguiProviderProps, config } from '@my/ui'
import { NextThemeProvider, useRootTheme, useThemeSetting } from '@tamagui/next-theme'
import { type mode, useThemeStore } from 'app/zustand'
import { useEffect } from 'react'

export function Provider({ children, ...rest }: Omit<TamaguiProviderProps, 'config'>) {
  const [theme, setTheme] = useRootTheme()
  const themeSetting = useThemeSetting()!
  const { scheme } = useThemeStore()

  const current = () => {
    if (scheme === ('system' as mode)) {
      return themeSetting.systemTheme as mode
    }
    return scheme
  }

  return (
    <NextThemeProvider onChangeTheme={setTheme as any}>
      <TamaguiProvider config={config} defaultTheme={current()} disableInjectCSS {...rest}>
        {children}
      </TamaguiProvider>
    </NextThemeProvider>
  )
}
