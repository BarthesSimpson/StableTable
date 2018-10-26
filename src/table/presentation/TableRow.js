import React from 'react'
import styled from 'styled-components'

const TableCell = ({ className, content, onClick, showIcon }) => (
  // <td className={className} onClick={onClick}>

  <td
    className={showIcon ? `${className} expandable` : className}
    onClick={onClick}
  >
    {content}
  </td>
)

const InsetTableCell = styled(TableCell)`
  min-width: 8em;
  padding: 0.25em;
  padding-left: ${({ inset, row: { parents } }) =>
    `${inset ? Math.max(parents.length, 0.25) : 0.25}em`};
`
const TableRow = ({ colDefs, groupBy, hasChildren, onClick, row }) => (
  <tr onClick={onClick}>
    {colDefs.map(({ field }) => (
      <InsetTableCell
        content={row.hasOwnProperty(field) ? row[field].toString() : ''}
        key={field}
        row={row}
        inset={groupBy === field}
        showIcon={groupBy === field && hasChildren}
      />
    ))}
  </tr>
)

export default TableRow
