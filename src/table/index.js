import React from 'react'

import { DataStore } from '@data'
import { TableBody, TableHeader } from '@presentation'

const StableTable = ({ rowData, colDefs, tableOptions: { groupBy } }) => {
  return (
    <DataStore rowData={rowData} groupBy={groupBy}>
      {({ rows, sortByField, filterOnField }) => {
        return (
          <table>
            <TableHeader
              colDefs={colDefs}
              sortByField={sortByField}
              filterOnField={filterOnField}
            />
            <TableBody rows={rows} colDefs={colDefs} groupBy={groupBy} />
          </table>
        )
      }}
    </DataStore>
  )
}

export default StableTable
