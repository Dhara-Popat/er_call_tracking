import React, { useMemo } from 'react';
import { COLUMNS } from './Columns';
import { useTable, useSortBy, useGlobalFilter, usePagination } from 'react-table';
import * as HiIcons from 'react-icons/hi';
import * as AiIcons from 'react-icons/ai';
import { Filter } from './Filter';

function ReportTable(props) {

    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => props.data, [])

    console.log(props.data)

    const tableInstance = useTable({
        columns,
        data
    }, useGlobalFilter, useSortBy, usePagination)

    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        page,
        nextPage,
        previousPage,
        canNextPage,
        canPreviousPage,
        pageOptions,
        setPageSize,
        prepareRow,
        state,
        setGlobalFilter,
    } = tableInstance

    const { globalFilter } = state
    const { pageIndex, pageSize } = state

    return (
        <>
            <Filter filter={globalFilter} setFilter={setGlobalFilter} />
            <table {...getTableProps()} className='table'>
                <thead>
                    {headerGroups.map((headerGroup) => (
                        <tr {...headerGroup.getHeaderGroupProps()}>
                            {headerGroup.headers.map((column) => (
                                <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                                    {column.render('Header')}
                                    <span>
                                        {column.isSorted ? (column.isSortedDesc ? <HiIcons.HiArrowCircleDown /> : <HiIcons.HiArrowCircleUp />) : ''}
                                    </span>
                                </th>
                            ))}
                        </tr>
                    ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                    {page.map((row) => {
                        { prepareRow(row) }
                        return (
                            <tr {...row.getRowProps()}>
                                {row.cells.map((cell) => {
                                    return (
                                        <td {...cell.getCellProps()}>
                                            {cell.render('Cell')}
                                        </td>
                                    )
                                })}
                            </tr>
                        )
                    })}
                </tbody>
            </table>
            <div className='d-flex justify-content-between'>
                <span className='align-self-center'>
                    showing{' '}
                    <strong>{pageIndex + 1}</strong>{' '}
                    of{' '}
                    <strong>{pageOptions.length}</strong>
                    {' '} entries
                </span>
                <div className='d-flex align-items-center'>
                    <div>
                        Display:{' '}
                        <input
                            type='number'
                            value={pageSize}
                            onChange={e => setPageSize(Number(e.target.value))}
                            max={page.length}
                            style={{width: '40px'}}
                        />
                    </div>
                    <div>
                        <button onClick={() => previousPage()} disabled={!canPreviousPage} className='btn'>
                            <AiIcons.AiOutlineLeft />
                        </button>{' '}
                        <span>
                            <button className='btn btn-primary'>{pageIndex + 1}</button>
                        </span>{' '}
                        <button onClick={() => nextPage()} disabled={!canNextPage} className='btn'>
                            <AiIcons.AiOutlineRight />
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ReportTable;
