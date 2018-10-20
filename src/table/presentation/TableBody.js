import React from 'react'

const TableBody = ({ rows, colDefs }) => (
  <tbody>
    {rows.map((row, i) => {
      return (
        <tr key={i}>
          {colDefs.map(({ field }) => {
            return (
              <td key={field}>{row.hasOwnProperty(field) ? row[field] : ''}</td>
            )
          })}
        </tr>
      )
    })}
  </tbody>
)

export default TableBody
