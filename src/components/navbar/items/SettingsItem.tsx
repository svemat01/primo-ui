import { FC } from 'react';
import { BsGearFill } from 'react-icons/bs';
import styled from 'styled-components';

import { useSettingStore } from '../../../hooks/stores/useSettingStore';

const Li = styled.li`
    display: flex;
    align-items: center;

    :hover {
        cursor: pointer;
    }
`;

export const NavSettingsItem: FC<{}> = () => {
    const setOpen = useSettingStore((state) => state.setOpen);

    return (
        <Li key="Settings" onClick={() => setOpen(true)}>
            <BsGearFill size={'2.5rem'} />
        </Li>
    );
};
