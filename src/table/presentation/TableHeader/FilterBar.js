import React from 'react'
import styled from 'styled-components'

const FilterInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.25em 1.5em 0.25em 0.5em;
  box-sizing: border-box;
  width: 100%;
  border-radius: 2px;
`
FilterInput.displayName = 'FilterInput'

import { FilterIcon } from '@presentation/Icons'

const FilterBar = ({ colDefs, filterOnField }) => (
  <tr>
    {colDefs.map(({ field }) => {
      return (
        <FilterCell
          key={field}
          filter={value => {
            filterOnField({ field, value })
          }}
        />
      )
    })}
  </tr>
)

const FilterCell = ({ filter }) => {
  return (
    <th>
      <FilterIcon />
      <FilterInput
        type="search"
        onChange={({ target: { value } }) => filter(value)}
      />
    </th>
  )
}

export default FilterBar
