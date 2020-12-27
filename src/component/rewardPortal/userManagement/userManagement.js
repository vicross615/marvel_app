import React from 'react'
import styled from 'styled-components'
import { useTable, usePagination } from 'react-table'

import makeData from './makeData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid'




function UserManagement() {

    const columns = React.useMemo(
        () => [
            {
                Header: "ID",
                accessor: 'id'
            },
            {
                Header: "First Name",
                accessor: 'firstName',
            },
            {
                Header: 'Last Name',
                accessor: 'lastName'
            },
            {
                Header: 'Email',
                accessor: 'email'
            },
            {
                Header: 'Phone',
                accessor: 'phone'
            },
            {
                Header: 'Joined',
                accessor: 'joined'
            },
            {

                accessor: '...'
            }

        ],
        []
    )

    const data = React.useMemo(() => makeData(20), [])


    return (
        <section className='dashboard_wrapper'>
            <div className='dashboard_header'>
                <div className='dashboard_header_container'>
                    <span classname='dashboard_header_title'>Users</span>
                    <div>TIME SELECTOR HERE</div>
                </div>

                <div className='dashboard_search'>
                    <input className='search_input' placeholder='Search' />
                    <FontAwesomeIcon icon={faSearch} className='search_logo' />
                </div>
            </div>

            <div>
                <Styles>
                    <Table columns={columns} data={data} />
                </Styles>
            </div>
        </section>

    );
}

export default UserManagement;





function Table({ columns, data }) {
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
    } = useTable(
        {
            columns,
            data,
            initialState: { pageSize: 8 }
        },
        usePagination
    )

    // Render the UI for your table
    return (
        <>

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
                {pageIndex + 1} of {pageOptions.length}
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

            <select
                value={pageSize}
                onChange={e => {
                    setPageSize(Number(e.target.value))
                }}
            >
                {[8, 16, 32, 40].map(pageSize => (
                    <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                    </option>
                ))}
            </select>
            <div>
                Download: <a>CSV XML JSON</a>
            </div>
        </div>
        </>
    )
}


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
  }
  .pagination > div {
     display: flex;
    justify-content: space-between;
  }
`