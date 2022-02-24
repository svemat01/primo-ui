import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: {
                darker: string;
                default: string;
                lighter: string;
            };
            secondary: {
                darker: string;
                default: string;
                lighter: string;
            };
            green: string;
            blue: string;
            red: string;
            yellow: string;
        };

        breakpoints: {
            desktop: string;
            tablet: string;
            mobile: string;
        };
    }
}
