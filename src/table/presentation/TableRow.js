import React from 'react'

const TableRow = ({ row, colDefs, onClick }) => (
  <tr onClick={onClick}>
    {colDefs.map(({ field }) => {
      return (
        <td key={field}>
          {row.hasOwnProperty(field) ? row[field].toString() : ''}
        </td>
      )
    })}
  </tr>
)

export default TableRow
