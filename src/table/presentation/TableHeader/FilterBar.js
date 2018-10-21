import React from 'react'

import styled from 'styled-components'

const FilterWrapper = styled.div`
  display: flex;
`
FilterWrapper.displayName = 'FilterWrapper'

const FilterIconInnerWrapper = styled.div`
  max-width: 1.25em;
  max-height: 1.25em;
  overflow: hidden;
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
`
FilterIconInnerWrapper.displayName = 'FilterIconInnerWrapper'

const FilterIconOuterWrapper = styled.div`
  flex: 1;
  margin-top: -0.125em;
  margin-left: -0.75em;
`
FilterIconOuterWrapper.displayName = 'FilterIconOuterWrapper'

const FilterInput = styled.input`
  flex: 4;
  border: 1px solid #ddd;
  padding-right: 1em;
`
FilterInput.displayName = 'FilterInput'


const FilterIcon = () => (
  <FilterIconOuterWrapper>
    <FilterIconInnerWrapper>&#9906;</FilterIconInnerWrapper>
  </FilterIconOuterWrapper>
)

const FilterBar = ({ colDefs, filterOnField }) => (
  <tr>
    {colDefs.map(({ field }) => {
      return (
        <FilterCell
          key={field}
          filter={value => {
            // console.log({ field, value })
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
      <FilterWrapper>
        <FilterInput
          type="search"
          onChange={({ target: { value } }) => filter(value)}
        />
        <FilterIcon />
      </FilterWrapper>
    </th>
  )
}

export default FilterBar
