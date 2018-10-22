import React from 'react'
import styled from 'styled-components'

const TableWrapper = styled.div`
  table {
    margin: 50px;
  }
  td,
  th {
    text-align: left;
  }
  /* td {
    padding: 0.25em;
  } */

  tbody tr:hover {
    background: #ddd;
  }

  tbody tr:nth-child(odd) {
    background: #eee;
    :hover {
      background: #ddd;
    }
  }
`
TableWrapper.displayName = 'TableWrapper'

export default TableWrapper
