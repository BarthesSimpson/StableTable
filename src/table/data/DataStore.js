import React from 'react'
import { sortRowsByField } from '@data/sorting'
import { filterRowsOnField } from '@data/filtering'

class DataStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rows: props.rowData }
    this.sortByField = this.sortByField.bind(this)
    this.filterOnField = this.filterOnField.bind(this)
  }

  sortByField({ field, descending }) {
    const { rowData: rows } = this.props
    this.setState({ rows: sortRowsByField({ rows, field, descending }) })
  }

  filterOnField({ field, value }) {
    const { rowData: rows } = this.props
    this.setState({ rows: filterRowsOnField({ rows, field, value }) })
  }

  render() {
    const { rows } = this.state
    const sortByField = this.sortByField
    const filterOnField = this.filterOnField
    return this.props.children({ rows, sortByField, filterOnField })
  }
}

export default DataStore
