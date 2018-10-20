import React from 'react'

import { DataStore } from '@data'
import { TableBody, TableHeader, TableWrapper } from '@presentation'


const StableTable = ({ rowData, colDefs }) => {
  console.log('stableTable')
  return (
    <DataStore rowData={rowData}>
      {rows => {
        return (
          <TableWrapper>
            <h3>Hi</h3>
            <table>
              <TableHeader colDefs={colDefs} />
              <TableBody rows={rows} colDefs={colDefs} />
            </table>
          </TableWrapper>
        )
      }}
    </DataStore>
  )
}

export default StableTable
