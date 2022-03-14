import styled from 'styled-components';

export const TableStyle = styled.div`
    padding: 1rem;

    font-size: 2rem;

    table {
        border-spacing: 0;
        border: 2px solid ${({ theme }) => theme.palette.secondary.default};

        border-radius: 0.8rem;

        thead {
            user-select: none;
        }

        th {
            background: ${({ theme }) => theme.palette.primary.darker};
        }

        th,
        td {
            margin: 0;
            padding: 0.5rem;
        }

        th {
            border-bottom: 2px solid
                ${({ theme }) => theme.palette.secondary.default};
            border-right: 2px solid
                ${({ theme }) => theme.palette.secondary.default};

            :last-child {
                border-right: 0;
            }
        }

        tr {
            td {
                :nth-child(2) {
                    border-right: 2px solid
                        ${({ theme }) => theme.palette.secondary.default};
                }

                :nth-child(n + 3) {
                    text-align: center;
                    border-top: 1px solid
                        ${({ theme }) => theme.palette.secondary.default};
                }
            }

            :first-child {
                th {
                    :first-child {
                        border-top-left-radius: 0.8rem;
                    }

                    :nth-child(2) {
                        border-top-right-radius: 0.8rem;
                    }
                }

                td {
                    border-top: 0 !important;
                }
            }

            :last-child {
                td:last-child {
                    border-bottom-right-radius: 0.8rem;
                }
            }
        }

        @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
            thead {
                display: none;
            }

            td {
                display: flex;

                ::before {
                    content: attr(aria-label);
                    font-weight: bold;
                    width: 120px;
                    min-width: 120px;
                }
            }

            tr {
                padding: 0 1rem;
                padding-bottom: 0.5rem;
                display: block;

                border-bottom: 2px solid
                    ${({ theme }) => theme.palette.secondary.default};

                :last-child {
                    border-bottom: 0;
                }

                /* :first-child td {
                    border-top-left-radius: 0.8rem;
                    border-top-right-radius: 0.8rem;
                } */
                td {
                    border-top: 0 !important;

                    :nth-child(2) {
                        border-right: 0;
                    }

                    /* Make color section rounded */
                    :nth-child(3) {
                        border-top-left-radius: 0.8rem;
                        border-top-right-radius: 0.8rem;
                    }

                    :nth-child(6) {
                        border-bottom-left-radius: 0.8rem;
                        border-bottom-right-radius: 0.8rem;
                    }

                    :nth-child(n + 3) {
                        text-align: left;
                    }
                }

                :nth-child(even) {
                    background: ${({ theme }) => theme.palette.primary.darker};

                    :last-child {
                        border-bottom-left-radius: 0.8rem;
                        border-bottom-right-radius: 0.8rem;
                        padding-bottom: 0;
                    }
                }
            }
        }
    }
`;
