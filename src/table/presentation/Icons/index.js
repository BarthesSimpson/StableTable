import React from 'react'
import styled from 'styled-components'

const IconWrapper = styled.span`
  color: rgba(50, 50, 50, 0.5);
  float: left;
  font-family: fontawesome;
  padding-left: 0.25em;
  padding-right: 0.5em;
  font-size: 0.75em;
  line-height: 1.5em;
`

const FilterIconWrapper = styled(IconWrapper)`
    float: right;
    padding-left: 0.5em;
    padding-right: 0.5em;
    line-height: 2em;
    margin-bottom: -2em;
    position: relative;
`

export const ExpandableIcon = ({ onClick }) => (
  <IconWrapper onClick={onClick}>
    <i className="fa fa-chevron-down" />
  </IconWrapper>
)

export const FilterIcon = () => (
  <FilterIconWrapper>
    <i className="fa fa-search" />
  </FilterIconWrapper>
)
