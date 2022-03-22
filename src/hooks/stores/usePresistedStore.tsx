import createStore from 'zustand';
import { persist } from 'zustand/middleware';

import { ThemeNames } from '../../utils/theme';

export type PersistedStoreType = {
    theme: ThemeNames;
    setTheme: (value: ThemeNames) => void;

    primoServerUrl: string;
    setPrimoServerUrl: (value: string) => void;

    inkThreshold: number;
    setInkThreshold: (threshold: number) => void;
};

export const usePersistedStore = createStore<PersistedStoreType>(
    persist<PersistedStoreType>(
        (set) => ({
            theme: 'light',
            setTheme: (value: ThemeNames) => set(() => ({ theme: value })),

            primoServerUrl:
                'https://fuckcors.app/https://pastebin.com/raw/KHW7y8Fu',
            setPrimoServerUrl: (value: string) => {
                return set(() => ({ primoServerUrl: value }));
            },

            inkThreshold: 20,
            setInkThreshold: (value: number) =>
                set(() => ({ inkThreshold: value })),
        }),
        {
            name: 'settings',
        }
    )
);
