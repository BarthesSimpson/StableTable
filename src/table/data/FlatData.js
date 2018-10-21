import React, { Fragment } from 'react'
import { TableRow } from '@presentation'

const FlatData = ({ rows, colDefs }) => (
  <Fragment>
    {rows.map((row, i) => (
      <TableRow key={i} row={row} colDefs={colDefs} />
    ))}
  </Fragment>
)

export default FlatData
