import axios from 'axios';

import { usePersistedStore } from '../hooks/stores/usePresistedStore';
import { usePrinterStore } from '../hooks/stores/usePrinterStore';
import { PrinterType } from '../types/PrinterDataType';

export const getPrinterData = async () => {
    const url = usePersistedStore.getState().primoServerUrl;

    if (!url) {
        usePrinterStore.setState({
            status: 'error',
            error: 'Primo server url is not set',
        });

        return;
    }

    const response = await axios({
        method: 'get',
        url,
        // url: 'https://fuckcors.app/https://pastebin.com/raw/KHW7y8Fu',
    }).catch((error) => {
        usePrinterStore.setState({
            status: 'error',
            error: `${error}`,
        });
    });

    if (!response) return;

    console.log(response);

    const inkThreshold = usePersistedStore((state) => state.inkThreshold);

    let printers: PrinterType = {};

    try {
        const data = await response.data;

        printers = data.data ? data.data : data;
    } catch (error) {
        usePrinterStore.setState({ status: 'error', error: `${error}` });
        console.error(error);

        return;
    }

    console.log(printers);

    // eslint-disable-next-line unicorn/prefer-at
    const firstPrinter = Object.values(printers)[0];

    if (response.status !== 200) {
        usePrinterStore.setState({
            status: 'error',
            error: `Server did not respond with 200 code\nCode: ${response.status}`,
        });

        return;
    }

    if (!firstPrinter?.type) {
        usePrinterStore.setState({
            status: 'error',
            error: 'Server did not respond with a valid printer type',
        });

        return;
    }

    usePrinterStore.setState({ status: 'loaded', error: null });

    const onlinePrinters = Object.keys(printers).filter((printerName) => {
        const printer = printers[printerName];

        return !!printer.colors;
    });

    const offlinePrinters = Object.keys(printers).filter((printerName) => {
        const printer = printers[printerName];

        return !printer.colors;
    });

    const needsRefill = Object.keys(printers).filter((printerName) => {
        const printer = printers[printerName];

        return (
            printer.colors &&
            Object.values(printer.colors).some((color) => color < inkThreshold)
        );
    });

    usePrinterStore.setState({
        onlinePrinters,
        offlinePrinters,
        needsRefill,
        printers,
    });
};
