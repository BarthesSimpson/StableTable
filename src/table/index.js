import React from 'react'

import { DataStore } from '@data'
import { TableBody, TableContainer, TableHeader } from '@presentation'

const StableTable = ({ rowData, colDefs, tableOptions: { groupBy } }) => {
  return (
    <DataStore rowData={rowData} groupBy={groupBy}>
      {({ rows, sortByField, filterOnField }) => {
        return (
          <TableContainer>
            <table>
              <TableHeader
                colDefs={colDefs}
                sortByField={sortByField}
                filterOnField={filterOnField}
              />
              <TableBody rows={rows} colDefs={colDefs} groupBy={groupBy} />
            </table>
          </TableContainer>
        )
      }}
    </DataStore>
  )
}

export default StableTable
