import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { PrintersTable } from '../components/PrintersTable';
import { usePrinterStore } from '../hooks/stores/usePrinterStore';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;

    align-items: center;
`;

const MiniTitle = styled.h1`
    font-size: 3rem;
    font-weight: 400;

    margin-bottom: 1rem;
`;

export const Printers: FC = () => {
    const theme = useTheme();

    const onlinePrinters = usePrinterStore((state) => state.onlinePrinters);
    const offlinePrinters = usePrinterStore((state) => state.offlinePrinters);
    const needsRefill = usePrinterStore((state) => state.needsRefill);
    const printers = usePrinterStore((state) => state.printers);

    // const setInkThreshold = usePrinterStore((state) => state.setInkThreshold);

    return (
        <>
            <Wrapper>
                <MiniTitle>Printers:</MiniTitle>
                <PrintersTable />
            </Wrapper>
        </>
    );
};
