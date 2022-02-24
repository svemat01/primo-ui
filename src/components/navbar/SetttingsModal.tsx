import { FC } from 'react';
import { ImCross } from 'react-icons/im';
import styled from 'styled-components';

import { useSettingStore } from '../../hooks/stores/useSettingStore';

const Background = styled.div`
    background-color: rgba(0, 0, 0, 0.5);
    width: 100vw;
    height: 100vh;
    z-index: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: fixed;
`;

const Modal = styled.div`
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    position: absolute;

    background-color: ${({ theme }) => theme.palette.primary.default};
    width: calc(100% - 4rem);
    max-width: 40rem;
    min-height: 50rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-top: 2rem;

    border-radius: 0.8rem;
`;

const Cross = styled(ImCross)`
    position: absolute;
    right: 1rem;
    top: 1rem;

    :hover {
        cursor: pointer;
    }
`;

export const SettingsModal: FC<{}> = () => {
    const open = useSettingStore((state) => state.open);
    const setOpen = useSettingStore((state) => state.setOpen);

    return open ? (
        <>
            <Background onClick={() => setOpen(false)} />
            <Modal>
                <Cross size={'2.5rem'} onClick={() => setOpen(false)} />
                <h1>Settings</h1>
            </Modal>
        </>
    ) : null;
};
