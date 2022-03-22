import createStore from 'zustand';

import { PrinterDataType } from '../../types/PrinterDataType';

export const usePrinterStore = createStore<PrinterDataType>((set) => ({
    onlinePrinters: [],
    offlinePrinters: [],
    needsRefill: [],

    printers: {},

    status: 'loading',
    error: null,
}));
