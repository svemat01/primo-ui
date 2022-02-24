import { FC } from 'react';
import styled from 'styled-components';

const Box = styled.div<{ bgColor: string }>`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 1rem;

    background: ${({ bgColor }) => bgColor};

    /* min-height: 15rem;
    max-width: 25rem; */
    max-width: 20rem;
    width: 100%;

    border-radius: 0.8rem;

    border: 2px solid ${({ theme }) => theme.palette.secondary.default};
`;

const ValueText = styled.span`
    font-size: 4rem;
`;

const LabelText = styled.span`
    font-size: 2rem;
`;

export const OverviewBox: FC<{
    value: string;
    label: string;
    bgColor: string;
}> = ({ value, label, bgColor }) => {
    return (
        <Box bgColor={bgColor}>
            <ValueText>{value}</ValueText>
            <LabelText>{label}</LabelText>
        </Box>
    );
};
