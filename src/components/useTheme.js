import { useState, useContext, createContext } from "react";

const ThemeContext = createContext();
export const useTheme = () => {
    return useContext(ThemeContext);
};


export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState('dark');
    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    }
    const bgFirst = theme === 'dark' ? 'bg-zinc-900' : 'bg-zinc-50';
    const bgSecond = theme === 'dark' ? 'bg-zinc-800' : 'bg-zinc-100';
    const textColors = theme === 'dark' ? 'text-white' : 'text-black';
    const bgColors = theme === 'dark' ? 'bg-white' : 'bg-black';
    const themeLogo = theme === 'dark' ? 'logoLight.png' : 'logoDark.png';
    const themeIcon = theme === 'dark' ? 'moon.svg' : 'sun.svg';
    const themeIconHover = theme === 'dark' ? 'moonHover.svg' : 'sunHover.svg';

    const value = {
        toggleTheme, bgFirst, bgSecond, textColors, bgColors, themeLogo, themeIcon, themeIconHover
    }

    return (
        <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
    );
}
