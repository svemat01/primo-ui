import { DefaultTheme } from 'styled-components';

export const DarkTheme: DefaultTheme = {
    palette: {
        primary: {
            darkest: '#1a1a1a',
            darker: '#171717',
            default: '#262626',
            lighter: '#404040',
        },
        secondary: {
            lighter: '#f5f5f5',
            default: '#e5e5e5',
            darker: '#d4d4d4',
            darkest: '#a3a3a3',
        },
        blue: '#CFFAFE',
        green: '#DCFCE7',
        red: '#FEE2E2',
        yellow: '#FEF3C7',
        magenta: '#f3e8ff',
    },

    breakpoints: {
        desktop: '1000px',
        tablet: '930px',
        mobile: '550px',
    },
};

export const LightTheme: DefaultTheme = {
    palette: {
        primary: {
            lighter: '#f5f5f5',
            default: '#e5e5e5',
            darker: '#d4d4d4',
            darkest: '#a3a3a3',
        },
        secondary: {
            darkest: '#1a1a1a',
            darker: '#171717',
            default: '#262626',
            lighter: '#404040',
        },
        blue: '#CFFAFE',
        green: '#DCFCE7',
        red: '#FEE2E2',
        yellow: '#FEF3C7',
        magenta: '#f3e8ff',
    },

    breakpoints: {
        desktop: '1000px',
        tablet: '530px',
        mobile: '250px',
    },
};

export type ThemeNames = 'light' | 'dark';

export const Themes: {
    [key in ThemeNames]: DefaultTheme;
} = {
    light: LightTheme,
    dark: DarkTheme,
};
