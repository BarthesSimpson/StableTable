import React from 'react'

import { DataStore } from '@data'
import { TableBody, TableHeader, TableWrapper } from '@presentation'

const StableTable = ({ rowData, colDefs }) => {
  // console.log('stableTable: ', { rowData, colDefs })
  return (
    <DataStore rowData={rowData}>
      {({ rows, sortByField, filterOnField }) => {
        return (
          <TableWrapper>
            <h3>Hi</h3>
            <table>
              <TableHeader
                colDefs={colDefs}
                sortByField={sortByField}
                filterOnField={filterOnField}
              />
              <TableBody rows={rows} colDefs={colDefs} />
            </table>
          </TableWrapper>
        )
      }}
    </DataStore>
  )
}

export default StableTable
