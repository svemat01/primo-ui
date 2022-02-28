import { FC, useRef } from 'react';
import { ImCross } from 'react-icons/im';
import styled from 'styled-components';

import { usePersistedStore } from '../../hooks/stores/usePresistedStore';
import { useSettingStore } from '../../hooks/stores/useSettingStore';
import { getPrinterData } from '../../utils/getPrinterData';
import { ButtonStyled } from '../Button';

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

// ----------------------------------------------------------------------------

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
    /* align-items: center; */

    /* padding: 0 2rem; */
    padding-top: 2rem;

    border-radius: 0.8rem;
`;

// ----------------------------------------------------------------------------

const ModalBody = styled.div`
    flex-grow: 1;

    padding: 0 2rem;
`;

const ModalHeader = styled.h1`
    font-size: 2.5rem;
    font-weight: 400;

    margin-bottom: 1rem;
`;

const Cross = styled(ImCross)`
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;

    :hover {
        cursor: pointer;
    }
`;

const DoneButton = styled(ButtonStyled)`
    /* color: hotpink; */
    font-size: 2rem;
`;

const ServerUrlInput = styled.input`
    width: 100%;
    min-height: 2.5rem;

    border-radius: 0.6rem;

    border: 0;
    outline: 0;

    padding: 0.5rem 0.75rem;

    font-size: 1.5rem;

    border: 2px solid ${({ theme }) => theme.palette.secondary.default};

    vertical-align: middle;
`;
const ServerUrlLabel = styled.label`
    width: 100%;

    font-size: 1.75rem;
`;

const SaveUrlButton = styled(ButtonStyled)`
    font-size: 1.5rem;

    margin-left: auto;
    margin-top: 0.5rem;

    background-color: ${({ theme }) => theme.palette.green};
    color: ${({ theme }) => theme.palette.secondary.default};

    border: 2px solid ${({ theme }) => theme.palette.secondary.default};

    :hover {
        background-color: ${({ theme }) => theme.palette.green};
        color: ${({ theme }) => theme.palette.secondary.default};

        filter: brightness(0.8);
    }
`;

// ----------------------------------------------------------------------------

const ModalFooter = styled.div`
    background: ${({ theme }) => theme.palette.primary.darker};

    min-height: 6rem;

    justify-self: self-end;

    border-bottom-left-radius: 0.8rem;
    border-bottom-right-radius: 0.8rem;

    display: flex;
    justify-content: flex-end;
    align-items: center;

    padding: 1rem;
`;

export const SettingsModal: FC<{}> = () => {
    const open = useSettingStore((state) => state.open);
    const setOpen = useSettingStore((state) => state.setOpen);

    const inputElement = useRef<HTMLInputElement>();

    const serverUrl = usePersistedStore((state) => state.primoServerUrl);
    const setServerUrl = usePersistedStore((state) => state.setPrimoServerUrl);

    return open ? (
        <>
            <Background onClick={() => setOpen(false)} />
            <Modal>
                <Cross size={'1.5rem'} onClick={() => setOpen(false)} />
                <ModalBody>
                    <ModalHeader>Settings</ModalHeader>

                    <ServerUrlLabel>Server URL</ServerUrlLabel>
                    <ServerUrlInput
                        value={serverUrl}
                        onChange={(element) =>
                            setServerUrl(element.target.value)
                        }
                    />
                    <SaveUrlButton
                        onClick={() => {
                            alert(`Server URL set to ${serverUrl}`);

                            getPrinterData();
                        }}
                    >
                        Save
                    </SaveUrlButton>
                </ModalBody>
                <ModalFooter>
                    <DoneButton onClick={() => setOpen(false)}>Done</DoneButton>
                </ModalFooter>
            </Modal>
        </>
    ) : null;
};
