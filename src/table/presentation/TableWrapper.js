import React from 'react'
import styled from 'styled-components'

const TableWrapper = styled.div`
  table {
    margin: 50px;
    td,
    th {
      padding: 10px;
      text-align: left;
    }
  }
    
  tbody tr:nth-child(odd) {
    background: #eee;
`

export default TableWrapper
