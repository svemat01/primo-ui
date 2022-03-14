import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: {
                darkest: string;
                darker: string;
                default: string;
                lighter: string;
            };
            secondary: {
                darkest: string;
                darker: string;
                default: string;
                lighter: string;
            };
            green: string;
            blue: string;
            red: string;
            yellow: string;
            magenta: string;
        };

        breakpoints: {
            desktop: string;
            tablet: string;
            mobile: string;
        };
    }
}
