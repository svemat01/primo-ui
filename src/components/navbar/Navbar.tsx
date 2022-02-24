import { FC } from 'react';
import { AiFillPrinter } from 'react-icons/ai';
import styled from 'styled-components';

import { NavLinkItems } from '../../App';
import { NavLinkItem } from './items/NavLinkItem';
import { NavSettingsItem } from './items/SettingsItem';
import { SettingsModal } from './SetttingsModal';

const Nav = styled.header`
    display: flex;
    padding: 0.5rem;
    padding-left: 1rem;

    /* background: ${({ theme }) => theme.palette.primary.default}; */
    color: ${({ theme }) => theme.palette.secondary.darker};

    align-items: center;

    ul {
        margin-left: auto;
        margin-right: 1rem;

        list-style: none;

        display: flex;
        gap: 1rem;
        align-items: center;

        li {
            font-size: 2rem;
        }
    }
`;

const Divider = styled.hr`
    border-top: 2px solid ${({ theme }) => theme.palette.secondary.default};

    margin-bottom: 1rem;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-left: 1rem;
`;

export const NavBar: FC<{}> = () => {
    return (
        <>
            <Nav>
                <AiFillPrinter size={'3rem'} />
                <Title>Primo UI</Title>

                <ul>
                    {NavLinkItems.map((item) => {
                        return (
                            <NavLinkItem
                                key={item.id}
                                label={item.label}
                                path={item.path}
                            />
                        );
                    })}

                    <NavSettingsItem />
                </ul>
            </Nav>
            <Divider />
            <SettingsModal />
        </>
    );
};
