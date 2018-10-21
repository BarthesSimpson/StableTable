import React from 'react'
import { sortRowsByField } from '@data/sorting'

class DataStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rows: props.rowData }

    this.sortByField = this.sortByField.bind(this)
  }

  sortByField({ field, descending }) {
    const { rows } = this.state
    this.setState(sortRowsByField({ rows, field, descending }))
  }

  render() {
    const { rows } = this.state
    const sortByField = this.sortByField
    return this.props.children({ rows, sortByField })
  }
}

export default DataStore
