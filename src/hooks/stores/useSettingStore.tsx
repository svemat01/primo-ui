import createStore from 'zustand';

export type SettingType = {
    open: boolean;
    setOpen: (value: boolean) => void;
};

export const useSettingStore = createStore<SettingType>((set) => ({
    open: false,
    setOpen: (value: boolean) => set(() => ({ open: value })),
}));
