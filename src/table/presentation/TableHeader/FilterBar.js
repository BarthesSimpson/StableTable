import React from 'react'
import styled from 'styled-components'

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
  float: right;
  margin-top: -0.125em;
  margin-left: -1.25em;
  padding-right: 0.25em;
`
FilterIconOuterWrapper.displayName = 'FilterIconOuterWrapper'

const FilterInput = styled.input`
  width: 100%;
  border: 1px solid #ddd;
  padding: 0.25em 1.5em 0.25em 0.5em;
  box-sizing: border-box;
  width: 100%;
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
      <FilterInput
        type="search"
        onChange={({ target: { value } }) => filter(value)}
      />
      <FilterIcon />
    </th>
  )
}

export default FilterBar
