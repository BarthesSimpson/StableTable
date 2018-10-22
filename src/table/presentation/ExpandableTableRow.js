import React, { Fragment } from 'react'
import { TableRow } from '@presentation'

class ExpandableTableRow extends React.Component {
  constructor(props) {
    super(props)
    this.state = { expanded: false }
    this.toggleExpanded = this.toggleExpanded.bind(this)
  }

  toggleExpanded() {
    this.setState({ ...this.state, expanded: !this.state.expanded })
  }

  render() {
    const { row, children, colDefs, groupBy } = this.props
    const { expanded } = this.state
    return (
      <Fragment>
        <TableRow
          colDefs={colDefs}
          groupBy={groupBy}
          hasChildren={children.length}
          onClick={this.toggleExpanded}
          row={row}
        />
        {expanded &&
          children.map((childRow, i) => (
            <ExpandableTableRow
              colDefs={colDefs}
              expanded={expanded}
              groupBy={groupBy}
              key={i}
              {...childRow}
            />
          ))}
      </Fragment>
    )
  }
}

export default ExpandableTableRow
