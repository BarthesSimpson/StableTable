import React from 'react'

import styled from 'styled-components'

const FilterWrapper = styled.div`
  display: flex;
`
const FilterIconContainer = styled.div`
  max-width: 1.25em;
  max-height: 1.25em;
  overflow: hidden;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
`

const FilterIconWrapper = styled.div`
  flex: 1;
  margin-top: -0.125em;
  margin-left: -0.75em;
`

const FilterInput = styled.input`
  flex: 4;
  border: 1px solid #ddd;
  padding-right: 1em;
`

const FilterIcon = () => (
  <FilterIconWrapper>
    <FilterIconContainer>&#9906;</FilterIconContainer>
  </FilterIconWrapper>
)

const FilterBar = ({ colDefs }) => (
  <tr>
    {colDefs.map(({ field }) => {
      return <FilterCell key={field} field={field} filter={() => {}} />
    })}
  </tr>
)

const FilterCell = ({ field }) => {
  return (
    <th>
      <FilterWrapper>
        <FilterInput type="search" />
        <FilterIcon />
      </FilterWrapper>
    </th>
  )
}

export default FilterBar
