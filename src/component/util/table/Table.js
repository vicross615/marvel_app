import React from 'react'
import {  useParams } from 'react-router-dom';


import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'
import styled from 'styled-components'

import TimeSelector from '../timeSelector/timeSelector'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid'

import {CSVLink} from "react-csv";





function Table({ columns, data, componentHeader }) {

    const defaultColumn = React.useMemo(
        () => ({
            // Default Filter UI
            Filter: DefaultColumnFilter,
        }),
        []
    )
    // Use the state and functions returned from useTable to build your UI
    const {
        getTableProps,
        getTableBodyProps,
        headerGroups,
        prepareRow,
        page, // Instead of using 'rows', we'll use page,
        // which has only the rows for the active page

        // The rest of these things are super handy, too ;)
        canPreviousPage,
        canNextPage,
        pageOptions,
        pageCount,
        gotoPage,
        nextPage,
        previousPage,
        setPageSize,
        setPageCount,
        state: { pageIndex, pageSize =5},
        state,
        preGlobalFilteredRows,
        setGlobalFilter,
    } = useTable(
        {
            columns,
            data,
            defaultColumn,
            initialState: { pageSize: 8 }
        },
        useFilters,
        useGlobalFilter,
        usePagination,
    )



    // Render the UI for your table
    return (
        <>
        <Styles>
            <div className='dashboard_header'>
                <div className='dashboard_header_container'>
                    <span className='dashboard_header_title'>Users</span>
                    <div>
                        <TimeSelector  setData={data}  />
                    </div>
                </div>

                <div className='dashboard_search'>
                    {/*<input className='search_input' placeholder='Search' />*/}
                    {/*<FontAwesomeIcon icon={faSearch} className='search_logo' />*/}
                    <GlobalFilter
                        preGlobalFilteredRows={preGlobalFilteredRows}
                        globalFilter={state.globalFilter}
                        setGlobalFilter={setGlobalFilter}
                    />
                </div>
            </div>



            <table {...getTableProps()} defaultPageSize={pageSize}>
                <thead>
                {headerGroups.map(headerGroup => (
                    <tr {...headerGroup.getHeaderGroupProps()} >
                        {headerGroup.headers.map(column => (
                            <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                        ))}
                    </tr>
                ))}
                </thead>
                <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                    prepareRow(row)
                    return (
                        <tr {...row.getRowProps()}>
                            {row.cells.map(cell => {
                                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                            })}
                        </tr>
                    )
                })}
                </tbody>

            </table>


            <div className="pagination">
            <span >
                Displaying Users
                <strong>
                {pageOptions.length} of  {preGlobalFilteredRows.length}
              </strong>{' '}
                Total
            </span>
                <div>
                    <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                        <FontAwesomeIcon icon={faAngleLeft} />
                    </button>{' '}
                    <span>
                    Page{' '}
                        <strong>
                        {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                </span>
                    <button onClick={() => nextPage()} disabled={!canNextPage}>
                        <FontAwesomeIcon icon={faAngleRight} />
                    </button>{' '}
                </div>

                <div className='download_users'  >
                    Download:
                    <CSVLink data={data} >{' '} CSV XML JSON</CSVLink>

                </div>
            </div>
        </Styles>

        </>
    )
}

export default Table;


const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border-collapse:separate; 
    border-spacing:0 7px; 
    width: 100%;
    color: '#ddd';
    
    tr {
        border: 1px solid black;
           line-height: 50px;
      :last-child {
        td {
          border-bottom: 1px solid #ddd;
        }
      }
    }
    
    th, td {
  border-bottom: 1px solid #ddd;
  border-top: 1px solid #ddd;
    }
    
    
    tbody{
        color: '#777171'
    }
  }

  .pagination {
    padding: 0.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .pagination > div {
         display: flex;
    align-items: center;
    color: #9B9B9B;
    font-family: CircularStd;
    font-size: 12px;
    line-height: 21px;
    text-align: center;
  }
  
  .pagination > span{
  font-family: CircularStd;
  font-size: 12px;
  line-height: 14px;
  text-align: left;
  }
  
  .pagination > div > button {
      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: 4px;
      width: 36px;
      height: 36px;
  }
  
  .pagination > div > span {
        margin: 0px 50px;
  }
  
  .download_users {
      color: #777777;
      font-family: CircularStd;
      font-size: 12px;
      line-height: 14px;
      text-align: right;
  }
  
  
  
  
`

function GlobalFilter({
                          preGlobalFilteredRows,
                          globalFilter,
                          setGlobalFilter,
                      }) {
    const count = preGlobalFilteredRows.length
    const [value, setValue] = React.useState(globalFilter)
    const onChange = useAsyncDebounce(value => {
        setGlobalFilter(value || undefined)
    }, 200)

    return (
        <span>
            Search:{' '}
            <input
                className="form-control"
                value={value || ""}
                onChange={e => {
                    setValue(e.target.value);
                    onChange(e.target.value);
                }}
                placeholder={`${count} records...`}
            />
        </span>
    )
}

function DefaultColumnFilter({
                                 column: { filterValue, preFilteredRows, setFilter },
                             }) {
    const count = preFilteredRows.length

    return (
        <input
            className="form-control"
            value={filterValue || ''}
            onChange={e => {
                setFilter(e.target.value || undefined)
            }}
            placeholder={`Search ${count} records...`}
        />
    )
}