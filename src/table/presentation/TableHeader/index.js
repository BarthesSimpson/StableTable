import React from 'react'

import FilterBar from '@presentation/TableHeader/FilterBar'
import TitleRow from '@presentation/TableHeader/TitleRow'

const TableHeader = ({ colDefs, sortByField, filterOnField }) => (
  <thead>
    <TitleRow colDefs={colDefs} sortByField={sortByField} />
    <FilterBar colDefs={colDefs} filterOnField={filterOnField} />
  </thead>
)

export default TableHeader
