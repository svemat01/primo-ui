export type PrinterDataType = {
    onlinePrinters: string[];
    offlinePrinters: string[];
    needsRefill: string[];
    printers: PrinterType;

    status: 'loading' | 'loaded' | 'error';
    error: string | null;
};

export type PrinterColor = 'black' | 'cyan' | 'magenta' | 'yellow';

export type PrinterType = {
    [key: string]: {
        type: string;
        colors: {
            [key in PrinterColor]?: number;
        };
    };
};
