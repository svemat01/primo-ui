import createStore from 'zustand';
import { persist } from 'zustand/middleware';

import { getPrinterData } from '../../utils/getPrinterData';
import { ThemeNames } from '../../utils/theme';

export type PersistedStoreType = {
    theme: ThemeNames;
    setTheme: (value: ThemeNames) => void;

    primoServerUrl: string;
    setPrimoServerUrl: (value: string) => void;
};

export const usePersistedStore = createStore<PersistedStoreType>(
    persist<PersistedStoreType>(
        (set) => ({
            theme: 'light',
            setTheme: (value: ThemeNames) => set(() => ({ theme: value })),

            primoServerUrl:
                'https://fuckcors.app/https://pastebin.com/raw/KHW7y8Fu',
            setPrimoServerUrl: (value: string) => {
                getPrinterData();

                return set(() => ({ primoServerUrl: value }));
            },
        }),
        {
            name: 'settings',
        }
    )
);
