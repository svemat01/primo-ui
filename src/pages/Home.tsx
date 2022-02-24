import { FC } from 'react';
import styled, { useTheme } from 'styled-components';

import { OverviewBox } from '../components/OverviewBox';
import { RefillTable } from '../components/RefillTable';
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

const OverviewBoxes = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 2rem;
    justify-content: center;

    width: 100%;

    margin-bottom: 4rem;
`;

const Table = styled.table`
    background: ${({ theme }) => theme.palette.primary.darker};

    th {
        padding: 0.5rem 1rem;
    }
`;

export const Home: FC = () => {
    document.title = 'Home';

    const theme = useTheme();

    const onlinePrinters = usePrinterStore((state) => state.onlinePrinters);
    const offlinePrinters = usePrinterStore((state) => state.offlinePrinters);
    const needsRefill = usePrinterStore((state) => state.needsRefill);
    const printers = usePrinterStore((state) => state.printers);

    // const setInkThreshold = usePrinterStore((state) => state.setInkThreshold);

    return (
        <>
            <Wrapper>
                <MiniTitle>Overview:</MiniTitle>

                <OverviewBoxes>
                    <OverviewBox
                        value={Object.keys(printers).length.toString()}
                        label="Printers Scanned"
                        bgColor={theme.palette.blue}
                    ></OverviewBox>

                    <OverviewBox
                        value={onlinePrinters.length.toString()}
                        label="Online Printers"
                        bgColor={theme.palette.green}
                    ></OverviewBox>

                    <OverviewBox
                        value={needsRefill.length.toString()}
                        label="Needs Refill"
                        bgColor={theme.palette.yellow}
                    ></OverviewBox>

                    <OverviewBox
                        value={offlinePrinters.length.toString()}
                        label="Offline Printers"
                        bgColor={theme.palette.red}
                    ></OverviewBox>
                </OverviewBoxes>

                <MiniTitle>Refill Needed:</MiniTitle>

                <RefillTable />
            </Wrapper>
        </>
    );
};
