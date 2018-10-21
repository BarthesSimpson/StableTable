import React from 'react'

import { DataStore, TreeData } from '@data'
import { TableBody, TableHeader, TableWrapper } from '@presentation'

const StableTable = ({ rowData, colDefs, tableOptions: { groupBy } }) => {
  return (
    <DataStore rowData={rowData}>
      {({ rows, sortByField, filterOnField }) => {
        return (
          <TableWrapper>
            <table>
              <TableHeader
                colDefs={colDefs}
                sortByField={sortByField}
                filterOnField={filterOnField}
              />
              <TableBody rows={rows} colDefs={colDefs} groupBy={groupBy} />
            </table>
          </TableWrapper>
        )
      }}
    </DataStore>
  )
}

export default StableTable
