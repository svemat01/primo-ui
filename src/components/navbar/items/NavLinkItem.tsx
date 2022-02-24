import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Li = styled.li`
    font-size: 2rem;
`;

export const NavLinkItem: FC<{ path: string; label: string }> = ({
    path,
    label,
}) => {
    return (
        <Li key={path + label}>
            <NavLink to={path}>{label}</NavLink>
        </Li>
    );
};
