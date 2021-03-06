import { useMemo } from 'react';
import { useTable } from 'react-table';
import { useTheme } from 'styled-components';

import { usePrinterStore } from '../hooks/stores/usePrinterStore';
import { PrinterColor } from '../types/PrinterDataType';
import { TableStyle } from './TableStyle';

type Columns = {
    Header: string;
    columns: {
        Header: string;
        accessor: string;
    }[];
}[];

type Data = ({
    name: string;
    model: string;
} & {
    [key in PrinterColor]?: string;
})[];

// const Styles = styled.div`
//     padding: 1rem;

//     font-size: 2rem;

//     table {
//         border-spacing: 0;
//         border: 2px solid ${({ theme }) => theme.palette.secondary.default};

//         border-radius: 0.8rem;

//         th {
//             background: ${({ theme }) => theme.palette.primary.darker};
//         }

//         th,
//         td {
//             margin: 0;
//             padding: 0.5rem;
//         }

//         th {
//             border-bottom: 2px solid
//                 ${({ theme }) => theme.palette.secondary.default};
//             border-right: 2px solid
//                 ${({ theme }) => theme.palette.secondary.default};

//             :last-child {
//                 border-right: 0;
//             }
//         }

//         tr:first-child th {
//             :first-child {
//                 border-top-left-radius: 0.8rem;
//             }

//             :nth-child(2) {
//                 border-top-right-radius: 0.8rem;
//             }
//         }

//         tr td {
//             :nth-child(2) {
//                 border-right: 2px solid
//                     ${({ theme }) => theme.palette.secondary.default};
//             }

//             :nth-child(n + 3) {
//                 text-align: center;
//             }
//         }

//         @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
//             thead {
//                 display: none;
//             }

//             td {
//                 display: flex;

//                 ::before {
//                     content: attr(aria-label);
//                     font-weight: bold;
//                     width: 120px;
//                     min-width: 120px;
//                 }
//             }

//             tr {
//                 padding: 0 1rem;
//                 padding-bottom: 0.5rem;
//                 display: block;

//                 border-bottom: 2px solid
//                     ${({ theme }) => theme.palette.secondary.default};

//                 :last-child {
//                     border-bottom: 0;
//                 }

//                 :first-child td {
//                     border-top-left-radius: 0.8rem;
//                     border-top-right-radius: 0.8rem;
//                 }
//                 td {
//                     :nth-child(2) {
//                         border-right: 0;
//                     }

//                     :nth-child(n + 3) {
//                         text-align: left;
//                     }
//                 }

//                 :nth-child(even) {
//                     background: ${({ theme }) => theme.palette.primary.darker};

//                     :last-child {
//                         border-bottom-left-radius: 0.8rem;
//                         border-bottom-right-radius: 0.8rem;
//                         padding-bottom: 0;
//                     }
//                 }
//             }
//         }
//     }
// `;

const Table = (properties: { columns: Columns; data: Data }) => {
    const tableInstance = useTable(properties);

    const theme = useTheme();

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
        tableInstance;

    return (
        // apply the table props
        <table {...getTableProps()}>
            <thead>
                {
                    // Loop over the header rows
                    headerGroups.map((headerGroup) => (
                        // Apply the header row props
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {
                                // Loop over the headers in each row
                                headerGroup.headers.map((column) => (
                                    // Apply the header cell props
                                    <th {...column.getHeaderProps()}>
                                        {
                                            // Render the header
                                            column.render('Header')
                                        }
                                    </th>
                                ))
                            }
                        </tr>
                    ))
                }
            </thead>
            {/* Apply the table body props */}
            <tbody {...getTableBodyProps()}>
                {
                    // Loop over the table rows
                    rows.map((row) => {
                        // Prepare the row for display
                        prepareRow(row);

                        return (
                            // Apply the row props
                            <tr {...row.getRowProps()}>
                                {
                                    // Loop over the rows cells
                                    row.cells.map((cell) => {
                                        let style = {};

                                        switch (cell.column.id) {
                                            case 'black':
                                                style = {
                                                    background:
                                                        theme.palette.primary
                                                            .darkest,
                                                };
                                                break;
                                            case 'yellow':
                                                style = {
                                                    background:
                                                        theme.palette.yellow,
                                                };
                                                break;
                                            case 'cyan':
                                                style = {
                                                    background:
                                                        theme.palette.blue,
                                                };
                                                break;
                                            case 'magenta':
                                                style = {
                                                    background:
                                                        theme.palette.magenta,
                                                };
                                                break;

                                            default:
                                                break;
                                        }

                                        // Apply the cell props
                                        return (
                                            <td
                                                {...cell.getCellProps()}
                                                aria-label={
                                                    cell.column.Header as string
                                                }
                                                style={style}
                                            >
                                                {
                                                    // Render the cell contents
                                                    cell.render('Cell')
                                                }
                                            </td>
                                        );
                                    })
                                }
                            </tr>
                        );
                    })
                }
            </tbody>
        </table>
    );
};

export const RefillTable = () => {
    const columns = useMemo(
        () => [
            {
                Header: 'Printer Info:',
                columns: [
                    {
                        Header: 'Name',
                        accessor: 'name',
                    },
                    {
                        Header: 'Model',
                        accessor: 'model',
                    },
                ],
            },
            {
                Header: 'Color',
                columns: [
                    {
                        Header: 'Black',
                        accessor: 'black',
                    },
                    {
                        Header: 'Cyan',
                        accessor: 'cyan',
                    },
                    {
                        Header: 'Magenta',
                        accessor: 'magenta',
                    },
                    {
                        Header: 'Yellow',
                        accessor: 'yellow',
                    },
                ],
            },
        ],
        []
    );

    const needsRefill = usePrinterStore((state) => state.needsRefill);
    const printers = usePrinterStore((state) => state.printers);

    const data = useMemo(() => {
        const data: Data = [];

        for (const printerName of needsRefill) {
            const printer = printers[printerName];

            data.push({
                name: printerName ?? '',
                model: printer.type,
                black: printer.colors.black?.toString() ?? '',
                cyan: printer.colors.cyan?.toString() ?? '',
                magenta: printer.colors.magenta?.toString() ?? '',
                yellow: printer.colors.yellow?.toString() ?? '',
            });
        }

        return data;
    }, [needsRefill]);

    return (
        <TableStyle>
            <Table columns={columns} data={data} />
        </TableStyle>
    );
};
