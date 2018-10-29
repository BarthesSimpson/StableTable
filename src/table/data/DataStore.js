import React from 'react'
import { sortRowsByField } from '@data/sorting'
import { filterRowsOnField } from '@data/filtering'
import { applyFiltersToTreeNode, buildRowTree, flattenRows } from '@data/tree'

class DataStore extends React.Component {
  constructor(props) {
    super(props)
    const { groupBy, rowData } = props
    this.state = {
      filters: {},
      rows: rowData,
      rowTree: groupBy && buildRowTree({ rows: rowData, groupBy })
    }
    this.applyFilters = this.applyFilters.bind(this)
    this.applyFiltersToFlatData = this.applyFiltersToFlatData.bind(this)
    this.applyFiltersToTreeData = this.applyFiltersToTreeData.bind(this)
    this.sortByField = this.sortByField.bind(this)
    this.filterOnField = this.filterOnField.bind(this)
  }

  applyFilters() {
    const { groupBy } = this.props
    return groupBy
      ? this.applyFiltersToTreeData()
      : this.applyFiltersToFlatData()
  }

  applyFiltersToFlatData() {
    const { rows, filters } = this.state
    return Object.values(filters).reduce(
      (filteredRows, filter) => filter(filteredRows),
      rows
    )
  }

  applyFiltersToTreeData() {
    const { rowTree, filters } = this.state
    /* For each node, if any of its children pass the filters, 
       the node stays; otherwise, it stays or goes based on
       whether it, itself, passes the filters */
    return applyFiltersToTreeNode({ node: rowTree, filters })
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
