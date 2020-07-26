import { createContext } from 'react'
import { ThemeKey } from './themes'

export const ThemeContext = createContext({
    mode: 'dark' as ThemeKey,
    setTheme(themeMode: ThemeKey) {
        this.mode = themeMode
    }
});

export default ThemeContext