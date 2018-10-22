import React from 'react'
import styled from 'styled-components'

const TableCellIconWrapper = styled.span`
  font-size: 0.5em;
  line-height: 2em;
`
const TableCellIcon = ({ icon }) => (
  <TableCellIconWrapper>{icon}</TableCellIconWrapper>
)

const TableCell = ({ className, content, icon, onClick }) => (
  <td className={className} onClick={onClick}>
    {content} {icon && <TableCellIcon icon={icon} />}
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
        icon={groupBy === field && hasChildren ? '▽' : false}
      />
    ))}
  </tr>
)

export default TableRow
