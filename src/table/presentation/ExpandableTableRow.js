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
    const { row, children, colDefs } = this.props
    const { expanded } = this.state
    return (
      <Fragment>
        <TableRow row={row} colDefs={colDefs} onClick={this.toggleExpanded} />
        {expanded &&
          children.map((childRow, i) => (
            <ExpandableTableRow key={i} colDefs={colDefs} {...childRow} />
          ))}
      </Fragment>
    )
  }
}

export default ExpandableTableRow
