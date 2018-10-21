import React from 'react'
import { sortRowsByField } from '@data/sorting'
import { filterRowsOnField } from '@data/filtering'

class DataStore extends React.Component {
  constructor(props) {
    super(props)
    this.state = { rows: props.rowData, filters: {} }
    this.applyFilters = this.applyFilters.bind(this)
    this.sortByField = this.sortByField.bind(this)
    this.filterOnField = this.filterOnField.bind(this)
  }

  applyFilters() {
    const { rows, filters } = this.state
    return Object.values(filters).reduce(
      (filteredRows, filter) => filter(filteredRows),
      rows
    )
  }

  sortByField({ field, descending }) {
    const { rowData: rows } = this.props
    this.setState({
      ...this.state,
      rows: sortRowsByField({ rows, field, descending })
    })
  }

  filterOnField({ field, value }) {
    const { filters } = this.state
    this.setState({
      ...this.state,
      filters: {
        ...filters,
        [field]: rows => filterRowsOnField({ rows, field, value })
      }
    })
  }

  render() {
    const rows = this.applyFilters()
    const sortByField = this.sortByField
    const filterOnField = this.filterOnField
    return this.props.children({ rows, sortByField, filterOnField })
  }
}

export default DataStore
