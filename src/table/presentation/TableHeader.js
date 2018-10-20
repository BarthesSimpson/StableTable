import React from 'react'

const TableHeader = ({ colDefs }) => (
  <thead>
    <tr>
      {colDefs.map(({ header }, i) => {
        return <th key={i}>{header}</th>
      })}
    </tr>
  </thead>
)

export default TableHeader
