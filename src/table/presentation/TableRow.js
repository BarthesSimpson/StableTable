import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.span`
  color: rgba(50, 50, 50, 0.5);
  float: left;
  font-family: fontawesome;
  padding-left: 0.25em;
  padding-right: 0.5em;
  font-size: 0.75em;
  line-height: 1.5em;
`
const ExpandableIcon = ({ onClick }) => (
  <IconWrapper onClick={onClick}>
    <i className="fa fa-chevron-down" />
  </IconWrapper>
)

const TableCell = ({ className, content, onClick, onIconClick, showIcon }) => (
  <td className={className} onClick={onClick}>
    {/* For some reason showIcon && was behaving strangely, hence the weird inversion here */}
    {!showIcon || <ExpandableIcon onClick={onIconClick} />}
    {content}
  </td>
)

const InsetTableCell = styled(TableCell)`
  min-width: 8em;
  padding: 0.25em;
  padding-left: ${({ inset, row: { parents } }) =>
    `${inset ? Math.max(parents.length, 0.25) : 0.25}em`};
`
const TableRow = ({
  colDefs,
  groupBy,
  hasChildren,
  onClick,
  onIconClick,
  row
}) => (
  <tr onClick={onClick}>
    {colDefs.map(({ field }) => (
      <InsetTableCell
        content={row.hasOwnProperty(field) ? row[field].toString() : ''}
        onIconClick={onIconClick}
        key={field}
        row={row}
        inset={groupBy === field}
        showIcon={groupBy === field && hasChildren}
      />
    ))}
  </tr>
)

export default TableRow
