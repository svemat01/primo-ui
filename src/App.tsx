import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { load as fontLoad } from 'webfontloader';

import { NavBar } from './components/navbar/Navbar';
import { usePersistedStore } from './hooks/stores/usePresistedStore';
import { usePrinterStore } from './hooks/stores/usePrinterStore';
import { Home } from './pages/Home';
import { Printers } from './pages/Printers';
import { GlobalStyle } from './styles/GlobalStyle';
import { NavLinkItemType } from './types/NavItemType';
import { getPrinterData } from './utils/getPrinterData';
import { Themes } from './utils/theme';

export const NavLinkItems: NavLinkItemType[] = [
    {
        id: 'home',
        path: '/',
        label: 'Home',
    },
    {
        id: 'printers',
        path: '/printers',
        label: 'Printers',
    },
];

const MiniTitle = styled.h1`
    font-size: 3rem;
    font-weight: 400;

    margin: 0 auto;
    width: fit-content;

    margin-bottom: 1rem;
`;

const ErrorMessage = styled.h2`
    color: #ff0000;
    font-size: 2rem;

    margin: 0 auto;
    width: fit-content;
`;

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/printers" element={<Printers />} />
        </Routes>
    );
};

const Main = () => {
    const status = usePrinterStore((state) => state.status);
    const error = usePrinterStore((state) => state.error);

    switch (status) {
        case 'loading':
            return <MiniTitle>Loading...</MiniTitle>;
        case 'error':
            return (
                <>
                    <MiniTitle>Error loading</MiniTitle>
                    <ErrorMessage>{error}</ErrorMessage>
                </>
            );
        case 'loaded':
            return <AppRoutes />;
    }
};

export const App = () => {
    fontLoad({
        google: {
            families: ['Roboto:100,300,400,500,700,900'],
        },
    });

    document.title = 'Primo UI';

    const inkThreshold = usePrinterStore((state) => state.inkThreshold);
    const serverUrl = usePersistedStore((state) => state.primoServerUrl);
    const currentThemeName = usePersistedStore((state) => state.theme);

    const currentTheme = Themes[currentThemeName];

    useEffect(() => {
        getPrinterData();
    }, [inkThreshold]);

    return (
        <ThemeProvider theme={currentTheme}>
            <BrowserRouter>
                <GlobalStyle />
                <NavBar />
                <Main />
            </BrowserRouter>
        </ThemeProvider>
    );
};

{
    /* <>
<Routes>
    <Route path="/" element={<Home />} />
</Routes>
</> */
}
