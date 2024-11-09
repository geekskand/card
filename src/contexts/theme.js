import { createContext, useContext } from "react";

// Suggested code may be subject to a license. Learn more: ~LicenseLog:860245069.
export const ThemeContext = createContext({
    themeMode: "light",
    lightTheme: ()=>{},
    darkTheme: ()=>{},
});

export const ThemeProvider = ThemeContext.Provider

export const useTheme = () => useContext(ThemeContext);