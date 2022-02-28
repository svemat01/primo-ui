import styled from 'styled-components';

export const ButtonStyled = styled.div`
    background: ${({ theme }) => theme.palette.secondary.default};
    color: ${({ theme }) => theme.palette.primary.default};

    max-width: fit-content;

    padding: 0.5rem 1rem;

    font-size: 1.5rem;

    border-radius: 0.4em;

    :hover {
        cursor: pointer;
        background: ${({ theme }) => theme.palette.secondary.lighter};
        color: ${({ theme }) => theme.palette.primary.lighter};
    }
`;

// export const Button: FC<{
//     label: string;
// }> = ({ label }) => {
//     return <ButtonStyled>{label}</ButtonStyled>;
// };
