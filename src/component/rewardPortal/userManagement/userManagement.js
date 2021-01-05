import React from 'react'
import {  useParams } from 'react-router-dom';

import { useTable, usePagination, useFilters, useGlobalFilter, useAsyncDebounce } from 'react-table'

import styled from 'styled-components'

import TimeSelector from '../../util/timeSelector/timeSelector'
import Table from '../../util/table/Table'
// import Styles from '../../util/table/tabelStyling'


import makeData from './makeData'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faAngleRight, faAngleLeft } from '@fortawesome/fontawesome-free-solid'


import {CSVLink} from "react-csv";





function UserManagement() {


    return (
        <section className='dashboard_wrapper'>


            {/*<Switch>*/}
                {/*<Route path={`${path}/:name`}>*/}
                    {/*<AdminUsers />*/}
                {/*</Route>*/}

                {/*<Route path={`${path}/:name`}>*/}
                    {/*<Users />*/}
                {/*</Route>*/}
            {/*</Switch>*/}

            <Users />
        </section>

    );
}

export default UserManagement;



const  Styles = styled.div`
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
  
  
  @media
	  only screen 
    and (max-width: 760px), (min-device-width: 768px) 
    and (max-device-width: 1024px)  {

		/* Force table to not be like tables anymore */
		table, thead, tbody, th, td, tr {
			display: block;
		}

		/* Hide table headers (but not display: none;, for accessibility) */
		thead tr {
			position: absolute;
			top: -9999px;
			left: -9999px;
		}

    tr {
      margin: 0 0 1rem 0;
    }
      
    tr:nth-child(odd) {
      background: #ccc;
    }
    
		td {
			/* Behave  like a "row" */
			border: none;
			border-bottom: 1px solid #eee;
			position: relative;
			padding-left: 50%;
		}

		td:before {
			/* Now like a table header */
			position: absolute;
			/* Top/left values mimic padding */
			top: 0;
			left: 6px;
			width: 45%;
			padding-right: 10px;
			white-space: nowrap;
		}

		/*
		Label the data
    You could also use a data-* attribute and content for this. That way "bloats" the HTML, this way means you need to keep HTML and CSS in sync. Lea Verou has a clever way to handle with text-shadow.
		*/
		td:nth-of-type(1):before { content: "ID"; }
		td:nth-of-type(2):before { content: "First Name"; }
		td:nth-of-type(3):before { content: "Last Name"; }
		td:nth-of-type(4):before { content: "Email"; }
		td:nth-of-type(5):before { content: "Phone"; }
		td:nth-of-type(6):before { content: "Joined"; }
	}

`

export const AdminUsers = ()=> (
    <div>
        {/*<Styles>*/}
            {/*<Table columns={columns} data={data} componentHeader={userManagementHeader}/>*/}
        {/*</Styles>*/}
    </div>
);



function Users() {

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

    const { name } = useParams();
    const userManagementHeader = 'Users'
    const [sortedField, setSortedField] = React.useState(null);




    const data = React.useMemo(() => makeData(20), [])


    return (
        <div>
            <Styles>
                <Table columns={columns} data={data} componentHeader={userManagementHeader}/>
            </Styles>
        </div>
        )

}

