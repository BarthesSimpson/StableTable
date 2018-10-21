import React from 'react'
import { FlatData, TreeData } from '@data'

const TableBody = ({ rows, colDefs, groupBy }) => (
  <tbody>
    {groupBy ? (
      <TreeData rows={rows} colDefs={colDefs} groupBy={groupBy} />
    ) : (
      <FlatData rows={rows} colDefs={colDefs} />
    )}
  </tbody>
)

export default TableBody
